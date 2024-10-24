import { unzipSync } from "fflate";
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });

const ACCEPTED_MIME_TYPES = [
  "application/zip",
  "application/x-zip-compressed",
  "application/x-zip",
];
const FOLLOWERS_SCHEMA = {
  type: "array",
  minItems: 1,
  items: {
    type: "object",
    properties: {
      //title: { type: "string" },
      //media_list_data: { type: "array" },
      string_list_data: {
        type: "array",
        items: {
          type: "object",
          properties: {
            //href: { type: "string" },
            value: { type: "string" },
            //timestamp: { type: "integer" },
          },
          required: ["value"],
          additionalProperties: true,
        },
      },
    },
    required: ["string_list_data"],
    additionalProperties: true,
  },
};
const FOLLOWING_SCHEMA = {
  type: "object",
  properties: {
    relationships_following: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        properties: {
          //title: { type: "string" },
          //media_list_data: { type: "array" },
          string_list_data: {
            type: "array",
            items: {
              type: "object",
              properties: {
                //href: { type: "string" },
                value: { type: "string" },
                //timestamp: { type: "integer" },
              },
              required: ["value"],
              additionalProperties: true,
            },
          },
        },
        required: ["string_list_data"],
        additionalProperties: true,
      },
    },
  },
  required: ["relationships_following"],
  additionalProperties: true,
};

export async function fileUpload(file) {
  try {
    if (ACCEPTED_MIME_TYPES.includes(file.type)) {
      let fileNames = new Array();
      let followersFile;
      let followingFile;
      let pendingRequestsFile;
      let followersUsernames = new Array();
      let followingUsernames = new Array();
      let nonFollowers = new Array();
      let pendingRequests = new Array();

      const unzipped = unzipSync(new Uint8Array(await file.arrayBuffer()));

      for (const file in unzipped) {
        fileNames.push(file);
      }

      if (
        fileNames.includes(
          "connections/followers_and_following/followers_1.json",
        ) &&
        fileNames.includes("connections/followers_and_following/following.json")
      ) {
        for (const file in unzipped) {
          if (file === "connections/followers_and_following/followers_1.json") {
            followersFile = new TextDecoder().decode(unzipped[file]);
          } else if (
            file === "connections/followers_and_following/following.json"
          ) {
            followingFile = new TextDecoder().decode(unzipped[file]);
          } else if (
            file ===
            "connections/followers_and_following/pending_follow_requests.json"
          ) {
            pendingRequestsFile = new TextDecoder().decode(unzipped[file]);
          }
        }

        followersFile = JSON.parse(followersFile);
        followingFile = JSON.parse(followingFile);
        if (
          fileNames.includes(
            "connections/followers_and_following/pending_follow_requests.json",
          )
        ) {
          pendingRequestsFile = JSON.parse(pendingRequestsFile);
        }

        const FOLLOWERS_SCHEMA_VALIDATE = ajv.compile(FOLLOWERS_SCHEMA);
        const FOLLOWING_SCHEMA_VALIDATE = ajv.compile(FOLLOWING_SCHEMA);
        const FOLLOWERS_SCHEMA_VALID = FOLLOWERS_SCHEMA_VALIDATE(followersFile);
        const FOLLOWING_SCHEMA_VALID = FOLLOWING_SCHEMA_VALIDATE(followingFile);

        if (!FOLLOWERS_SCHEMA_VALID || !FOLLOWING_SCHEMA_VALID) {
          return {
            result: "FAIL",
            message: "Schema check failed!",
            FollowersSchemaCheck: FOLLOWERS_SCHEMA_VALIDATE.errors,
            FollowingSchemaCheck: FOLLOWING_SCHEMA_VALIDATE.errors,
          };
        }

        for (let i = 0; i < followersFile.length; i++) {
          followersUsernames[i] = {
            username: followersFile[i].string_list_data[0].value,
            timestamp: followersFile[i].string_list_data[0].timestamp,
          };
        }

        for (let i = 0; i < followingFile.relationships_following.length; i++) {
          followingUsernames[i] = {
            username:
              followingFile.relationships_following[i].string_list_data[0]
                .value,
            timestamp:
              followingFile.relationships_following[i].string_list_data[0]
                .timestamp,
          };
        }

        if (
          fileNames.includes(
            "connections/followers_and_following/pending_follow_requests.json",
          )
        ) {
          for (
            let i = 0;
            i < pendingRequestsFile.relationships_follow_requests_sent.length;
            i++
          ) {
            pendingRequests[i] = {
              username:
                pendingRequestsFile.relationships_follow_requests_sent[i]
                  .string_list_data[0].value,
              timestamp:
                pendingRequestsFile.relationships_follow_requests_sent[i]
                  .string_list_data[0].timestamp,
            };
          }
        }

        nonFollowers = followingUsernames.filter(
          ({ username: followingUsername }) =>
            !followersUsernames.some(
              ({ username: followersUsername }) =>
                followersUsername === followingUsername,
            ),
        );

        const oldestUsername = followersUsernames.sort(
          (a, b) => a.timestamp - b.timestamp,
        );
        return {
          result: "SUCCESS",
          nonFollowersCount: nonFollowers.length,
          nonFollowers,
          oldestFollower: oldestUsername[0],
          pendingRequests,
        };
      } else {
        return {
          result: "FAIL",
          message: "Required files don't include in zip file!",
        };
      }
    } else {
      return {
        result: "FAIL",
        message: "Wrong MIME!",
      };
    }
  } catch (err) {
    return {
      result: "ERROR",
      message: err.message,
    };
  }
}

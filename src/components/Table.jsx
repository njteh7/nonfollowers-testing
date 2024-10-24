import { Card, CardBody } from "@nextui-org/react";

import Spinner from "./Spinner";

function Table({
  isResults,
  isLoading,
  isError,
  nonFollowers,
  oldestFollower,
  nonFollowersCount,
  pendingRequests,
}) {
  return (
    <>
      <div className="mx-auto max-w-80 items-center justify-center px-8 md:max-w-96">
        {isLoading && <Spinner />}
        {!isLoading && isError && (
          <div
            className="mt-2 flex w-[17rem] items-center rounded-lg border border-red-300 bg-red-50 p-2 text-base text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              className="me-3 inline h-4 w-4 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">
                Please upload the correct file!
              </span>
            </div>
          </div>
        )}
      </div>
      {isResults && (
        <div className="mt-8">
          <div className="px-3">
            <Card
              className="mx-auto w-fit border-none bg-background/40 dark:bg-default-100/50"
              isBlurred
              shadow="sm"
            >
              <CardBody>
                <p className="text-center text-lg font-normal text-gray-600 dark:text-gray-300 md:px-4 lg:text-xl">
                  <span className="animate-flash pr-0.5 text-2xl font-bold text-red-500">
                    {nonFollowersCount}
                  </span>
                  &nbsp;people not following you back!
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="mx-auto my-8 max-w-[39rem] px-3">
            <div className="relative max-h-[28rem] overflow-x-auto rounded-lg shadow-md md:max-h-[35rem]">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="text-md sticky top-0 bg-gray-200 uppercase text-gray-700 transition-colors duration-250 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Username:
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date you Followed:
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nonFollowers.map((x) => (
                    <tr
                      className="border-b transition-colors duration-250 odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                      key={x.username}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-blue-600 underline dark:text-blue-500"
                      >
                        <a
                          href={`https://www.instagram.com/${x.username}`}
                          target="_blank"
                        >
                          {x.username}
                        </a>
                      </th>
                      <td className="px-6 py-4">
                        {new Date(x.timestamp * 1000).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="px-3 pt-3">
            <Card
              className="mx-auto w-fit border-none bg-background/40 dark:bg-default-100/50"
              isBlurred
              shadow="sm"
            >
              <CardBody>
                <p className="text-center text-lg font-normal text-gray-600 dark:text-gray-300 md:px-4 lg:text-xl">
                  Did you know that&nbsp;
                  <a
                    className="font-medium text-blue-600 underline dark:text-blue-500"
                    href={`https://www.instagram.com/${oldestFollower.username}`}
                    target="_blank"
                  >
                    {oldestFollower.username}
                  </a>
                  &nbsp;is your very first follower, followed you on&nbsp;
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    {new Date(
                      oldestFollower.timestamp * 1000,
                    ).toLocaleDateString()}
                  </strong>
                  .
                </p>
              </CardBody>
            </Card>
          </div>
          {pendingRequests.length > 0 ? (
            <div className="mx-auto mt-20 max-w-[39rem] px-3">
              <h1 className="text-center font-sans text-xl font-semibold tracking-tight text-gray-600 dark:text-gray-300">
                Also, these are the people/accounts you sent follow request but
                they never responded
              </h1>
              <div className="relative mt-6 max-h-[28rem] overflow-x-auto rounded-lg shadow-md md:max-h-[35rem]">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <thead className="text-md sticky top-0 bg-gray-200 uppercase text-gray-700 transition-colors duration-250 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Username:
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Request sent on:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingRequests.map((x) => (
                      <tr
                        className="border-b transition-colors duration-250 odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                        key={x.username}
                      >
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-blue-600 underline dark:text-blue-500"
                        >
                          <a
                            href={`https://www.instagram.com/${x.username}`}
                            target="_blank"
                          >
                            {x.username}
                          </a>
                        </th>
                        <td className="px-6 py-4">
                          {new Date(x.timestamp * 1000).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default Table;

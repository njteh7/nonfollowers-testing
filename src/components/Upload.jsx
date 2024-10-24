"use client";

import { useState } from "react";

import { fileUpload } from "@/lib/logic";
import Table from "./Table";

function Upload() {
  const [isResults, setIsResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nonFollowers, setNonFollowers] = useState([]);
  const [oldestFollower, setOldestFollower] = useState(null);
  const [nonFollowersCount, setNonFollowersCount] = useState(null);
  const [pendingRequests, setPendingRequests] = useState(null);

  async function onUpload(e) {
    if (!e.target.files[0]) return; // when user clicks "Choose File" but cancels right after

    setIsResults(false);
    setIsError(false);
    setIsLoading(true);

    const data = await fileUpload(e.target.files[0]);

    if (data.result === "SUCCESS") {
      setIsLoading(false);
      setNonFollowersCount(data.nonFollowersCount);
      setNonFollowers(data.nonFollowers);
      setOldestFollower(data.oldestFollower);
      setPendingRequests(data.pendingRequests);
      setIsResults(true);
    } else if (data.result === "FAIL") {
      setIsLoading(false);
      setIsError(true);
      console.log(data);
    } else if (data.result === "ERROR") {
      setIsLoading(false);
      setIsError(true);
      console.log(data);
    }
  }

  return (
    <div className="border-b border-gray-100 pb-20 dark:border-gray-800 md:pb-28 md:pt-6">
      <div className="mx-auto mb-8 flex max-w-screen-xl flex-wrap items-center justify-center px-8">
        <h2 className="font-sans text-[33px] font-extrabold tracking-tight transition-colors duration-250 dark:text-white md:text-4xl">
          Upload your file
        </h2>
      </div>
      <div className="mx-auto max-w-80 items-center justify-center px-8 md:max-w-96">
        <label className="sr-only">Choose file</label>

        <input
          onChange={onUpload}
          className="block w-full cursor-pointer rounded-lg border border-gray-200 bg-white text-sm shadow-sm transition-colors duration-250 file:me-4 file:cursor-pointer file:border-0 file:bg-gray-800 file:px-4 file:py-3 file:text-white file:hover:bg-gray-950 focus:z-10 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:file:bg-gray-800 dark:file:text-white file:dark:hover:bg-gray-600"
          type="file"
          htmlFor="upload"
          accept=".zip,.rar,.7zip"
        />

        <p className="mt-1 text-sm text-gray-600 transition-colors duration-250 dark:text-gray-300">
          only .zip files are accepted.
        </p>
      </div>
      <Table
        isResults={isResults}
        isLoading={isLoading}
        isError={isError}
        nonFollowers={nonFollowers}
        oldestFollower={oldestFollower}
        nonFollowersCount={nonFollowersCount}
        pendingRequests={pendingRequests}
      />
    </div>
  );
}

export default Upload;

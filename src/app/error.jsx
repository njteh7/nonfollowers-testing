"use client";

import Link from "next/link";

function Error({ error, reset }) {
  return (
    <div className="mt-12 space-y-6 text-center">
      <h1 className="text-3xl">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <div className="flex grid-cols-2 gap-3">
        <button
          type="button"
          className="rounded-lg bg-blue-700 px-6 py-3.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link href="/">Go back home</Link>
        </button>
        <button
          type="button"
          className="rounded-lg bg-blue-700 px-6 py-3.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default Error;

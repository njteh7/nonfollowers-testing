import Link from "next/link";

function NotFound() {
  return (
    <div className="mt-12 space-y-6 text-center">
      <h1 className="font-sans text-3xl font-bold tracking-tight">
        Page not found :(
      </h1>
      <button
        type="button"
        className="rounded-lg bg-blue-700 px-6 py-3.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Link href="/">Go back home</Link>
      </button>
    </div>
  );
}

export default NotFound;

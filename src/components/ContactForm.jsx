"use client";

import { useState } from "react";

import { emailServer } from "@/lib/actions";

function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formFail, setFormFail] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormSuccess(false);
    setFormFail(false);
    setIsPending(true);

    const formData = new FormData(e.target);
    const data = await emailServer(formData);

    if (data.success) {
      setFormSuccess(true);
      setIsPending(false);
      e.target.reset();
      sendGAEvent("event", "contact_success");
    } else {
      setFormFail(true);
      setIsPending(false);
      sendGAEvent("event", "contact_fail");
    }
  }

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 transition-colors duration-250 dark:text-gray-300">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm transition-colors duration-250 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your name"
            required
            disabled={isPending}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 transition-colors duration-250 dark:text-gray-300">
            E-mail:
          </label>
          <input
            type="email"
            name="email"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm transition-colors duration-250 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your email"
            required
            disabled={isPending}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-900 transition-colors duration-250 dark:text-gray-300">
            Message:
          </label>
          <textarea
            name="message"
            rows="6"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm transition-colors duration-250 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="How can we help?"
            required
            disabled={isPending}
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-blue-700 px-7 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:bg-gray-400 sm:w-fit"
          disabled={isPending}
        >
          {isPending ? (
            "Sending..."
          ) : (
            <>
              Send
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </>
          )}
        </button>
      </form>
      {formSuccess && (
        <div
          className="mb-4 mt-6 flex max-w-[20rem] items-center rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-gray-800 dark:text-green-400"
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
              Thank you! We&apos;ll reach out to you soon.
            </span>
          </div>
        </div>
      )}
      {formFail && (
        <div
          className="mb-4 mt-6 flex max-w-[13rem] items-center rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
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
            <span className="font-medium">Please try again later.</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;

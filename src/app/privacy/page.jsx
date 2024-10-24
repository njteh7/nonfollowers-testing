import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "https://www.nonfollowers.com/privacy",
  },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-md px-5 py-8 lg:py-16">
      <h1 className="mb-6 text-center font-sans text-4xl font-extrabold tracking-tight text-gray-900 transition-colors duration-250 dark:text-white md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-lg text-gray-500 transition-colors duration-250 dark:text-gray-400">
        Updated on: June 10, 2024
      </p>
      <h2 className="mt-6 text-2xl font-bold text-gray-900 transition-colors duration-250 dark:text-white">
        Introduction:
      </h2>
      <p className="mb-6 mt-4 text-lg text-gray-600 transition-colors duration-250 dark:text-gray-300">
        This Privacy Policy describes how Nonfollowers uses, collects, and
        shares your information when you visit https://www.nonfollowers.com (the
        “Site”).
      </p>
      <h2 className="mt-14 text-2xl font-bold text-gray-900 transition-colors duration-250 dark:text-white">
        Information We Collect:
      </h2>
      <p className="mb-6 mt-4 text-lg text-gray-600 transition-colors duration-250 dark:text-gray-300">
        Usage Information: We may collect information about how you interact
        with our website, including your IP address, browser type, operating
        system, referring URLs, and access times.
      </p>
      <h2 className="mt-14 text-2xl font-bold text-gray-900 transition-colors duration-250 dark:text-white">
        Cookies and Similar Technologies:
      </h2>
      <p className="mb-6 mt-4 text-lg text-gray-600 transition-colors duration-250 dark:text-gray-300">
        We may use cookies and similar tracking technologies to enhance your
        experience on our website. You can adjust your browser settings to
        disable cookies, but some features of the website may not function
        correctly as a result.
      </p>
      <h2 className="mt-14 text-2xl font-bold text-gray-900 transition-colors duration-250 dark:text-white">
        Use of Information:
      </h2>
      <p className="mb-6 mt-4 text-lg text-gray-600 transition-colors duration-250 dark:text-gray-300">
        Nonfollwers does not collect users&apos; personal information, as the
        functionality is done on user&apos; device. However, we may collect
        information you provide to us through Contact form to improve our
        services and to respond to your inquires and requests. Additionally, we
        may use error logging data to enhance and tweak our product.
      </p>
      <h2 className="mt-14 text-2xl font-bold text-gray-900 transition-colors duration-250 dark:text-white">
        Changes to this Privacy Policy:
      </h2>
      <p className="mb-6 mt-4 text-lg text-gray-600 transition-colors duration-250 dark:text-gray-300">
        We may update this Privacy Policy to reflect changes in our practices or
        for other operational, legal, or regulatory reasons. Any changes will be
        effective when we post the revised Privacy Policy on our website. We
        encourage you to review this Privacy Policy periodically.
      </p>
      <h2 className="mt-14 text-2xl font-bold text-gray-900 transition-colors duration-250 dark:text-white">
        Contact Us:
      </h2>
      <p className="mb-6 mt-4 text-lg text-gray-600 transition-colors duration-250 dark:text-gray-300">
        If you have questions or concerns regarding this Privacy Policy, please
        contact us through the&nbsp;
        <Link href="/contact" className="font-medium underline">
          Contact
        </Link>
        &nbsp;form.
      </p>
      <h2 className="mt-14 text-2xl font-bold text-gray-900 transition-colors duration-250 dark:text-white">
        Acknowledgment:
      </h2>
      <p className="mb-6 mt-4 text-lg text-gray-600 transition-colors duration-250 dark:text-gray-300">
        By using our website, you acknowledge and accept these policies.
      </p>
    </div>
  );
}

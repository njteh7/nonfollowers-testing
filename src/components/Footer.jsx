import Link from "next/link";

function Footer() {
  return (
    <footer className="relative z-20 mt-8 border-t border-gray-700 bg-[#0B1120] px-4">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              src="/logo_white.png"
              className="h-11 md:h-12"
              alt="Logo white"
            />
            <div className="md:max-w-[29rem]">
              <p className="font-base py-3 text-gray-300 md:pr-10 lg:pr-0">
                If you like this project, please share it with your friends. The
                entire project is made by a single developer, and we appreciate
                all your support.
              </p>
            </div>
          </div>
          <div className="gap-8 sm:grid-cols-2 sm:gap-0 md:mr-24 lg:mr-36">
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Links
            </h2>
            <ul className="font-medium text-gray-400">
              <li className="mb-4">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mb-2 mt-6 border-gray-700 sm:mx-auto md:mt-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2024 Nonfollowers™. All rights reserved.
          </span>
          <span className="text-base text-gray-300">
            <br className="sm:hidden" />
            Developed in Toronto, Canada 🍁
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

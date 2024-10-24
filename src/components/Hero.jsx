function Hero() {
  return (
    <div className="mx-auto mt-14 flex max-w-screen-xl flex-wrap items-center justify-center px-8 pb-10 md:mt-24">
      <h1 className="mb-4 text-center font-sans text-[39px] font-extrabold leading-none tracking-tight text-gray-900 transition-colors duration-250 dark:text-white md:text-[52px]">
        The safest way to find who doesn&apos;t follow you back on
        <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-700 bg-clip-text text-transparent">
          &nbsp;Instagram!
        </span>
      </h1>
      <p className="mb-6 pt-3 text-center font-sans text-lg font-normal text-gray-600 transition-colors duration-250 dark:text-gray-300 sm:px-16 md:text-xl xl:px-48">
        Don&apos;t let Instagram <strong>ban</strong> your account by using some
        sketchy apps that ask you to sign into your account through their app.
        By doing that, <strong>Instagram&apos;s algorithm</strong> will detect
        your activity from a 3rd party software, which is a major
        <strong> red flag</strong> for Instagram.
      </p>
    </div>
  );
}

export default Hero;

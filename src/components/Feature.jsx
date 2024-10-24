import Image from "next/image";

function Feature() {
  return (
    <div className="mt-24 border-b border-gray-100 pb-20 dark:border-gray-800 md:mt-36 md:pb-28">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-8">
        <div>
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Locked.png"
            alt="Locked"
            width={76}
            height={76}
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-8 pb-8 text-center md:pb-10">
        <h2 className="mt-6 font-sans text-4xl font-extrabold tracking-tight transition-colors duration-250 dark:text-white md:text-[44px]">
          We&apos;ll never store your data!
        </h2>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-8 text-center">
        <p className="text-center text-lg font-normal text-gray-600 transition-colors duration-250 dark:text-gray-300 sm:px-16 lg:text-xl xl:px-48">
          When you visit our site, the required features get downloaded to your
          device and all the processing gets done on your device without any of
          your data leaving your device.
          <br />
          <br />
          In simple words, Nonfollowers sends the tools to your device, then
          your device does the work locally without sending anything back to us.
        </p>
      </div>
    </div>
  );
}

export default Feature;

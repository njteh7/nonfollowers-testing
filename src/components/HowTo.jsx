"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card, CardBody } from "@nextui-org/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/swiperjs.css";

function HowTo() {
  return (
    <div className="mt-20 md:mt-28">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-8">
        <div>
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png"
            alt="Face with Monocle"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-8 pb-8 md:pb-10">
        <h2 className="mt-6 font-sans text-[33px] font-extrabold tracking-tight transition-colors duration-250 dark:text-white md:text-4xl">
          How it works?
        </h2>
      </div>

      <div className="mx-4 sm:mx-8">
        <Card
          isBlurred
          className="mx-auto max-w-[1366px] border-none bg-background/40 dark:bg-default-100/50"
          shadow="sm"
        >
          <CardBody>
            <div className="my-5 grid max-w-[1366px] grid-cols-1 gap-14 lg:my-10 lg:grid-cols-2">
              <div className="m-auto">
                <div className="h-[494.61px] w-[249.2px] overflow-hidden rounded-lg md:h-[593.53px] md:w-[299px] lg:h-[801.55px] lg:w-[403.65px]">
                  <Swiper
                    navigation={true}
                    pagination={true}
                    grabCursor="true"
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src="/ig_1.jpg" alt="Instagram instruction 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/ig_2.jpg" alt="Instagram instruction 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/ig_3.jpg" alt="Instagram instruction 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/ig_4.jpg" alt="Instagram instruction 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/ig_5.jpg" alt="Instagram instruction 5" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/ig_6.jpg" alt="Instagram instruction 6" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/ig_7.jpg" alt="Instagram instruction 7" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/ig_8.jpg" alt="Instagram instruction 8" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/ig_9.jpg" alt="Instagram instruction 9" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              <div className="mx-auto max-w-[45rem] items-center justify-center px-3 lg:pl-0 lg:pr-5">
                <ol className="list-inside list-decimal space-y-7 text-gray-600 transition-colors duration-250 dark:text-gray-300">
                  <li>
                    Tap your&nbsp;<strong>profile picture&nbsp;</strong>
                    <svg
                      aria-label=""
                      className="x1lliihq x1n2onr6 x5n08af inline"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title></title>
                      <circle
                        cx="12.004"
                        cy="12.004"
                        fill="none"
                        r="10.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="M18.793 20.014a6.08 6.08 0 0 0-1.778-2.447 3.991 3.991 0 0 0-2.386-.791H9.38a3.994 3.994 0 0 0-2.386.791 6.09 6.09 0 0 0-1.779 2.447"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      ></path>
                      <circle
                        cx="12.006"
                        cy="9.718"
                        fill="none"
                        r="4.109"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      ></circle>
                    </svg>
                    &nbsp;in the bottom right corner to go to your profile, then
                    tap
                    <strong>&nbsp;menu&nbsp;</strong>
                    <svg
                      aria-label="Settings"
                      className="inline"
                      fill="currentColor"
                      height="20"
                      role="img"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <title>Settings</title>
                      <path d="M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z"></path>
                    </svg>
                    &nbsp;in the top right corner.
                  </li>
                  <li>
                    Tap&nbsp;
                    <svg
                      className="inline"
                      fill="currentColor"
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path d="M19 1H5C2.794 1 1 2.794 1 5v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V5c0-2.206-1.794-4-4-4ZM5 3h14c1.103 0 2 .897 2 2v6h-2.382l-2.723-5.447c-.34-.678-1.45-.678-1.79 0L9 15.764l-2.105-4.211A1 1 0 0 0 6 11H3V5c0-1.103.897-2 2-2Zm14 18H5c-1.103 0-2-.897-2-2v-6h2.382l2.723 5.447a1 1 0 0 0 1.79 0L15 8.236l2.105 4.211A1 1 0 0 0 18 13h3v6c0 1.103-.897 2-2 2Z"></path>
                    </svg>
                    <strong>&nbsp;Your Activity</strong>
                  </li>
                  <li>
                    Scroll down to the
                    <strong>
                      &nbsp;Information you share with Instagram&nbsp;
                    </strong>
                    section, and tap&nbsp;
                    <svg
                      aria-label="Account history, review changes you've made to your account since you created it."
                      className="inline"
                      fill="currentColor"
                      height="20"
                      role="img"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        x1="11.914"
                        x2="11.914"
                        y1="15.195"
                        y2="2"
                      ></line>
                      <polyline
                        fill="none"
                        points="16.013 11.095 11.914 15.195 7.814 11.095"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></polyline>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        x1="3.277"
                        x2="20.55"
                        y1="22"
                        y2="22"
                      ></line>
                    </svg>
                    <strong>&nbsp;Download your information.</strong>
                  </li>
                  <li>
                    Tap&nbsp;<strong>Download or transfer information</strong>,
                    then tap
                    <strong>&nbsp;Some of your information</strong>.
                  </li>
                  <li>
                    Scroll down and select&nbsp;
                    <strong>Followers and following</strong>&nbsp; (you can
                    search it as well) and tap&nbsp;<strong>Next</strong>.
                  </li>
                  <li>
                    Select&nbsp;<strong>Download to device</strong>&nbsp;and tap
                    <strong>&nbsp;Next</strong>.
                  </li>
                  <li>
                    Make sure to select the following&nbsp;
                    <strong>(IMPORTANT)</strong>:
                  </li>
                  <ol className="mt-2 list-inside list-decimal space-y-4 ps-5">
                    <li>
                      Date range: select&nbsp;<strong>All time</strong>.
                    </li>
                    <li>
                      Format: select&nbsp;<strong>JSON</strong>.
                      <br />
                      <i className="text-[15px]">
                        note:&nbsp;<strong>Notify</strong>&nbsp;and
                        <strong>&nbsp;Media quality</strong>&nbsp;leave the
                        default selections.
                      </i>
                    </li>

                    <li>
                      Tap&nbsp;<strong>Create files</strong>.
                    </li>
                  </ol>
                  <li>
                    You will receive an&nbsp;<strong>email</strong>&nbsp;in the
                    next couple of minutes or more (depends on the size of your
                    audience, it could take longer) with subject line
                    <strong>&nbsp;Your information download is ready</strong>,
                    open the email and tap/click&nbsp;
                    <strong>download your information</strong>.
                  </li>
                  <li>
                    Follow the instructions to download your file, you will have
                    to input your Instagram password to download the file.
                  </li>
                  <li>
                    Once you have it dowloaded,&nbsp;<strong>upload</strong>
                    &nbsp;the file above to find out who does not follow you
                    back.
                    <br />
                    <i className="text-[15px]">
                      note: the file will be a zip file, do not unzip it.
                    </i>
                  </li>
                </ol>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default HowTo;

"use client";

import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

function Faq() {
  const contents = [
    {
      key: 1,
      question: "Why use Nonfollowers?",
      answer: [
        "Nonfollowers is the most safest way to find the people who doesn't follow you back. Unlike 3rd party apps, you will never risk your account from getting banned, restricted, or hacked.",
      ],
    },
    {
      key: 2,
      question: "Does Nonfollowers stores my data?",
      answer: [
        "No, Nonfollowers never stores any of your data. In fact, your data never leaves your device.",
      ],
    },
    {
      key: 3,
      question: "How it works if Nonfollowers never accesses my data?",
      answer: [
        {
          answer:
            "When you visit Nonfollowers.com, the required features get downloaded to your device and all the processing gets done on your device without any of your data leaving your device.",
          type: "regular",
        },
        {
          answer:
            "In simple words, Nonfollowers sends the tools to your device, then your device does the work locally without sending anything back to us.",
          type: "regular",
        },
        {
          answer:
            "Hint: you can visit Nonfollowers.com, once the website is loaded disconnect your device from Internet and try to upload your zip file and see it magically working without having the need to send your data to somewhere else.",
          type: "italic",
        },
      ],
    },
    {
      key: 4,
      question: "Is Nonfollowers free?",
      answer: [
        "Yes, It's 100% free! And you can use it as much as you want. Plus, we will never ask for a credit/debit card.",
      ],
    },
    {
      key: 5,
      question: "Are there new features coming up soon?",
      answer: [
        "Yes, we are working to take Nonfollowers from finding your non-followers to a full-fledged Instagram analytics dashboard where you will find all the metrics which Instagram's native app doesn't provide you.",
      ],
    },
    {
      key: 6,
      question: "Do you have iOS and/or Android app?",
      answer: [
        "iOS and Android apps are work in progress and will be released in the near future. However, our web version is very mobile friendly and incredibly responsive on all mobile devices and tablets.",
      ],
    },
    {
      key: 7,
      question: "Can I contact Nonfollowers?",
      answer: [
        "Yes, you can contact thru our Contact page. Please let us know if you have any questions.",
      ],
    },
  ];

  return (
    <div className="mx-auto mb-6 mt-20 max-w-[55rem] md:mb-10 md:mt-28">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-8">
        <div>
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png"
            alt="Thinking Face"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-8 pb-8 md:pb-10">
        <h2 className="mt-6 font-sans text-[33px] font-extrabold tracking-tight transition-colors duration-250 dark:text-white md:text-4xl">
          FAQs
        </h2>
      </div>

      <div className="mx-4 sm:mx-8">
        <Card
          isBlurred
          className="mx-auto border-none bg-background/40 dark:bg-default-100/50"
          shadow="sm"
        >
          <CardBody className="px-2 py-0 scrollbar-hide">
            <div className="flex flex-col">
              <Accordion>
                {contents.map((content) => (
                  <AccordionItem
                    HeadingComponent="p"
                    key={content.key}
                    aria-label={`Accordion ${content.key}`}
                    title={
                      <p className="text-gray-600 transition-colors duration-250 dark:text-gray-300">
                        {content.question}
                      </p>
                    }
                  >
                    {content.answer.length > 1 ? (
                      <p className="pb-4 text-gray-600 transition-colors duration-250 dark:text-gray-300">
                        {content.answer.map((el, index) =>
                          el.type === "italic" ? (
                            <span className="italic" key={index}>
                              {el.answer}
                            </span>
                          ) : (
                            <span key={index}>
                              {el.answer}
                              <br /> <br />
                            </span>
                          ),
                        )}
                      </p>
                    ) : (
                      <p className="pb-4 text-gray-600 transition-colors duration-250 dark:text-gray-300">
                        {content.answer}
                      </p>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Faq;

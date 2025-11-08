import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long we deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .",
    },
    {
      question: "How long we deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .",
    },
    {
      question: "How long we deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .",
    },
    {
      question: "How long we deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .",
    },
    {
      question: "How long we deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .",
    },
    {
      question: "How long we deliver your first blog post?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="pt-20 px-4 sm:px-12 lg:px-12 xl:px-28 flex flex-col gap-20 items-center bg-gray-100 dark:bg-[#111928]">
        <div className="flex flex-col gap-3 items-center text-center lg:pt-8">
          <h3 className="text-[#3758F9] font-bold text-xl font-oswald">FAQ</h3>
          <h1 className="text-3xl sm:text-[2.5rem] font-bold font-oswald text-black dark:text-white">
            Any Questions? Look Here
          </h1>
          <p className="text-gray-400 w-[38ch] sm:w-[60ch]">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br />
            but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-7 bg-white dark:bg-[#1f2a37]"
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-6">
                  <span className="dark:bg-[#2a3541] bg-gray-100 p-2.5 rounded-lg">
                    <svg
                      className={`transform transition-transform  duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-lg font-medium text-black dark:text-white">
                    {faq.question}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="pt-20 px-4 sm:px-12 lg:px-12 xl:px-28 flex flex-col gap-20 items-center bg-gray-100 dark:bg-[#111928]">
        <div className="bg-[#3758F9] w-full text-white rounded-md px-8 py-12 sm:py-16 sm:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-medium font-oswald">Find Your Next Dream App</h3>
            <h2 className="text-3xl sm:text-[2.5rem] font-bold sm:w-[15ch] sm:leading-[3rem] font-oswald">Get started with our free trial</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-start">
            <button className="text-[#3758F9] bg-white py-3 px-7 rounded-md font-medium">Get Pro Version</button>
            <button className="bg-[#13c296] py-3 px-7 rounded-md font-medium">Start Free Trial</button>
          </div>
        </div>
      </section>
    </>
  );
}

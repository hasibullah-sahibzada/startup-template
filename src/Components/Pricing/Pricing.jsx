import React from "react";

const plans = [
  {
    name: "Personal",
    price: "$59",
    users: "1 User",
    projects: "Use on 1 (one) project",
    support: "3 Months support",
    buttonLabel: "choose Personal",
  },
  {
    name: "Business",
    price: "$199",
    users: "5 Users",
    projects: "Use on 3 (three) project",
    support: "4 Months support",
    buttonLabel: "choose business",
  },
  {
    name: "Professional",
    price: "$256",
    users: "Unlimited Users",
    projects: "Use on unlimited project",
    support: "12 Months support",
    buttonLabel: "choose personal",
  },
];

export default function Pricing() {
  return (
    <>
      <section className="flex flex-col items-center px-4 sm:px-12 xl:px-28 gap-16 py-9 dark:bg-[#111928]">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-[#3758F9] font-bold w-[12ch] text-xl font-oswald">Pricing Table</h3>
          <h1 className="font-sans text-3xl sm:text-4xl dark:text-white font-bold w-[14ch]">
            Our Pricing Plan
          </h1>
          <p className="text-gray-500 dark:text-gray-400 w-[38ch] sm:w-[55ch] leading-6 text-center">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-6 xl:gap-8 lg:flex-nowrap sm:flex-row flex-wrap justify-center">
          {/* Personal Plan */}
          <article aria-labelledby="personal-plan" role="region" className="flex flex-col gap-4 rounded-lg border px-4 sm:px-6 lg:px-2 xl:px-8 dark:bg-[#1f2a32] border-gray-300">
            <div className="flex border-b-[0.2px] py-8 border-gray-300 dark:border-gray-700">
              <div className="flex flex-col gap-6 relative left-4">
                <h3 id="personal-plan" className="text-[#3758F9] font-semibold text-lg">Personal</h3>
                <div className="flex items-end gap-3">
                  <h1 className="text-5xl dark:text-white font-bold font-oswald">{plans[0].price}</h1>
                  <p className="text-gray-500 dark:text-gray-400 text-lg font-oswald">/ year</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 sm:w-[25ch] xl:w-[33ch]">
                  There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
              </div>
              <div className="relative left-4 bottom-5 sm:bottom-4 lg:left-2 xl:left-8">
                <svg width="58" height="99" viewBox="0 0 58 99" fill="none" aria-hidden="true" className="pointer-events-none">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="99.5" r="1.5" fill="#3758F9" />
                </svg>
              </div>
            </div>

            <div className="relative left-4 flex flex-col gap-12 pb-8">
              <ul className="flex flex-col gap-4 mt-4 font-medium text-gray-500 dark:text-gray-400">
                <li>{plans[0].users}</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>{plans[0].projects}</li>
                <li>{plans[0].support}</li>
              </ul>
              <div className="flex flex-col items-center relative right-4">
                <button className="font-bold font-oswald bg-white border border-gray-300 px-16 py-3 rounded-md text-[#3758F9] hover:bg-[#3758F9] hover:text-white dark:bg-[#1f2a32] dark:hover:bg-[#3758F9] transition-colors duration-200">
                  {plans[0].buttonLabel}
                </button>
              </div>
            </div>
          </article>

          {/* Business Plan */}
          <article aria-labelledby="business-plan" role="region" className="flex flex-col gap-4 rounded-lg border px-4 sm:px-6 lg:px-2 xl:px-8 dark:bg-[#1f2a32] border-gray-300">
            <div className="flex border-b-[0.2px] py-8 border-gray-300 dark:border-gray-700">
              <div className="flex flex-col gap-6 relative left-4">
                <h3 id="business-plan" className="text-[#3758F9] font-semibold text-lg">Business</h3>
                <div className="flex items-end gap-3">
                  <h1 className="text-5xl dark:text-white font-bold font-oswald">{plans[1].price}</h1>
                  <p className="text-gray-500 dark:text-gray-400 text-lg font-oswald">/ year</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 sm:w-[25ch] xl:w-[33ch]">
                  There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
              </div>
              <div className="relative left-4 bottom-5 sm:bottom-4 lg:left-2 xl:left-8">
                <svg width="58" height="99" viewBox="0 0 58 99" fill="none" aria-hidden="true" className="pointer-events-none">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="99.5" r="1.5" fill="#3758F9" />
                </svg>
              </div>
            </div>

            <div className="relative left-4 flex flex-col gap-12 pb-8">
              <ul className="flex flex-col gap-4 mt-4 font-medium text-gray-500 dark:text-gray-400">
                <li>{plans[1].users}</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>{plans[1].projects}</li>
                <li>{plans[1].support}</li>
              </ul>
              <div className="flex flex-col items-center relative right-4">
                <button className="font-bold font-oswald px-16 py-3 rounded-md transition-colors duration-200 bg-[#3758F9] text-white hover:bg-[#2c47cc]">
                  {plans[1].buttonLabel}
                </button>
              </div>
            </div>
          </article>

          {/* Professional Plan */}
          <article aria-labelledby="professional-plan" role="region" className="flex flex-col gap-4 rounded-lg border px-4 sm:px-6 lg:px-2 xl:px-8 dark:bg-[#1f2a32] border-gray-300">
            <div className="flex border-b-[0.2px] py-8 border-gray-300 dark:border-gray-700">
              <div className="flex flex-col gap-6 relative left-4">
                <h3 id="professional-plan" className="text-[#3758F9] font-semibold text-lg">Professional</h3>
                <div className="flex items-end gap-3">
                  <h1 className="text-5xl dark:text-white font-bold font-oswald">{plans[2].price}</h1>
                  <p className="text-gray-500 dark:text-gray-400 text-lg font-oswald">/ year</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 sm:w-[25ch] xl:w-[33ch]">
                  There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
              </div>
              <div className="relative left-4 bottom-5 sm:bottom-4 lg:left-2 xl:left-8">
                <svg width="58" height="99" viewBox="0 0 58 99" fill="none" aria-hidden="true" className="pointer-events-none">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="1.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="15.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="29.5" cy="99.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="1.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="15.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="29.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="43.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="57.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="71.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="85.5" r="1.5" fill="#3758F9" />
                  <circle cx="43.5" cy="99.5" r="1.5" fill="#3758F9" />
                </svg>
              </div>
            </div>

            <div className="relative left-4 flex flex-col gap-12 pb-8">
              <ul className="flex flex-col gap-4 mt-4 font-medium text-gray-500 dark:text-gray-400">
                <li>{plans[2].users}</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>{plans[2].projects}</li>
                <li>{plans[2].support}</li>
              </ul>
              <div className="flex flex-col items-center relative right-4">
                <button className="font-bold font-oswald bg-white border border-gray-300 px-16 py-3 rounded-md text-[#3758F9] hover:bg-[#3758F9] hover:text-white dark:bg-[#1f2a32] dark:hover:bg-[#3758F9] transition-colors duration-200">
                  {plans[2].buttonLabel}
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

import Testimonials1 from "../../assets/Images/Testimonials/Testimonials1.jpg";
import Testimonials2 from "../../assets/Images/Testimonials/Testimonials2.jpg";
import Testimonials3 from "../../assets/Images/Testimonials/Testimonials3.jpg";
import Testimonials4 from "../../assets/Images/Testimonials/Testimonials4.jpg";
export default function Testimonials() {
  return (
    <>
      <section className="pt-20 dark:bg-[#111928] w-full p-4 sm:px-12 xl:px-28">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-blue-700 font-medium text-sans text-xl font-oswald">
            Testimonials
          </h3>
          <h1 className="text-3xl sm:text-[2.5rem] font-bold dark:text-white font-oswald">
            What our Clients Says
          </h1>
          <p className="text-gray-600 dark:text-gray-400 w-[38ch] sm:w-[55ch]">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="my-20 flex flex-col gap-12 sm:gap-8 lg:gap-6 sm:px-16 lg:px-0 xl:gap-12 lg:items-center xl:px-28">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-6 xl:gap-12">
            <div className="p-4 sm:py-8 dark:bg-[#1f2a37] rounded-md shadow-gray-100 shadow-lg dark:shadow-none">
              <div className="flex justify-evenly">
                <div className="flex items-center sm:justify-center gap-4 m-4 sm:m-3">
                  <img src={Testimonials1} alt=""/>
                  <div className="w-[25ch]">
                    <h3 className="text-lg sm:text-2xl font-medium dark:text-white">
                      Jason Keys
                    </h3>
                    <h5 className="text-gray-500 text-xs sm:text-sm">
                      Founder @ Dreampeet.
                    </h5>
                  </div>
                </div>
                <span className="relative bottom-4 sm:bottom-7 right-10 sm:left-10 lg:left-4 xl:left-16">
                  <svg
                    width="104"
                    height="102"
                    viewBox="0 0 104 102"
                    fill="none"
                  >
                    <path
                      opacity="0.6"
                      d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                      stroke="#3758F9"
                    />
                    <path
                      opacity="0.6"
                      d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                      stroke="#13C296"
                    />
                    <path
                      opacity="0.6"
                      d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                      stroke="#F98B69"
                    />
                  </svg>
                </span>
              </div>
              <p className="m-6 text-gray-600 dark:text-gray-400 w-[31ch] sm:w-[45ch] lg:w-[35ch] xl:w-[55ch] sm:text-lg">
                “I believe in lifelong learning and Learn. is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends andfamilys.”
              </p>
            </div>
            <div className="p-4 sm:py-8 dark:bg-[#1f2a37] rounded-md shadow-gray-100 shadow-lg dark:shadow-none">
              <div className="flex justify-evenly">
                <div className="flex items-center gap-4 m-4 sm:m-3">
                  <img src={Testimonials2} alt=""/>
                  <div className="w-[25ch]">
                    <h3 className="text-lg sm:text-2xl font-medium dark:text-white">
                      Anee Doe
                    </h3>
                    <h5 className="text-gray-500 text-xs sm:text-sm">
                      CEO @ Trorex.
                    </h5>
                  </div>
                </div>
                <span className="relative bottom-4 sm:bottom-7 right-10 sm:left-10 lg:left-4 xl:left-16">
                  <svg
                    width="104"
                    height="102"
                    viewBox="0 0 104 102"
                    fill="none"
                  >
                    <path
                      opacity="0.6"
                      d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                      stroke="#3758F9"
                    />
                    <path
                      opacity="0.6"
                      d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                      stroke="#13C296"
                    />
                    <path
                      opacity="0.6"
                      d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                      stroke="#F98B69"
                    />
                  </svg>
                </span>
              </div>
              <p className="m-6 text-gray-600 dark:text-gray-400 w-[31ch] sm:w-[45ch] lg:w-[35ch] xl:w-[55ch]  sm:text-lg">
                “I believe in lifelong learning and Learn. is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends andfamilys.”
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-6 xl:gap-12">
            <div className="p-4 sm:p-3 sm:py-8 dark:bg-[#1f2a37] rounded-md shadow-gray-100 shadow-lg dark:shadow-none">
              <div className="flex justify-evenly">
                <div className="flex items-center gap-4 xl:gap-6 m-4 sm:m-3">
                  <img src={Testimonials3} alt=""/>
                  <div className="w-[25ch]">
                    <h3 className="text-lg sm:text-2xl font-medium dark:text-white">
                      Dipali Dow
                    </h3>
                    <h5 className="text-gray-500 text-xs sm:text-sm">
                      Founder @ Cradow.
                    </h5>
                  </div>
                </div>
                <span className="relative bottom-4 sm:bottom-7 right-10 sm:left-10 lg:left-3 xl:left-14">
                  <svg
                    width="104"
                    height="102"
                    viewBox="0 0 104 102"
                    fill="none"
                  >
                    <path
                      opacity="0.6"
                      d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                      stroke="#3758F9"
                    />
                    <path
                      opacity="0.6"
                      d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                      stroke="#13C296"
                    />
                    <path
                      opacity="0.6"
                      d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                      stroke="#F98B69"
                    />
                  </svg>
                </span>
              </div>
              <p className="m-6 text-gray-600 dark:text-gray-400 w-[31ch] sm:w-[45ch] lg:w-[35ch] xl:w-[56ch] sm:text-lg">
                “I believe in lifelong learning and Learn. is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends andfamilys.”
              </p>
            </div>
            <div className="p-4 sm:p-3 sm:py-8 dark:bg-[#1f2a37] rounded-md shadow-gray-100 shadow-lg dark:shadow-none">
              <div className="flex justify-evenly">
                <div className="flex items-center gap-4 xl:gap-6 m-4 sm:m-3">
                  <img src={Testimonials4} alt=""/>
                  <div className="w-[25ch]">
                    <h3 className="text-lg sm:text-2xl font-medium dark:text-white">
                      John Doe
                    </h3>
                    <h5 className="text-gray-500 text-xs sm:text-sm">
                      Founder @ Poettry.
                    </h5>
                  </div>
                </div>
                <span className="relative bottom-4 sm:bottom-7 right-10 sm:left-10 lg:left-3 xl:left-14">
                  <svg
                    width="104"
                    height="102"
                    viewBox="0 0 104 102"
                    fill="none"
                  >
                    <path
                      opacity="0.6"
                      d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                      stroke="#3758F9"
                    />
                    <path
                      opacity="0.6"
                      d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                      stroke="#13C296"
                    />
                    <path
                      opacity="0.6"
                      d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                      stroke="#F98B69"
                    />
                  </svg>
                </span>
              </div>
              <p className="m-6 text-gray-600 dark:text-gray-400 w-[31ch] sm:w-[45ch] lg:w-[35ch] xl:w-[56ch] sm:text-lg">
                “I believe in lifelong learning and Learn. is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends andfamilys.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

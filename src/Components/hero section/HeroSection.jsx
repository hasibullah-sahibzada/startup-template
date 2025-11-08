import HeroImage from "../../assets/Images/Hero Section/hero-image-01.png";
import AyroUi from "../../assets/Images/Hero Section/ayroui.svg";
import Graygrids from "../../assets/Images/Hero Section/graygrids.svg";
import Uideck from "../../assets/Images/Hero Section/uideck.svg";

export default function HeroSection() {
  return (
    <>
      <main className="px-4 sm:px-12 xl:px-28 py-32 w-full flex flex-col gap-20 lg:flex-row lg:justify-between bg-white dark:bg-[#111928]">
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold font-oswald text-[2.4rem] sm:text-[2.7rem] lg:w-[15ch] xl:w-[20ch] text-black dark:text-white leading-snug">
              Startup Site Template Built-with TailGirds Compoents
            </h1>
            <p className="text-gray-600 dark:text-gray-400 w-[36ch] sm:w-[52ch] lg:w-[40ch] xl:w-[52ch] text-lg leading-7">
              With TailGrids, business and students thrive together. Business
              can perfectly match their staffing to changing demand throughout
              the dayed.
            </p>
          </div>
          <div className="flex gap-4 my-6">
            <button className="bg-[#3758F9] hover:bg-[#2c47cc] text-lg font-medium px-6 py-3 rounded-lg whitespace-nowrap text-white font-sans hover:text-white">
              Get Started
            </button>
            <button className="hover:text-[#3758F9] text-lg sm:text-xl font-sans text-gray-700 dark:text-white font-medium whitespace-nowrap flex items-center gap-2">
              {" "}
              <svg width="32" height="32" viewBox="0 0 24 25" fill="none">
                <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                <rect
                  x="7.99893"
                  y="14.979"
                  width="8.18182"
                  height="1.63636"
                  fill="white"
                />
                <rect
                  x="11.2717"
                  y="7.61523"
                  width="1.63636"
                  height="4.09091"
                  fill="white"
                />
                <path
                  d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                  fill="white"
                />
              </svg>
              Download App
            </button>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-xs mt-16">
              Used by Thriving Brands _____
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <img className="w-[27vw] sm:w-[18vw] lg:w-[15vw] xl:w-[11vw]" src={AyroUi} alt="" />
            <img className="w-[27vw] sm:w-[18vw] lg:w-[15vw] xl:w-[11vw]" src={Graygrids} alt="" />
            <img className="w-[27vw] sm:w-[18vw] lg:w-[15vw] xl:w-[11vw]" src={Uideck} alt="" />
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt=""
            className="w-[95vw] sm:w-[60vw] lg:w-[60vw] xl:w-[32vw] relative z-10"
          />
          <span className="relative bottom-14 right-3 z-0">
            <svg
              width="93"
              height="93"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
            </svg>
          </span>
        </div>
      </main>
    </>
  );
}

import CustomButton from "./CustomButton";

export default function Banner() {
  return (
    <section className=" dark:bg-gray-900 ">
      <div className="grid py-8  mx-auto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center  lg:col-span-4">
          <p className="font-dm text-grey text-3xl  max-w-2xl font-normal  lg:mb-8 md:text-5xl lg:text-6xl dark:text-gray-400">
            Peckiiless. A new path to a better health and life.
          </p>
        </div>
        <div className="hidden mx-auto lg:mt-0 lg:col-span-4 lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="380"
            viewBox="0 0 240 380"
            fill="none"
          >
            <path
              d="M154.811 224.971C154.841 225.001 154.871 225.031 154.9 225.06C167.989 238.178 186.576 242.431 203.244 237.821C211.813 235.453 219.875 230.744 226.421 223.689C227.276 222.766 228.089 221.817 228.86 220.843C242.849 203.278 243.197 178.414 229.904 160.486C228.833 159.032 227.672 157.628 226.421 156.282C225.861 155.678 225.289 155.092 224.708 154.522C205.681 135.082 205.809 103.959 225.092 84.719C244.462 65.3069 244.462 33.8962 225.092 14.5269C205.68 -4.84231 174.27 -4.84231 154.9 14.5269C135.531 33.8962 104.12 33.8962 84.7083 14.5269C65.339 -4.84231 33.9283 -4.84231 14.5591 14.5269C-4.85301 33.8962 -4.85301 65.3069 14.5591 84.719C33.9283 104.088 65.339 104.088 84.7083 84.719C104.12 65.3069 135.531 65.3069 154.9 84.719C174.24 104.058 174.27 135.402 154.99 154.821C154.96 154.851 154.93 154.881 154.9 154.911C135.531 174.28 104.12 174.28 84.7083 154.911C65.339 135.499 33.9283 135.499 14.5591 154.911C-4.85302 174.28 -4.85302 205.691 14.5591 225.06C33.9283 244.472 33.9283 275.883 14.5591 295.252C-5.28155 315.05 -4.85306 347.489 15.9303 366.772C34.6996 384.17 64.6106 384.17 83.337 366.772C104.12 347.489 104.549 315.05 84.7083 295.252C65.339 275.883 65.339 244.472 84.7083 225.06C104.091 205.72 135.435 205.691 154.811 224.971ZM226.42 364.073C207.137 384.856 174.697 385.285 154.9 365.444C135.53 346.075 135.53 314.664 154.9 295.295C174.697 275.454 207.137 275.883 226.42 296.666C243.818 315.435 243.818 345.346 226.42 364.073Z"
              fill="#123C69"
            />
          </svg>
          
        </div>
        <div className="place-self-center  lg:col-span-4">
          <p className=" text-grey text-3xl  max-w-2xl font-normal  lg:mb-8 md:text-5xl lg:text-3xl dark:text-gray-400">
            Peckiiless has developed patented technology to measure glucose
            levels solely through human exhalation.
          </p>
          <CustomButton
            title="Read more"
            containerStyles="bg-primary text-white rounded-xl px-5 py-2"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

export default function HealthcareBanner() {
  return (
    <div className="relative w-full h-screen">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 791"
          fill="none"
          className="absolute bottom-0 w-full -z-10"
        >
          <path
            d="M0 0H1440V685.589C1440 685.589 1180 448.413 858 685.589C536 922.764 0 685.589 0 685.589V0Z"
            fill="url(#paint0_linear_1500_3852)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1500_3852"
              x1="-41.5"
              y1="247.179"
              x2="1886.46"
              y2="232.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#123C69" />
              <stop offset="1" stop-color="#444F77" stop-opacity="0.52" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="bg-healthcare bg-cover bg-center bg-no-repeat h-[calc(67vh-4.6875rem)]" />
      <div className="px-36 -mt-20 mx-auto"> 
        <p className="text-[1.875rem] text-white w-[50%] text-center">
          Traditional health factor monitoring and diagnosis tools often rely on blood tests, which can be time-consuming, painful, and lead to inflammation and anxiety. Additionally, they generate a significant amount of single-use waste that's challenging to recycle. For instance, individuals with diabetes must frequently puncture their fingers throughout the day.
        </p>
      </div>
    </div>
  );
}

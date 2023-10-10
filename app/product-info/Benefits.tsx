import Image from "next/image";
import Title from "../components/Title";

const Benefits = () => {
  return (
    <>
      <Title title="What sets Peckiiless apart from the options of today?" />
      <section className="p-10">
        <div className="grid py-8 mx-auto gap-5 grid-cols-12">
          <div className="col-span-6 justify-center">
            <p className="text-4xl  font-medium pb-7">Breathalyzer benefits.</p>
            <p className="col-span-6  text-[1.625rem] leading-[1.75rem]">
              Testing and monitoring of these illnesses have gotten stuck in
              deve-lopment for years upon years, it’s time to globalize an
              easier option for monitoring your glucose testing in an easy,
              effecient way.
            </p>
          </div>

          <div className="col-span-6 grid grid-cols-4 gap-4">
            <div className="flex flex-col justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <circle cx="30.2012" cy="30.2676" r="30" fill="#B2335E" />
                <path
                  d="M46.5408 45.9329C46.8304 45.6632 46.8401 45.2076 46.5622 44.9259L16.2985 14.2438C16.024 13.9655 15.5751 13.965 15.2999 14.2425L14.2264 15.3254C13.9551 15.5991 13.9551 16.0404 14.2264 16.3141L24.1986 26.3731C24.47 26.6468 24.47 27.0881 24.1986 27.3618L18.9883 32.6175C18.717 32.8912 18.717 33.3324 18.9883 33.6061L21.3415 35.9798C21.6128 36.2535 21.6128 36.6948 21.3415 36.9685L17.1144 41.2323C16.9841 41.3638 16.9109 41.5415 16.9109 41.7267V44.2151C16.9109 44.8422 17.6703 45.1548 18.1117 44.7095L23.5551 39.2187C23.8298 38.9416 24.2777 38.9416 24.5524 39.2187L26.8885 41.5751C27.1632 41.8522 27.6111 41.8522 27.8858 41.5751L33.0789 36.3367C33.3536 36.0596 33.8015 36.0596 34.0762 36.3367L44.5271 46.8785C44.7941 47.1478 45.2267 47.1564 45.5042 46.898L46.5408 45.9329ZM29.278 34.859C29.5493 35.1327 29.5493 35.574 29.278 35.8477L28.0445 37.0919C27.7698 37.369 27.3219 37.369 27.0472 37.0919L23.5915 33.6061C23.3201 33.3324 23.3201 32.8912 23.5915 32.6175L26.571 29.612C26.8457 29.3349 27.2936 29.3349 27.5683 29.612L28.8018 30.8562C29.0731 31.1299 29.0731 31.5712 28.8018 31.8449L28.0359 32.6175C27.7646 32.8912 27.7646 33.3324 28.0359 33.6061L29.278 34.859ZM31.3776 24.4672C31.1011 24.7329 30.6625 24.7276 30.3925 24.4552L29.1542 23.2061C28.88 22.9296 28.8833 22.4828 29.1614 22.2102L33.7139 17.7493C33.9898 17.479 34.4321 17.4822 34.704 17.7565L37.0472 20.1201C37.3219 20.3972 37.7698 20.3972 38.0445 20.1201L39.278 18.8759C39.5493 18.6022 39.5493 18.1609 39.278 17.8872L38.0359 16.6343C37.7646 16.3606 37.7646 15.9193 38.0359 15.6456L39.2753 14.3955C39.5477 14.1207 39.9911 14.1181 40.2667 14.3897L46.0917 20.1288C46.3686 20.4015 46.3712 20.8473 46.0976 21.1233L44.853 22.3787C44.5849 22.6491 44.1502 22.6566 43.873 22.3956L42.4885 21.0921C42.2113 20.8312 41.7766 20.8386 41.5085 21.109L40.2582 22.3703C39.9868 22.644 39.9868 23.0853 40.2582 23.359L42.6184 25.7398C42.8869 26.0107 42.8901 26.4464 42.6255 26.7212L38.2031 31.3133C37.9296 31.5972 37.4762 31.6005 37.1987 31.3206L33.714 27.8056C33.4573 27.5467 33.4415 27.1344 33.6776 26.8566L33.7173 26.8098C33.9837 26.4963 34.4613 26.478 34.751 26.7701L35.9361 27.9656C36.2108 28.2427 36.6587 28.2427 36.9334 27.9656L38.1669 26.7213C38.4382 26.4476 38.4382 26.0064 38.1669 25.7327L34.6992 22.2347C34.4292 21.9624 33.9906 21.9571 33.7141 22.2227L31.3776 24.4672Z"
                  fill="white"
                />
              </svg>
              <p className="text-xs font-medium leading-5">Needlefree</p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <circle cx="30.7773" cy="30.2676" r="30" fill="#B2335E" />
                <path
                  d="M30.7754 35.2676C33.5368 35.2676 35.7754 33.029 35.7754 30.2676C35.7754 27.5062 33.5368 25.2676 30.7754 25.2676C28.014 25.2676 25.7754 27.5062 25.7754 30.2676C25.7754 33.029 28.014 35.2676 30.7754 35.2676Z"
                  fill="white"
                />
                <path
                  d="M33.2914 17.185C32.809 17.0916 32.4427 16.6807 32.4427 16.1893V14.5768C32.4427 14.0377 32.0056 13.6006 31.4665 13.6006H30.0856C29.5464 13.6006 29.1094 14.0377 29.1094 14.5768V16.1893C29.1094 16.6807 28.7431 17.0916 28.2607 17.185C25.6526 17.6898 23.2473 18.9633 21.3597 20.8509C19.4721 22.7385 18.1986 25.1438 17.6938 27.7519C17.6004 28.2343 17.1895 28.6006 16.698 28.6006H15.0856C14.5464 28.6006 14.1094 29.0377 14.1094 29.5768V30.9577C14.1094 31.4969 14.5464 31.9339 15.0856 31.9339H16.698C17.1894 31.9339 17.6004 32.3002 17.6937 32.7827C18.1983 35.3909 19.4717 37.7963 21.3594 39.6839C23.247 41.5716 25.6524 42.8449 28.2606 43.3496C28.7431 43.4429 29.1094 43.8539 29.1094 44.3453V45.9577C29.1094 46.4969 29.5464 46.9339 30.0856 46.9339H31.4665C32.0056 46.9339 32.4427 46.4969 32.4427 45.9577V44.3453C32.4427 43.8539 32.809 43.4429 33.2915 43.3496C35.8997 42.8449 38.305 41.5716 40.1927 39.6839C42.0803 37.7963 43.3537 35.3909 43.8584 32.7827C43.9517 32.3002 44.3627 31.9339 44.8541 31.9339H46.4665C47.0056 31.9339 47.4427 31.4969 47.4427 30.9577V29.5768C47.4427 29.0377 47.0056 28.6006 46.4665 28.6006H44.854C44.3626 28.6006 43.9517 28.2343 43.8583 27.7519C43.3535 25.1438 42.08 22.7385 40.1924 20.8509C38.3048 18.9633 35.8995 17.6898 33.2914 17.185ZM30.776 40.2673C25.261 40.2673 20.776 35.7823 20.776 30.2673C20.776 24.7523 25.261 20.2673 30.776 20.2673C36.291 20.2673 40.776 24.7523 40.776 30.2673C40.776 35.7823 36.291 40.2673 30.776 40.2673Z"
                  fill="white"
                />
              </svg>
              <p className="text-xs font-medium leading-5">Highly accurate</p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <circle cx="30.4648" cy="30.2676" r="30" fill="#B2335E" />
                <path
                  d="M31.0478 22.0022C33.5077 22.0022 35.5019 20.0215 35.5019 17.5783C35.5019 15.135 33.5077 13.1543 31.0478 13.1543C28.5879 13.1543 26.5938 15.135 26.5938 17.5783C26.5938 20.0215 28.5879 22.0022 31.0478 22.0022Z"
                  fill="white"
                />
                <path
                  d="M43.2088 26.8236C43.8713 26.6042 44.2294 25.8881 44.0073 25.2264L43.3245 23.1917C43.1037 22.5338 42.3926 22.1783 41.7338 22.3964L34.21 24.8874C34.0822 24.9297 33.9485 24.9513 33.8139 24.9513H28.2815C28.1469 24.9513 28.0132 24.9297 27.8855 24.8874L20.3616 22.3964C19.7028 22.1783 18.9917 22.5338 18.7709 23.1917L18.0881 25.2264C17.866 25.8881 18.2241 26.6042 18.8867 26.8236L25.7296 29.0891C26.2454 29.2599 26.5937 29.7421 26.5937 30.2854V33.5819C26.5937 33.7257 26.5691 33.8684 26.5209 34.0039L22.5139 45.2804C22.3003 45.8814 22.5695 46.5472 23.1408 46.8309L25.3262 47.9163C26.0012 48.2515 26.8175 47.9232 27.0725 47.2141L30.0542 38.9217C30.2049 38.5026 30.6023 38.2231 31.0477 38.2231C31.4931 38.2231 31.8905 38.5026 32.0412 38.9217L35.0229 47.2141C35.2779 47.9232 36.0942 48.2515 36.7692 47.9163L38.9547 46.8309C39.5259 46.5472 39.7951 45.8814 39.5815 45.2804L35.5745 34.0039C35.5264 33.8684 35.5018 33.7257 35.5018 33.5819V30.2854C35.5018 29.7421 35.85 29.2599 36.3658 29.0891L43.2088 26.8236Z"
                  fill="white"
                />
              </svg>
              <p className="text-xs font-medium leading-5">
                Universally available
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <circle cx="30.8555" cy="30" r="30" fill="#B2335E" />
                <path
                  d="M30.6591 45.8087C31.1307 46.0627 31.7226 46.0611 32.1941 45.8071C45.0456 38.8432 45.9583 25.2376 45.9471 21.3689C45.9459 21.058 45.8548 20.7542 45.685 20.4947C45.5152 20.2352 45.274 20.0313 44.9911 19.9079L32.0787 14.1381C31.8732 14.0468 31.651 13.9997 31.4265 14C31.2019 14.0003 30.9799 14.0479 30.7746 14.1398L17.952 19.9095C17.6732 20.0329 17.4355 20.2346 17.2671 20.4905C17.0987 20.7464 17.0069 21.0457 17.0024 21.3528C16.9479 25.202 17.7162 38.8368 30.6591 45.8087ZM25.4352 27.9812C25.8264 27.5866 26.4643 27.5866 26.8555 27.9812L29.1132 30.2586C29.5044 30.6532 30.1423 30.6532 30.5336 30.2586L35.9993 24.7453C36.3905 24.3506 37.0284 24.3506 37.4197 24.7453L38.2796 25.6127C38.6661 26.0025 38.6661 26.631 38.2796 27.0208L30.5336 34.8343C30.1423 35.2289 29.5044 35.2289 29.1132 34.8343L24.5752 30.2568C24.1888 29.867 24.1888 29.2385 24.5752 28.8487L25.4352 27.9812Z"
                  fill="white"
                />
              </svg>
              <p className="text-xs font-medium leading-5">Reliable</p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <circle cx="30" cy="30" r="30" fill="#B2335E" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.8929 34.154C19.358 37.8506 23.5307 41.9309 30.0017 46.2081C36.4728 41.9309 40.6455 37.8506 43.1106 34.154H38.0378C37.8372 34.154 37.6412 34.0939 37.4751 33.9814C37.3089 33.869 37.1803 33.7094 37.1056 33.5232L34.1785 26.2064L30.9681 37.4428C30.9107 37.6443 30.7917 37.8228 30.6278 37.9534C30.4639 38.0839 30.2633 38.1599 30.054 38.1708C29.8448 38.1816 29.6373 38.1268 29.4608 38.0139C29.2843 37.901 29.1475 37.7357 29.0696 37.5412L25.7607 29.2681L22.8014 33.708C22.7095 33.8454 22.5852 33.9579 22.4394 34.0357C22.2936 34.1135 22.1309 34.1542 21.9657 34.154H16.8929ZM15.6955 32.145C9.05571 19.448 22.7894 12.0548 29.6481 18.3692C29.7687 18.4797 29.8872 18.5942 30.0017 18.7127C30.1151 18.5943 30.233 18.4804 30.3553 18.3712C37.2141 12.0548 50.9478 19.448 44.3059 32.145H38.7148L34.9499 22.7308C34.872 22.5363 34.7352 22.371 34.5587 22.2581C34.3822 22.1452 34.1747 22.0904 33.9655 22.1012C33.7562 22.1121 33.5556 22.1881 33.3917 22.3186C33.2278 22.4492 33.1088 22.6277 33.0514 22.8292L29.843 34.0656L26.9159 26.7488C26.8477 26.5791 26.7345 26.4312 26.5884 26.3211C26.4424 26.2109 26.269 26.1428 26.0871 26.124C25.9051 26.1052 25.7215 26.1364 25.556 26.2143C25.3905 26.2922 25.2494 26.4138 25.1479 26.566L21.4272 32.145H15.6975H15.6955Z"
                  fill="white"
                />
              </svg>
              <p className="text-xs font-medium leading-5">Convenient</p>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <circle cx="30.7793" cy="30.2021" r="30" fill="#B2335E" />
                <path
                  d="M18.5925 24.7854H28.072C28.8755 24.7854 29.661 24.5472 30.3291 24.1008C30.9972 23.6543 31.5179 23.0198 31.8254 22.2775C32.1329 21.5351 32.2133 20.7183 32.0566 19.9302C31.8998 19.1421 31.5129 18.4182 30.9447 17.8501C30.3765 17.2819 29.6526 16.895 28.8646 16.7382C28.0765 16.5815 27.2596 16.6619 26.5173 16.9694C25.7749 17.2769 25.1404 17.7976 24.694 18.4657C24.2476 19.1338 24.0093 19.9193 24.0093 20.7228M19.9467 35.6191H34.843C35.6466 35.6191 36.432 35.8574 37.1001 36.3038C37.7682 36.7502 38.2889 37.3847 38.5964 38.1271C38.9039 38.8694 38.9844 39.6863 38.8276 40.4744C38.6709 41.2624 38.2839 41.9863 37.7158 42.5545C37.1476 43.1227 36.4237 43.5096 35.6356 43.6663C34.8475 43.8231 34.0307 43.7426 33.2883 43.4352C32.546 43.1277 31.9115 42.6069 31.4651 41.9388C31.0187 41.2708 30.7804 40.4853 30.7804 39.6818M17.2383 30.2023H40.2599C41.0634 30.2023 41.8489 29.964 42.517 29.5176C43.1851 29.0712 43.7058 28.4367 44.0133 27.6943C44.3208 26.952 44.4012 26.1351 44.2445 25.3471C44.0877 24.559 43.7008 23.8351 43.1326 23.2669C42.5644 22.6988 41.8405 22.3118 41.0525 22.1551C40.2644 21.9983 39.4475 22.0788 38.7052 22.3863C37.9628 22.6937 37.3283 23.2145 36.8819 23.8826C36.4355 24.5507 36.1973 25.3361 36.1973 26.1396"
                  stroke="white"
                  stroke-width="3.73762"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-xs font-medium leading-5">Easy-to-use</p>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <circle cx="30.4648" cy="30.2021" r="30" fill="#B2335E" />
                <path
                  d="M43.612 19.1976L43.4515 17.5127L41.8468 18.0476C39.0967 19.0031 36.16 19.2963 33.2753 18.9034C30.244 18.433 27.1414 18.851 24.3427 20.1069C22.859 20.7387 21.5569 21.7315 20.555 22.995C19.553 24.2586 18.883 25.7526 18.606 27.3412C18.2468 29.3934 18.4265 31.5038 19.1275 33.4657C19.5789 32.4468 20.1064 31.4634 20.7054 30.5238C22.0643 28.5245 23.9472 26.9376 26.1479 25.9372C28.268 24.9692 30.5853 24.5112 32.9142 24.5999C30.6971 24.9389 28.575 25.7359 26.6828 26.9401C25.7701 27.5135 24.9343 28.2011 24.1956 28.986C23.4891 29.7706 22.8661 30.6266 22.3368 31.5401C21.3427 33.4497 20.6353 35.4953 20.2374 37.6111C19.8086 39.7337 19.5758 41.8912 19.5421 44.0564H22.2165C22.3422 42.1146 22.6058 40.1841 23.0054 38.2797C24.8607 39.2815 26.9413 39.7925 29.0497 39.764C31.016 39.7626 32.9621 39.367 34.773 38.6006C44.9492 34.2546 43.612 19.7993 43.612 19.1976Z"
                  fill="white"
                />
              </svg>
              <p className="text-xs font-medium leading-5">
                Enviromentally friendly
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <circle cx="30.1387" cy="30" r="30" fill="#B2335E" />
                <path
                  d="M30.388 44.9787C36.2964 44.9787 42.276 42.9192 42.276 38.983V20.9957C42.276 17.0595 36.2964 15 30.388 15C24.4797 15 18.5 17.0595 18.5 20.9957V38.983C18.5 42.9192 24.4797 44.9787 30.388 44.9787ZM30.388 41.9808C24.8571 41.9808 21.472 40.0397 21.472 38.983V37.0823C23.7619 38.3384 27.0846 38.983 30.388 38.983C33.6914 38.983 37.0141 38.3384 39.304 37.0823V38.983C39.304 40.0397 35.9189 41.9808 30.388 41.9808ZM30.388 17.9979C35.9189 17.9979 39.304 19.939 39.304 20.9957C39.304 22.0525 35.9189 23.9936 30.388 23.9936C24.8571 23.9936 21.472 22.0525 21.472 20.9957C21.472 19.939 24.8571 17.9979 30.388 17.9979ZM21.472 25.0908C23.7619 26.3469 27.0846 26.9915 30.388 26.9915C33.6914 26.9915 37.0141 26.3469 39.304 25.0908V26.9915C39.304 28.0482 35.9189 29.9894 30.388 29.9894C24.8571 29.9894 21.472 28.0482 21.472 26.9915V25.0908ZM21.472 31.0866C23.7619 32.3427 27.0846 32.9872 30.388 32.9872C33.6914 32.9872 37.0141 32.3427 39.304 31.0866V32.9872C39.304 34.044 35.9189 35.9851 30.388 35.9851C24.8571 35.9851 21.472 34.044 21.472 32.9872V31.0866Z"
                  fill="white"
                />
              </svg>
              <p className="text-xs font-medium leading-5">Cost efficient</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;

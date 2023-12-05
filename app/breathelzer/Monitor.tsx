import Image from "next/image";

export default function Monitor() {
  return (
    <div className="h-[55rem] p-32">
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <div className="md:w-[100%] relative">
            <Image
              src="/mobile1.png"
              width={400}
              height={400}
              alt="logo"
              priority={true}
              className="bottom absolute"
            />
            <Image
              src="/mobile2.png"
              width={400}
              height={400}
              alt="logo"
              priority={true}
              className="top absolute"
            />
          </div>
        </div>
        <div className="col-span-7">
          <div className="mb-10 flex justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="119"
                height="119"
                viewBox="0 0 119 119"
                fill="none"
              >
                <g filter="url(#filter0_d_793_21184)">
                  <rect
                    x="4"
                    width="110.128"
                    height="110.128"
                    rx="17.9069"
                    fill="#444F77"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M53.3411 20.9255C53.2838 20.8648 53.2256 20.8047 53.1664 20.7452C49.4364 16.9847 43.3876 16.9847 39.6576 20.7452C38.151 22.2609 37.2514 24.1582 36.9596 26.13C36.5253 29.0486 37.4245 32.1305 39.6572 34.3815C43.3872 38.1421 49.436 38.1421 53.166 34.3815C56.9042 30.6127 62.953 30.6127 66.683 34.3815C70.3987 38.1276 70.4129 44.1937 66.7258 47.9659C66.7114 47.9802 66.6971 47.9946 66.6828 48.0091L66.655 48.0371C62.9229 51.7696 56.8949 51.7602 53.166 48.009C49.436 44.2402 43.3872 44.2402 39.6572 48.009C35.919 51.7696 35.919 57.868 39.6572 61.6286C43.3872 65.3974 43.3872 71.4958 39.6572 75.2564C35.8364 79.1001 35.919 85.3982 39.9212 89.1421C43.5357 92.52 49.2957 92.52 52.9019 89.1421C56.9042 85.3982 56.9867 79.1001 53.166 75.2564C49.436 71.4958 49.436 65.3974 53.166 61.6286C56.8933 57.8789 62.9179 57.868 66.6504 61.5959C66.6613 61.6069 66.6721 61.6179 66.683 61.6289C69.3654 64.3393 73.2472 65.1005 76.6063 63.9125C78.0262 63.4108 79.3528 62.5609 80.4559 61.3623C80.6082 61.1966 80.7536 61.0264 80.8921 60.8522C83.6103 57.4503 83.6965 52.6174 81.1507 49.1247C80.9378 48.8307 80.7062 48.5469 80.4559 48.2753C80.3464 48.1564 80.2348 48.0409 80.1211 47.9289C76.462 44.1542 76.4883 38.1154 80.2 34.3815C83.93 30.6127 83.93 24.5142 80.2 20.7537C76.4618 16.9931 70.413 16.9931 66.683 20.7537C63.0107 24.4561 57.0908 24.5133 53.3411 20.9255Z"
                    fill="white"
                  />
                  <path
                    d="M80.4551 88.6178C76.7416 92.6529 70.4947 92.7361 66.6822 88.884C62.9523 85.1235 62.9523 79.025 66.6822 75.2645C70.4947 71.4124 76.7416 71.4956 80.4551 75.5307C83.8055 79.1748 83.8055 84.982 80.4551 88.6178Z"
                    fill="white"
                  />
                  <path
                    d="M80.4551 88.6178C76.7416 92.6529 70.4947 92.7361 66.6822 88.884C62.9523 85.1235 62.9523 79.025 66.6822 75.2645C70.4947 71.4124 76.7416 71.4956 80.4551 75.5307C83.8055 79.1748 83.8055 84.982 80.4551 88.6178Z"
                    fill="white"
                  />
                  <path
                    d="M80.4551 88.6178C76.7416 92.6529 70.4947 92.7361 66.6822 88.884C62.9523 85.1235 62.9523 79.025 66.6822 75.2645C70.4947 71.4124 76.7416 71.4956 80.4551 75.5307C83.8055 79.1748 83.8055 84.982 80.4551 88.6178Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_793_21184"
                    x="0"
                    y="0"
                    width="118.127"
                    height="118.128"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_793_21184"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_793_21184"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <p className=" text-[2.875rem] text-primary-800  font-medium leading-[3rem]">
            Monitor your glucose levels directly in our mobile application.
          </p>

          <p className="text-[1.375rem] py-2">
            Connect your Peckiiless breather device to our our application and
            observe previous and current levels.
          </p>
          <div className="flex ml-[-16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
            >
              <g filter="url(#filter0_d_793_21207)">
                <rect
                  x="23.9141"
                  y="24.4824"
                  width="53.9007"
                  height="50.1303"
                  fill="#FDFDFD"
                />
                <path
                  d="M75.3571 20H26.6429C22.976 20 20 22.976 20 26.6429V75.3571C20 79.024 22.976 82 26.6429 82H75.3571C79.024 82 82 79.024 82 75.3571V26.6429C82 22.976 79.024 20 75.3571 20ZM37.577 68.7829C37.21 69.4178 36.6058 69.8808 35.8973 70.0701C35.1889 70.2595 34.4343 70.1597 33.7994 69.7926C33.1646 69.4256 32.7016 68.8214 32.5122 68.113C32.3229 67.4045 32.4227 66.6499 32.7897 66.0151L34.7693 62.5962C36.9969 61.9186 38.8236 62.4434 40.2496 64.1728L37.577 68.7829ZM56.7992 61.3252H31.625C30.1016 61.3252 28.8571 60.0786 28.8571 58.5574C28.8571 57.0361 30.1038 55.7895 31.625 55.7895H38.6841L47.7339 40.1234L44.8974 35.2254C44.5324 34.5901 44.4337 33.8362 44.6229 33.1283C44.8121 32.4205 45.2738 31.8163 45.9071 31.4479C46.5424 31.0828 47.2964 30.9841 48.0043 31.1733C48.7121 31.3625 49.3163 31.8242 49.6847 32.4576L50.9159 34.5877L52.147 32.4576C52.3287 32.1432 52.5706 31.8678 52.8588 31.6469C53.147 31.426 53.4759 31.2641 53.8267 31.1704C54.1774 31.0766 54.5433 31.0528 54.9032 31.1005C55.2632 31.1481 55.6102 31.2661 55.9246 31.4479C56.2389 31.6296 56.5144 31.8715 56.7352 32.1597C56.9561 32.4479 57.118 32.7767 57.2118 33.1275C57.3055 33.4783 57.3293 33.8441 57.2817 34.2041C57.2341 34.564 57.116 34.9111 56.9343 35.2254L45.0613 55.7917H53.6549C56.4494 55.7917 58.0149 59.0711 56.797 61.3274L56.7992 61.3252ZM70.375 61.3252H66.3605L69.073 66.0173C69.8347 67.3459 69.3764 69.0354 68.0633 69.7949C66.7347 70.5566 65.0452 70.0982 64.2857 68.7851C59.7331 60.9111 56.3276 54.9879 54.0446 51.0576C51.7329 47.0431 53.3804 43.0308 55.0278 41.6756C56.8413 44.8177 59.5538 49.5231 63.1786 55.7917H70.375C71.1091 55.7917 71.8131 56.0833 72.3322 56.6024C72.8512 57.1215 73.1429 57.8255 73.1429 58.5596C73.1429 59.2937 72.8512 59.9977 72.3322 60.5167C71.8131 61.0358 71.1091 61.3274 70.375 61.3274V61.3252Z"
                  fill="#B2335E"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_793_21207"
                  x="0"
                  y="0"
                  width="102"
                  height="102"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_793_21207"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_793_21207"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
              className="ml-[-16px]"
            >
              <g filter="url(#filter0_d_793_21210)">
                <rect
                  x="20"
                  y="20"
                  width="62"
                  height="62"
                  rx="12.6814"
                  fill="#B2335E"
                />
              </g>
              <path
                d="M65.3752 53.7334C67.7586 52.3101 67.7586 48.7473 65.3752 47.3218L59.1834 43.6213L51.8103 50.5276L59.1811 57.4338L65.3729 53.7334H65.3752ZM57.1126 58.6704L50.1164 52.1141L35.0553 66.23C35.5172 68.6308 38.181 69.9864 40.3484 68.6915L57.1126 58.6704ZM34.9863 63.1175V37.9353L48.4225 50.5276L34.9863 63.1175ZM35.0553 34.8252L50.1164 48.941L57.1126 42.3847L40.3484 32.3636C38.181 31.0664 35.5172 32.422 35.0553 34.8252Z"
                fill="#FDFDFD"
              />
              <defs>
                <filter
                  id="filter0_d_793_21210"
                  x="0"
                  y="0"
                  width="102"
                  height="102"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_793_21210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_793_21210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex flex-col justify-center text-[1.375rem]">
              <p>Available on</p>
              <p>App Store & Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

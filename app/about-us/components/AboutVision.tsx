export default function Vision() {
  return (
    <section className="p-10">
      <div className="grid py-8 mx-auto gap-5 grid-cols-12">
        <div className="col-span-1 justify-self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="280"
            viewBox="0 0 54 240"
            fill="none"
          >
            <path
              d="M26.9863 239.672C41.7139 239.672 53.653 227.732 53.653 213.005C53.653 198.277 41.7139 186.338 26.9863 186.338C12.2587 186.338 0.319662 198.277 0.319662 213.005C0.319662 227.732 12.2587 239.672 26.9863 239.672ZM31.9863 213.005V0.995453H21.9863V213.005H31.9863Z"
              fill="#B2335E"
            />
          </svg>
        </div>
        <div className="self-center col-span-2  text-primary-800">
          <p className="font-bold text-5xl">Our Vision</p>
          <p className="text-3xl font-semibold text-center pt-2">Nano sensor</p>
        </div>
        <p className="col-span-9 px-28 text-3xl self-center font-medium">
          PeckiiLess AB is a Deeptech startup developing a patent-pending
          technology for nanosensor-based multi-selective gas detection. Our
          innovative gas detection system opens doors to efficient and
          non-invasive monitoring of glucose and cholesterol levels, promising
          accurate results that revolutionize both industrial and healthcare
          applications.
        </p>
      </div>
    </section>
  );
}

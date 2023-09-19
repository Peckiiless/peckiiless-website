export default function Banner() {
  return (
    <section className="graidient  sticky z-10 text-white pl-20">
      <p className="text-4xl pt-8 pb-10">About Us</p>
      <div className="flex ">
        <div className="text-2xl pr-40">
          <p>
            Peckiiless is a Sweden-based company that has created a nanosensor
            that can detect your blood glucose levels through nothing more than
            your breath to extremely accurate levels.
          </p>
          <p className="py-5">
            The options of today all rely heavliy on outdated measures such as
            needles or CGMs (Continuous glucose meters), both of which are not
            only expensive and wasteful, but are also not universally available.
          </p>
          <p>
            The most humane option is Peckiiless, who delivers a method that is
            good for the people, the planet, and your pocketbook.
          </p>
        </div>
        <div className="pb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="445"
            height="386"
            viewBox="0 0 445 386"
            fill="none"
          >
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M584.186 137.877C584.671 137.411 585.153 136.938 585.629 136.458C616.662 105.256 616.662 54.6572 585.629 23.4555C572.833 10.5616 556.74 2.98177 540.065 0.725088C516.317 -2.50749 491.387 5.06849 473.102 23.453C442.069 54.6547 442.069 105.254 473.102 136.456C504.204 167.726 504.204 218.326 473.102 249.527C442.069 280.729 391.743 280.729 360.642 249.527C360.534 249.419 360.426 249.311 360.318 249.204C329.605 217.977 329.712 167.619 360.638 136.456C391.74 105.254 391.74 54.6548 360.638 23.4531C329.605 -7.81759 279.279 -7.8176 248.246 23.4531C217.145 54.6548 166.819 54.6548 135.786 23.4531C104.066 -8.50791 52.0927 -7.81766 21.197 25.662C-6.67778 55.8973 -6.67779 104.08 21.197 134.247C52.0927 167.726 104.066 168.417 135.786 136.456C166.819 105.254 217.145 105.254 248.246 136.456C279.279 167.726 279.279 218.326 248.246 249.527C243.538 254.251 239.542 259.421 236.259 264.904C227.35 279.774 223.692 296.93 225.286 313.683C227.069 332.469 235.45 350.752 250.443 364.739C252.142 366.322 253.898 367.816 255.705 369.221C283.99 391.355 323.739 391.59 352.268 369.929C354.398 368.321 356.459 366.591 358.442 364.738C359.382 363.862 360.295 362.969 361.182 362.06C392.324 331.329 442.248 331.509 473.102 362.599C504.204 393.8 554.529 393.8 585.562 362.599C616.595 331.328 616.595 280.729 585.562 249.527C554.995 218.794 554.536 169.241 584.186 137.877ZM25.5181 364.738C-7.78059 333.674 -8.46721 281.418 23.3211 249.526C54.3541 218.325 104.68 218.325 135.713 249.526C167.501 281.418 166.814 333.674 133.516 364.738C103.444 392.764 55.5213 392.764 25.5181 364.738Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

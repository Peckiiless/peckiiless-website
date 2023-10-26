import Image from "next/image";

const Benefits = () => {
  return (
    <div className="p-10 mt-20 ">
      <div className="grid sm:grid-cols-2 items-center gap-10">
        <Image
          src="/images/green-s.png"
          width={601}
          height={287}
          alt="logo"
          priority={true}
          className="justify-self-center"
        />
        <p className="text-[1.75rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 items-center py-32">
        <Image
          src="/images/red-s.png"
          width={601}
          height={287}
          alt="logo"
          priority={true}
          className="justify-self-center"
        />

        <p className="sm:row-start-1 text-[1.75rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 items-center ">
        <Image
          src="/images/yellow-s.png"
          width={601}
          height={287}
          alt="logo"
          priority={true}
          className="justify-self-center"
        />
        <p className="text-[1.75rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>
    </div>
  );
};

export default Benefits;

import Image from "next/image";

const Benefits = () => {
  return (
    <div className="p-10 mt-20 ">
      <div className="grid sm:grid-cols-2 items-center gap-10">
        <Image
          src="/images/green.png"
          width={601}
          height={287}
          alt="logo"
          priority={true}
          className="justify-self-center"
        />
        <p className="text-[1.75rem]">
          Providing an easy and accessible way of monitoring glucose levels, can
          improve the management of diabetes. This reduces medical waste and
          enhances the well-being of an individual.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 items-center py-32">
        <Image
          src="/images/orange.png"
          width={601}
          height={287}
          alt="logo"
          priority={true}
          className="justify-self-center"
        />

        <p className="sm:row-start-1 text-[1.75rem]">
          By promoting the reduction of medical waste from the disposables like
          one-time needles and testing kits. This contributes to a sustainable
          efficient production and consumption of medical equipment.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 items-center ">
        <Image
          src="/images/yellow.png"
          width={601}
          height={287}
          alt="logo"
          priority={true}
          className="justify-self-center"
        />
        <p className="text-[1.75rem]">
          Encouraging innovation in the healthcare industry and promoting the
          development of more efficient less intrusive and comfortable ways of
          addressing the global health challenge.
        </p>
      </div>
    </div>
  );
};

export default Benefits;

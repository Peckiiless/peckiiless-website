import Image from "next/image";
import Title from "../../components/Title";

export default function Supports() {
  return (
    <section className="px-40 pb-11">
      <Title title="Get Support From"/>
      
      <div className="grid py-8 mx-auto gap-6 gap-y-20 grid-cols-12">
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/Almi.png"
            width={150}
            height={150}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/Euipo.png"
            width={250}
            height={250}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/Sten.png"
            width={150}
            height={150}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="col-span-3 justify-self-center ">
          <Image
            src="/images/chalmers.png"
            width={80}
            height={80}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}

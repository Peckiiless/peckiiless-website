import Image from "next/image";

export default function ProductPackage() {
  return (
    // <section className="h-screen bg-contain  bg-bottom  bg-productPackage  bg-no-repeat"></section>
    <div className="section ">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="">
          <Image
            src="/package.png"
            width={768}
            height={464}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}

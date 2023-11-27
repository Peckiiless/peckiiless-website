import Image from "next/image";

export default function CompanyFamilyOthers() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-[100rem] lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 ">
        <div className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/marziyeh.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="py-5 font-bold text-2xl">Marzyeh Advand.</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center">
            <Image
              src="/images/Sara.svg"
              width={300}
              height={300}
              alt="logo"
              priority={true}
            />
            <div className="text-center py-5 font-bold text-2xl">Sara N.</div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Martin.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Martin Andersson.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Angela.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Angela grommet
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Henrik.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Henrik Strom
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Andres.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Anders Hellman
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Jens.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">
                Jens Eriksson
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Team.svg"
                width={300}
                height={300}
                alt="logo"
                priority={true}
              />
              <div className="text-center py-5 font-bold text-2xl">No Name</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

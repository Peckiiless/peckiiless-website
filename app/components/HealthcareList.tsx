import React from "react";
import Image from "next/image";

export default function HealthcareList() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="text-4xl">
          <p>
            Peckiiless makes health care the future easier and safer for the
            user. 1.5 million deaths are directly attributed to diabetes each
            year.
          </p>
        </div>
        <div className="">
          <Image
            className="mr-3"
            src="/images/kidney.png"
            width={600}
            height={600}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}

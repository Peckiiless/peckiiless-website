import CustomButton from "./CustomButton";

export default function HealthcareBanner() {
  return (
    <section
      id="section1"
      className="bg-healthcare bg-cover bg-center bg-no-repeat"
      style={{ height: "35.1875rem" }}
    >
      <div className="place-self-center  lg:col-span-4 p-44 ">
        <p className=" text-white text-4xl  max-w-2xl  lg:mb-8  pb-20">
          We makes Health care the future easier and safer.
        </p>
        <CustomButton
          title="Read more"
          containerStyles="bg-primary text-3xl text-white rounded-xl px-5 py-3"
        />
      </div>
    </section>
  );
}

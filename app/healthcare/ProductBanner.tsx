import CustomButton from "../components/CustomButton";

export default function ProductBanner() {
  return (
    <section
      id="section1"
      className="bg-productInfo bg-contain bg-right bg-no-repeat h-[50rem]"
    >
      <div className="place-self-center  lg:col-span-4 p-44 ">
        <CustomButton
          title="More Information"
          containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-[2.5rem] py-7 px-12 leading-10"
        />
      </div>
    </section>
  );
}

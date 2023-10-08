import CustomButton from "../components/CustomButton";

export default function ProductBanner() {
  return (
    <section
      id="section1"
      className="bg-productInfo bg-cover bg-center "
      style={{ height: "85rem" }}
    >
      <div className="place-self-center  lg:col-span-4 p-44 ">
        <CustomButton
          title="Read more"
          containerStyles="bg-primary text-3xl text-white rounded-xl px-5 py-3"
        />
      </div>
    </section>
  );
}

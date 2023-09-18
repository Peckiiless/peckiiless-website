import CustomButton from "./components/CustomButton";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Welcome to Peckiiless Website
      </p>

      <CustomButton
        title="Read more"
        containerStyles="bg-primary text-white rounded-xl mt-10 px-5 py-2"
      />
    </main>
  );
}

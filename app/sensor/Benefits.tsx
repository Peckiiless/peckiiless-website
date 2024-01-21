import { Text2rem, Text1875rem } from "../components/Text";

const Benefits = () => {
  return (
    <div className="pt-20 px-[5%]">
      <div className="text-center">
        <div className=" font-medium text-primary-800 py-6 max-w-[75rem] mx-auto px-2">
          <Text2rem>
           Peckiiless technology empowers industries with cutting-edge gas sensing solutions, where accuracy meets innovation to shape a safer and cleaner future.
          </Text2rem>
        </div>
        <div className=" py-6 max-w-[80rem] mx-auto px-2">
          <Text1875rem>
            At Peckiiless, breakthroughs in gas sensing technology redefine the landscape of industrial safety and environmental monitoring. Our highly accurate gas sensors, boasting unparalleled selectivity and sensitivity, find diverse applications across a spectrum of crucial areas.
          </Text1875rem>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

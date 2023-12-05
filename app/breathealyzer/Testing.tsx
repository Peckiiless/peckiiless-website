import Title from "../components/Title";
import Image from "next/image";
import CustomButton from "../components/CustomButton";

const Testing = () => {
  return (
    <div className="">
      <p className="text-center font-medium text-[2.8755rem] text-primary-800 leading-[3.75rem] px-20 max-w-[90rem] mx-auto py-24">
        How Peckiiless Breathalyzer Works and How Exhalation Biomarkers (VOCs)
        Connect to the Body&#39;s Metabolic Activity
      </p>
      <div className="grid sm:grid-cols-3 items-center relative ">
        <div className="absolute rotate-[90deg] top-0 left-12 origin-left">
          <CustomButton
            title="Your Body’s Story in a Breath"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10 w-[25rem]"
          />
        </div>

        <Image
          src="/testing.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="sm:w-[300px] justify-self-center image-float"
        />

        <div className="text-right pl-32 pt-10 w-[97%] col-span-2 self-start  sm:row-start-1 text-[1.75rem]">
          <p>
            Volatile organic compounds (VOCs) are gaseous molecules that can be
            sampled quickly and non-invasively from breath.
          </p>
          <p className="py-4">
            Some VOCs are born within, whispering secrets about your internal
            processes (endogenous VOCs). Others come from the outside world,
            bringing stories of your diet, the medications you take, and the air
            you breathe (exogenous VOCs).
          </p>
          <p>
            It&#39;s like your body narrating its story with every exhale, a
            unique blend of internal and external chapters unveiled in the
            invisible language of molecules. Inhale, and let the captivating
            tale of your whole-body metabolic snapshot begin.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 items-center relative mt-20">
        <Image
          src="/testing1.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="sm:w-[400px] justify-self-center image-float"
        />

        <div className="pr-32 pt-10 w-[97%] col-span-2 text-[1.75rem]">
          <p>
            Your lungs, the silent storytellers of your health, are masters at
            exchanging chemicals with your blood. They capture volatile
            metabolites and biomarkers, whispering clues about your well-being,
            even in the earliest stages of a potential ailment.
          </p>
          <p className="py-4">
            Imagine this: in just around One minute, your entire blood volume
            completes a journey around your body, carrying with it the intricate
            narrative of your health. The dance between your lungs and blood
            paints a vivid picture of your body&#39;s inner workings, revealing
            its secrets with each breath and heartbeat.
          </p>
        </div>
        <div className="absolute rotate-[-90deg] top-5 right-12 origin-right">
          <CustomButton
            title="The Respiratory Marvel"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10 w-[25rem]"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 items-center relative mt-20">
        <div className="absolute rotate-[90deg] top-0 left-12 origin-left">
          <CustomButton
            title="Rapid transfer of VOCs from blood to breath"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10 max-w-[25rem]"
          />
        </div>

        <Image
          src="/testing2.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="sm:w-[300px] justify-self-center image-float"
        />

        <div className="text-right pl-32 pt-10 w-[97%] col-span-2 self-start  sm:row-start-1 text-[1.75rem]">
          <p>
            Deep within your lungs reside tiny, magical sacs called alveoli.
            They&#39;re not just air-filled bubbles; These structures play a
            crucial role in the respiratory system, facilitating the transfer of
            gases between the lungs and the bloodstream. The alveoli are
            surrounded by a dense network of capillaries, small blood vessels
            with thin walls. This proximity allows for rapid gas exchange
            between the alveoli and the blood. large surface area and thin walls
            of the alveoli optimize this exchange, ensuring a rapid and
            effective transfer of gases to meet the body&#39;s metabolic needs.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 items-center relative mt-20 py-32">
        <Image
          src="/testing3.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="sm:w-[400px] justify-self-center image-float"
        />

        <div className="pr-32 pt-10 w-[97%] col-span-2 text-[1.75rem]">
          <p>
            In this microscopic realm, a solitary air sac, encircled by
            intricate blood vessels, directs the silent choreography of gas
            exchange-a vital rhythm encapsulated in a single image.
          </p>
        </div>
        <div className="absolute rotate-[-90deg] top-5 right-12 origin-right">
          <CustomButton
            title="Alveoli"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10 w-[25rem]"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 items-center relative mt-20 py-20">
        <div className="absolute rotate-[90deg] top-0 left-12 origin-left">
          <CustomButton
            title="Glucose synthesis"
            containerStyles="bg-primary-700 font-medium text-[1.625rem] text-white rounded-t-[1.875rem] py-7 px-12 leading-10 w-[25rem]"
          />
        </div>

        <div className="text-right pl-32 pt-10 w-[97%] col-span-2 self-start  sm:row-start-1 text-[1.75rem]">
          <p>
            Armed with this knowledge, the Peckiiless breathalyzer swiftly
            captures multiple crucial biomarkers from your exhalation breath.
            Its keen selectivity and sensitivity, paired with the power of Al,
            go beyond, even calculating your body&#39;s glucose levels. Embrace
            the journey to wellness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testing;

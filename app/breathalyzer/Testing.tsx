import Image from "next/image";
import CustomButton from "../components/CustomButton";
import { Title1, Text1 } from "../components/Text";

const Testing = () => {
  return (
    <div className="">
      <div className="px-20 max-w-[90rem] mx-auto py-24">
        <Title1 title="How Peckiiless Breathalyzer Works and How Exhalation Biomarkers (VOCs) Connect to the Body's Metabolic Activity" />
      </div>
      <div className="grid grid-cols-3 items-center relative max-w-[90rem]">
        <div className="absolute rotate-[90deg] top-0 left-12 origin-left">
          <CustomButton
            title="Your Body’s Story in a Breath"
            containerStyles="bg-primary-700 font-medium text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem] text-white rounded-t-[1.875rem] py-7 px-12 max-w-[30rem]"
          />
        </div>
        <div className="text-right pl-24 sm:pl-[20%] pt-[10%] sm:pt-0 w-[97%] col-span-2 self-start">
          <Text1>
            <div className="hidden sm:block p-8">
              <p>
                Volatile organic compounds (VOCs) are gaseous molecules that can
                be sampled quickly and non-invasively from breath.
              </p>
              <p className="py-4">
                Some VOCs are born within, whispering secrets about your
                internal processes (endogenous VOCs). Others come from the
                outside world, bringing stories of your diet, the medications
                you take, and the air you breathe (exogenous VOCs).
              </p>
              <p>
                It&#39;s like your body narrating its story with every exhale, a
                unique blend of internal and external chapters unveiled in the
                invisible language of molecules. Inhale, and let the captivating
                tale of your whole-body metabolic snapshot begin.
              </p>
            </div>
            <p className="sm:hidden">
              Volatile organic compounds (VOCs) are gaseous molecules that can
              be sampled quickly and non-invasively from breath.Some VOCs are
              born within, whispering secrets about your internal processes
              (endogenous VOCs). Others come from the outside -
            </p>
            <p className="sm:hidden font-medium text-[1rem] cursor-pointer py-1">
              Read more
            </p>
          </Text1>
        </div>

        <Image
          src="/testing.png"
          width={600}
          height={600}
          alt="logo"
          priority={true}
          className="w-[250px] sm:w-[500px] md:w-[360px] lg:w-[350px] xl:w-[400px] justify-self-center image-float"
        />
      </div>
      <div className="grid grid-cols-3 items-center relative mt-20">
        <Image
          src="/testing1.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="w-[250px] sm:w-[500px] md:w-[360px] lg:w-[350px] xl:w-[400px] justify-self-center image-float"
        />

        <div className="pr-[32%] pt-[15%] w-[97%] col-span-2">
          <Text1>
            <div className="hidden sm:block p-8">
              <p>
                Your lungs, the silent storytellers of your health, are masters
                at exchanging chemicals with your blood. They capture volatile
                metabolites and biomarkers, whispering clues about your
                well-being, even in the earliest stages of a potential ailment.
              </p>
              <p className="py-4">
                Imagine this: in just around One minute, your entire blood
                volume completes a journey around your body, carrying with it
                the intricate narrative of your health. The dance between your
                lungs and blood paints a vivid picture of your body&#39;s inner
                workings, revealing its secrets with each breath and heartbeat.
              </p>
            </div>
            <p className="sm:hidden">
              Your lungs, the silent storytellers of your health, are masters at
              exchanging chemicals with your blood. They capture volatile
              metabolites and biomarkers, whispering clues about your
              well-being, even in the earliest stages of a potential ailment.
            </p>
            <p className="sm:hidden font-medium text-[1rem] cursor-pointer py-1">
              Read more
            </p>
          </Text1>
        </div>
        <div className="absolute rotate-[-90deg] top-5 right-12 origin-right">
          <CustomButton
            title="The Respiratory Marvel"
            containerStyles="bg-primary-700 font-medium text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem] text-white rounded-t-[1.875rem] py-7 px-12 max-w-[30rem]"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center relative max-w-[90rem]">
        <div className="absolute rotate-[90deg] top-0 left-12 origin-left">
          <CustomButton
            title="Your Body’s Story in a Breath"
            containerStyles="bg-primary-700 font-medium text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem] text-white rounded-t-[1.875rem] py-7 px-12 max-w-[30rem]"
          />
        </div>
        <div className="text-right pl-24 sm:pl-[20%] pt-[10%] sm:pt-0 w-[97%] col-span-2 self-start">
          <Text1>
            <div className="hidden sm:block p-8">
              <p>
                Deep within your lungs reside tiny, magical sacs called alveoli.
                They&#39;re not just air-filled bubbles; These structures play a
                crucial role in the respiratory system, facilitating the
                transfer of gases between the lungs and the bloodstream. The
                alveoli are surrounded by a dense network of capillaries, small
                blood vessels with thin walls. This proximity allows for rapid
                gas exchange between the alveoli and the blood. large surface
                area and thin walls of the alveoli optimize this exchange,
                ensuring a rapid and effective transfer of gases to meet the
                body&#39;s metabolic needs.
              </p>
            </div>
            <p className="sm:hidden">
              Deep within your lungs reside tiny, magical sacs called alveoli.
              They&#39;re not just air-filled bubbles; These structures play a
              crucial role in the respiratory system, facilitating the transfer
              of gases between the lungs and the bloodstream. The alveoli are
              surrounded by a dense network of capillaries, small
            </p>
            <p className="sm:hidden font-medium text-[1rem] cursor-pointer py-1">
              Read more
            </p>
          </Text1>
        </div>

        <Image
          src="/testing2.png"
          width={600}
          height={600}
          alt="logo"
          priority={true}
          className="w-[250px] sm:w-[500px] md:w-[360px] lg:w-[350px] xl:w-[400px] justify-self-center image-float"
        />
      </div>
      <div className="grid grid-cols-3 items-center relative mt-20">
        <Image
          src="/testing3.png"
          width={300}
          height={300}
          alt="logo"
          priority={true}
          className="w-[250px] sm:w-[500px] md:w-[360px] lg:w-[350px] xl:w-[400px] justify-self-center image-float"
        />

        <div className="pr-[32%] pt-[15%] w-[97%] col-span-2">
          <Text1>
            <div className="hidden sm:block p-8">
              <p>
                In this microscopic realm, a solitary air sac, encircled by
                intricate blood vessels, directs the silent choreography of gas
                exchange-a vital rhythm encapsulated in a single image.
              </p>
              <p className="py-4">
                Armed with this knowledge, the Peckiiless breathalyzer swiftly
                captures multiple crucial biomarkers from your exhalation
                breath. Its keen selectivity and sensitivity, paired with the
                power of Al, go beyond, even calculating your body&#39;s glucose
                levels. Embrace the journey to wellness&#34;
              </p>
            </div>
            <p className="sm:hidden">
              In this microscopic realm, a solitary air sac, encircled by
              intricate blood vessels, directs the silent choreography of gas
              exchange-a vital rhythm encapsulated in a single image.
            </p>
            <p className="sm:hidden font-medium text-[1rem] cursor-pointer py-1">
              Read more
            </p>
          </Text1>
        </div>
        <div className="absolute rotate-[-90deg] top-5 right-12 origin-right">
          <CustomButton
            title="The Respiratory Marvel"
            containerStyles="bg-primary-700 font-medium text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem] text-white rounded-t-[1.875rem] py-7 px-12 max-w-[30rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Testing;

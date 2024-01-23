import Image from "next/image";
import CustomButton from "../components/CustomButton";
import { Text175rem, Title2625rem } from "../components/Text";

const Testing = () => {
  return (
    <div className="">
      <div className="py-14 sm:py-24 xl:py-32  max-w-[85rem] mx-auto px-2">
        <Title2625rem>
          How Peckiiless Breathalyzer Works and How Exhalation Biomarkers (VOCs)
          Connect to the Body&#39;s Metabolic Activity
        </Title2625rem>
      </div>
      <div className="grid grid-cols-12 relative">
        <div className="col-span-2 2xl:col-span-2">
          <CustomButton
            title="Your Body’s Story in a Breath"
            containerStyles="absolute rotate-[90deg] -top-10 md:-top-5 left-7 sm:left-10 origin-left bg-primary-700 font-medium text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] xl:text-[1.75rem] xl:leading-[2.5rem] text-white rounded-t-[1.875rem] py-5 px-2 md:py-7 md:px-12 max-w-[30rem]"
          />
        </div>
        <div className="text-right col-span-6 2xl:col-span-5">
          <Text175rem>
            <div className="hidden sm:block p-2">
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
          </Text175rem>
        </div>
        <div className="col-span-4 2xl:col-span-5 relative">
          <Image
            src="/testing.png"
            fill
            objectFit="contain"
            alt="logo"
            priority={true}
            className="image-float"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 relative py-24">
        <div className="col-span-4 2xl:col-span-5 relative">
          <Image
            src="/testing1.png"
            fill
            objectFit="contain"
            alt="logo"
            priority={true}
            className="image-float"
          />
        </div>

        <div className="col-span-6 2xl:col-span-5 ">
          <Text175rem>
            <div className="hidden sm:block p-2">
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
          </Text175rem>
        </div>
        <div className="col-span-2 2xl:col-span-2 ">
          <CustomButton
            title="The Respiratory Marvel"
            containerStyles="absolute rotate-[-90deg] top-10 right-6  md:top-20  sm:right-10 origin-right bg-primary-700 font-medium text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem] text-white rounded-t-[1.875rem] py-7 px-12 max-w-[30rem]"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 relative">
        <div className="col-span-2 2xl:col-span-2">
          <CustomButton
            title="Rapid transfer of VOCs from blood to breath"
            containerStyles="absolute rotate-[90deg] -top-10 md:-top-5 left-7 sm:left-10 origin-left bg-primary-700 font-medium text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] xl:text-[1.75rem] xl:leading-[2.5rem] text-white rounded-t-[1.875rem] py-5 px-2 md:py-7 md:px-6 max-w-[14rem] sm:max-w-[20rem] xl:max-w-[30rem]"
          />
        </div>
        <div className="text-right col-span-6 2xl:col-span-5">
          <Text175rem>
            <div className="hidden sm:block p-2">
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
              surrounded by a dense network of capillaries, small -
            </p>
            <p className="sm:hidden font-medium text-[1rem] cursor-pointer py-1">
              Read more
            </p>
          </Text175rem>
        </div>
        <div className="col-span-4 2xl:col-span-5 relative">
          <Image
            src="/testing2.png"
            fill
            objectFit="contain"
            alt="logo"
            priority={true}
            className="image-float"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 relative py-24">
        <div className="col-span-4 2xl:col-span-5 relative">
          <Image
            src="/testing3.png"
            fill
            objectFit="contain"
            alt="logo"
            priority={true}
            className="image-float"
          />
        </div>

        <div className="col-span-6 2xl:col-span-5 ">
          <Text175rem>
            <div className="hidden sm:block p-2">
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
          </Text175rem>
        </div>
        <div className="col-span-2 2xl:col-span-2 ">
          <CustomButton
            title="Alveoli"
            containerStyles="absolute rotate-[-90deg] top-10 right-6  md:top-20  sm:right-10 origin-right bg-primary-700 font-medium text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem] text-white rounded-t-[1.875rem] py-6 px-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Testing;

import FadeIn from "@/app/components/FadeIn";
import { Text2 } from "../../components/Text";

export default function Profile() {
  return (
    <FadeIn className="px-[2%]">
      <div className="rounded-[1.25rem] bg-grey100 my-20 px-1 py-14 xs:px-10 max-w-[90rem] mx-auto">
        <Text2>
          In the world of health monitoring, current tools have long leaned on
          blood tests. These tests, however, come with a set of challenges -they
          take time, can be painful, require special facilities or training, and
          sometimes cause inflammation and anxiety. To make matters worse, they
          contribute to a considerable amount of single-use waste that poses
          recycling challenges. Take, for example, the routine of individuals
          with diabetes who find themselves frequently puncturing their fingers
          throughout the day.
        </Text2>
      </div>
    </FadeIn>
  );
}

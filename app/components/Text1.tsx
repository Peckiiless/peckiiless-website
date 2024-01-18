import { ReactNode } from "react";

type Props = {
  children: ReactNode
}
const Text1 = ({children} : Props) => {
  return (
    <p
      className="text-[.9375rem] leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem]"
    >
      {children}
    </p>
  );
};

export default Text1;

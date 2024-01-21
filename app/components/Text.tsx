import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};


export const Title1 = ({ title }: { title: string }) => {
  return (
    <p className="text-center font-medium leading-[1.875rem] sm:leading-[2.75rem] lg:leading-[3.875rem] sm:text-[2rem] lg:text-[2.875rem] text-[1.25rem] text-primary-700">
      {title}
    </p>
  );
};

export const Title2 = ({ title }: { title: string }) => {
  return (
    <p className="font-medium sm:text-[1.625rem] xl:text-[1.75rem] text-[1rem] leading-[1.5rem] sm:leading-[2.5rem] lg:leading-[2.625rem]">
      {title}
    </p>
  );
};

export const Text1 = ({children} : Props) => {
  return (
    <p
      className="text-[.9375rem] leading-[1.3125rem] md:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem]"
    >
      {children}
    </p>
  );
};

export const Text2 = ({ children }: Props) => {
  return (
    <p className="sm:text-[1.625rem] xl:text-[1.75rem] text-[1rem] leading-[1.5rem] sm:leading-[2.5rem] lg:leading-[2.625rem]">
      {children}
    </p>
  );
};
export const Text3 = ({ children }: Props) => {
  return (
    <p className="sm:text-[1.25rem] xl:text-[1.75rem] text-[.9375rem] leading-[1.375rem] sm:leading-[1.875rem]  xl:leading-[2.6875rem] ">
      {children}
    </p>
  );
};

export const Text2rem = ({ children }: Props) => {
  return (
    <p className="xl:text-[2rem] xl:leading-[2.625rem] sm:text-[1.625rem] sm:leading-[2.5rem] text-[1.25rem] leading-[1.625rem]    ">
      {children}
    </p>
  );
};
export const Text1875rem = ({ children }: Props) => {
  return (
    <p className="xl:text-[1.875rem] xl:leading-[2.625rem] sm:text-[1.25rem] sm:leading-[2rem] text-[1rem] leading-[1.375rem]    ">
      {children}
    </p>
  );
};

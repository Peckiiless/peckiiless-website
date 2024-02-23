import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Title1 = ({ title }: { title: string }) => {
  return (
    <div className="text-center font-medium leading-[1.875rem] sm:leading-[2.75rem] lg:leading-[3.875rem] sm:text-[2rem] lg:text-[2.875rem] text-[1.25rem] text-primary-700">
      {title}
    </div>
  );
};

export const Title2 = ({ children }: Props) => {
  return (
    <div className="font-medium sm:text-[1.625rem] xl:text-[1.75rem] text-[1rem] leading-[1.5rem] sm:leading-[2.5rem] lg:leading-[2.625rem]">
      {children}
    </div>
  );
};
export const Title3625 = ({ children }: Props) => {
  return (
    <div className=" xl:text-[3.625rem] xl:leading-[3rem] text-[1.25rem] leading-[1.125rem] sm:text-[2.625rem] sm:leading-[3rem] font-bold text-primary-800">
      {children}
    </div>
  );
};

export const Title2rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[2rem] xl:leading-[2.75rem] md:text-[1.5rem] md:leading-[2rem] xs:text-[1rem] xs:leading-[1.5rem] text-[.835rem] leading-[1rem] font-medium text-primary-700">
      {children}
    </div>
  );
};
export const Title2625rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[2.625rem] xl:leading-[3.5rem]  md:text-[2rem] md:leading-[2.75rem]  text-[1.25rem] leading-[1.5rem] text-primary-700 text-center font-medium">
      {children}
    </div>
  );
};
export const Title2875rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[2.875rem] xl:leading-[3.375rem] md:text-[2rem] md:leading-[2.5rem] text-[1.25rem] leading-[1.5rem] font-medium text-primary-700">
      {children}
    </div>
  );
};

export const Text1 = ({ children }: Props) => {
  return (
    <div className="text-[.9375rem] leading-[1.3125rem] md:text-[1.25rem] sm:leading-[1.75rem] lg:text-[1.75rem] lg:leading-[2.5rem]">
      {children}
    </div>
  );
};

export const Text2 = ({ children }: Props) => {
  return (
    <div className="md:text-[1.625rem] xl:text-[1.75rem] text-[1rem] leading-[1.5rem] md:leading-[2.5rem] xl:leading-[2.625rem]">
      {children}
    </div>
  );
};
export const Text3 = ({ children }: Props) => {
  return (
    <div className="md:text-[1.25rem] xl:text-[1.75rem] text-[.9375rem] leading-[1.375rem] md:leading-[1.875rem]  xl:leading-[2.6875rem] ">
      {children}
    </div>
  );
};

export const Text2rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[2rem] xl:leading-[2.625rem] sm:text-[1.375rem] sm:leading-[2rem] text-[.75rem] leading-[.9375rem]    ">
      {children}
    </div>
  );
};
export const Text1875rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[1.875rem] xl:leading-[2.625rem] md:text-[1.25rem] md:leading-[2rem] text-[1rem] leading-[1.375rem]    ">
      {children}
    </div>
  );
};
export const Text175rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[1.75rem] xl:leading-[2.5rem] md:text-[1.25rem] md:leading-[1.75rem] text-[.9375rem] leading-[1.25rem]">
      {children}
    </div>
  );
};
export const Text1625rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[1.625rem] xl:leading-[2.5rem] md:text-[1.25rem] md:leading-[1.75rem] text-[.75rem] leading-[.875rem] font-medium">
      {children}
    </div>
  );
};
export const Text125rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[1.25rem] xl:leading-[1.875rem] md:text-[1.125rem] md:leading-[1.375rem] text-[.75rem] leading-[.875rem]">
      {children}
    </div>
  );
};
export const Text1125rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[1.125rem] xl:leading-[1.25rem] md:text-[1rem] md:leading-[1.25rem] text-[.75rem] leading-[.875rem] font-light">
      {children}
    </div>
  );
};

export const Text15rem = ({ children }: Props) => {
  return (
    <div className="xl:text-[1.5rem] xl:leading-[2.5rem] md:text-[.875rem] md:leading-[1.75rem] text-[.75rem] leading-[.8125rem]">
      {children}
    </div>
  );
};

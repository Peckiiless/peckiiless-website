export const Title1 = ({ title }: { title: string }) => {
  return (
    <p className="text-center font-medium leading-[1.875rem] sm:leading-[2.75rem] lg:leading-[2.975] sm:text-[2rem] lg:text-[2.875rem] text-[1.25rem] text-primary-700">
      {title}
    </p>
  );
};

export const Title2 = ({ title }: { title: string }) => {
  return (
    <p className="text-center font-medium leading-[1.125rem] sm:leading-[2.5rem] text-[.9375rem] sm:text-[1.625rem] lg:text-[2.375rem]  text-white">
      {title}
    </p>
  );
};




import React from "react";

const Title = ({ title }: { title: string }) => {
  return <p className="font-semibold text-[3.5rem] text-primary-800 leading-[4.25rem] mb-10">{title}</p>;
};

export default Title;

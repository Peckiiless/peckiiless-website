import React from "react";

const Title = ({ title }: { title: string }) => {
  return <p className="font-semibold text-[3.5rem] text-primary-800 px-14 py-20 leading-[4.25rem]">{title}</p>;
};

export default Title;

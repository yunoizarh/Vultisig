import React from "react";

const ColoredText = ({ children }) => {
  return (
    <>
      <span className="bg-gradient-to-r from-[#1159b9] to-[#35cdbc] text-transparent bg-clip-text mr-1">
        {children}
      </span>
    </>
  );
};

export default ColoredText;

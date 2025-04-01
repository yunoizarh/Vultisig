import React from "react";

const CtaButton = ({ children }) => {
  return (
    <>
      <a
        href="#"
        className="hidden md:inline-block w-auto bg-gradient-to-r from-[#1159b9] to-[#35cdbc] text-white font-semibold 
  px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-500 hover:bg-gradient-to-t"
      >
        {children}
      </a>
    </>
  );
};

export default CtaButton;

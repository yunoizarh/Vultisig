import React from "react";
import ColoredText from "./ColoredText";
import CtaButton from "./CtaButton";
const AirDrop = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        {/* Image Section */}
        <div className="w-full md:w-6/12 flex justify-center">
          <img
            src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fairdrop.jpg&w=1920&q=75"
            alt="Security"
            className="max-w-md md:max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-6/12 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-wider">
            VULTISIG <ColoredText>AIRDROP</ColoredText>
            IS LIVE{" "}
          </h1>
          <p className="text-lg md:text-2xl mb-10 tracking-wider">
            JOIN NOW, <ColoredText>SECURE YOUR SHARE</ColoredText> OF $VULT AND
            STORE YOUR ASSETS SAFELY.
          </p>
          {/* <a
            href="#"
            className="block bg-gradient-to-r from-[#1159b9] to-[#35cdbc] text-white px-6 py-3 rounded-lg hover:opacity-90 transition max-w-60 mx-auto md:mx-0 text-center"
          >
            
          </a> */}
          <CtaButton>Join today</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default AirDrop;

import React from "react";
import CtaButton from "./CtaButton";

const BottomCTA = () => {
  return (
    <section className="my-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
      {/* Left Section - Branding & CTA */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center justify-center md:justify-start gap-2">
          {/* Logo */}
          <div className=" text-xl font-bold flex items-center">
            <span className="text-blue-400">
              <svg viewBox="0 0 24 24" className="size-10 md:size-14">
                <path
                  d="M2.06417 19.7173L0.5 18.1532L0.61805 18.0745L9.0193 12.4277L11.8328 14.0608L11.6558 14.1591L2.06417 19.7173Z"
                  fill="url(#paint0_linear_16214_813)"
                ></path>
                <path
                  d="M2.72341 21.9997L2.15283 19.8649L2.23153 19.8157L11.9313 14.228V17.4842L11.8723 17.5138L2.72341 21.9997Z"
                  fill="url(#paint1_linear_16214_813)"
                ></path>
                <path
                  d="M21.2768 21.9997L21.149 21.9406L12.0591 17.4842V14.228L21.8474 19.8551L21.2768 21.9898V21.9997Z"
                  fill="url(#paint2_linear_16214_813)"
                ></path>
                <path
                  d="M21.9357 19.7173L21.857 19.6682L12.167 14.0608L14.9805 12.4277L23.4998 18.1532L21.9357 19.7173Z"
                  fill="url(#paint3_linear_16214_813)"
                ></path>
                <path
                  d="M12.0688 13.8542V2.57058L14.1938 2L14.8922 12.2409L12.0688 13.8542Z"
                  fill="url(#paint4_linear_16214_813)"
                ></path>
                <path
                  d="M11.8722 13.8542L9.04883 12.2409V12.1622L9.74729 2L11.882 2.57058V13.8542H11.8722Z"
                  fill="url(#paint5_linear_16214_813)"
                ></path>
              </svg>
            </span>
            <span className="text-3xl md:text-4xl font-bold">Vultisig</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 tracking-wider">
          SECURE YOUR DIGITAL ASSETS TODAY!
        </h1>

        {/* Download Button */}
        <CtaButton>Download</CtaButton>
      </div>

      {/* Right Section - Discord Invite */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize tracking-wider md:mt-16">
          join the discord to request new features
        </h1>

        {/* Join Discord Button */}
        <CtaButton>Join</CtaButton>
      </div>
    </section>
  );
};

export default BottomCTA;

import React from "react";
import { motion } from "framer-motion";
import ColoredText from "./ColoredText";

const steps = [
  {
    step: "Step-01",
    title: "Create Your Wallet",
    description: "No seed phrases, just seamless and secure onboarding",
    number: "1",
  },
  {
    step: "Step-02",
    title: "Set Permissions & Security Layers",
    description: "Customize who can access and approve transactions.",
    number: "2",
  },
  {
    step: "Step-03",
    title: "Enjoy Worry-Free Asset Management",
    description: "Your funds stay secure and accessible, always.",
    number: "3",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        How <ColoredText>Vultisig</ColoredText> Works
      </h2>

      {/* Main Container - Flex for Side by Side Layout */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        {/* Animated Image */}
        <motion.div
          className="w-full md:w-5/12 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fsecurity.png&w=1080&q=75"
            alt="Security"
            className="max-w-full h-auto rounded-lg shadow-lg drop-shadow-[0_5px_60px_rgba(0,255,0,0.3)]"
          />
        </motion.div>

        {/* Animated Steps */}
        <div className="w-full md:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-[#081c15] p-6 rounded-xl shadow-lg border border-gray-800 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Large Faint Number in Background */}
              <span className="absolute top-4 right-6 text-[120px] font-bold text-green-500 opacity-20">
                {step.number}
              </span>

              {/* Step Label */}
              <p className="text-green-400 font-semibold">{step.step}</p>

              {/* Title */}
              <h3 className="text-xl font-bold mt-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mt-2 text-sm">{step.description}</p>

              {/* Sci-Fi Line Graphics */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg
                  className="absolute top-4 left-4 w-44 opacity-30"
                  viewBox="0 0 100 50"
                >
                  <path
                    d="M0,10 L50,10 L75,25 L100,25"
                    stroke="green"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

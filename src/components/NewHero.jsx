import React from "react";
import VultVideo from "./VultVideo";
import ColoredText from "./ColoredText";
import CtaButton from "./CtaButton";
import { motion } from "framer-motion";

const NewHero = () => {
  return (
    <>
      <div className="w-full overflow-hidden whitespace-nowrap mt-10">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {Array(10)
            .fill(" Vultisig Airdrop Is Live , JOIN NOW!")
            .map((text, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-[#1159b9] to-[#35cdbc] text-transparent bg-clip-text text-lg uppercase font-semibold"
              >
                {text}
              </span>
            ))}
        </motion.div>
      </div>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 mt-6">
        {/* Text Content */}
        <motion.div
          className="max-w-xl md:w-2/5 text-center lg:text-left mt-6 lg:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            <ColoredText>Vultisig :</ColoredText> The Future of Secure Crypto
            Custody
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Your assets, your control. Vultisig eliminates the need for seed
            phrases while offering cutting-edge multi-signature security and
            multi-chain compatibility.
          </p>
          <motion.div
            className="mt-6 flex justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CtaButton>Download App</CtaButton>
          </motion.div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="w-full md:w-3/5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <VultVideo />
        </motion.div>
      </section>
    </>
  );
};

export default NewHero;

import { motion } from "framer-motion";
import ColoredText from "./ColoredText";
import CtaButton from "./CtaButton";

const HeroSecond = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-visible px-4 sm:px-6">
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mt-10 md:mt-0">
        {/* Animated Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <ColoredText>
            Regain Control With The Seedless, Multi-Chain Crypto Vault
          </ColoredText>
        </motion.h1>

        {/* Animated Paragraphs */}
        <motion.p
          className="text-gray-400 mt-4 text-base sm:text-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          It's the first seedless, institutional-grade, multi-chain vault for
          everyone on the market.
        </motion.p>
        <motion.p
          className="text-gray-400 mt-4 text-sm sm:text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Your Crypto, Your Control. Get Started Today!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center gap-4 py-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <CtaButton>Get App Now</CtaButton>
        </motion.div>
      </div>

      {/* Floating Phone Mockups */}
      <motion.img
        src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fwallets-power.png&w=1920&q=75"
        alt="Phone Mockup"
        className="absolute left-4 sm:left-10 md:left-0 md:top-10 -top-10 w-40 sm:w-52 md:w-72"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      />
      <motion.img
        src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fintroduction-image.png&w=3840&q=75"
        alt="Phone Mockup"
        className="absolute right-4 sm:right-10 md:right-0 bottom-1 md:bottom-[10%] w-40 sm:w-52 md:w-80"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      />
    </section>
  );
};

export default HeroSecond;

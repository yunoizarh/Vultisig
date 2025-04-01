import { motion } from "framer-motion";
import ColoredText from "./ColoredText";

export default function WhyUsersLoveVultisig() {
  const features = [
    {
      title: "No Single Point of Failure",
      description: "Your private keys are never stored in one place.",
    },
    {
      title: "Cross-Chain Compatibility",
      description: "Securely manage assets on multiple blockchains.",
    },
    {
      title: "Battle-Tested & Trusted",
      description:
        "Used by THORChain Treasury, DeFi Suisse, and top crypto leaders.",
    },
    {
      title: "Simple, Yet Powerful",
      description: "Security that’s easy to use, without sacrificing control.",
    },
  ];

  return (
    <section className="py-16 px-4">
      {/* Animated Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        WHY USERS <ColoredText>LOVE</ColoredText> VULTISIG
      </motion.h2>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        {/* Features List */}
        <div className="flex-1 space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border-l-4 border-teal-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fwhat-is-wrong.png&w=1920&q=75"
            alt="What is wrong with wallets"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import ColoredText from "./ColoredText";

export default function VultisigIsForEveryone() {
  const features = [
    {
      title: "CRYPTO NATIVES",
      description:
        "Swap, borrow, save, or spend in one wallet with institutional-grade security. You never need a second wallet again.",
      icon: "https://vultisig.com/images/home/icon-crypto-natives.svg",
    },
    {
      title: "WHALES",
      description:
        "Do you hold significant funds in crypto? Then you MUST consider upgrading to a Vultisig secure vault. Your funds are at risk on all other wallets. Download it now.",
      icon: "https://vultisig.com/images/home/icon-whales.svg",
    },
    {
      title: "FUNDS",
      description:
        "Vultisig is the open-source audited alternative to your current “custodian”. You know it's time to switch to self-custody. Remote co-signing means you can access funds anywhere in the world.",
      icon: "https://vultisig.com/images/home/icon-funds.svg",
    },
    {
      title: "TREASURIES",
      description:
        "Vultisig is natively compatible with all chains. Together with transaction policies, designate your leads the ability to pay staff with limits, whitelists, and more.",
      icon: "https://vultisig.com/images/home/icon-treasuries.svg",
    },
  ];

  return (
    <div className="bg-[#0a0f1a] py-16 px-6 md:px-16 lg:px-24">
      {/* Title Animation */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          VULTISIG is for <ColoredText>Everyone</ColoredText>
        </h2>
      </motion.div>

      {/* Layout - Features Grid */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex items-start gap-4 ${
                index % 2 === 1 ? "md:mt-20" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Icon Animation */}
              <motion.div
                className="size-28"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <img src={feature.icon} alt={feature.title} />
              </motion.div>

              {/* Text Content */}
              <div className="border-l-2 border-teal-400 pl-4">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

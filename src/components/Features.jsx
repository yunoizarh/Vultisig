import { motion } from "framer-motion";
import image1 from "../assets/solution1.webp";
import image2 from "../assets/solution2.webp";
import image3 from "../assets/solution3.webp";
import image4 from "../assets/solution4.webp";
import ColoredText from "./ColoredText";

const features = [
  {
    title: "True Seedless Security",
    description:
      "Forget writing down and storing seed phrases. Vultisig uses MPC to create a secure, non-custodial wallet just for you",
    image: image1,
  },
  {
    title: "Instant Access, Zero Hassle",
    description:
      "No complex onboarding. No recovery phrases to lose. Just secure, seamless crypto management",
    image: image3,
  },
  {
    title: "Smart Recovery & Secure Access",

    description:
      "Lost a device? No worries. Vultisig ensures secure access recovery without compromising your assets",
    image: image2,
  },
  {
    title: "Multi-Chain, Multi-Sig Support",
    description:
      "One wallet, endless possibilities! Manage crypto across Ethereum, Bitcoin, and more—plus, with multi-signature protection, your squad has to approve transactions, keeping things extra secure",
    image: image4,
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Key Features That Set <ColoredText>Vultisig</ColoredText> Apart
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`relative bg-white/10 backdrop-blur-lg border border-white/20  bg-cover bg-center p-4 rounded-xl shadow-md flex flex-col items-center text-center 
    ${index === 0 ? "md:row-span-2 md:h-auto" : ""} 
    ${index === 3 ? "md:col-span-2 md:w-full" : "max-w-xs mx-auto"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-white relative z-10">
              {feature.title}
            </h3>
            {feature.description && (
              <p className="text-gray-400 text-xs font-semibold mt-2 relative z-10">
                {feature.description}
              </p>
            )}
            <img
              src={feature.image}
              alt={feature.title}
              className={`h-28 w-40 mt-4 opacity-80 relative z-10  ${
                index === 0 ? "h-44 w-80 md:mt-20" : ""
              } drop-shadow-[0_15px_30px_rgba(0,255,0,0.5)]`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

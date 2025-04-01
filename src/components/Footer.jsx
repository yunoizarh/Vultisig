import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, MessageCircle, Send } from "lucide-react"; // Import icons

const Footer = () => {
  return (
    <motion.footer
      className="border-t-2 border-[#1a6fa7] py-8 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Left Section - Logo & Socials */}
        <motion.div
          className="text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex justify-center sm:justify-start items-center gap-2 text-2xl font-bold">
            <div className="flex items-center">
              <div className="text-white text-xl font-bold flex items-center">
                <span className="text-blue-400">
                  <svg viewBox="0 0 24 24" className="size-12">
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
                Vultisig
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center sm:justify-start gap-4 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {[Github, Twitter, MessageCircle, Send].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="size-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer Links */}
        {[
          {
            title: "Vultisig",
            links: ["How It Works", "Backed by", "Docs", "$VULT", "Extension"],
          },
          {
            title: "Support",
            links: ["Support", "FAQs", "Audits", "Contact Us"],
          },
          { title: "Legal", links: ["Terms of Service", "Privacy Policy"] },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-3">{section.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {section.links.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <motion.div
        className="text-center text-gray-400 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p>© Copyright 2025 - Vultisig.</p>
        <p className="text-sm">v1.1.0</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

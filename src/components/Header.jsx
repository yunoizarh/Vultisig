import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0f1d37] shadow-md mx-[2%] border border-gray-600 rounded-lg"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <div className="text-xl font-bold flex items-center">
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
                <defs>
                  <linearGradient
                    id="paint0_linear_16214_813"
                    x1="6.16641"
                    y1="2.15736"
                    x2="6.16641"
                    y2="21.8226"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#33E6BF"></stop>
                    <stop offset="1" stop-color="#0439C7"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_16214_813"
                    x1="7.04208"
                    y1="2.15738"
                    x2="7.04208"
                    y2="21.8226"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#33E6BF"></stop>
                    <stop offset="1" stop-color="#0439C7"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_16214_813"
                    x1="16.9582"
                    y1="2.14755"
                    x2="16.9582"
                    y2="21.8226"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#33E6BF"></stop>
                    <stop offset="1" stop-color="#0439C7"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_16214_813"
                    x1="17.8334"
                    y1="2.15736"
                    x2="17.8334"
                    y2="21.8226"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#33E6BF"></stop>
                    <stop offset="1" stop-color="#0439C7"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_16214_813"
                    x1="13.4756"
                    y1="2.1574"
                    x2="13.4756"
                    y2="21.8226"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#33E6BF"></stop>
                    <stop offset="1" stop-color="#0439C7"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_16214_813"
                    x1="10.4753"
                    y1="2.1574"
                    x2="10.4753"
                    y2="21.8226"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#33E6BF"></stop>
                    <stop offset="1" stop-color="#0439C7"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl">Vultisig</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-blue-400 transition"
            >
              Product
              <ChevronDown
                className={`ml-1 w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-md"
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Vultisig Mobile App
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Vultisig MacOS
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Vultisig Windows
                </a>
              </motion.div>
            )}
          </div>
          <a href="#" className="hover:text-blue-400 transition">
            How it Works
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Backed by
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Docs
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            $VULT
          </a>
        </nav>

        {/* CTA Button */}
        <CtaButton>Download App</CtaButton>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden bg-[#0D1B2A] text-white overflow-hidden flex flex-col items-center py-1"
      >
        <a href="#" className="block py-2 hover:text-blue-400">
          Product
        </a>
        <a href="#" className="block py-2 hover:text-blue-400">
          How it Works
        </a>
        <a href="#" className="block py-2 hover:text-blue-400">
          Backed by
        </a>
        <a href="#" className="block py-2 hover:text-blue-400">
          Docs
        </a>
        <a href="#" className="block py-2 hover:text-blue-400">
          $VULT
        </a>
        <a
          href="#"
          className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Download App
        </a>
      </motion.div>
    </motion.header>
  );
};

export default Header;

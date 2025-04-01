import thorChain from "../assets/thorchain.432fa64a.svg";
import vultisig from "../assets/vultisig.69f0f158.svg";
import wewe from "../assets/wewe.c7c98aab.svg";
import DeFiSuisse from "../assets/DeFi-suisse-treasury.b044eb76.svg";
import zkfinance from "../assets/zkfinance.498011c7.svg";
import ruji from "../assets/ruji.e53f1530.svg";

export default function Trustees() {
  const logos = [
    { src: thorChain, title: "THORChain Treasury" },
    { src: vultisig, title: "Vultisig Treasury" },
    { src: wewe, title: "WEWE Treasury" },
    { src: DeFiSuisse, title: "DeFi Suisse Treasury" },
    { src: zkfinance, title: "ZKFinance Treasury" },
    { src: ruji, title: "RUJI Treasury" },
  ];

  return (
    <div className=" border border-gray-500 rounded-xl py-8 px-6 md:px-16 lg:px-24 mt-20 sm:mt-0">
      <h1 className="text-center md:text-3xl font-semibold capitalize mb-10 text-gray-400">
        vultisig vaults are battle-tested and trusted by thousands of users ,
        with numbers growing daily
      </h1>
      <div className="max-w-5xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {logos.slice(0, 4).map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={logo.src}
                alt={logo.title}
                className="h-8 md:h-16 object-contain mb-2"
              />
              <h2 className="text-gray-400 font-semibold">{logo.title}</h2>
            </div>
          ))}
        </div>

        {/* Bottom Row (Staggered) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center mt-6 md:mt-12">
          {logos.slice(3).map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={logo.src}
                alt={logo.title}
                className="h-8 md:h-16 object-contain mb-2"
              />
              <h2 className="text-gray-300 font-semibold">{logo.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

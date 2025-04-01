import { Apple, Play } from "lucide-react";

const StoreButtons = () => {
  return (
    <div className="flex justify-center gap-4 py-6">
      {/* Apple Store Button */}
      <a
        href="#"
        className="flex items-center px-6 py-3 border border-gray-500 rounded-full text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 shadow-lg transition"
      >
        <Apple className="w-6 h-6 mr-2" />
        <div className="text-left">
          <p className="text-xs text-gray-300">Get App</p>
          <p className="font-semibold text-xs">Apple Store</p>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="#"
        className="flex items-center px-6 py-2 border border-gray-500 rounded-full text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 shadow-lg transition"
      >
        <Play className="w-6 h-6 mr-2" />
        <div className="text-left">
          <p className="text-xs text-gray-300">Get App</p>
          <p className="font-semibold text-xs">Google Play</p>
        </div>
      </a>
    </div>
  );
};

export default StoreButtons;

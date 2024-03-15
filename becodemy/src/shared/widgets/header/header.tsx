import Link from "next/link";
import Navbar from "./navbar";
import { ICONS } from "@/utils/icons";

const Header = () => {
  return (
    <div className="w-full h-[80px] flex items-center border-b border-b-[#ffffff31]">
      <div className="w-[90%] m-auto flex items-center justify-between">
        {/* left side */}
        <div>
          <Link href={"/"} className="text-2xl font-[600]">
            Becodemy
          </Link>
        </div>

        {/* middle navbar */}
        <Navbar />

        {/* right side */}
        <div className="flex items-center">
          <span className="text-3xl mr-4 cursor-pointer">{ICONS.message}</span>
            <span className="text-3xl cursor-pointer mr-4">
              {ICONS.notification}
            </span>
          <span className="text-3xl cursor-pointer">{ICONS.profile}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

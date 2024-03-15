"use client";

import { navItems } from "@/configs/constants";
import useRouteChange from "@/shared/hooks/useRouteChange";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const { active, setActive } = useRouteChange();
  const pathName = usePathname();

  useEffect(() => {
    setActive(pathName);
  }, [pathName, active, setActive]);

  return (
    <div className="md:block hidden">
      {navItems.map((i: NavItems, index: number) => (
        <Link
          href={i.url}
          key={index}
          className={`px-4 text-xl ${
            active === i.url ? "text-[#19C964]" : "text-white"
          }`}
          onClick={() => setActive(i.url)}
        >
          {i.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;

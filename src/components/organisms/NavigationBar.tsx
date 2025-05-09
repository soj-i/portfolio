import React from "react";
import { useRouter } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  ariaLabel: string;
}

interface NavigationBarProps {
  items: NavItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ items }) => {
  const router = useRouter();

  return (
    <nav
      aria-label="Navigation bar"
      className="absolute w-1/3 z-10 flex flex-col shrink max-w-xs md:max-w-sm lg:max-w-md space-y-4 text-center right-0 mr-36"
      style={{
        top: "calc(10vh - 8%)",
        marginRight: "calc(16vw - 50px)",
      }}
    >
      {items.map((item, index) => (
        <button
          key={index}
          aria-label={item.ariaLabel}
          className="w-full py-5 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
          style={{ boxShadow: "4px 4px 0px #ff8800" }}
          onClick={() => router.push(item.href)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;
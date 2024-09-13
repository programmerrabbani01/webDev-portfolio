import { navLinks } from "@/constant/constant.ts";
import Link from "next/link.js";
import { CgClose } from "react-icons/cg";

// defiend props
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <>
      <div>
        {/* overlay */}
        <div
          className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        ></div>
        {/* navLinks */}
        <div
          className={`text-white ${navOpen} transform transition-all duration-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}
        >
          {navLinks.map((navLink) => {
            return (
              <Link href={navLink.url} key={navLink.id}>
                <p className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                  {navLink.lable}
                </p>
              </Link>
            );
          })}
          {/* close button */}
          <CgClose
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

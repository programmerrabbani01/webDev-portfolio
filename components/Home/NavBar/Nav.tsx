import Image from "next/image.js";
import logo from "@/public/images/logo.png";

export default function Nav() {
  return (
    <>
      <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
        <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
          {/* logo */}
          <Image
            src={logo}
            alt="Logo"
            width={170}
            height={170}
            className="ml-[-1.5rem sm:ml-0]"
          />
        </div>
      </div>
    </>
  );
}

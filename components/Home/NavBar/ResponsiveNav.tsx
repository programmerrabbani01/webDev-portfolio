"use client";

import { useState } from "react";
import MobileNav from "./MobileNav.tsx";
import Nav from "./Nav.tsx";

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <>
      <Nav openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </>
  );
}

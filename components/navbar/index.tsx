// NavBar

import { useState } from "react";

import { motion } from "framer-motion";

import NavBarLinks from "./components/NavBarLinks";
import NavBarSocialIcons from "./components/NavBarSocialIcons";
import NavBarLangDropDown from "./components/NavBarLangDropDown";
import NavBarHamBurger from "./components/NavBarHamBurger";
import NavBarLogo from "./components/NavBarLogo";

// bg colors for navbar
const variants = {
  closed: { padding: "0px 0px", backgroundColor: "#004a76" },
  open: { padding: "10px 0px", backgroundColor: "#cee5ff" },
};

function NavBar({ scrollTarget }: { scrollTarget: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      transition={{
        duration: 1.2,
      }}
      initial="open"
      variants={variants}
      animate={scrollTarget === "hero" ? "open" : "closed"}
      className="z-30 w-screen px-4 fixed flex flex-col shadow items-center justify-between"
    >
      <nav className="flex flex-row justify-between items-center w-full px-2">
        <NavBarLogo scrollTarget={scrollTarget} />
        <NavBarSocialIcons scrollTarget={scrollTarget} />
        <span className="flex md:flex-row-reverse ">
          <NavBarLangDropDown scrollTarget={scrollTarget} />
          <ul className="text-lg hidden md:flex md:flex-row gap-8 items-center">
            <NavBarLinks scrollTarget={scrollTarget} />
          </ul>
        </span>
        <NavBarHamBurger
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollTarget={scrollTarget}
        />
      </nav>
      <ul
        className={`mt-0 overflow-hidden md:hidden ease-in-out flex flex-col gap-6 items-center transition-all duration-500   	   
				${isOpen ? "h-64  py-8" : "h-0 py-0"}`}
      >
        <NavBarLinks scrollTarget={scrollTarget} toggleNav={toggleNav} />
      </ul>
    </motion.header>
  );
}

export default NavBar;

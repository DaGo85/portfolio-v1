import { NavBarBurger } from "../../../types/interfaces";

function NavBarHamBurger({ isOpen, setIsOpen, scrollTarget }: NavBarBurger) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full ${
    scrollTarget === "hero" ? "bg-navBeforeOn" : "bg-navAfterOn"
  } transition ease transform duration-300`;

  return (
    <button onClick={() => setIsOpen!(!isOpen)}>
      <div
        className={`md:hidden flex flex-col h-12 w-12 border-2 ${
          scrollTarget === "hero" ? "border-navBeforeOn" : "border-navAfterOn"
        } rounded justify-center items-center group`}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </div>
    </button>
  );
}

export default NavBarHamBurger;

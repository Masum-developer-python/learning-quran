import ThemeSelector from "./ThemeSelector";
import ColorSelector from "./ColorSelector";
import Submenu from "./menuSubmenu";
import { arabicDiacritics } from "../data";
import { Children } from "react";
import { UserNavigation } from "./navigations";
import { Menu } from "lucide-react";

function Nav({
  selectedColor,
  selectedTheme,
  setSelectedTheme,
  setSelectedColor,
  alphabetColorCombinations,
}) {
  console.log("Nav.jsx");
  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button
        className={`md:hidden ${selectedColor.backgroundColor} ${selectedColor.textColor} p-2 h-[50px] 
        z-10 rounded-full fixed`}
        onClick={() => {
          const menu = document.getElementById("vertical-menu");
          menu.classList.toggle("hidden");
        }}
      >
        <Menu />
      </button>
      <div
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-32  p-4 h-screen 
        md:block hidden mt-16`}
      ></div>
      {/* Navbar */}
      <nav
        id="vertical-menu"
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-32  p-2 
        fixed h-[calc(100vh-30px)] lg:h-screen overflow-y-scroll hover:w-52 md:block mt-16 md:mt-0`}
      >
        <div className="text-lg font-bold mb-6">আরবী শেখা</div>
        <Submenu selectedTheme={selectedTheme} selectedColor={selectedColor} />

        <hr className="w-24 p-2"/>
        <br />
        <UserNavigation />
        <br />
        <hr className="w-24 p-2"/>
        <br />
        <div className="mb-4">
          <ThemeSelector
            selectedTheme={selectedTheme}
            setSelectedTheme={(newTheme) => {
              setSelectedTheme(newTheme);
              setSelectedColor(newTheme.combinations[2]); // Reset color when theme changes
            }}
            alphabetColorCombinations={alphabetColorCombinations}
          />
          <ColorSelector
            selectedTheme={selectedTheme}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
      </nav>
    </>
  );
}
export default Nav;

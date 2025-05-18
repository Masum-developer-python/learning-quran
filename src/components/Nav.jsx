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
  Children,
}) {
  console.log("Nav.jsx");
  //console.log("Nav ");
  //console.log(selectedColor);
  //   Object.keys(arabicDiacritics).map((category) =>{
  //     console.log(category);
  //     arabicDiacritics[category].diacritics.map((route, index) => {
  //       console.log(route);
  //   })
  // })
  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button
        className={`md:hidden ${selectedColor.backgroundColor} ${selectedColor.textColor} p-2 h-[50px] z-10 rounded-full fixed`}
        onClick={() => {
          const menu = document.getElementById("vertical-menu");
          menu.classList.toggle("hidden");
        }}
      >
        <Menu />
      </button>
      <div
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-32  p-4 h-screen md:block hidden mt-16`}
      ></div>
      {/* Navbar */}
      <nav
        id="vertical-menu"
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-32  p-2 hidden fixed h-screen overflow-hidden overflow-y-scroll hover:w-96 md:block mt-16 md:mt-0`}
      >
      {/* <nav
        id="vertical-menu"
        className={`
    ${selectedColor.backgroundColor} ${selectedColor.textColor}
    hidden md:flex fixed md:flex-col w-full md:w-32 h-16 md:h-screen
    overflow-x-auto md:overflow-hidden md:overflow-y-scroll
    mt-16 md:mt-0 p-2
  `} */}
      
        <div className="text-lg font-bold mb-6">আরবী শেখা</div>
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
        <Submenu selectedTheme={selectedTheme} selectedColor={selectedColor} />
        
        <UserNavigation />
      </nav>
    </>
  );
}
export default Nav;

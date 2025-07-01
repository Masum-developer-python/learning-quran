import Submenu from "./menuSubmenu";
import { Menu } from "lucide-react";

function Nav({
  selectedColor,
  selectedTheme,
  setSelectedTheme,
  setSelectedColor,
  alphabetColorCombinations,
  selectedReciter,
  setSelectedReciter,
  reciterList,
}) {
  console.log("Nav.jsx");
  return (
    <>
      
      {/* <div
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-32  p-4 h-[50px] 
         mt-16`}
      ></div> */}
      {/* Navbar */}
      <nav
        id="vertical-menu"
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-16 md:w-24 lg:w-32  p-2 
        fixed left-1 lg:left-6 h-[calc(100vh-5px)] overflow-y-scroll mt-0`}
      >
        <div className="text-lg font-bold mb-6">আরবী শেখা</div>
        <Submenu
          selectedTheme={selectedTheme}
          selectedColor={selectedColor}
          setSelectedTheme={setSelectedTheme}
          setSelectedColor={setSelectedColor}
          alphabetColorCombinations={alphabetColorCombinations}
          selectedReciter={selectedReciter}
          setSelectedReciter={setSelectedReciter}
          reciterList={reciterList}
        />
      </nav>
    </>
  );
}
export default Nav;

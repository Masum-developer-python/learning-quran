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
      
      <div
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-32  p-4 h-screen 
         mt-16`}
      ></div>
      {/* Navbar */}
      <nav
        id="vertical-menu"
        className={`${selectedColor.backgroundColor} ${selectedColor.textColor} w-32  p-2 
        fixed h-[calc(100vh-50px)] overflow-y-scroll block mt-0`}
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

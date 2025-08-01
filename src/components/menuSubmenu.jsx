import { arabicDiacritics } from "../data";
import React, { useState, useRef } from "react";
import { UserNavigation } from "./navigations";
import ThemeSelector from "./ThemeSelector";
import ColorSelector from "./ColorSelector";
import ReciterSelector from "./ReciterSelector";

function Submenu({
  selectedTheme,
  selectedColor,
  setSelectedTheme,
  setSelectedColor,
  alphabetColorCombinations,
  selectedReciter,
  setSelectedReciter,
  reciterList,
  whiteboardOpen = false,
  setWhiteboardOpen,
}) {
  const [openCategories, setOpenCategories] = useState({});
  const [openSubCategories, setOpenSubCategories] = useState({});

  console.log(whiteboardOpen);
  const toggleCategory = (category) => {
    setOpenCategories((prev) => {
      const isCurrentlyOpen = prev[category];

      // If the clicked category is already open, close all
      if (isCurrentlyOpen) {
        return {};
      }

      // Otherwise, open only the clicked one
      return {
        [category]: true,
      };
    });
  };

  const toggleSubCategory = (subCategory) => {
    setOpenSubCategories((prev) => {
      const isCurrentlyOpen = prev[subCategory];

      // If the clicked category is already open, close all
      if (isCurrentlyOpen) {
        return {};
      }

      // Otherwise, open only the clicked one
      return {
        [subCategory]: true,
      };
    });
  };
  return (
    <ul
      key={`vlkzb`}
      className={`font-bangla w-12 md:w-20 lg:w-24 text-xs md:text-xl lg:text-2xl relative h-full text-center whitespace-normal 
        ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
    >
      <li key={"1234"} className="text-xs">
        <hr />
        <br />
        <br />
        {/* Category Name */}
        <a
          className="block px-3 py-2 rounded hover:bg-blue-700 focus:bg-red-200 transition duration-1000"
          href={"/whiteboard"}
        >
          হোয়াইট বোর্ড পেজ
        </a>
        <br />
        <button
          onClick={() => {
            // Handle whiteboard button click
            setWhiteboardOpen((prev) => !prev);
          }}
          className="block px-3 py-2 rounded hover:bg-blue-700 focus:bg-red-200 transition duration-1000"
        >
          হোয়াইট বোর্ড
        </button>
        <br />
        <hr />
      </li>
      {Object.keys(arabicDiacritics).map((category, index) => (
        <React.Fragment key={category}>
          <li key={index} className="relative">
            <hr />
            <br />
            <br />
            {/* Category Name */}
            <a
              className=" px-2 py-2 rounded hover:bg-blue-700 focus:bg-red-200 transition 
            duration-1000"
              href={"/" + category.toLowerCase()}
            >
              {arabicDiacritics[category].title}
            </a>
            <hr className="2xl:hidden w-0" />
            {arabicDiacritics[category]?.diacritics?.length > 0 && (
              <button
                onClick={() => {
                  toggleCategory(category);
                }}
                className=" py-2"
              >
                {openCategories[category] ? "▾" : "◂"}
              </button>
            )}
          </li>

          {openCategories[category] &&
            arabicDiacritics[category].diacritics && (
              <div
                className={` ${openCategories[category] ? "" : "hidden"}
               mt-2 w-full ${selectedColor.backgroundColor} ${
                  selectedColor.textColor
                } 
              rounded shadow-lg`}
              >
                {/* Sub-Menu */}
                {arabicDiacritics[category].diacritics.map((item, index) => (
                  <div key={index} className="group/sub relative text-center">
                    <a
                      href={
                        "/" +
                        category.toLowerCase() +
                        "/" +
                        item.name.toLowerCase()
                      }
                      className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
                    >
                      {item.title} যুক্ত বর্ণমালা
                    </a>
                    {/* Sub-Category Toggle Button */}
                    <hr className="2xl:hidden w-0" />
                    <button
                      onClick={() => {
                        toggleSubCategory(item.name);
                      }}
                      className="px-4 py-2"
                    >
                      {openSubCategories[item.name] ? "▾" : "◂"}
                    </button>

                    {openSubCategories[item.name] && item.pages && (
                      <div
                        className={` top-0 m-2 w-full rounded shadow-lg
                            ${openSubCategories[item.name] ? "" : "hidden"} 
                            ${selectedColor.backgroundColor} ${
                          selectedColor.textColor
                        } 
                        `}
                      >
                        {item.pages.map((page, pageIndex) => (
                          <a
                            key={pageIndex}
                            href={
                              "/" +
                              category.toLowerCase() +
                              "/" +
                              item.name.toLowerCase() +
                              page.name.toLowerCase()
                            }
                            className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                          >
                            {page.title}
                          </a>
                        ))}
                      </div>
                    )}
                    <hr className="px-2"></hr>
                  </div>
                ))}
              </div>
            )}
          <br />
          <br />
          <hr />
        </React.Fragment>
      ))}
      <li key={"123"} className="group">
        <hr />
        <br />
        <br />
        {/* Category Name */}
        <a
          className="block px-3 py-2 rounded hover:bg-blue-700 focus:bg-red-200 transition duration-1000"
          href={"/words"}
        >
          শব্দ পরীক্ষা
        </a>
        <br />
        <br />
        <hr />
      </li>

      <li key={"a1234"} className="">
        <hr />
        <br />
        <br />
        {/* Category Name */}
        <a
          className="block px-3 py-2 rounded hover:bg-blue-700 focus:bg-red-200 transition duration-1000"
          href={"/quran"}
        >
          কুরআন পড়া
        </a>
        <br />
        <br />
        <hr />
      </li>

      <li key={"12345"}>
        <hr />
        <br />
        <br />
        <ReciterSelector
          selectedReciter={selectedReciter}
          setSelectedReciter={setSelectedReciter}
          reciterList={reciterList}
          selectedColor={selectedColor}
        />
        <br />
        <br />
        <hr />
      </li>
      <li key={"123456"}>
        <hr />
        <br />
        <br />
        <UserNavigation />
        <br />
        <br />
        <hr />
      </li>

      <li key={"1234567"}>
        <hr />
        <br />
        <br />
        <ThemeSelector
          selectedTheme={selectedTheme}
          selectedColor={selectedColor}
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
        <br />
        <br />
        <hr />
      </li>
    </ul>
  );
}

export default Submenu;

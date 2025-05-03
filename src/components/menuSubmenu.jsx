import { arabicDiacritics } from "../data";
import { useState } from "react";

function Submenu({selectedColor}) {
  const width = window.innerWidth;
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <ul className={`font-bangla w-24 relative h-full text-center break-words whitespace-normal ${selectedColor.backgroundColor} ${selectedColor.textColor} `}>
      {Object.keys(arabicDiacritics).map((category, index) => (
        <li key={index} className="group">
          <hr />
          <br />
          <br />
          {/* Category Name */}
          <a
            className="block px-3 py-2 rounded hover:bg-blue-700 focus:bg-red-200 transition duration-1000"
            href={"/" + category.toLowerCase()}
          >
            {arabicDiacritics[category].title}
          </a>

          {(isMobile || isTablet) && arabicDiacritics[category].diacritics && (
            <button
              onClick={() => toggleCategory(category)}
              className="px-4 py-2"
            >
              {openCategories[category] ? ">" : "<"}
            </button>
          )}

          {(openCategories[category] || isDesktop) &&
            arabicDiacritics[category].diacritics && (
              <div className={`absolute left-full transform -translate-y-1/2 mt-2 w-full ${selectedColor.backgroundColor} ${selectedColor.textColor} rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300 hover:z-30`}>
                {/* Sub-Menu */}
                {arabicDiacritics[category].diacritics.map((item, index) => (
                  <div key={index} className="group/sub relative">
                    <a
                      href={
                        "/" +
                        category.toLowerCase() +
                        "/" +
                        item.name.toLowerCase()
                      }
                      className="block py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    >
                      {item.title}
                    </a>
                    {item.pages && (
                      <div className={`absolute left-full top-0 mt-2 w-full ${selectedColor.backgroundColor} ${selectedColor.textColor} rounded shadow-lg opacity-0 group-hover/sub:opacity-100 transition duration-300 hover:z-50`}>
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
                  </div>
                ))}
              </div>
            )}
          <br />
          <br />
          <hr />
        </li>
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
          শব্দ তৈরী
        </a>
        <br />
        <br />
        <hr />
      </li>
    </ul>
  );
}

export default Submenu;

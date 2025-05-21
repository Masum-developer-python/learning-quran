console.log('ThemeSelector.jsx');

import React from "react";

function ThemeSelector({ selectedTheme, setSelectedTheme, alphabetColorCombinations, setSelectedColor }) {
  const handleThemeChange = (e) => {
    const theme = alphabetColorCombinations.find((t) => t.theme === e.target.value);
    setSelectedTheme(theme);
    setSelectedColor(theme.combinations[2]); // Set the first color combination of the selected theme.
  };

  return (
    <>
      <label className="font-bangla w-32 mb-2 font-semibold">Select Theme & color combination : &nbsp; &nbsp;</label>
      <select
        value={selectedTheme.theme}
        onChange={handleThemeChange}
        className="w-32 p-2 border rounded font-bangla"
      >
        {alphabetColorCombinations.map((theme) => (
          <option key={theme.theme} value={theme.theme}>
            {theme.theme}
          </option>
        ))}
      </select>
      <br></br>
    </>
  );
}

export default ThemeSelector;

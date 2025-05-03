console.log('ColorSelector.jsx');

import React from "react";

function ColorSelector({ selectedTheme, selectedColor, setSelectedColor }) {
  const handleColorChange = (e) => {
    const color = JSON.parse(e.target.value); // Parse the selected color object from the dropdown.
    setSelectedColor(color);
  };

  return (
    <>
      {/* <label className=" mb-2 font-semibold">Select Color Combination:</label> */}
      <select
        value={JSON.stringify(selectedColor)}
        onChange={handleColorChange}
        className="font-bangla w-full p-2 border rounded ${selectedColor.backgroundColor}"
      >
        {selectedTheme.combinations.map((combo, index) => (
          <option key={index} className= {`${combo.textColor} ${combo.backgroundColor}`} value={JSON.stringify(combo)}>
            {combo.description}
          </option>
        ))}
      </select>
    </>
  );
}

export default ColorSelector;

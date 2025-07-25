import React from "react";

function ReciterSelector({ selectedReciter, setSelectedReciter, reciterList, selectedColor }) {
  const handleReciterChange = (e) => {
    const reciter = reciterList.find((r) => r.name === e.target.value);
    setSelectedReciter(reciter);
  };

  return (
    <>
      <label className="font-bangla w-8 md:w-12 lg:w-16 mb-2 font-small">Select Reciter : </label>
      <select
        value={selectedReciter.name}
        onChange={handleReciterChange}
        className={`w-12 md:w-16 lg:w-24 p-1 md:p-2 border-4 hover:border-green-300 rounded font-bangla ${selectedColor.textColor} ${selectedColor.backgroundColor}`}
      >
        {reciterList.map((reciter) => (
          <option key={reciter.name} value={reciter.name}>
            {reciter.name}
          </option>
        ))}
      </select>
      <br />
    </>
  );
}

export default ReciterSelector;

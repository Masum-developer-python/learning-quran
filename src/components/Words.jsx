import react, { useState } from "react";
import SideBar from "./sideBar";

function Words({
  selectedColor,
  width = "100px",
  sendingWord,
  setSendingWord,
  arabicAlphabet
}) {
  const [word, setWord] = useState("");
  console.log("Words.jsx");
  console.log(word);
  const [postAlphabetDiacriticsUnicode, setPostAlphabetDiacriticsUnicode] =
    useState("");
  const [preAlphabet, setPreAlphabet] = useState("");
  return (
    <div className="flex font-bangla">
      <SideBar
        isAllDiacritics={true}
        word={word}
        setWord={setWord}
        postAlphabetDiacriticsUnicode={postAlphabetDiacriticsUnicode}
        setPostAlphabetDiacriticsUnicode={setPostAlphabetDiacriticsUnicode}
        preAlphabet={preAlphabet}
        setPreAlphabet={setPreAlphabet}
        selectedColor={selectedColor}
        arabicAlphabet={arabicAlphabet}
      >
        <button
          key={`minus`}
          onClick={() => {
            setWord((prev) => prev.slice(0, -1));
          }}
          className={`rtl p-4 m-1 mb-0 h-[40px] w-16
           ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
        >
          {"-"}
        </button>
        <button
          key={`space`}
          onClick={() => {
            setWord((prev) => prev + " ");
          }}
          className={`rtl p-4 m-1 mb-0 h-[40px] w-16
           ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
        >
          {" "}
        </button>
        <button
          key={`del`}
          onClick={() => {
            setWord("");
          }}
          className={`rtl p-4 m-1 mb-0 h-[40px] w-16
           ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
        >
          {"del"}
        </button>

        <button
          key={`sub`}
          onClick={() => {
            setSendingWord((prev) => word);
          }}
          className={`rtl p-4 m-1 mb-0 h-[40px] w-16
           ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
        >
          {"sub"}
        </button>
      </SideBar>

      <div
        className={`font-akber ${selectedColor.backgroundColor} 
          text-8xl text-center w-[{width}]
          ${selectedColor.textColor}  p-8`}
      >
        {word}
        <br />
        {sendingWord}
      </div>
      {/* {word.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </div>
  );
}
export default Words;

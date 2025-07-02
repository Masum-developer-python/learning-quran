import react, { useState } from "react";
import SideBar from "../components/sideBar";

function Words({
  selectedColor,
  width = "100px",
  sendingWord,
  setSendingWord = (() => {
    sendingWord = newWord;
  }),
  arabicAlphabet,
  children,
}) {
  const [word, setWord] = useState("");
  console.log("Words.jsx");
  console.log(word);
  const [postAlphabetDiacriticsUnicode, setPostAlphabetDiacriticsUnicode] =
    useState("");
  const [preAlphabet, setPreAlphabet] = useState("");
  return (
    <div className="flex flex-col m-auto p-2">
      <div
        className={`font-akber ${selectedColor.backgroundColor} 
      text-8xl text-center  h-32 rounded-lg m-2 p-1 w-[400px]
      ${selectedColor.textColor} top-0 flex font-akber  m-auto p-2 justify-center items-center `}
      >
        <div className="text-right w-[50%] ">{word}</div>
      </div>
      <div className="flex font-bangla w-[100%] m-auto p-2 justify-center items-center">
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
            className={`rtl p-4 m-1 mb-0 h-[50px] w-20
           ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {"=>"}
          </button>
          <button
            key={`space`}
            title="No width space"
            onClick={() => {
              setWord((prev) => prev + " ");
            }}
            className={`rtl p-4 m-1 mb-0 h-[50px] w-20
           ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {"NWSP"}
          </button>
          <button
            key={`del`}
            onClick={() => {
              setWord("");
            }}
            className={`rtl p-4 m-1 mb-0 h-[50px] w-20
           ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {"Delete"}
          </button>

          <button
            key={`sub`}
            onClick={() => {
              setSendingWord((prev) => word);
            }}
            className={`rtl p-4 m-1 mb-0 h-[50px] w-20
           ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {"Submit"}
          </button>
          
        </SideBar>
        
      </div>
      {children}
    </div>
  );
}
export default Words;

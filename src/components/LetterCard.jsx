import React, { useState, useEffect } from "react";
import { CirclePlay } from "lucide-react";
import {
  siteTitle,
  //arabicAlphabet,
  //arabicAlphabetNames,
  arabicDiacritics,
  sendDataToDjango,
  receiveDataFromDjango,
} from "../data";
import SideBar from "./sideBar";
import Audio from "./Audio";
function Cards({
  arabicAlphabet,
  selectedColor,
  arabicAlphabetDiacritics = "",
  withHoverChildren = false,
  isSaddah = false,
  isSaakinah = false,
  title,
}) {
  const [preAlphabetDiacriticsUnicode, setPreAlphabetDiacriticsUnicode] =
    useState("");
  const [preAlphabet, setPreAlphabet] = useState("");
  const [postAlphabetDiacriticsUnicode, setPostAlphabetDiacriticsUnicode] =
    useState("");

  let rowIndex = 0;

  console.log("LetterCard.jsx");
  console.log(arabicAlphabet);
  return (
    <>
      <div key={rowIndex} className="flex flex-wrap w-[100%] space-x-1 m-2 ">
        <div
          className={`font-bangla flex  justify-center items-center  text-center text-2xl w-[100%] m-2 max-h-[120px] ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
        >
          <span className="text-3xl text-center">
            আরবী বর্ণমালা <span className="text-3xl">{title} </span>
            {arabicAlphabetDiacritics &&
              "-" +
                String.fromCodePoint(parseInt(arabicAlphabetDiacritics, 16)) +
                "  দিয়ে"}
          </span>
        </div>

        <div className="flex flex-0 flex-wrap flex-row-reverse w-[100%] m-auto md:m-2">
          {arabicAlphabet
            .filter((row) => row.extra != 1)
            .map((item, itemIndex) => (
              <div
                key={`container-${rowIndex}-${itemIndex}`}
                className=" group flex-grow"
              >
                <div
                  key={`item-${rowIndex}-${itemIndex}`}
                  className={`rtl p-6 py-3 m-1 w-auto h-auto
            ${selectedColor.backgroundColor} 
            text-8xl text-center 
            ${selectedColor.textColor} rounded-lg`}
                >
                  {preAlphabet && preAlphabet}
                  {preAlphabet &&
                    preAlphabetDiacriticsUnicode &&
                    String.fromCodePoint(
                      parseInt(preAlphabetDiacriticsUnicode, 16)
                    )}

                  {item.alphabet}
                  {arabicAlphabetDiacritics &&
                    String.fromCodePoint(
                      parseInt(arabicAlphabetDiacritics, 16)
                    )}
                  {postAlphabetDiacriticsUnicode &&
                    String.fromCodePoint(
                      parseInt(postAlphabetDiacriticsUnicode, 16)
                    )}
                  <div className="p-8">
                    <Audio
                      folder="/alphabets/"
                      fileName={`${arabicAlphabetDiacritics}${
                        itemIndex + 1
                      }.mp3`}
                    />
                  </div>
                  {withHoverChildren && (
                    <div
                      dir="rtl"
                      key={`itemName-${rowIndex}-${itemIndex}`}
                      className="text-2xl text-left opacity-0 group-hover:opacity-100 font-bangla flex"
                    >
                      <br />
                      <span className="text-right">{item.alphabet_name}</span>
                      <span>{"     "}</span>
                      <span className="text-left">
                        {item.alphabet_banglaname}
                      </span>
                    </div>
                  )}
                </div>
                
              </div>
            ))}
        </div>
      </div>
      
      <aside>
        {isSaakinah && (
          <SideBar
            selectedColor={selectedColor}
            preAlphabetDiacriticsUnicode={preAlphabetDiacriticsUnicode}
            setPreAlphabetDiacriticsUnicode={setPreAlphabetDiacriticsUnicode}
            preAlphabet={preAlphabet}
            setPreAlphabet={setPreAlphabet}
            postAlphabetDiacriticsUnicode={postAlphabetDiacriticsUnicode}
            setPostAlphabetDiacriticsUnicode={setPostAlphabetDiacriticsUnicode}
            isSaddah={isSaddah}
          />
        )}
      </aside>
    </>
  );
}
export default Cards;

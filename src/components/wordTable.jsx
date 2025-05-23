// src/components/ArabicWordsTable.js
import React, { useState, useEffect } from "react";
import { sendDataToDjango, receiveDataFromDjango,rootAddress } from "../data";
import Words from "./Words";
import WordCell from "./wordCell";

const Table = ({
  selectedColor,
  arabicAlphabet,
  diacritics,
  arabicAlphabetDiacritics,
  page,
}) => {
  const [sendingWord, setSendingWord] = useState("");
  const positions = ['end', 'middle', 'start'];
  console.log("wordTable.jsx");
  let method = "POST";
    const baseAddress = rootAddress + "arabic-words/";
    let address = `${baseAddress}filter_by_diacritics/?diacritic=${diacritics}`;
    console.log(address);
    const [arabicWords, setArabicWords] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const data = await receiveDataFromDjango(address);
        setArabicWords(data); // ✅ Update state with fetched data
      }
      fetchData();
    }, []);
    console.log(arabicWords);
  
    // const address1 =
    //   rootAddress + "quran-words/filter_by_arabic_words";
    // const [quranWords, setQuranWords] = useState([]);
    // useEffect(() => {
    //   async function fetchData() {
    //     const data = await receiveDataFromDjango(address1);
    //     setQuranWords(data); // ✅ Update state with fetched data
    //   }
    //   fetchData();
    // }, []);
    // console.log(quranWords);
    console.log(selectedColor);
    console.log(method);
  console.log(page.column);
  page.column.map((position, index) => console.log(index));
  return (
    <div
      className={`container mx-auto p-4 ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
    >
      <h1 className={`text-2xl font-bold mb-4 text-center font-bangla`}>
        {page.title}
      </h1>

      <table
        className={`min-w-full border border-gray-300 ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
      >
        <thead>
          <tr>
            {page.column
              .filter((position) => position != "")
              .map((position) => (
                <th className="py-2 px-4 border border-gray-300 font-bangla">
                  {position}
                </th>
              ))}
            <th className="py-2 px-4 border border-gray-300">হরফ</th>
          </tr>
        </thead>
        <tbody>
          {arabicAlphabet
            .filter((letter) => letter.extra != 1)
            .map((letter, letterIndex) => (
              <>
                <tr key={letterIndex} className={"bg-red"}>
                  {page.column
                    .map((position, index) => (
                      position != "" && (
                        <WordCell 
                          arabicWords={arabicWords}
                          arabicAlphabet={arabicAlphabet}
                          selectedColor={selectedColor}
                          diacritics={diacritics}
                          position={page.columnEn[index]}
                          id={letterIndex+1}
                          pName={page.name}
                          sendingWord={sendingWord}
                          setSendingWord={setSendingWord}
                        />
                    
                    )))}
                  <td className="py-2 px-4 border-t border-gray-300 text-5xl md:text-7xl text-center ">
                    {letter.alphabet}
                    {String.fromCodePoint(
                      parseInt(arabicAlphabetDiacritics, 16)
                    )}
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

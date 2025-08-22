// src/components/ArabicWordsTable.js
import React, { useState, useEffect } from "react";
import { sendDataToDjango, receiveDataFromDjango } from "../data";
import WordCell from "../components/wordCell";

const Table = ({
  selectedColor,
  arabicAlphabet,
  diacritics,
  arabicAlphabetDiacritics,
  page,
  isPrinting,
}) => {
  const [sendingWord, setSendingWord] = useState("");
  const [loading, setLoading] = useState(true);
  console.log("wordTable.jsx");
  let method = "POST";
  let rootAddress = localStorage.getItem("rootAddress");
  const baseAddress = rootAddress + "arabic-words/";
  let address = `${baseAddress}filter_by_diacritics/?diacritic=${diacritics}`;
  console.log(address);
  const [arabicWords, setArabicWords] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("fetching...");
      setLoading(true);
      const data = await receiveDataFromDjango(address);
      setArabicWords(data); // ✅ Update state with fetched data
      setLoading(false);
    }
    fetchData();
  }, [diacritics]);
  console.log(arabicWords);
  // console.log(selectedColor);
  console.log(diacritics, arabicAlphabet);
  console.log(isPrinting);
  // console.log(page.column);
  // page.column.map((position, index) => console.log(index));
  if (loading) {
    return <div className="text-center p-4">লোড হচ্ছে...</div>;
  }
  return (
    <div
      className={`container p-1 lg:mx-auto lg:p-4 ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
    >
      <h1 className={`text-2xl font-bold mb-4 text-center font-bangla`}>
        {page.title}
      </h1>

      <table
        className={`min-w-full container border border-gray-300 ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
      >
        <thead className="sticky top-0 w-full">
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
                <tr key={letterIndex} className="font-akber">
                  {page.column.map(
                    (position, index) =>
                      position != "" && (
                        <WordCell
                          arabicWords={arabicWords}
                          arabicAlphabet={arabicAlphabet}
                          selectedColor={selectedColor}
                          diacritics={diacritics}
                          position={page.columnEn[index]}
                          id={letterIndex + 1}
                          pName={page.name}
                          sendingWord={sendingWord}
                          setSendingWord={setSendingWord}
                          isPrinting={isPrinting}
                        />
                      )
                  )}
                  <td className="py-2 px-4 border-t border-gray-300  text-4xl 
                  md:text-8xl text-center ">
                    {/* {letter.alphabet} */}
                    {diacritics
                      ? letterIndex !== 0
                        ? `${letter.alphabet}`
                        : diacritics.includes("fatha") || diacritics.includes("dhammah") || diacritics.includes("alifmadd") || diacritics.includes("waaomadd") ? `${arabicAlphabet[35].alphabet}`: diacritics.includes("kasrah") || diacritics.includes("yaamadd") ?`${arabicAlphabet[32].alphabet}` 
                        : `${arabicAlphabet[34].alphabet}`
                      : `${letter.alphabet}`}
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

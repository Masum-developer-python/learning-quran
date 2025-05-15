import react, { useState, useEffect } from "react";
import { receiveDataFromDjango } from "../data";
import ActionBar from "./Actions";

export default function WordCell({
  arabicWords,
  selectedColor,
  diacritics,
  position,
  id,
  pName,
  in_quran = "false",
  sendingWord,
  setSendingWord,
  arabicAlphabet,
}) {
  const [word, setWord] = useState(
    arabicWords.find(
      (item) =>
        item.diacritics === diacritics &&
        item.position === position &&
        item.letter == id &&
        item.join_diacritics == pName
    )
      ?.word || ''
  );
  const cellId = arabicWords.find(
    (item) =>
      item.diacritics === diacritics &&
      item.position === position &&
      item.letter == id &&
      item.join_diacritics == pName
  )
    ?.id || '';

    console.log(cellId);
  return (
    <td
      className={`py-1 md:py-2 px-2 md:px-4 border border-gray-300 text-5xl md:text-8xl text-center
           s       ${word ? selectedColor.textColor : selectedColor.textColor}
                  `}
    >
      {word}

      <ActionBar
        diacritics={diacritics}
        position={position}
        id={id}
        pName={pName}
        selectedColor={selectedColor}
        sendingWord={sendingWord}
        setSendingWord={setSendingWord}
        arabicAlphabet={arabicAlphabet}
        arabicWords={arabicWords}
        word = {word}
        cellId = {cellId}
      />
      {/* <>
        <button
          onClick={() => {
            document.getElementById(positions[0] + row.id).className = "block";
            method = "PATCH";
            address = baseAddress + "/" + String(item.id);
            console.log(method);
          }}
          className="text-xs"
        >
          ...
        </button>
        <div id={`${positions[0]}${row.id}`} className="hidden">
          <Words
            selectedColor={selectedColor}
            sendingWord={sendingWord}
            setSendingWord={setSendingWord}
            arabicAlphabet={arabicAlphabet}
          />
          <button
            className="bg-gray-300"
            onClick={() =>
              sendDataToDjango(
                {
                  diacritics: diacritics,
                  position: positions[0],
                  word: sendingWord,
                  bangla: "",
                  english: "",
                  parts_of_speech: "",
                  letter: row.id,
                  join_diacritics: page.name,
                }, // Data to send
                address, // URL
                method
              )
            }
          >
            {row.id}
            {diacritics}
            {positions[0]}
          </button>
        </div>
      </> */}
    </td>
  );
}

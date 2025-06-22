import react, { useState, useEffect } from "react";
import ActionBar from "./Actions";

export default function WordCell({
  arabicWords,
  selectedColor,
  diacritics,
  position,
  id,
  pName,
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
    )?.word || ""
  );
  const cellId =
    arabicWords.find(
      (item) =>
        item.diacritics === diacritics &&
        item.position === position &&
        item.letter == id &&
        item.join_diacritics == pName
    )?.id || "";

  //console.log(cellId);
  return (
    <td
      className={`py-1 md:py-2 px-1 md:px-4 border border-gray-300 text-center
                  text-4xl md:text-8xl xl:text-9xl 2xl:text-[9rem] 
                  ${word ? selectedColor.textColor : selectedColor.textColor}
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
        word={word}
        cellId={cellId}
      />
    </td>
  );
}

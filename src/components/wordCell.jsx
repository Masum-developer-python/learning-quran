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
  isPrinting,
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

  // console.log(word.split(""));
  const wordArray = word.split("");
  let c = 0;
  return (
    <td
      className={`py-1 md:py-2 px-1 md:px-4 border border-gray-300 text-center
                  text-4xl md:text-8xl xl:text-9xl 2xl:text-[9rem]
                  ${word ? selectedColor.textColor : "bg-red-300"}
                  `}
    >
      <div className="flex flex-row-reverse  justify-center items-center">
        {Array.from({ length: Math.ceil(wordArray.length / 2) }).map(
          (_, index) => {
            const first = wordArray[index * 2 + c];
            const second = wordArray[index * 2 + 1 + c];
            const third = wordArray[index * 2 + 2 + c];
            // console.log(
            //   `first: ${first}, second: ${second}, third: ${third}`
            // );
            // If second character is Shadda
            if (second === "\u0651") {
              c = c + 1;
              return (
                <>
                  {first}
                  {String.fromCodePoint(parseInt("0652", 16))}
                  &#8204;
                  {first}
                  {third}
                  &#8204;{" "}
                </>
              );
            }

            return (
              <div className="p-1 flex-1 text-3xl md:text-6xl xl:text-8xl 2xl:text-[7rem]">
                {first}
                {second}&#8204;{" "}
              </div>
            );
          }
        )}
      </div>
      <hr></hr>
      {word}
      {isPrinting == false && (
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
      )}
    </td>
  );
}

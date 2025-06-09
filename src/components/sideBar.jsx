import { Children } from "react";
import { arabicDiacritics } from "../data";
function SideBar({
  selectedColor = {
    backgroundColor: "bg-blue-50",
    textColor: "text-blue-800",
    description: "Soft blue & deep blue",
  },
  isSaddah = false,
  isAllDiacritics = false,
  preAlphabetDiacriticsUnicode,
  setPreAlphabetDiacriticsUnicode,
  preAlphabet,
  setPreAlphabet,
  postAlphabetDiacriticsUnicode,
  setPostAlphabetDiacriticsUnicode,
  word,
  setWord,
  children,
  arabicAlphabet,
}) {
  console.log("SideBar.jsx");
  // console.log(word);
  // console.log(arabicAlphabet, preAlphabet);
  //console.log(isSaddah);
  //console.log(alphabetColorCombinations);
  let rowIndex = 0;
  return (
    <div key={rowIndex} className="font-bangla">
      {!isAllDiacritics && (
        <div className="flex flex-row-reverse relative px-56">
          {arabicDiacritics["Harakat"].diacritics.map((item, itemIndex) => (
            <button
              key={`item-${rowIndex}-${itemIndex}`}
              onClick={() =>
                setPreAlphabetDiacriticsUnicode(item.unicode.slice(2))
              }
              className={`rtl p-4 m-1 mb-0 h-[50px] w-20 bg-gray-300
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
            >
              {"-" + String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-row-reverse">
        {arabicAlphabet.slice(0, 9).map((item, itemIndex) => (
          <button
            onClick={() => {
              console.log(item);
              setPreAlphabet(item.alphabet);
              console.log(preAlphabet);
              setWord((prev) => prev + item.alphabet);
            }}
            key={`item-${rowIndex}-${itemIndex}`}
            className={`rtl p-4 m-1 mb-0 h-[50px] w-20
          ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {item.alphabet}
          </button>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        {arabicAlphabet.slice(9, 18).map((item, itemIndex) => (
          <button
            onClick={() => {
              setPreAlphabet(item.alphabet);
              setWord((prev) => prev + item.alphabet);
            }}
            key={`item-${rowIndex}-${itemIndex}`}
            className={`rtl p-4 m-1 mb-0 h-[50px] w-20
          ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {item.alphabet}
          </button>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        {arabicAlphabet.slice(18, 27).map((item, itemIndex) => (
          <button
            onClick={() => {
              setPreAlphabet(item.alphabet);
              setWord((prev) => prev + item.alphabet);
            }}
            key={`item-${rowIndex}-${itemIndex}`}
            className={`rtl p-4 m-1 mb-0 h-[50px] w-20
          ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {item.alphabet}
          </button>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        {arabicAlphabet.slice(27).map((item, itemIndex) => (
          <button
            onClick={() => {
              setPreAlphabet(item.alphabet);
              setWord((prev) => prev + item.alphabet);
            }}
            key={`item-${rowIndex}-${itemIndex}`}
            className={`rtl p-4 m-1 mb-0 h-[50px] w-20
          ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {item.alphabet}
          </button>
        ))}
      </div>
      {(isSaddah || isAllDiacritics) && (
        <>
          <div className="flex flex-row-reverse relative">
            {arabicDiacritics["Harakat"].diacritics.map((item, itemIndex) => (
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() => {
                  const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                  setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                  // Directly use the value of unicodeValue to append to the word
                  setWord(
                    (prev) =>
                      prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                  );
                }}
                className={`rtl p-4 m-1 mb-0 h-[50px] w-20 
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4`}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            ))}
            {/* </div>
          <div> */}
            {arabicDiacritics["Tanween"].diacritics.map((item, itemIndex) => (
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() => {
                  const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                  setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                  // Directly use the value of unicodeValue to append to the word
                  setWord(
                    (prev) =>
                      prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                  );
                }}
                className={`rtl p-4 m-1 mb-0 h-[50px] w-20
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4
          ${itemIndex == 2 ? "font-akber" : ""}
          `}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            ))}
            {/* </div>
          <div> */}
            {arabicDiacritics["Madd"].diacritics.map((item, itemIndex) => (
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() => {
                  const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                  setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                  // Directly use the value of unicodeValue to append to the word
                  setWord(
                    (prev) =>
                      prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                  );
                }}
                className={`rtl p-4 m-1 mb-0 h-[50px] w-20
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 
          
          `}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            ))}
          </div>
        </>
      )}
      <div className="flex flex-row">
        {isAllDiacritics &&
          arabicDiacritics["sakinah"].diacritics.map((item, itemIndex) => (
            <div key={`item-${rowIndex}-${itemIndex}`}>
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() => {
                  const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                  setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                  // Directly use the value of unicodeValue to append to the word
                  setWord(
                    (prev) =>
                      prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                  );
                }}
                className={`rtl p-4 m-1 mb-0 h-[50px] w-20
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            </div>
          ))}
        {isAllDiacritics &&
          arabicDiacritics["shaddah"].diacritics.map((item, itemIndex) => (
            <div key={`item-${rowIndex}-${itemIndex}`}>
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() => {
                  const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                  setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                  // Directly use the value of unicodeValue to append to the word
                  setWord(
                    (prev) =>
                      prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                  );
                }}
                className={`rtl p-4 m-1 mb-0 h-[50px] w-20
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            </div>
          ))}
        {children && (
          <>
            <div className="flex flex-row">
              <input
                type="text"
                className={`rtl p-4 m-1 mb-0 h-[50px] w-64 bg-gray-300
          ${selectedColor.backgroundColor} 
          text-sm text-center 
          ${selectedColor.textColor} rounded-3xl
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
                placeholder="Input"
                onInput={(e) => {
                  const value = e.target.value;
                  if (value) {
                    setWord((prev) => prev + value);
                    e.target.value = "";
                  }
                }}
              ></input>
            </div>
            <div className="flex flex-row">
              {children}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default SideBar;

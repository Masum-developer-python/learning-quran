import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { useReactToPrint } from "react-to-print";
import {
  Pencil,
  NotebookPen,
  BookOpen,
  Eraser,
  Save,
  CirclePlay,
  SquareX,
  GripHorizontal,
} from "lucide-react";
import { sendDataToDjango, receiveDataFromDjango } from "../data";
import Words from "../pages/WordMaker";
import RefTable from "./RefTable";
import axios from "axios";
import { fileLocation } from "../data";
export default function ActionBar({
  diacritics,
  position,
  id,
  pName,
  selectedColor,
  sendingWord,
  setSendingWord,
  arabicAlphabet,
  word,
  cellId,
}) {
  // console.log(diacritics, position, id, pName);
  let rootAddress = localStorage.getItem("rootAddress");
  let bangla = "";
  let english = "";
  let parts_of_speech = "";
  let maddah = "";
  const baseAddress = rootAddress + "arabic-words/";
  const [address, setAddress] = useState(baseAddress);
  const [method, setMethod] = useState("");
  const user = sessionStorage.getItem("user");
  const isAdmin = user == null ? false : true;
  const [refData, setRefData] = useState([]);
  const [visible, setVisible] = useState({});
  const [refVisible, setRefVisible] = useState(false);
  const reciter = localStorage
    .getItem("arabic-app-reciter")
    .split(",")[1]
    .split(":")[1]
    .slice(1, -2);
  // console.log(reciter);
  const outerRef = useRef(null);
  const [isRefPrinting, setIsRefPrinting] = useState(false);
  const handlePrint = async () => {
    console.log(outerRef, outerRef.current);
    setIsRefPrinting(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Printing started");
    print();
    console.log("Printing finished");
    setIsRefPrinting(false);
  };
  const print = useReactToPrint({
    contentRef: outerRef,
    documentTitle: `${word} - growwithquran by RARe Academy`,
  });
  return (
    <>
      {/* actions */}
      <div
        className={`flex flex-row w-full p-1 mt-6 bg-gray-200 rounded-lg ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
      >
        {isAdmin && (
          <>
            {word && (
              <>
                {/* Delete */}
                <button
                  title="Delete"
                  className={`md:w-8 md:h-8 flex-1 flex items-center justify-center ${selectedColor.backgroundColor} rounded-lg hover:bg-red-200`}
                  onClick={async () => {
                    setMethod("DELETE");
                    console.log(address, method);
                    sendDataToDjango(
                      null,
                      baseAddress + cellId + "/",
                      "DELETE"
                    );
                  }}
                >
                  <Eraser className="md:w-7 md:h-7 text-red-500" />
                </button>
                {/* ------------------------------------------------------------------------------------------------------------------- */}
                {/* Edit */}
                <button
                  title="Edit"
                  className={`md:w-8 md:h-8 flex-1 flex items-center justify-center ${selectedColor.backgroundColor} rounded-lg hover:bg-blue-200`}
                  onClick={async () => {
                    const key = position + id;
                    setSendingWord(word);
                    setVisible((prev) => ({
                      ...prev,
                      [key]: !prev[key],
                    }));
                    setAddress(baseAddress + cellId + "/");
                    setMethod("PATCH");
                    console.log(baseAddress + cellId + "/", method);
                  }}
                >
                  <Pencil className="md:w-7 md:h-7 text-blue-500" />
                </button>
              </>
            )}
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            {!word && (
              <>
                {/* insert */}
                <button
                  title="Insert word"
                  className={`md:w-8 md:h-8 flex-1 flex items-center justify-center ${selectedColor.backgroundColor} rounded-lg hover:bg-yellow-200`}
                  onClick={async () => {
                    const key = position + id;
                    setVisible((prev) => ({
                      ...prev,
                      [key]: !prev[key],
                    }));
                    setMethod("POST");
                    // address = baseAddress + "/" + String(id);
                    console.log(method);
                  }}
                >
                  <NotebookPen className="md:w-7 md:h-7 text-yellow-500" />
                </button>
              </>
            )}
          </>
        )}
        {/* ------------------------------------------------------------------------------------------------------------------- */}

        {/* refference start*/}
        <button
          title="Refference"
          className={`md:w-8 md:h-8 flex-1 flex items-center justify-center ${selectedColor.backgroundColor} rounded-lg hover:bg-green-200`}
          onClick={async () => {
            console.log(word);
            try {
              const ref = await receiveDataFromDjango(
                rootAddress + "quran-words/filter_by_words/?word=" + word
              ); // ✅ waits here

              if (!ref) {
                console.log("Not found in Quran DB");
              } else {
                console.log("founded");
                setRefData(ref); // update your state after data is fetched
                setRefVisible(true);
                // ✅ You can do more stuff *after* data is ready here
              }
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }}
        >
          <BookOpen className="md:w-7 md:h-7 text-green-500" />
        </button>

        {refVisible && (
          <Draggable handle=".drag-handle">
            <div
              className={`fixed overflow-y-scroll h-[calc(80%-10px)] md:h-[calc(70%-10px)] lg:h-[calc(60%-10px)] 
                w-[99%] md:w-[90%] xl:w-[calc(100%-150px)] lg:min-w-[1000px] lg:max-w-[1600px] left-1 md:left-24 lg:left-2 xl:left-36 top-8 md:top-24 z-5 
                ${selectedColor.textColor} ${selectedColor.backgroundColor}`}
            >
              <button
                className={`md:w-8 md:h-8 z-20 fixed ${selectedColor.backgroundColor} rounded-lg hover:bg-red-200`}
                onClick={() => {
                  setRefVisible(false);
                }}
              >
                <SquareX className="md:w-7 md:h-7 text-red-900"></SquareX>
              </button>
              <button
                onClick={handlePrint}
                title="Print"
                className={`md:w-8 md:h-8 z-20 block fixed ${selectedColor.backgroundColor} rounded-lg hover:bg-green-200`}
              >
                <img
                  src="/images/print_btn.png"
                  className="w-7 h-7 z-20 cursor-pointer"
                  width="24"
                ></img>
              </button>
              <GripHorizontal className="drag-handle block md:w-8 md:h-8 text-gray-500" />
              <div ref={outerRef} className="">
                {" "}
                <RefTable refData={refData} word={word} isRefPrinting={isRefPrinting} />
              </div>
            </div>
          </Draggable>
        )}
        {/* ref ayah show */}
        {/* refference end*/}
        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/* word audio */}
        <button
          title="Word Audio"
          className={`md:w-8 md:h-8 flex-1 flex items-center justify-center ${selectedColor.backgroundColor} rounded-lg hover:bg-red-200`}
          onClick={async () => {
            try {
              const ref = await receiveDataFromDjango(
                rootAddress + "quran-words/filter_by_word/?word=" + word
              );
              console.log(ref[0]);
              document.getElementById(position + id + "Audio").src =
                fileLocation +
                "audios/sura" +
                ref[0].audio.substring(0, 4) +
                ref[0].audio;
              document.getElementById(position + id + "Audio").play();
              document.getElementById(position + id + "Audio").classList =
                "hidden";
            } catch (error) {
              console.error("❌ Error fetching data:", error);
            }
          }}
        >
          <CirclePlay className="md:w-7 md:h-7 text-red-500" />
        </button>
        <audio controls id={`${position}${id}Audio`} className="hidden">
          <source src="" type="audio/mpeg" />
          The Word can't be found in Quran words database.
        </audio>
        {/* ------------------------------------------------------------------------------------------------------------------- */}
      </div>
      {/* word maker */}

      {visible[`${position}${id}`] && (
        <div
          id={`${position}${id}`}
          className="${selectedColor.backgroundColor} relative w-[500px] m-auto p-2 rounded-lg shadow-lg"
        >
          <Words
            selectedColor={selectedColor}
            sendingWord={sendingWord}
            setSendingWord={setSendingWord}
            arabicAlphabet={arabicAlphabet}
          >
            <div className="flex flex-col justify-between items-center">
              <input
                type="text"
                placeholder={sendingWord}
                className={`rtl p-4 m-1 mb-0 h-[50px] w-[1/5]
              ${selectedColor.backgroundColor} 
             text-xl text-center 
             ${selectedColor.textColor} 
           rounded-lg
             flex justify-center items-center
             hover:shadow-2xl focus:outline-none focus:ring-4 `}
              ></input>
              <input
                type="text"
                placeholder="bang"
                className={`rtl p-4 m-1 mb-0 h-[50px] w-[1/5]
              ${selectedColor.backgroundColor} 
             text-xl text-center 
             ${selectedColor.textColor} 
           rounded-lg
             flex justify-center items-center
             hover:shadow-2xl focus:outline-none focus:ring-4 `}
                onChange={(e) => {
                  bangla = e.target.value;
                  console.log(bangla);
                }}
              ></input>
              <input
                type="text"
                placeholder="eng"
                className={`rtl p-4 m-1 mb-0 h-[50px] w-[1/5]
              ${selectedColor.backgroundColor} 
             text-xl text-center 
             ${selectedColor.textColor} 
           rounded-lg
             flex justify-center items-center
             hover:shadow-2xl focus:outline-none focus:ring-4 `}
                onChange={(e) => {
                  english = e.target.value;
                  console.log(english);
                }}
              ></input>

              <input
                type="text"
                placeholder="pos"
                className={`rtl p-4 m-1 mb-0 h-[50px] w-[1/5]
              ${selectedColor.backgroundColor} 
             text-xl text-center 
             ${selectedColor.textColor} 
           rounded-lg
             flex justify-center items-center
             hover:shadow-2xl focus:outline-none focus:ring-4 `}
                onChange={(e) => {
                  parts_of_speech = e.target.value;
                  console.log(parts_of_speech);
                }}
              ></input>
              <input
                type="text"
                placeholder="maddah"
                className={`rtl p-4 m-1 mb-0 h-[50px] w-[1/5]
              ${selectedColor.backgroundColor} 
             text-xl text-center 
             ${selectedColor.textColor} 
           rounded-lg
             flex justify-center items-center
             hover:shadow-2xl focus:outline-none focus:ring-4 `}
                onChange={(e) => {
                  maddah = e.target.value;
                  console.log(maddah);
                }}
              ></input>
              <button
                className={`rtl p-4 m-1 mb-0 h-[50px] w-16
              ${selectedColor.backgroundColor} 
             text-xl text-center 
             ${selectedColor.textColor} 
           rounded-lg
             flex justify-center items-center
             hover:shadow-2xl focus:outline-none focus:ring-4 `}
                onClick={async () => {
                  await sendDataToDjango(
                    {
                      diacritics: diacritics,
                      position: position,
                      word: sendingWord,
                      bangla: bangla,
                      english: english,
                      parts_of_speech: parts_of_speech,
                      letter: id,
                      join_diacritics: pName,
                      maddah: maddah,
                    },
                    address, // endpoint like "words/" etc.
                    method
                  );
                }}
              >
                <Save className="md:w-8 md:h-8 text-blue-500" />
              </button>
            </div>
          </Words>
        </div>
      )}
    </>
  );
}

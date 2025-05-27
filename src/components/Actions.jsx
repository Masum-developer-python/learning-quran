import React, { useState } from "react";
import {
  Pencil,
  NotebookPen,
  BookOpen,
  Eraser,
  Save,
  CirclePlay,
  SquareX,
  BookOpenText,
} from "lucide-react";
import { sendDataToDjango, rootAddress, receiveDataFromDjango } from "../data";
import Audio from "./Audio";
import Words from "./Words";
export default function ActionBar({
  diacritics,
  position,
  id,
  pName,
  selectedColor,
  sendingWord,
  setSendingWord,
  arabicAlphabet,
  arabicWords,
  word,
  cellId,
}) {
  // console.log(diacritics, position, id, pName);
  const baseAddress = rootAddress + "arabic-words/";
  const [address, setAddress] = useState(baseAddress);
  const [method, setMethod] = useState("POST");
  const user = localStorage.getItem("user");
  const isAdmin = user == null ? false : true;
  const [refData, setRefData] = useState([]);
  const [ref, setRef] = useState([]);
  console.log(cellId);
  const accessToken = localStorage.getItem("access_token");
  const reciter = localStorage.getItem("arabic-app-reciter").split(",")[1].split(":")[1].slice(1,-2);
  console.log(reciter);

  // receiveDataFromDjango(rootAddress +"quran-words/filter_by_word/?word=" + word).then( item =>
  //   setRef(item)
  // )
  // console.log(user, isAdmin);
  return (
    <>
    
      {/* ayah image container */}
      <div id="imageframe" className="hidden z-5 fixed top-0 bg-gray-100 w-[1500px]">
        <button
          className="w-8 h-8  bg-gray-100 rounded-lg hover:bg-red-200"
          onClick={() => {
            document.getElementById("imageframe").classList.toggle("hidden");
          }}
        >
          <SquareX className="w-7 h-7 text-red-500"></SquareX>
        </button>
        {/* <Audio
          folder={''}
        /> */}
        <button
          className="w-8 h-8  bg-gray-100 rounded-lg hover:bg-red-200"
          onClick={() => {
            const src = document
              .getElementById("image")
              .src.split("a/")[1]
              .split(/[_\.]/);
            console.log(
              "/wbw/" +
                src[0].padStart(3, "0") +
                "/"+reciter+"/" +
                src[0].padStart(3, "0") +
                src[1].padStart(3, "0") +
                ".mp3"
            );
            document.getElementById(position + id + "Audio").src =
              "/wbw/" +
              src[0].padStart(3, "0") +
              "/"+reciter+"/" +
              src[0].padStart(3, "0") +
              src[1].padStart(3, "0") +
              ".mp3";
            document.getElementById(position + id + "Audio").play();
            document.getElementById(position + id + "Audio").classList =
              "hidden";
          }}
        >
          <CirclePlay className="w-7 h-7 text-red-500" />
        </button>
        <img id="image" className="bg-white" src="" />

        <div
          id="ayahShow"
          className=" bg-green-100 p-4 rounded shadow-md"
        ></div>
      </div>
      {/* refference table container */}
      <div id="tableframe" className="hidden z-3 fixed top-0 bg-green-100 w-100 h-100">
        
      </div>
      {/* actions */}
      <div className="flex flex-row w-full p-1 mt-6 bg-gray-200 rounded-lg">
        {isAdmin && (
          <>
            {word && (
              <>
                {/* Delete */}
                <button
                  title="Delete"
                  className="w-8 h-8 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200"
                  onClick={() => {
                    setMethod("DELETE");
                    console.log(address, method);
                    sendDataToDjango(
                      null,
                      baseAddress + cellId + "/",
                      method,
                      accessToken
                    );
                  }}
                >
                  <Eraser className="w-7 h-7 text-red-500" />
                </button>
                {/* ------------------------------------------------------------------------------------------------------------------- */}
                {/* Edit */}
                <button
                  title="Edit"
                  className="w-8 h-8 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-blue-200"
                  onClick={() => {
                    document
                      .getElementById(position + id)
                      .classList.toggle("hidden");
                    setAddress(baseAddress + cellId + "/");
                    setMethod("PATCH");
                    console.log(
                      baseAddress + cellId + "/",
                      method,
                      accessToken
                    );
                  }}
                >
                  <Pencil className="w-7 h-7 text-blue-500" />
                </button>
              </>
            )}
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            {!word && (
              <>
                {/* insert */}
                <button
                  title="Insert word"
                  className="w-8 h-8 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-yellow-200"
                  onClick={() => {
                    document
                      .getElementById(position + id)
                      .classList.toggle("hidden");
                    setMethod("POST");
                    // address = baseAddress + "/" + String(id);
                    console.log(method);
                  }}
                >
                  <NotebookPen className="w-7 h-7 text-yellow-500" />
                </button>
              </>
            )}
          </>
        )}
        {/* ------------------------------------------------------------------------------------------------------------------- */}

        {/* refference start*/}
        <button
          title="Refference"
          className="w-8 h-8 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-green-200"
          onClick={async () => {
            document
              .getElementById(position + id + "ID")
              .classList.toggle("hidden");
            console.log(word);
            try {
              const ref = await receiveDataFromDjango(
                rootAddress + "quran-words/filter_by_words/?word=" + word
              ); // ✅ waits here

              if (!ref) {
                console.log("Not found in Quran DB");
              } else {
                ref.forEach(async (item) => {
                  console.log(item);
                });
                setRefData(ref); // update your state after data is fetched

                // ✅ You can do more stuff *after* data is ready here
              }
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }}
        >
          <BookOpen className="w-7 h-7 text-green-500" />
        </button>

        <div id={`${position}${id}ID`} className="hidden">
          <table className="text-2xl table-auto border-collapse">
            <thead>
              <tr>
                <th className="border-2 font-bangla border-gray-500">
                  {" "}
                  ক্রমিক{" "}
                </th>
                <th className="border-2 font-bangla border-gray-500">
                  {" "}
                  রেফারেন্স{" "}
                </th>
                <th className="border-2 font-bangla border-gray-500"> সুরা </th>
                <th className="border-2 font-bangla border-gray-500"> আয়াত </th>
                <th className="border-2 font-bangla border-gray-500"> শব্দ </th>
                <th className="border-2 font-bangla border-gray-500">
                  {" "}
                  শব্দ অডিও{" "}
                </th>
                <th className="border-2 font-bangla border-gray-500">
                  {" "}
                  আয়াত অডিও{" "}
                </th>
              </tr>
            </thead>
            <tbody key={`${position}${id}tbody`}>
              {refData.map((item, index) => (
                <tr key={`${position}${id}${index}trow`}>
                  <td className="border-2 border-gray-500">{index + 1}</td>

                  <td className="border-2 border-gray-500">
                    {/* ayah ref */}
                    <button
                      onClick={async () => {
                        const refAyah = await receiveDataFromDjango(
                          rootAddress +
                            "quran-words/filter_by_sura?sura=" +
                            item.sura +
                            "&aya=" +
                            item.aya
                        );
                        const src =
                          "/aba/" + item.sura + "_" + item.aya + ".png";
                        console.log(src);
                        document.getElementById("image").src = src;
                        document
                          .getElementById("imageframe")
                          .classList.toggle("hidden");

                        const ayah = refAyah
                          .map((item1) => item1.text)
                          .join(" ");
                        console.log(ayah);
                        document.getElementById("ayahShow").innerText = ayah;
                      }}
                    >
                      <BookOpenText className="w-7 h-7 text-green-800" />
                    </button>
                  </td>
                  <td className="border-2 border-gray-500">{item.sura}</td>
                  <td className="border-2 border-gray-500">{item.aya}</td>
                  <td className="border-2 border-gray-500">{item.text}</td>
                  <td className="border-2 border-gray-500 ">
                    {/* every word audio */}
                    <button
                      onClick={async () => {
                        try {
                          const src =
                            "/wbw" + item.audio.substring(0, 4) + item.audio;
                          console.log(src);
                          document.getElementById(position + id + "Audio").src =
                            src;
                          document
                            .getElementById(position + id + "Audio")
                            .play();
                          document.getElementById(
                            position + id + "Audio"
                          ).classList = "hidden";
                        } catch (error) {
                          console.error("❌ Error fetching data:", error);
                        }
                      }}
                    >
                      <CirclePlay className="w-7 h-7 text-green-500" />
                    </button>
                  </td>
                  <td className="border-2 border-gray-500">
                    {/* ayah ref audio */}
                    <button
                      onClick={async () => {
                        try {
                          const src =
                            "/wbw" +
                            item.audio.substring(0, 4) +
                            "/"+reciter+""+
                            item.audio.substring(0, 4) +
                            item.audio.substring(5, 8) +
                            ".mp3";
                          console.log(src);
                          document.getElementById(position + id + "Audio").src =
                            src;
                          document
                            .getElementById(position + id + "Audio")
                            .play();
                          document.getElementById(
                            position + id + "Audio"
                          ).classList = "hidden";
                        } catch (error) {
                          console.error("❌ Error fetching data:", error);
                        }
                      }}
                    >
                      <CirclePlay className="w-7 h-7 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* ref ayah show */}

        {/* refference end*/}
        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/* word audio */}
        <button
          title="Word Audio"
          className="w-8 h-8 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200"
          onClick={async () => {
            try {
              const ref = await receiveDataFromDjango(
                rootAddress + "quran-words/filter_by_word/?word=" + word
              );
              console.log(ref[0]);
              document.getElementById(position + id + "Audio").src =
                "/wbw" + ref[0].audio.substring(0, 4) + ref[0].audio;
              document.getElementById(position + id + "Audio").play();
              document.getElementById(position + id + "Audio").classList =
                "hidden";
            } catch (error) {
              console.error("❌ Error fetching data:", error);
            }
          }}
        >
          <CirclePlay className="w-7 h-7 text-red-500" />
        </button>
        <audio controls id={`${position}${id}Audio`} className="hidden">
          <source src="" type="audio/mpeg" />
          The Word can't be found in Quran words database.
        </audio>
        {/* ------------------------------------------------------------------------------------------------------------------- */}
        
      </div>
      {/* word maker */}
    <div id={`${position}${id}`} className="hidden bg-gray-100 relative">
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
                  position: position,
                  word: sendingWord,
                  bangla: "",
                  english: "",
                  parts_of_speech: "",
                  letter: id,
                  join_diacritics: pName,
                }, // Data to send
                address, // URL
                method,
                accessToken
              )
            }
          >
            <Save className="w-8 h-8 text-blue-500" />
          </button>
        </div>
    </>
  );
}

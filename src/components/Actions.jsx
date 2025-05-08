import React, { useState } from "react";
import {
  Pencil,
  NotebookPen,
  BookOpen,
  Eraser,
  Save,
  CirclePlay,
  SquareX,
} from "lucide-react";
import { sendDataToDjango, rootAddress, receiveDataFromDjango } from "../data";
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

  // receiveDataFromDjango(rootAddress +"quran-words/filter_by_word/?word=" + word).then( item =>
  //   setRef(item)
  // )
  // console.log(user, isAdmin);
  return (
    <>
      <div id="imageframe" className="hidden z-5 fixed top-0 bg-gray-100">
        <button
          className="w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200"
          onClick={() => {
            document.getElementById("imageframe").classList.toggle("hidden");
          }}
        >
          <SquareX className="w-3 h-3 text-red-500"></SquareX>
        </button>
        <button
          className="w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200"
          onClick={() => {
            const src = document
              .getElementById("image")
              .src.split("a/")[1]
              .split(/[_\.]/);
            console.log(
              "/wbw/" +
                src[0].padStart(3, "0") +
                "/" +
                src[0].padStart(3, "0") +
                src[1].padStart(3, "0") +
                ".mp3"
            );
            document.getElementById(position + id + "Audio").src =
              "/wbw/" +
              src[0].padStart(3, "0") +
              "/" +
              src[0].padStart(3, "0") +
              src[1].padStart(3, "0") +
              ".mp3";
            document.getElementById(position + id + "Audio").play();
            document.getElementById(position + id + "Audio").classList =
              "hidden";
          }}
        >
          <CirclePlay className="w-3 h-3 text-red-500" />
        </button>
        <img id="image" className="" src="" />
      </div>

      <div className="flex flex-row w-full p-1 mt-6 bg-gray-200 rounded-lg">
        {isAdmin && (
          <>
            {/* Delete */}
            <button
              className="w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200"
              onClick={() => {
                // setAddress(
                //   baseAddress +
                //     String(
                //       arabicWords.find(
                //         (item) =>
                //           item.diacritics === diacritics &&
                //           item.position === position &&
                //           item.letter == id &&
                //           item.join_diacritics == pName
                //       )?.id || ""
                //     ) +
                //     "/"
                // );
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
              <Eraser className="w-3 h-3 text-red-500" />
            </button>

            {/* Edit */}
            <button
              className="w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-blue-200"
              onClick={() => {
                document
                  .getElementById(position + id)
                  .classList.toggle("hidden");
                // setAddress(
                //   baseAddress +
                //     String(
                //       arabicWords.find(
                //         (item) =>
                //           item.diacritics === diacritics &&
                //           item.position === position &&
                //           item.letter == id &&
                //           item.join_diacritics == pName
                //       )?.id || ""
                //     ) +
                //     "/"
                // );
                setAddress(baseAddress + cellId + "/");
                setMethod("PATCH");
                console.log(baseAddress + cellId + "/", method, accessToken);
              }}
            >
              <Pencil className="w-3 h-3 text-blue-500" />
            </button>

            {/* insert */}
            <button
              className="w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-yellow-200"
              onClick={() => {
                document
                  .getElementById(position + id)
                  .classList.toggle("hidden");
                setMethod("POST");
                // address = baseAddress + "/" + String(id);
                console.log(method);
              }}
            >
              <NotebookPen className="w-3 h-3 text-yellow-500" />
            </button>
          </>
        )}

        <button
          className="w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-green-200"
          onClick={async () => {
            document
              .getElementById(position + id + "ID")
              .classList.toggle("hidden");
            console.log(word);
            // setAddress(
            //   rootAddress + "quran-words/filter_by_word/?word=" + word
            // );
            // console.log(address);
            // receiveDataFromDjango(address).then((ref) => {
            //   if (!ref) console.log("Not found in Quran DB");
            //   else ref.forEach((item) => console.log(item));
            //   setRefData(ref);
            // });
            try {
              const ref = await receiveDataFromDjango(
                rootAddress + "quran-words/filter_by_words/?word=" + word
              ); // ✅ waits here
              if (!ref) {
                console.log("Not found in Quran DB");
              } else {
                ref.forEach((item) => console.log(item));
                setRefData(ref); // update your state after data is fetched
                // ✅ You can do more stuff *after* data is ready here
              }
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }}
        >
          <BookOpen className="w-3 h-3 text-green-500" />
        </button>

        <div id={`${position}${id}ID`} className="hidden">
          <table className="text-2xl table-auto border-collapse">
            <thead>
              <tr>
                <th className="border-2 font-bangla border-gray-500"> রেফারেন্স </th>
                <th className="border-2 font-bangla border-gray-500"> সুরা </th>
                <th className="border-2 font-bangla border-gray-500"> আয়াত </th>
                <th className="border-2 font-bangla border-gray-500"> শব্দ </th>
                <th className="border-2 font-bangla border-gray-500"> শব্দ অডিও </th>
                <th className="border-2 font-bangla border-gray-500"> আয়াত অডিও </th>
              </tr>
            </thead>
            <tbody key={`${position}${id}tbody`}>
              {refData.map((item, index) => (
                <tr key={`${position}${id}${index}trow`}>
                  <td className="border-2 border-gray-500">
                    <button
                      onClick={() => {
                        const src =
                          "/aba/" + item.sura + "_" + item.aya + ".png";
                        console.log(src);
                        document.getElementById("image").src = src;
                        document
                          .getElementById("imageframe")
                          .classList.toggle("hidden");
                      }}
                    >
                      <BookOpen className="w-3 h-3 text-green-800" />
                    </button>
                  </td>
                  <td className="border-2 border-gray-500">{item.sura}</td>
                  <td className="border-2 border-gray-500">{item.aya}</td>
                  <td className="border-2 border-gray-500">{item.text}</td>
                  <td className="border-2 border-gray-500 ">
                    <button
                      
                      onClick={async () => {
                        // const newAddress =
                        //   rootAddress + "quran-words/filter_by_word/?word=" + word;
                        // setAddress(newAddress);
                        // console.log(address);
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
                      <CirclePlay className="w-3 h-3 text-green-500" />
                    </button>
                  </td>
                  <td className="border-2 border-gray-500">
                    <button
                      onClick={async () => {
                        // const newAddress =
                        //   rootAddress + "quran-words/filter_by_word/?word=" + word;
                        // setAddress(newAddress);
                        // console.log(address);
                        try {
                          const src =
                            "/wbw" +
                            item.audio.substring(0, 4) +
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
                      <CirclePlay className="w-3 h-3 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200"
          onClick={async () => {
            // const newAddress =
            //   rootAddress + "quran-words/filter_by_word/?word=" + word;
            // setAddress(newAddress);
            // console.log(address);
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
          <CirclePlay className="w-3 h-3 text-red-500" />
        </button>
        <audio controls id={`${position}${id}Audio`} className="hidden">
          <source src="" type="audio/mpeg" />
          The Word can't be found in Quran words database.
        </audio>

        {/* word maker */}
        <div id={`${position}${id}`} className="hidden">
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
      </div>
    </>
  );
}

// const result = receiveDataFromDjango(address);
// console.log(result);
// if (result) {
//   const audio = new Audio(result.audio);

//   //#newly added
//   audio.oncanplaythrough = () => {
//     audio.play().catch(err => {
//       console.error("Audio play failed:", err);
//     });
//   };
//   //#newly added
//   audio.preload = "auto";
// } else {
//   console.warn("No audio_url found in response.");
// }

// const ref = result;
// ref.then(console.log("/wbw" + ref[0].audio));
//   console.log("/wbw" + ref[0].audio);
//   console.log(ref[0] ? ref[0] : "");
//   document.getElementById(position + id + "Audio").classList =
//     "block";
//   document.getElementById(position + id + "Audio").src =
//     "/wbw" + ref[0].audio;
//   document.getElementById(position + id + "Audio").play();
//   document.getElementById(position + id + "Audio").classList =
//     "hidden";

// <button
//                           onClick={() => {
//                             document.getElementById(
//                               positions[0] + row.id
//                             ).className = "block";
//                             method = "PATCH";
//                             address = baseAddress + "/" + String(item.id);
//                             console.log(method);
//                           }}
//                           className="text-xs"
//                         >
//                           ...
//                         </button>
// <div id={`${positions[0]}${row.id}`} className="hidden">
//   <Words
//     selectedColor={selectedColor}
//     sendingWord={sendingWord}
//     setSendingWord={setSendingWord}
//     arabicAlphabet={arabicAlphabet}
//   />
//   <button
//     className="bg-gray-300"
//     onClick={() =>
//       sendDataToDjango(
//         {
//           diacritics: diacritics,
//           position: positions[0],
//           word: sendingWord,
//           bangla: "",
//           english: "",
//           parts_of_speech: "",
//           letter: row.id,
//           join_diacritics: page.name,
//         }, // Data to send
//         address, // URL
//         method
//       )
//     }
//   >
//     {row.id}
//     {diacritics}
//     {positions[0]}
//   </button>
// </div>

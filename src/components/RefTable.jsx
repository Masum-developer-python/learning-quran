import { BookOpenText, CirclePlay } from "lucide-react";
import React, { useState } from "react";
import { receiveDataFromDjango } from "../data";
import Audio from "./Audio";

export default function RefTable({ refData }) {
  const reciter = localStorage
    .getItem("arabic-app-reciter")
    .split(",")[1]
    .split(":")[1]
    .slice(1, -2);
  const rootAddress = localStorage.getItem("rootAddress");
  return (
    <div id="refTable" className="">
      <table className="text-2xl table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-2 font-bangla border-gray-500"> ক্রমিক </th>
            <th className="border-2 font-bangla border-gray-500"> সুরা </th>
            <th className="border-2 font-bangla border-gray-500"> আয়াত </th>
            <th className="border-2 font-bangla border-gray-500"> স্থান </th>
            <th className="border-2 font-bangla border-gray-500"> শব্দ </th>
            <th className="border-2 font-bangla border-gray-500">
              {" "}
              শব্দ অডিও{" "}
            </th>

            <th className="border-2 font-bangla border-gray-500">
              {" "}
              আয়াত অডিও{" "}
            </th>
            <th className="border-2 font-bangla border-gray-500">
              {" "}
              রেফারেন্স{" "}
            </th>
            <th className="border-2 font-bangla border-gray-500">
              পূর্ণাঙ্গ আয়াত
            </th>
          </tr>
        </thead>
        <tbody key={`tbody`}>
          {refData.map((item, index) => (
            
            <tr key={`${index}trow`}>
              <td className="border-2 border-gray-500">{index + 1}</td>
              <td className="border-2 border-gray-500">{item.sura}</td>
              <td className="border-2 border-gray-500">{item.aya}</td>
              <td className="border-2 border-gray-500">{item.position}</td>
              <td className="border-2 border-gray-500">{item.text}</td>
              <td className="border-2 border-gray-500 ">
                {/* every word audio */}
                <Audio 
                    title="Word Audio"
                    folder={"/wbw"}
                    fileName={item.audio.substring(0, 4) + item.audio}
                />
              </td>
              <td className="border-2 border-gray-500 text-green-500">
                {/* ayah ref audio */}
                <Audio
                  title={`${item.audio}`}
                  folder={
                    "/wbw" + item.audio.substring(0, 4) + "/" + reciter + "/"
                  }
                  fileName={
                    item.audio.substring(0, 4) +
                    item.audio.substring(5, 8) +
                    ".mp3"
                  }
                />
              </td>

              <td className="border-2 border-gray-500">
                {/* ayah ref text */}
                <button
                    title="Click for Ayah text"
                  onClick={async () => {
                    try {
                      const refAyah = await receiveDataFromDjango(
                        rootAddress +
                          "quran-words/filter_by_sura?sura=" +
                          item.sura +
                          "&aya=" +
                          item.aya
                      );

                      const ayah = refAyah.map((item1) => item1.text).join(" ");
                      console.log(ayah);
                      document.getElementById(`${item.sura}-${item.aya}-${item.position}`).innerText = ayah;
                    } catch (error) {
                      console.error("❌ Error fetching data:", error);
                    }
                  }}
                >
                  <BookOpenText className="w-7 h-7 text-red-500" />
                </button>
              </td>

              <td
                dir="rtl"
                id={`${item.sura}-${item.aya}-${item.position}`}
                className="border-2 border-gray-500 p-2 text-4xl"
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
      <audio controls id={`Audio`} className="hidden">
        <source src="" type="audio/mpeg" />
        The Word can't be found in Quran words database.
      </audio>
    </div>
  );
}

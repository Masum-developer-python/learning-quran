import { BookOpenText, CirclePlay } from "lucide-react";
import React, { useState, useEffect } from "react";
import { receiveDataFromDjango } from "../data";
import Audio from "./Audio";
import AyahWord from "./AyahWord";
import { fileLocation } from "../data";
export default function RefTable({ refData, word }) {
  const reciter = localStorage
    .getItem("arabic-app-reciter")
    .split(",")[1]
    .split(":")[1]
    .slice(1, -2);
  const rootAddress = localStorage.getItem("rootAddress");
  const [ayah, setAyah] = useState({});
  const [visible, setVisible] = useState({});
  const [surahList, setSurahList] = useState(null);
  async () => {
    console.log("function");
  };
  useEffect(() => {
    // Fetch the surah list when the component mounts
    const fetchSurahList = async () => {
      try {
        const response = await receiveDataFromDjango(rootAddress + "sura");
        console.log("Surah List: ", response);
        if (!response || response.length === 0) {
          throw new Error("No surah data found");
        }
        setSurahList(response);
      } catch (error) {
        console.error("Error fetching surah list:", error);
      }
    };

    fetchSurahList();
  }, [rootAddress]);
  // console.log(visible);
  // console.log(ayah);
  return (
    <div id="refTable" className="w-[99%] mx-auto">
      <table className="text-2xl table-auto border-collapse">
        <caption className="text-left font-bangla bg-white text-green-400 sticky top-0">
          <marquee>
            শব্দটি কুরআনে{" "}
            <span className="font-bold text-3xl">{refData.length}</span> বার
            এসেছে । সুরা, আয়াত বা শব্দের অডিও শুনতে নাম/সংখ্যা/শব্দের উপর ক্লিক
            করুন ।
          </marquee>
        </caption>
        <thead>
          <tr className="sticky top-8 bg-green-100">
            <th className="border-2 font-bangla border-gray-500 p-4 hidden lg:table-cell">
              ক্রমিক
            </th>
            <th className="border-2 font-bangla border-gray-500 p-4 w-[40%] md:w-[10%] lg:w-[15%]">
              শব্দ
            </th>
            <th className="border-2 font-bangla border-gray-500 p-4 w-[10%] md:w-[10%] lg:w-[15%]">
              সুরা
            </th>
            <th className="border-2 font-bangla border-gray-500 p-4 w-[10%] md:w-[10%] lg:w-[5%]">
              আয়াত
            </th>
            <th className="border-2 font-bangla border-gray-500 p-4 w-[10%] md:w-[5%] lg:w-[5%]">
              স্থান
            </th>

            <th className="border-2 font-bangla border-gray-500 p-4 hidden lg:table-cell">
              রেফারেন্স
            </th>
            <th className="border-2 font-bangla border-gray-500 p-4 w-[95%] hidden lg:table-cell">
              পূর্ণাঙ্গ আয়াত
            </th>
          </tr>
        </thead>
        <tbody key={`tbody`}>
          {refData.length == 0 && (
            <tr>
              <td colSpan={7} className="font-bangla">
                কুরআন ডেটাবেজে খুজে পাওয়া যায় নি
              </td>
            </tr>
          )}
          {refData.map((item, index) => (
            <>
              <tr key={`${index}trow`} className="h-[90px]">
                <td className="border-2 border-gray-500 hidden lg:table-cell">
                  {index + 1}
                </td>
                <td
                  className="border-2 border-gray-500 text-5xl font-akber"
                  dir="rtl"
                >
                  {(() => {
                    const text = item.text;
                    const search = word;
                    const highlightIndexes = [];

                    let tIndex = 0;
                    for (let sIndex = 0; sIndex < search.length; sIndex++) {
                      const char = search[sIndex];
                      while (tIndex < text.length && text[tIndex] !== char) {
                        tIndex++;
                      }
                      if (tIndex < text.length) {
                        highlightIndexes.push(tIndex);
                        tIndex++;
                      }
                    }

                    return (
                      <Audio
                        title="Word Audio"
                        folder={fileLocation + "audios/sura"}
                        fileName={item.audio.substring(0, 4) + item.audio}
                      >
                        <span>
                          {text.split("").map((char, index) =>
                            highlightIndexes.includes(index) ? (
                              <span key={index} className="text-green-500">
                                {char}
                              </span>
                            ) : (
                              <span key={index}>{char}</span>
                            )
                          )}
                        </span>
                      </Audio>
                    );
                  })()}
                </td>
                <td className="border-2 border-gray-500 font-bangla">
                  <Audio
                    title={
                      surahList
                        ? "Sura " + surahList[item.sura - 1]?.name + "'s Audio"
                        : item.sura
                    }
                    folder={
                      fileLocation +
                      "audios/sura" +
                      item.audio.substring(0, 4) +
                      "/" +
                      reciter
                    }
                    fileName={item.audio.substring(0, 4) + ".mp3"}
                  >
                    {surahList
                      ? surahList[item.sura - 1]?.name_bn.split(" ")[1]
                      : item.sura}
                  </Audio>
                </td>
                <td className="border-2 border-gray-500">
                  <Audio
                    title={`Ayah Audio`}
                    folder={
                      fileLocation +
                      "audios/sura" +
                      item.audio.substring(0, 4) +
                      "/" +
                      reciter +
                      "/"
                    }
                    fileName={
                      item.audio.substring(0, 4) +
                      item.audio.substring(5, 8) +
                      ".mp3"
                    }
                  >
                    {item.aya}
                  </Audio>
                </td>
                <td className="border-2 border-gray-500">
                  <Audio
                    title="Word Audio"
                    folder={fileLocation + "audios/sura"}
                    fileName={item.audio.substring(0, 4) + item.audio}
                  >
                    {item.position}
                  </Audio>
                </td>

                <td className="border-2 border-gray-500 hidden lg:table-cell">
                  {/* ayah ref text */}
                  <button
                    title="Click for Ayah text"
                    onClick={async () => {
                      const key = `${item.sura}-${item.aya}-${item.position}`;
                      try {
                        const refAyah = await receiveDataFromDjango(
                          rootAddress +
                            "quran-words/filter_by_sura?sura=" +
                            item.sura +
                            "&aya=" +
                            item.aya
                        );

                        console.log(refAyah);
                        setAyah((prev) => ({
                          ...prev,
                          [key]: refAyah,
                        }));
                      } catch (error) {
                        console.error("❌ Error fetching data:", error);
                      } finally {
                        setVisible((prev) => ({
                          ...prev,
                          [key]: !prev[key],
                        }));
                      }
                    }}
                  >
                    <BookOpenText
                      className={`w-7 h-7 ${
                        visible[`${item.sura}-${item.aya}-${item.position}`]
                          ? "text-green-500"
                          : "text-red-500"
                      } `}
                    />
                  </button>
                </td>

                <td
                  dir="rtl"
                  id={`${item.sura}-${item.aya}-${item.position}`}
                  className=" border-2 border-gray-500 w-[950px] p-2 text-5xl font-akber hidden lg:table-cell"
                >
                  {visible[`${item.sura}-${item.aya}-${item.position}`] &&
                    ayah[`${item.sura}-${item.aya}-${item.position}`] && (
                      <AyahWord
                        data={ayah[`${item.sura}-${item.aya}-${item.position}`]}
                        suraAudio={false}
                        ayaAudio={false}
                        word={item.text}
                      ></AyahWord>
                    )}
                </td>
              </tr>
              <tr>
                <th className="border-2 font-bangla border-gray-500 p-4 table-cell lg:hidden">
                  <button
                    title="Click for Ayah text"
                    className={` ${
                      visible[`${item.sura}-${item.aya}-${item.position}`]
                        ? "text-green-500"
                        : "text-red-500"
                    } `}
                    onClick={async () => {
                      const key = `${item.sura}-${item.aya}-${item.position}`;
                      try {
                        const refAyah = await receiveDataFromDjango(
                          rootAddress +
                            "quran-words/filter_by_sura?sura=" +
                            item.sura +
                            "&aya=" +
                            item.aya
                        );

                        console.log(refAyah);
                        setAyah((prev) => ({
                          ...prev,
                          [key]: refAyah,
                        }));
                      } catch (error) {
                        console.error("❌ Error fetching data:", error);
                      } finally {
                        setVisible((prev) => ({
                          ...prev,
                          [key]: !prev[key],
                        }));
                      }
                    }}
                  >
                    {" "}
                    রেফারেন্স
                  </button>
                </th>
                <td
                  dir="rtl"
                  id={`${item.sura}-${item.aya}-${item.position}`}
                  colSpan={3}
                  className=" border-2 border-gray-500 w-[950px] p-2 text-5xl font-akber lg:hidden table-cell"
                >
                  {visible[`${item.sura}-${item.aya}-${item.position}`] &&
                    ayah[`${item.sura}-${item.aya}-${item.position}`] && (
                      <AyahWord
                        data={ayah[`${item.sura}-${item.aya}-${item.position}`]}
                        suraAudio={false}
                        ayaAudio={false}
                        word={item.text}
                      ></AyahWord>
                    )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

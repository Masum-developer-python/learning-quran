import Audio from "./Audio";
import { useState } from "react";
export default function AyahWord({ data }) {
  let selectedColor = localStorage.getItem("arabic-app-color");
  const reciter = localStorage
    .getItem("arabic-app-reciter")
    .split(",")[1]
    .split(":")[1]
    .slice(1, -2);
  console.log(data);

  return (
    <div className={`${selectedColor.textColor} `}>
      {data[0] && (
        <Audio
          title="Surah Audio"
          folder={"wbw/"+ String(data[0].sura).padStart(3, "0") +
          "/" +
          reciter +
          "/" }
          fileName={

            String(data[0].sura).padStart(3, "0") +
            ".mp3"
          }
        ></Audio>
      )}

      <div className={`text-4xl ${selectedColor.textColor}`} dir="rtl">
        {data[0] &&
          data.map((i) => (
            <>
              {i.text ? (
                <Audio
                  title="word audio"
                  folder="/wbw"
                  fileName={
                    i.audio != null ? i.audio.substring(0, 4) + i.audio : ""
                  }
                >
                  <span className="py-2 m-1 font-akber">{i.text + " "}</span>
                </Audio>
              ) : (
                <Audio
                  title="Ayah Audio"
                  folder={
                    "/wbw/" +
                    String(i.sura).padStart(3, "0") +
                    "/" +
                    reciter +
                    "/"
                  }
                  fileName={
                    String(i.sura).padStart(3, "0") +
                    String(i.aya).padStart(3, "0") +
                    ".mp3"
                  }
                />
              )}
            </>
          ))}
      </div>
      {/* <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {JSON.stringify(data, null, 2)}
          </pre> */}
    </div>
  );
}

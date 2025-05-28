import Audio from "./Audio";
import { useState } from "react";
export default function AyahWord({ data, suraAudio = true, ayaAudio = true , word}) {
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
        <p className="text-2xl ">
          <strong>
            {" "}
            {suraAudio && (
              <span>
                আয়াত সংখ্যা : {data[data.length - 1].aya}
                <br />
              </span>
            )}{" "}
            শব্দ সংখ্যা : {Number(data[data.length-2].audio.split('_')[2].split('.')[0])}
          </strong>
        </p>
      )}
      {data[0] && suraAudio && (
        <Audio
          title="Surah Audio"
          folder={`wbw/${String(data[0].sura).padStart(3, "0")}/${reciter}/`}
          fileName={String(data[0].sura).padStart(3, "0") + ".mp3"}
        >
          <strong className="text-3xl">সুরাহ অডিও</strong>
        </Audio>
      )}

      <div className={`text-4xl ${selectedColor.textColor}`} dir="rtl">
        {suraAudio && (
          <>
            <br />
            <hr />
            <hr />
            <hr />
            <br />
          </>
        )}
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
                  {i.text === word ?
                    <strong><span className="py-2 m-1 font-akber">{i.text + " "}</span></strong> :
                    <span className="py-2 m-1 font-akber">{i.text + " "}</span> }
                  
                </Audio>
              ) : ayaAudio ? (
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
              ) : (
                ""
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

console.log("data.js");

export const fileLocation = "/";

export let rootAddress = localStorage.getItem("rootAddress");
if (
  localStorage.getItem("rootAddress") === null ||
  localStorage.getItem("rootAddress") === ""
) {
  rootAddress = "https://rare-academy.xyz/api/lq/";
  localStorage.setItem("rootAddress", rootAddress);
} else if (
  localStorage.getItem("rootAddress") !== "https://rare-academy.xyz/api/lq/"
) {
  localStorage.setItem("rootAddress", "https://rare-academy.xyz/api/lq/");
}
console.log("rootAddress", rootAddress);
export const siteTitle =
  "Al  Quran  learning , developed by RARE academy with Masum";

export const alphabetColorCombinations = [
  {
    theme: "Calm Learning",
    combinations: [
      {
        backgroundColor: "bg-blue-50",
        textColor: "text-blue-800",
        description: "Soft blue & deep blue",
      },
      {
        backgroundColor: "bg-orange-50",
        textColor: "text-orange-900",
        description: "Soft orange & deep orange",
      },
      {
        backgroundColor: "bg-yellow-100",
        textColor: "text-gray-900",
        description: "Light yellow & dark gray",
      },
      {
        backgroundColor: "bg-teal-50",
        textColor: "text-teal-900",
        description: "Mild teal & dark teal",
      },
    ],
  },
  {
    theme: "High Contrast",
    combinations: [
      {
        backgroundColor: "bg-white",
        textColor: "text-black",
        description: "Classic black & white",
      },
      {
        backgroundColor: "bg-gray-100",
        textColor: "text-indigo-800",
        description: "Light gray & deep indigo",
      },
      {
        backgroundColor: "bg-yellow-50",
        textColor: "text-purple-900",
        description: "Soft yellow & deep purple",
      },
    ],
  },
  {
    theme: "Pastel Soft",
    combinations: [
      {
        backgroundColor: "bg-pink-50",
        textColor: "text-pink-900",
        description: "Soft pink & deep pink",
      },
      {
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-900",
        description: "Light blue & deep blue",
      },
      {
        backgroundColor: "bg-green-50",
        textColor: "text-green-900",
        description: "Pale green & dark green",
      },
    ],
  },
  {
    theme: "Night Study",
    combinations: [
      {
        backgroundColor: "bg-gray-900",
        textColor: "text-yellow-100",
        description: "Dark gray & pale yellow",
      },
      {
        backgroundColor: "bg-black",
        textColor: "text-green-200",
        description: "Black & soft green",
      },
      {
        backgroundColor: "bg-gray-800",
        textColor: "text-purple-200",
        description: "Charcoal & light purple",
      },
    ],
  },
];
// console.log(alphabetColorCombinations[0].combinations[0].backgroundColor);
// let cl = alphabetColorCombinations[0].combinations[1];
// console.log(cl);

export const arabicDiacritics = {
  Letter: {
    title: "বর্ণমালা",
    diacritics: [],
  },
  Harakat: {
    title: "হারাকাত",
    meaning: "নড়াচড়া করা",
    video : "/videos/harakat.mp4",
    diacritics: [
      {
        name: "Fathah",
        title: "যবর",
        description: "দুই চোয়াল আলাদা করে মুখ খোলা রেখে যবর উচ্চারণ করতে হয়। বাংলা আ-কার এর মতো । যেমন :বা بَ",
        symbol: "\u064E", // ـَ
        unicode: "U+064E",
        indication: [], //"Short 'a' sound",
        pages: [
          {
            name: "Words",
            title: "যবরযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn: ["end", "middle", "start"],
          },
        ],
      },
      {
        name: "Kasrah",
        title: "যের",
        description: "নিচের চোয়াল ঝুঁকিয়ে যের উচ্চারণ করতে হয়।  বাংলা ই-কার এর মতো । যেমন :বি بِ",
        symbol: "\u0650", // ـِ
        unicode: "U+0650",
        indication: [], //"Short 'i' sound",
        pages: [
          {
            name: "Words",
            title: "যেরযুক্ত শব্দ",
            column: ["", "", "উদাহরন"],
            columnEn: ["", "", "start"],
          },
        ],
      },
      {
        name: "Dhammah",
        title: "পেশ",
        description: "দুই ঠোট সম্পূর্ণভাবে গোল করে বাধাহীনভাবে পেশ উচ্চারণ করতে হয়।  বাংলা উ-কার এর মতো । যেমন :বু بُ",
        symbol: "\u064F", // ـُ
        unicode: "U+064F",
        indication: [], //"Short 'u' sound",
        pages: [
          {
            name: "Words",
            title: "পেশযুক্ত শব্দ",
            column: ["", "", "উদাহরন"],
            columnEn: ["", "", "start"],
          },
        ],
      },
    ],
  },

  sakinah: {
    title: "সাকিনাহ্",
    meaning: "নীরব",
    video : "/videos/sakinah.mp4",
    diacritics: [
      {
        name: "Saakinah",
        title: "সাকিনাহ্",
        description: "স্থীরভাবে নড়াচড়াহীন অবস্থায় সাকিনাহ্ উচ্চারণ করতে হয়। বাংলা হসন্তের মতো । যেমন : ব্ بْ ",
        symbol: "\u0652", // ـْ
        unicode: "U+0652",
        indication: [], //"No vowel (silent letter)",
        pages: [
          {
            name: "Words",
            title: "সাকিনযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", ""],
            columnEn: ["end", "middle", ""],
          },
        ],
      },
    ],
  },
  Madd: {
    title: "মাদ্দ",
    meaning: "প্রসারিত করা বা লম্বা করা",
    video : "/videos/madd.mp4",
    diacritics: [
      {
        name: "AlifMadd",
        title: "আলিফ মাদ্দ / খাড়া যবর",
        description:
          "দুই চোয়াল আলাদা করে মুখ খোলা রেখে দীর্ঘ করে খাড়া যবর উচ্চারণ করতে হয়। বাংলা দীর্ঘ আ-কার এর মতো । যেমন :বাা بَا",
        symbol: "\u0657", // ـٰ
        unicode: "U+0670",
        indication: ["U+064E", "U+0627", "U+200B"], //"Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "আলিফ মাদ্দযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn: ["end", "middle", "start"],
          },
        ],
      },
      {
        name: "YaaMadd",
        title: "ইয়া মাদ্দ / খাড়া যের",
        description:
          "নিচের চোয়াল ঝুঁকিয়ে দীর্ঘ করে খাড়া যের উচ্চারণ করতে হয়।  বাংলা দীর্ঘ ই-কার এর মতো । যেমন : বী بٖ",
        symbol: "\u0656", // ـٰ
        unicode: "U+0656",
        indication: ["U+0650", "U+064A", "U+0652"], //"Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "ইয়া মাদ্দযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn: ["end", "middle", "start"],
          },
        ],
      },
      {
        name: "WaaoMadd",
        title: "ওয়াও মাদ্দ / উল্টা পেশ",
        description:
          "দুই ঠোট সম্পূর্ণভাবে গোল করে বাধাহীনভাবে দীর্ঘ স্বরে উল্টা পেশ উচ্চারণ করতে হয়।  বাংলা ঊ-কার এর মতো । যেমন :বূ بُ",
        symbol: "\u0657", // ـٰ
        unicode: "U+0657",
        indication: ["U+064F", "U+0648", "U+0652"], //"Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "ওয়াও মাদ্দযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn: ["end", "middle", "start"],
          },
        ],
      },
    ],
  },

  Tanween: {
    title: "তানভীন",
    meaning: "দুই যবর, দুই যের, দুই পেশ",
    video : "/videos/tanween.mp4",
    diacritics: [
      {
        name: "FathahTanween",
        title: "দুই যবর",
        description: "দুই চোয়াল আলাদা করে মুখ খোলা রেখে যবর এবং নুন সাকিন সহ দুই যবর উচ্চারণ করতে হয়। বাংলা আ-কার+ন্ এর মতো । যেমন :বান্ بَ",
        symbol: "\u064B", // ـً
        unicode: "U+064B",
        indication: ["U+064E", "U+0646", "U+0652"], // Represents 'an' sound (tanween)
        // "Indicates 'an' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "দুই যবরযুক্ত শব্দ",
            column: ["", "", "দুই যবর"],
            columnEn: ["", "", "start"],
          },
        ],
      },
      {
        name: "KasrahTanween",
        title: "দুই যের",
        description: "নিচের চোয়াল ঝুঁকিয়ে যের এবং নুন সাকিন সহ দুই যের উচ্চারণ করতে হয়।  বাংলা ই-কার+ন্ এর মতো । যেমন :বিন্ بِ",
        symbol: "\u064D", // ـٍ
        unicode: "U+064D",
        indication: ["U+0650", "U+0646", "U+0652"], // Represents 'in' sound (tanween)
        // "Indicates 'in' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "দুই যেরযুক্ত শব্দ",
            column: ["", "দুই যের", ""],
            columnEn: ["", "middle", ""],
          },
        ],
      },
      {
        name: "DhammahTanween",
        title: "দুই পেশ",
        description: "দুই ঠোট সম্পূর্ণভাবে গোল করে বাধাহীনভাবে পেশ এবং নুন সাকিন সহ দুই পেশ উচ্চারণ করতে হয়।  বাংলা উ-কার+ন্ এর মতো । যেমন :বুন্ بُ",
        symbol: "\u064C", // ـٌ
        unicode: "U+064C",
        indication: ["U+064F", "U+0646", "U+0652"], // Represents 'un' sound (tanween)
        // "Indicates 'un' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "দুই পেশযুক্ত শব্দ",
            column: ["দুই পেশ", "", ""],
            columnEn: ["end", "", ""],
          },
        ],
      },
    ],
  },

  shaddah: {
    title: "তাশদীদ",
    meaning: "দ্বিত্ববর্ণ",
    video : "/videos/tashdeed.mp4",
    diacritics: [
      {
        name: "AshShaddah",
        title: "তাশদীদ ",
        description: "তাশদীদ উচ্চারণের সময় বর্ণ দ্বিত্ব হয় অর্থ্যাৎ প্রথম বার সাকিন এবং দ্বিতীয় বার হরকত / মাদ্দ / তানভীন অনুসারে উচ্চারিত হয়। যেমন :ব্ব بّ",
        symbol: "\u0651", // ـّ
        unicode: "U+0651",
        indication: ["U+0652"], //"Indicates doubling (gemination)",
        pages: [
          {
            name: "Words_harakat",
            title: "তাশদীদ এবং হারকাত যুক্ত শব্দ",
            column: ["দ্বাম্মাহ এর সাথে", "কাসরাহ এর সাথে", "ফাতহাহ এর সাথে"],
            columnEn: ["end", "middle", "start"],
          },
          {
            name: "Words_tanween",
            title: "তাশদীদ এবং তানভীন যুক্ত শব্দ",
            column: [
              "দ্বাম্মাহ তানভীনের সাথে",
              "কাসরাহ তানভীনের সাথে",
              "ফাতহাহ তানভীনের সাথে",
            ],
            columnEn: ["end", "middle", "start"],
          },
          {
            name: "Words_madd",
            title: "তাশদীদ এবং মাদ্দ যুক্ত শব্দ",
            column: [
              "ওয়াও মাদ্দ এর সাথে",
              "ইয়া মাদ্দ এর সাথে",
              "আলিফ মাদ্দ এর সাথে",
            ],
            columnEn: ["end", "middle", "start"],
          },
        ],
      },
    ],
  },
};

// export async function sendDataToDjango(
//   sdata,
//   address,
//   method = "POST",
//   accessToken = null
// ) {
//   try {
//     const refreshToken = localStorage.getItem("refresh_token");
//     const accessToken = localStorage.getItem("access_token");
//     console.log("accessToken");
//     const options = {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };

//     // Only include body for methods that support it
//     if (method !== "DELETE") {
//       options.body = JSON.stringify(sdata);
//     }

//     const response = await fetch(address, options);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const result = await response.json();
//     console.log("Data sent successfully:", result);
//     location.reload();
//   } catch (error) {
//     console.error("Error sending data:", error);
//   }
// }

export async function sendDataToDjango(sdata, address, method = "POST") {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Only include body for methods that support it
    if (method !== "DELETE") {
      options.body = JSON.stringify(sdata);
    }

    const response = await fetch(address, options);
    console.log("sendDataToDjango", address, sdata, method, response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Data sent successfully:", result);
  } catch (error) {
    console.error("Error sending data:", error);
  }
  location.reload();
}

export async function receiveDataFromDjango(address) {
  try {
    const response = await fetch(address);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
    console.log("Data sent successfully:", result);
  } catch (error) {
    console.error("Error sending data:", error);
    return null;
  }
}

{
  /* ayah image container */
}
{
  /* <div
id="imageframe"
className="hidden z-20 fixed top-0 bg-gray-100 w-[1500px]"
>
<button
  className="w-8 h-8  bg-gray-100 rounded-lg hover:bg-red-200"
  onClick={() => {
    document.getElementById("imageframe").classList.toggle("hidden");
  }}
>
  <SquareX className="w-7 h-7 text-red-500"></SquareX>
</button> */
}
{
  /* <Audio
  folder={''}
/> */
}
{
  /* <button
  className="w-8 h-8  bg-gray-100 rounded-lg hover:bg-red-200"
  onClick={() => {
    const src = document
      .getElementById("image")
      .src.split("a/")[1]
      .split(/[_\.]/);
    console.log(
      "/wbw/" +
        src[0].padStart(3, "0") +
        "/" +
        reciter +
        "/" +
        src[0].padStart(3, "0") +
        src[1].padStart(3, "0") +
        ".mp3"
    );
    document.getElementById(position + id + "Audio").src =
      "/wbw/" +
      src[0].padStart(3, "0") +
      "/" +
      reciter +
      "/" +
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
</div> */
}
{
  /* refference table container */
}
{
  /* <table className="text-2xl table-auto border-collapse">
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
                <th className="border-2 font-bangla border-gray-500">
                  {" "}
                  স্থান{" "}
                </th>
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

                  <td className="border-2 border-gray-500"> */
}
{
  /* ayah ref */
}
//   <button
//     onClick={async () => {
//       const refAyah = await receiveDataFromDjango(
//         rootAddress +
//           "quran-words/filter_by_sura?sura=" +
//           item.sura +
//           "&aya=" +
//           item.aya
//       );
//       const src =
//         "/aba/" + item.sura + "_" + item.aya + ".png";
//       console.log(src);
//       document.getElementById("image").src = src;
//       document
//         .getElementById("imageframe")
//         .classList.toggle("hidden");

//       const ayah = refAyah
//         .map((item1) => item1.text)
//         .join(" ");
//       console.log(ayah);
//       document.getElementById("ayahShow").innerText = ayah;
//     }}
//   >
//     <BookOpenText className="w-7 h-7 text-green-800" />
//   </button>
// </td>
// <td className="border-2 border-gray-500">{item.sura}</td>
// <td className="border-2 border-gray-500">{item.aya}</td>
// <td className="border-2 border-gray-500">{item.position}</td>
// <td className="border-2 border-gray-500">{item.text}</td>
// <td className="border-2 border-gray-500 ">
//   {/* every word audio */}
//   <button
//     onClick={async () => {
//       try {
//         const src =
//           "/wbw" + item.audio.substring(0, 4) + item.audio;
//         console.log(src);
//         document.getElementById(position + id + "Audio").src =
//           src;
//         document
//           .getElementById(position + id + "Audio")
//           .play();
//         document.getElementById(
//           position + id + "Audio"
//         ).classList = "hidden";
//       } catch (error) {
//         console.error("❌ Error fetching data:", error);
//       }
//     }}
//   >
//     <CirclePlay className="w-7 h-7 text-green-500" />
//   </button>
// </td>
// <td className="border-2 border-gray-500">
//   {/* ayah ref audio */}
//           <button
//             onClick={async () => {
//               try {
//                 const src =
//                   "/wbw" +
//                   item.audio.substring(0, 4) +
//                   "/" +
//                   reciter +
//                   "" +
//                   item.audio.substring(0, 4) +
//                   item.audio.substring(5, 8) +
//                   ".mp3";
//                 console.log(src);
//                 document.getElementById(position + id + "Audio").src =
//                   src;
//                 document
//                   .getElementById(position + id + "Audio")
//                   .play();
//                 document.getElementById(
//                   position + id + "Audio"
//                 ).classList = "hidden";
//               } catch (error) {
//                 console.error("❌ Error fetching data:", error);
//               }
//             }}
//           >
//             <CirclePlay className="w-7 h-7 text-red-500" />
//           </button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>

console.log("data.js");
export const rootAddresses = ["https://rmn30654.pythonanywhere.com"+"/","http://localhost:8000/"];
export const rootAddress= rootAddresses[1];

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
        backgroundColor: "bg-green-50",
        textColor: "text-green-900",
        description: "Pale green & dark green",
      },
      {
        backgroundColor: "bg-yellow-100",
        textColor: "text-gray-900",
        description: "Light yellow & dark gray",
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
];
// console.log(alphabetColorCombinations[0].combinations[0].backgroundColor);
// let cl = alphabetColorCombinations[0].combinations[1];
// console.log(cl);

export const arabicDiacritics = {
  "": {
    title: "বর্ণমালা",
    diacritics: [],
  },
  Harakat: {
    title: "হরকত",
    diacritics: [
      {
        name: "Fathah",
        title: "যবর",
        symbol: "\u064E", // ـَ
        unicode: "U+064E",
        description: "Short 'a' sound",
        pages: [
          {
            name: "Words",
            title: "যবরযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn : ['end', 'middle', 'start'],
          },
        ],
      },
      {
        name: "Kasrah",
        title: "যের",
        symbol: "\u0650", // ـِ
        unicode: "U+0650",
        description: "Short 'i' sound",
        pages: [
          {
            name: "Words",
            title: "যেরযুক্ত শব্দ",
            column: ["", "", "উদাহরন"],
            columnEn : ['', '', 'start'],
          },
        ],
      },
      {
        name: "Dhammah",
        title: "পেশ",
        symbol: "\u064F", // ـُ
        unicode: "U+064F",
        description: "Short 'u' sound",
        pages: [
          {
            name: "Words",
            title: "পেশযুক্ত শব্দ",
            column: ["", "", "উদাহরন"],
            columnEn : ['', '', 'start'],
          },
        ],
      },
    ],
  },

  Tanween: {
    title: "তানভীন",
    diacritics: [
      {
        name: "FathahTanween",
        title: "দুই যবর",
        symbol: "\u064B", // ـً
        unicode: "U+064B",
        description: "Indicates 'an' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "দুই যবরযুক্ত শব্দ",
            column: ["", "", "দুই যবর"],
            columnEn : ['', '', 'start'],
          },
        ],
      },
      {
        name: "KasrahTanween",
        title: "দুই যের",
        symbol: "\u064D", // ـٍ
        unicode: "U+064D",
        description: "Indicates 'in' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "দুই যেরযুক্ত শব্দ",
            column: ["", "দুই যের", ""],
            columnEn : ['', 'middle', ''],
          },
        ],
      },
      {
        name: "DhammahTanween",
        title: "দুই পেশ",
        symbol: "\u064C", // ـٌ
        unicode: "U+064C",
        description: "Indicates 'un' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "দুই পেশযুক্ত শব্দ",
            column: ["দুই পেশ", "", ""],
            columnEn : ['end', '', ''],
          },
        ],
      },
    ],
  },
  Madd: {
    title: "মদ",
    diacritics: [
      {
        name: "AlifMadd",
        title: "আলিফ মদ / খাড়া যবর",
        symbol: "\u0657", // ـٰ
        unicode: "U+0670",
        description: "Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "আলিফ মাদ্দযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn : ['end', 'middle', 'start'],
          },
        ],
      },
      {
        name: "YaaMadd",
        title: "ইয়া মদ / খাড়া যের",
        symbol: "\u0656", // ـٰ
        unicode: "U+0656",
        description: "Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "ইয়া মাদ্দযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn : ['end', 'middle', 'start'],
          },
        ],
      },
      {
        name: "WaaoMadd",
        title: "ওয়াও মদ / উল্টা পেশ",
        symbol: "\u0657", // ـٰ
        unicode: "U+0657",
        description: "Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "ওয়াও মাদ্দযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn : ['end', 'middle', 'start'],
          },
        ],
      },
    ],
  },

  others: {
    title: "সাকিন & তাশদীদ",
    diacritics: [
      {
        name: "Saakinah",
        title: "সাকিন",
        symbol: "\u0652", // ـْ
        unicode: "U+0652",
        description: "No vowel (silent letter)",
        pages: [
          {
            name: "Words",
            title: "সাকিনযুক্ত শব্দ",
            column: ["শেষে", "মধ্যে", "শুরুতে"],
            columnEn : ['end', 'middle', 'start'],
          },
        ],
      },
      {
        name: "AshShaddah",
        title: "তাশদীদ",
        symbol: "\u0651", // ـّ
        unicode: "U+0651",
        description: "Indicates doubling (gemination)",
        pages: [
          {
            name: "Words_harakat",
            title: "তাশদীদ এবং হারকাত যুক্ত শব্দ",
            column: ["দ্বাম্মাহ এর সাথে", "কাসরাহ এর সাথে", "ফাতহাহ এর সাথে"],
            columnEn : ['end', 'middle', 'start'],
          },
          {
            name: "Words_tanween",
            title: "তাশদীদ এবং তানভীন যুক্ত শব্দ",
            column: ["দ্বাম্মাহ তানভীনের সাথে", "কাসরাহ তানভীনের সাথে", "ফাতহাহ তানভীনের সাথে"],
            columnEn : ['end', 'middle', 'start'],
          },
          {
            name: "Words_madd",
            title: "তাশদীদ এবং মাদ্দ যুক্ত শব্দ",
            column: ["ওয়াও মাদ্দ এর সাথে", "ইয়া মাদ্দ এর সাথে", "আলিফ মাদ্দ এর সাথে"],
            columnEn : ['end', 'middle', 'start'],
          },
        ],
      },
    ],
  },
};



export async function sendDataToDjango(sdata, address, method = "POST", accessToken=null) {
  try {
    // const response = await fetch(address, {
    //   method: method,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(sdata),
    // });
    console.log(accessToken);
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`,
      },
    };

    // Only include body for methods that support it
    if (method !== "DELETE") {
      options.body = JSON.stringify(sdata);
    }

    const response = await fetch(address, options);


    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Data sent successfully:", result);
    location.reload();
  } catch (error) {
    console.error("Error sending data:", error);
  }
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

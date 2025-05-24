import React, { useState } from "react";
import Audio from "./Audio";
import { Circle } from "lucide-react";
export default function QuranRead() {
  const [sura, setSura] = useState("");
  const [aya, setAya] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setData(null);

    let url = `https://rmn30654.pythonanywhere.com/quran-words/filter_by_sura/?sura=${sura}`;
    if (aya) {
      url += `&aya=${aya}`;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] mx-auto mt-10 p-4 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Quran Word Fetcher
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sura
          </label>
          <input
            type="number"
            value={sura}
            onChange={(e) => setSura(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Aya (optional)
          </label>
          <input
            type="number"
            value={aya}
            onChange={(e) => setAya(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Fetch Words
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {data && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Results:</h2>
          <div className="text-4xl" dir="rtl">
            {data.map((i) => (
              <>
                {i.text ? (
                  <button className="hover:bg-green-100"
                    onClick={() => {
                      document.getElementById("Audio").src =
                        "/wbw" + i.audio.substring(0, 4) + i.audio;
                      document.getElementById("Audio").play();
                      document.getElementById("Audio").classList = "hidden";
                    }}
                  >
                    {i.text + " "}
                    
                  </button>
                ) : (
                  <button className=""
                    onClick={() => {
                      console.log(i);
                      document.getElementById("Audio").src =
                        "/wbw/" +
                        String(i.sura).padStart(3, "0") +
                        "/" +
                        String(i.sura).padStart(3, "0") +
                        String(i.aya).padStart(3, "0") +
                        ".mp3";
                      document.getElementById("Audio").play();
                      document.getElementById("Audio").classList = "hidden";
                    }}
                  >
                    <Circle className="w-8 p-2"></Circle>{" "}
                  </button>
                )}
              </>
            ))}
          </div>
          {/* <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {JSON.stringify(data, null, 2)}
          </pre> */}
        </div>
      )}

      <audio controls id={`Audio`} className="hidden">
        <source src="" type="audio/mpeg" />
        The Word can't be found in Quran words database.
      </audio>
    </div>
  );
}

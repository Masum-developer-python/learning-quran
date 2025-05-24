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
    if(sura<1 || sura >114)
    {
      setError("Number of Surah is wrong");
    }
    let url = `https://rmn30654.pythonanywhere.com/quran-words/filter_by_sura/?sura=${sura}`;
    if (aya) {
      url += `&aya=${aya}`;
    }

    try {
      const res = await fetch(url);
      console.log(res);
      if (!res.ok) throw new Error("Failed to fetch");
      const result = await res.json();
      if(result.length != 0)
        setData(result);
      else
        setError("Ayah Number not exist");
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
      {error && <p className="mt-4 text-red-600"><pre>{error}</pre></p>}
      {!error && data && (
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Results:</h2>
          <Audio 
          folder = 'wbw/'
          fileName= {String(data[0].sura).padStart(3, "0") + "/" +
            String(data[0].sura).padStart(3, "0") +
          ".mp3"}
          />
          <div className="text-4xl" dir="rtl">
            {data.map((i) => (
              <>
                {i.text ? (
                  <Audio 
                  folder="/wbw"
                  fileName={i.audio.substring(0, 4) + i.audio}
                >
                  <span>{i.text + " "}</span>
                </Audio>
                
                  
                ) : (
                  <Audio 
                    folder = "/wbw/"
                    fileName={
                      String(i.sura).padStart(3, "0") +
                        "/" +
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
      )}
      
    </div>
  );
}

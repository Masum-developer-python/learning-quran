import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  alphabetColorCombinations,
  arabicDiacritics,
  receiveDataFromDjango,
} from "./data";

import Nav from "./components/Nav";

import Cards from "./pages/LetterCard";
import Words from "./pages/WordMaker";
import Table from "./pages/wordTable";
import Blog from "./pages/Blog";
import Home from "./pages/home";
import { Login } from "./pages/login";
import Logout from "./pages/logout";
import QuranRead from "./pages/QuranRead";

function App() {
  console.log("App.jsx");
  console.log(arabicDiacritics.Harakat.diacritics[0].pages[0].column);
  const [arabicAlphabet, setArabicAlphabet] = useState([]);

  let rootAddress = localStorage.getItem("rootAddress");
  console.log(rootAddress);
  useEffect(() => {
    async function fetchData() {
      const data = await receiveDataFromDjango(
        rootAddress + "arabic-alphabets/"
      );
      setArabicAlphabet(data); // ✅ Update state with fetched data
    }
    fetchData();
  }, []);

  // Initialize state from localStorage or default values
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const saved = localStorage.getItem("arabic-app-theme");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return alphabetColorCombinations[1];
      }
    }
    return alphabetColorCombinations[1];
  });
  const [selectedColor, setSelectedColor] = useState(() => {
    const saved = localStorage.getItem("arabic-app-color");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return selectedTheme.combinations[0];
      }
    }
    return selectedTheme.combinations[0];
  });

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("arabic-app-theme", JSON.stringify(selectedTheme));
  }, [selectedTheme]);

  // Save to localStorage when color changes
  useEffect(() => {
    localStorage.setItem("arabic-app-color", JSON.stringify(selectedColor));
  }, [selectedColor]);

  const reciterList = [
    { name: "Shuraim", folder: "Shuraim" },
    // Add more reciterList as needed
  ];
  const [selectedReciter, setSelectedReciter] = useState(() => {
    const saved = localStorage.getItem("arabic-app-reciter");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed?.folder ? parsed : reciterList[0];
      } catch {
        return reciterList[0];
      }
    }
    return reciterList[0];
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("arabic-app-reciter", JSON.stringify(selectedReciter));
    console.log(selectedReciter);
  }, [selectedReciter]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 w-[100%] h-full mb-10">
        <Nav
          selectedColor={selectedColor}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          setSelectedColor={setSelectedColor}
          alphabetColorCombinations={alphabetColorCombinations}
          selectedReciter={selectedReciter}
          setSelectedReciter={setSelectedReciter}
          reciterList={reciterList}
        />
        <div className="flex-1 fixed left-40 top-0 bottom-12 right-0 overflow-y-auto">
          <Router>
            <main className=" flex w-[calc(100%-10px)] pb-4">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />

                <Route
                  path="/quran"
                  element={<QuranRead selectedColor={selectedColor} />}
                />
                <Route
                  key={10}
                  path={`/`}
                  element={
                    <Cards
                      selectedColor={selectedColor}
                      withHoverChildren={true}
                      arabicAlphabet={arabicAlphabet}
                    />
                  }
                />
                <Route
                  key={0}
                  path={`/letter`}
                  element={
                    <Cards
                      selectedColor={selectedColor}
                      withHoverChildren={true}
                      arabicAlphabet={arabicAlphabet}
                    />
                  }
                />
                <Route
                  key={1}
                  path={`/tables`}
                  element={
                    <Table
                      selectedColor={selectedColor}
                      arabicAlphabet={arabicAlphabet}
                    />
                  }
                />
                <Route
                  key={2}
                  path={`/words`}
                  element={
                    <Words
                      selectedColor={selectedColor}
                      arabicAlphabet={arabicAlphabet}
                    />
                  }
                />
                {Object.keys(arabicDiacritics).map((category) =>
                  arabicDiacritics[category].diacritics.map((route, index) => (
                    <>
                      <Route
                        key={`${index}0`}
                        path={`/${category.toLowerCase()}`}
                        element={
                          <Blog
                            selectedColor={selectedColor}
                            diacritics={`${category}`}
                          />
                        }
                      />
                      <Route
                        key={`${index}1`}
                        path={`/${category.toLowerCase()}/${route.name.toLowerCase()}`}
                        element={
                          <Cards
                            arabicAlphabet={arabicAlphabet}
                            selectedColor={selectedColor}
                            diacritics={route}
                            arabicAlphabetDiacritics={route.unicode.slice(2)}
                            withNames={route.withNames}
                            title={route.title}
                            isSaakinah={
                              route.name.toLowerCase() === "ashshaddah" ||
                              route.name.toLowerCase() === "saakinah"
                            }
                            isSaddah={route.name.toLowerCase() === "ashshaddah"}
                            audioFolder={`/${category.toLowerCase()}/${route.name.toLowerCase()}`}
                          />
                        }
                      />
                      {(route.pages || []).map((page, pageIndex) => (
                        <Route
                          key={`${category}-${index}-${pageIndex}-page`}
                          path={`/${category.toLowerCase()}/${route.name.toLowerCase()}${page.name.toLowerCase()}`}
                          element={
                            <Table
                              arabicAlphabet={arabicAlphabet}
                              selectedColor={selectedColor}
                              title={page.title}
                              diacritics={route.name.toLowerCase()}
                              arabicAlphabetDiacritics={route.unicode.slice(2)}
                              tableColumn={page.column}
                              page={page}
                            />
                          }
                        />
                      ))}
                    </>
                  ))
                )}
              </Routes>
            </main>
          </Router>
        </div>
      </div>
      <footer
        className="h-12 relative w-[calc(100%-150px)] left-40 flex items-center justify-center text-center font-sans
        text-[#555] border-t border-[#eaeaea] text-base rounded-lg"
      >
        Al Quran Learning | Developed by{" "}
        <strong>
          Masum @{" "}
          <button title="Rufaidah" className="text-green-500">
            <em>R </em>
          </button>
          <button title="Ataullah" className="text-red-500">
            <em>A </em>
          </button>
          <button title="Rukaiyah" className="text-green-500">
            <em>R</em>
          </button>{" "}
          E Academy
        </strong>
      </footer>
    </div>
  );
}

export default App;

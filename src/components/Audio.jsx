import { CirclePlay } from "lucide-react";
export default function Audio({ folder, fileName, children }) {
  console.log(folder, fileName);
  const selectedcolor = localStorage.getItem("arabic-app-color");
  return (
    <>
      <button
        className={` ${selectedcolor.backgroundColor} hover:bg-red-200`}
        onClick={() => {
          console.log(folder, fileName);
          document.getElementById("Audio").src = folder + fileName;
          document.getElementById("Audio").play();
          document.getElementById("Audio").classList = "hidden";
        }}
      >
        {children ? children :
        <CirclePlay className={`w-8 h-8 ${selectedcolor.textColor}`} />}
      </button>
      <audio controls id={`Audio`} className="hidden">
        <source src="" type="audio/mpeg" />
        The Word can't be found in Quran words database.
      </audio>
    </>
  );
}

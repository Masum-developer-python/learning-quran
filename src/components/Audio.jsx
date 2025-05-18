import { CirclePlay } from "lucide-react";
export default function Audio({ folder, fileName }) {
  console.log(folder, fileName);
  const selectedcolor = localStorage.getItem("arabic-app-color");
  return (
    <>
      <button
        className={`w-10 h-10 flex-1 flex items-center justify-center rounded-lg ${selectedcolor.backgroundColor} hover:bg-red-200`}
        onClick={() => {
          console.log(folder, fileName);
          document.getElementById("Audio").src = folder + fileName;
          document.getElementById("Audio").play();
          document.getElementById("Audio").classList = "hidden";
        }}
      >
        <CirclePlay className={`w-8 h-8 ${selectedcolor.textColor}`} />
      </button>
      <audio controls id={`Audio`} className="hidden">
        <source src="" type="audio/mpeg" />
        The Word can't be found in Quran words database.
      </audio>
    </>
  );
}

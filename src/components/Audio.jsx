import { CirclePlay } from "lucide-react";
export default function Audio({ folder, fileName, children, title="click me", card = false }) {
  // console.log(folder, fileName);
  const selectedcolor = localStorage.getItem("arabic-app-color");
  // console.log(selectedcolor);
  return (
    <>
      <button 
        title={title}
        className={` ${card ? "w-full" : ""}`}
        onClick={() => {
          console.log(folder+fileName);
          document.getElementById("Audio").src = folder + fileName;
          document.getElementById("Audio").play();
          document.getElementById("Audio").classList = "hidden";
        }}
      >
        {children ? children :
        <CirclePlay className={`w-4 h-4 md:w-8 md:h-8 hover:text-green-900 ${selectedcolor.textColor}`} />}
      </button>
      <audio controls id={`Audio`} className="hidden">
        <source src="" type="audio/mpeg" />
        The Word can't be found in Quran words database.
      </audio>
    </>
  );
}

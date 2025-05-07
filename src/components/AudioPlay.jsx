import { CirclePlay } from "lucide-react";
export default function Audio({ folder, fileName }) {
  console.log(folder, fileName);
  return (
    <>
      <button
        className="w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200"
        onClick={() => {
          console.log(folder, fileName);
          document.getElementById("Audio").src = folder + fileName;
          document.getElementById("Audio").play();
          document.getElementById("Audio").classList = "hidden";
        }}
      >
        <CirclePlay className="w-3 h-3 text-red-500" />
      </button>
      <audio controls id={`Audio`} className="hidden">
        <source src="" type="audio/mpeg" />
        The Word can't be found in Quran words database.
      </audio>
    </>
  );
}

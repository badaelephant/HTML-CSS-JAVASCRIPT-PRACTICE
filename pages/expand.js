import { useState } from "react";

export default function Expand() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    console.log("click");
    setIsOpen(!isOpen);
    if (isOpen) document.getElementById("content").style.maxHeight = "10rem";
    else document.getElementById("content").style.maxHeight = "0rem";
  };
  return (
    <div className="flex justify-center w-screen h-screen items-center">
      <div className="flex flex-col w-96 h-48">
        <div
          className="h-8 bg-green-600 flex rounded-t-lg border-b-2 border-green-300 shadow "
          onClick={onClickButton}
        >
          <button className="pl-4 text-white ">CLICK</button>
          <span className="ml-auto pr-4 text-white font-bold">
            {isOpen ? "+" : "-"}
          </span>
        </div>
        <div
          id="content"
          className={
            "overflow-hidden transition-all duration-700 ease-in-out rounded-b-lg"
          }
        >
          <div className="pl-4 w-96 h-40 bg-green-100 font-mono italic text-gray-600">
            CONTENT GOES HERE
          </div>
        </div>
      </div>
    </div>
  );
}

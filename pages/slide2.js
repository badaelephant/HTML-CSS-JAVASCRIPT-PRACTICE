import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import tw from "tailwind-styled-components";
export function Container() {
  const ref = useRef(0);
  const [index, setIndex] = useState(0);
  const movies = [
    { idx: 0, src: "/images/jocker.jpg" },
    { idx: 1, src: "/images/avengers.jpg" },
    { idx: 2, src: "/images/blackwidow.jpg" },
    { idx: 3, src: "/images/adventure.jpg" },
  ];
  const Button = tw.button`
  bg-green-600 py-2 px-4 rounded-lg border shadow text-white
  `;
  const moveRight = () => {
    ref.current = getNextValue(ref.current);
  };
  const getNextValue = (i) => {
    if (i === movies.length - 1) return 0;
    return i + 1;
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     moveRight();
  //     setIndex(ref.current);
  //   }, 2000);
  // }, []);

  return (
    <div className="flex items-center space-x-4">
      <div
        style={{
          width: "300px",
          height: "500px",
          overflow: "hidden",
        }}
      >
        <div
          id="slider"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "1200px",
            transition: "0.3s ease",
          }}
        >
          <Image src={movies[index].src} width="300px" height="500px" alt="" />
        </div>
      </div>
    </div>
  );
}

export default function Slide() {
  return <Container />;
}

import Image from "next/image";
import { useState } from "react";
import tw from "tailwind-styled-components";
export function Container() {
  const [index, setIndex] = useState(0);
  const movies = [
    { src: "/images/jocker.jpg" },
    { src: "/images/avengers.jpg" },
    { src: "/images/blackwidow.jpg" },
    { src: "/images/adventure.jpg" },
  ];
  const Button = tw.button`
  bg-green-600 py-2 px-4 rounded-lg border shadow text-white
  `;
  const moveRight = () => {
    if (index === movies.length - 1) return index;
    setIndex((index += 1));
    document.getElementById("slider").style.transform = `translateX(-${
      index * 300
    }px)`;
  };
  const moveLeft = () => {
    setIndex((index -= 1));
    document.getElementById("slider").style.transform = `translateX(-${
      index * 300
    }px)`;
  };

  return (
    <div className="flex items-center space-x-4">
      <Button id="prev_btn" onClick={moveLeft}>
        PREV
      </Button>
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
          {movies.map((movie, i) => (
            <Item key={i} src={movie.src} />
          ))}
        </div>
      </div>
      <Button id="next_btn" onClick={moveRight}>
        NEXT
      </Button>
    </div>
  );
}
export function Item({ src }) {
  return <Image src={src} width="300px" height="500px" alt="" />;
}

export default function Slide() {
  return <Container />;
}

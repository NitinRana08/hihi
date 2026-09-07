import { useState } from "react";

export default function Proposal() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  function moveButton() {

    const randomX = Math.random() * 500 - 250;

    const randomY = Math.random() * 300 - 150;

    setPosition({
      x: randomX,
      y: randomY,
    });

  }

  return (

    <div className="h-screen flex flex-col justify-center items-center bg-pink-100">

      <h1 className="text-5xl font-bold mb-16 text-pink-600">

        ❤️ Will You Go On A Date With Me Bhumi? ❤️

      </h1>

      <div className="flex gap-10 relative">

        <button
          className="px-10 py-4 bg-pink-600 text-white rounded-full text-xl hover:scale-110 duration-300"
        >
          YES ❤️
        </button>

        <button
          onMouseEnter={moveButton}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="px-10 py-4 bg-gray-700 text-white rounded-full text-xl duration-300 absolute left-52"
        >
          NO 💔
        </button>

      </div>

    </div>

  );

}
import { useState } from "react";
import { motion } from "framer-motion";
import Background from "../Background/Background";

export default function PlacePicker({ onNext }) {
  const [selectedPlace, setSelectedPlace] = useState("");

  const places = [
    {
      emoji: "☕",
      title: "Cafe",
      desc: "Coffee & Conversations",
    },
    {
      emoji: "🎬",
      title: "Movie",
      desc: "Watch Together",
    },
    {
      emoji: "🍽️",
      title: "Dinner",
      desc: "Romantic Dinner",
    },
    {
      emoji: "🌅",
      title: "Sunset",
      desc: "Beautiful Evening",
    },
    {
      emoji: "🚗",
      title: "Long Drive",
      desc: "Music & Memories",
    },
    {
      emoji: "🍦",
      title: "Ice Cream",
      desc: "Sweet Moments",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 flex items-center justify-center px-6">

      <Background />

      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6 }}
        className="relative z-10 w-full max-w-4xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-10"
      >

        <h1 className="text-5xl font-bold text-center text-white">
          📍 Choose Our Date Place
        </h1>

        <p className="text-center text-white/90 mt-4 text-lg">
          Where should our beautiful memory begin? ❤️
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {places.map((place) => (

            <motion.div
              key={place.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              onClick={() => setSelectedPlace(place.title)}
              className={`
                cursor-pointer
                rounded-3xl
                p-6
                transition-all
                shadow-lg

                ${
                  selectedPlace === place.title
                    ? "bg-pink-500 text-white border-4 border-white"
                    : "bg-white text-pink-600"
                }
              `}
            >

              <div className="text-6xl text-center">
                {place.emoji}
              </div>

              <h2 className="text-2xl font-bold text-center mt-4">
                {place.title}
              </h2>

              <p className="text-center mt-2 opacity-80">
                {place.desc}
              </p>

            </motion.div>

          ))}

        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          disabled={!selectedPlace}
          onClick={() => onNext(selectedPlace)}
          className={`
            w-full
            mt-10
            py-4
            rounded-2xl
            text-xl
            font-bold
            transition

            ${
              selectedPlace
                ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          `}
        >
          Continue ❤️
        </motion.button>

      </motion.div>

    </div>
  );
}
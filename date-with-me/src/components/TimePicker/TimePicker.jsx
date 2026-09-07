import { motion } from "framer-motion";
import Background from "../Background/Background";
import { useState } from "react";

export default function TimePicker({ onNext }) {

  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "🌅 9:00 AM",
    "☀️ 12:00 PM",
    "🌇 5:00 PM",
    "🌙 7:00 PM",
    "🌃 9:00 PM",
    "✨ Surprise Me"
  ];

  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 flex items-center justify-center">

      <Background />

      <motion.div

        initial={{ opacity:0, scale:.8 }}

        animate={{ opacity:1, scale:1 }}

        className="relative z-10 w-full max-w-xl p-8 rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl"

      >

        <h1 className="text-5xl font-bold text-center text-white">

          ⏰ Choose Time

        </h1>

        <p className="text-center text-white/90 mt-3">

          When should our date begin?

        </p>

        <div className="grid grid-cols-2 gap-5 mt-10">

          {times.map((time)=>(

            <motion.button

              whileHover={{ scale:1.05 }}

              whileTap={{ scale:.95 }}

              key={time}

              onClick={()=>setSelectedTime(time)}

              className={`

              rounded-2xl

              p-5

              text-lg

              font-semibold

              transition

              ${
                selectedTime===time

                ?

                "bg-pink-500 text-white"

                :

                "bg-white text-pink-600"

              }

              `}

            >

              {time}

            </motion.button>

          ))}

        </div>

        <button

          disabled={!selectedTime}

          onClick={()=>onNext(selectedTime)}

          className={`

          mt-10

          w-full

          py-4

          rounded-2xl

          text-xl

          font-bold

          transition

          ${
            selectedTime

            ?

            "bg-gradient-to-r from-pink-500 to-red-500 text-white"

            :

            "bg-gray-300 text-gray-500"

          }

          `}

        >

          Continue ❤️

        </button>

      </motion.div>

    </div>

  );

}
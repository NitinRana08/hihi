import { useState } from "react";
import { motion } from "framer-motion";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";
import "./DatePicker.css";
import "react-datepicker/dist/react-datepicker.css";

import Background from "../Background/Background";

export default function DatePicker({ onNext }) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 flex items-center justify-center px-6">

      <Background />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-lg backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8"
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-5xl font-bold text-center text-white"
        >
          ❤️ Our First Date ❤️
        </motion.h1>

        <p className="text-center  text-pink-400 mt-4 ">
          Every beautiful story starts with a single date ✨
        </p>

        <div className="mt-8 flex justify-center">
          <ReactDatePicker
            inline
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
          />
        </div>

        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-2xl bg-white/25 backdrop-blur-lg p-5 text-center"
          >
            <p className=" text-pink-400 text-lg">
              💕 Selected Date
            </p>

            <h2 className="text-3xl font-bold  mt-2  text-red-500">
              {format(selectedDate, "EEEE")}
            </h2>

            <p className="text-xl text-pink-400 mt-2">
              {format(selectedDate, "dd MMMM yyyy")}
            </p>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!selectedDate}
          onClick={() => onNext(selectedDate)}
          className={`w-full mt-8 py-4 rounded-2xl text-xl font-bold transition-all
          ${
            selectedDate
              ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg hover:shadow-pink-500/40"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue ❤️
        </motion.button>
      </motion.div>
    </div>
  );
}
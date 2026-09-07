import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Background from "../Background/Background";

export default function Success() {
  useEffect(() => {
    const duration = 3000;

    const end = Date.now() + duration;

    const interval = setInterval(() => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 80,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 8,
        angle: 120,
        spread: 80,
        origin: { x: 1 },
      });

      if (Date.now() > end) {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 flex items-center justify-center px-6">

      <Background />

      <motion.div
        initial={{ scale: .6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: .8 }}
        className="relative z-10 w-full max-w-xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-10 text-center"
      >

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="text-8xl"
        >
          ❤️
        </motion.div>

        <h1 className="text-5xl font-bold text-white mt-5">
          It's Official!
        </h1>

        <p className="text-white text-xl mt-6 leading-9">
          Our date has been planned successfully.
          <br />
          I seriously can't wait to meet you. 🥹❤️
        </p>

        <div className="mt-10 bg-white rounded-3xl p-6">

          <h2 className="text-2xl font-bold text-pink-600">
            💌 See You Soon
          </h2>

          <p className="mt-3 text-gray-600">
            
            
            This is going to be one of my favorite memories.
          </p>

        </div>

      </motion.div>
    </div>
  );
}
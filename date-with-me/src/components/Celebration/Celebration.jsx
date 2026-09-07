import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Celebration({ onFinish }) {
  useEffect(() => {
    // Continuous Confetti
    const duration = 4000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 6,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    const timer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-pink-500 via-rose-400 to-red-500">

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{
            y: "110vh",
            x: Math.random() * window.innerWidth,
            opacity: 0.4,
          }}
          animate={{
            y: "-10vh",
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 4,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Glass Card */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl shadow-2xl p-12 w-[90%] max-w-xl"
      >
        {/* Animated Heart */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
          className="flex justify-center"
        >
          <FaHeart
            size={90}
            className="text-red-500 drop-shadow-[0_0_25px_red]"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-6xl font-extrabold text-white"
        >
          Yayyyyy!! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-2xl text-white"
        >
          I knew you'd say
        </motion.p>

        <motion.h2
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="mt-2 text-5xl font-bold text-yellow-300"
        >
          YES ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-lg text-white/90"
        >
          Preparing something special for you...
        </motion.p>

        {/* Loading dots */}
        <motion.div
          className="mt-6 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 rounded-full bg-white"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: dot * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
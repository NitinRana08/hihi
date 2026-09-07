import { motion } from "framer-motion";
import Background from "../Background/Background";

export default function SendingLoader() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 flex items-center justify-center">

      <Background />

      <div className="relative z-10 w-full max-w-4xl">

        <motion.h1

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          className="text-6xl font-bold text-white text-center"

        >
          Sending Your Response ❤️
        </motion.h1>

        <p className="text-center text-white mt-6 text-xl">
          Delivering your answer...
        </p>

        {/* Line */}

        <div className="relative mt-32 h-2 bg-white/30 rounded-full overflow-hidden">

          <motion.div

            initial={{ x: "-100%" }}

            animate={{ x: "850%" }}

            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}

            className="absolute -top-10 text-6xl"

          >
            📩
          </motion.div>

        </div>

        <motion.div

          initial={{ scale: 0 }}

          animate={{
            scale: [0, 0, 1.2, 1],
          }}

          transition={{
            delay: 2.3,
            duration: .5,
          }}

          className="flex justify-end mt-2"

        >

          <div className="text-7xl">

            💌

          </div>

        </motion.div>

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: [0, 0, 1] }}

          transition={{
            delay: 2.6,
          }}

          className="text-center mt-12 text-3xl text-white font-semibold"

        >

          Delivered Successfully ❤️

        </motion.p>

      </div>

    </div>
  );
}
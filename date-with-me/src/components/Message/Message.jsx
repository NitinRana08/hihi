import { useState } from "react";
import { motion } from "framer-motion";
import Background from "../Background/Background";

export default function Message({ onNext }) {

    const [message, setMessage] = useState("");

    return (

        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 flex items-center justify-center px-6">

            <Background />

            <motion.div

                initial={{ opacity: 0, scale: .8 }}

                animate={{ opacity: 1, scale: 1 }}

                transition={{ duration: .6 }}

                className="relative z-10 w-full max-w-2xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-10"

            >

                <h1 className="text-5xl text-center font-bold text-white">
                    💬 One Last Thing
                </h1>

                <p className="text-center text-white/90 mt-4 text-lg">
                    Leave me a message <span className="text-red-400">MY LOVE ❤️</span>
                </p>

                <textarea

                    rows={7}

                    maxLength={300}

                    value={message}

                    onChange={(e) => setMessage(e.target.value)}

                    placeholder="Write anything... I'm excited to read it ❤️"

                    className="
          mt-8
          w-full
          rounded-3xl
          p-6
          resize-none
          outline-none
          text-lg
          bg-white
          shadow-xl
          "

                />

                <div className="flex justify-between mt-3 text-white">

                    <span>
                       characters limit - Write as much as your heart feels ❤️
                    </span>

                    {/* <span className={hideCount ? "opacity-0" : ""}>
                        {message.length}/1000
                    </span> */}

                </div>

                <motion.button

                    whileHover={{ scale: 1.05 }}

                    whileTap={{ scale: .95 }}

                    disabled={!message.trim()}

                    onClick={() => onNext(message)}

                    className={`

          mt-8

          w-full

          py-4

          rounded-2xl

          text-xl

          font-bold

          transition

          ${message.trim()

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
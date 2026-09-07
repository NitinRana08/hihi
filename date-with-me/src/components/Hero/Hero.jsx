import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Background from "../Background/Background";

export default function Hero({ onYes }) {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    function moveButton() {
        const randomX = Math.random() * 400 - 200;
        const randomY = Math.random() * 300 - 150;

        setPosition({
            x: randomX,
            y: randomY,
        });
    }

    return (
        <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300">

            <Background />

            <motion.h1
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl font-bold text-pink-700 z-10"
            >
                Will You Go On
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-5xl font-bold mt-3 text-red-500 z-10"
            >
                A Date With Me?
            </motion.h2>

            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                }}
                className="mt-8 z-10"
            >
                <FaHeart
                    size={80}
                    className="text-red-500"
                />
            </motion.div>

            {/* Buttons */}

            <div className="relative flex gap-10 mt-12 z-10">
                <button
                    onClick={onYes}
                    className="px-10 py-4 bg-pink-600 text-white rounded-full text-xl hover:scale-110 transition"
                >
                    YES ❤️
                </button>

                <button
                    onMouseEnter={moveButton}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                    }}
                    className="px-10 py-4 bg-gray-700 text-white rounded-full text-xl transition absolute left-52"
                >
                    NO 💔
                </button>

            </div>

        </section>
    );
}

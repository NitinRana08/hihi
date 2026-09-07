import { motion } from "framer-motion";
import { useState } from "react";

export default function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false);

  function handleOpen() {
    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 1500);
  }

  return (
    <div className="h-screen flex justify-center items-center bg-pink-100">

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: .95 }}
        onClick={handleOpen}
        className="cursor-pointer"
      >

        {!opened ? (

          <div className="w-72 h-48 bg-red-400 rounded-xl shadow-2xl flex items-center justify-center">

            <h1 className="text-5xl">
                💌
            </h1>

          </div>

        ) : (

          <motion.div

            initial={{ y:0 }}

            animate={{ y:-120 }}

            transition={{ duration:1 }}

            className="w-72 h-60 bg-white rounded-xl shadow-2xl flex items-center justify-center"

          >

            <h2 className="text-2xl font-bold text-pink-600">

                Dear...

            </h2>

          </motion.div>

        )}

      </motion.div>

    </div>
  );
}
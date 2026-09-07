import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {[...Array(25)].map((_, index) => (

        <motion.div
          key={index}

          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
            opacity: 0.3,
            scale: Math.random() * 0.8 + 0.5,
          }}

          animate={{
            y: "-100px",
          }}

          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}

          className="absolute text-pink-500 text-3xl"
        >
          ❤️
        </motion.div>
        

      ))}

    </div>
    
  );
}
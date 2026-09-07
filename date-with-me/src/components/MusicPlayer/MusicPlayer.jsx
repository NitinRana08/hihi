import { useEffect, useRef, useState } from "react";
import song from "../../assets/music/love.mp3";
import { motion } from "framer-motion";

export default function MusicPlayer({ play }) {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (play && audioRef.current && !playing) {
            audioRef.current
                .play()
                .then(() => setPlaying(true))
                .catch((err) => console.log(err));
        }
    }, [play, playing]);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={song}
                loop
            />

            {play && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={toggleMusic}
                    className="
      fixed
      bottom-6
      right-6
      z-50
      bg-white/20
      backdrop-blur-lg
      border
      border-white/30
      rounded-full
      px-5
      py-3
      text-white
      shadow-lg
      hover:scale-110
    "
                >
                    {playing ? "🔊 Music" : "🔇 Music"}
                </motion.button>
            )}

        </>
    );
}
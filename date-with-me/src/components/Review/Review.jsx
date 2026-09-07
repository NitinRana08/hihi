import { motion } from "framer-motion";
import { format } from "date-fns";
import Background from "../Background/Background";
import { sendProposalEmail } from "../../utils/email";

export default function Review({
    date,
    time,
    place,
    message,
    onConfirm,
}) {
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
                    ❤️ Our Date Plan ❤️
                </h1>

                <p className="text-center text-white/90 mt-3">
                    Everything looks perfect 🥹
                </p>

                <div className="mt-10 space-y-6">

                    <div className="bg-white rounded-2xl p-5">
                        <h2 className="text-pink-600 font-bold text-lg">
                            📅 Date
                        </h2>

                        <p className="text-2xl mt-2">
                            {format(date, "EEEE, dd MMMM yyyy")}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <h2 className="text-pink-600 font-bold text-lg">
                            ⏰ Time
                        </h2>

                        <p className="text-2xl mt-2">
                            {time}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <h2 className="text-pink-600 font-bold text-lg">
                            📍 Place
                        </h2>

                        <p className="text-2xl mt-2">
                            {place}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <h2 className="text-pink-600 font-bold text-lg">
                            💬 Message
                        </h2>

                        <p className="text-lg mt-2 italic">
                            "{message}"
                        </p>
                    </div>

                </div>

                <motion.button

                    whileHover={{ scale: 1.05 }}

                    whileTap={{ scale: .95 }}

                    onClick={async () => {

                        const success = await sendProposalEmail({
                            date,
                            time,
                            place,
                            message,
                        });

                        if (success) {
                            onConfirm();
                        } else {
                            alert("Failed to send 😢");
                        }

                    }}

                    className="w-full mt-10 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold"

                >
                    Confirm ❤️
                </motion.button>

            </motion.div>

        </div>
    );
}
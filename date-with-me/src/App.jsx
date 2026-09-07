import { useState } from "react";

import Hero from "./components/Hero/Hero";
import Celebration from "./components/Celebration/Celebration";
import DatePicker from "./components/DatePicker/DatePicker";
import TimePicker from "./components/TimePicker/TimePicker";
import PlacePicker from "./components/PlacePicker/PlacePicker";
import Message from "./components/Message/Message";
import Review from "./components/Review/Review";
import Success from "./components/Success/Success";
import SendingLoader from "./components/SendingLoader/SendingLoader";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

export default function App() {
  const [page, setPage] = useState("hero");

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [place, setPlace] = useState(null);
  const [message, setMessage] = useState("");
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <>
      {/* Hero */}
      {page === "hero" && (
        <Hero
          onYes={() => {
            setPlayMusic(true);
            setPage("celebration");
          }} />
      )}

      {/* Celebration */}
      {page === "celebration" && (
        <Celebration
          onFinish={() => setPage("date")}
        />
      )}

      {/* Date Picker */}
      {page === "date" && (
        <DatePicker
          onNext={(selectedDate) => {
            setDate(selectedDate);
            setPage("time");
          }}
        />
      )}

      {/* Time Picker */}
      {page === "time" && (
        <TimePicker
          onNext={(selectedTime) => {
            setTime(selectedTime);
            setPage("place");
          }}
        />
      )}

      {/* Place Picker */}
      {page === "place" && (
        <PlacePicker
          onNext={(selectedPlace) => {
            setPlace(selectedPlace);

            console.log({
              date,
              time,
              place: selectedPlace,
            });

            // Next page
            setPage("message");
          }}
        />
      )}
      {page === "message" && (
        <Message
          onNext={(userMessage) => {
            setMessage(userMessage);
            setPage("review");
          }}
        />
      )}
      {page === "review" && (
        <Review
          date={date}
          time={time}
          place={place}
          message={message}
          onConfirm={() => {
            setPage("loading");

            setTimeout(() => {

              setPage("success");

            }, 7000);

          }}

        />
      )}
      {page === "success" && (
        <Success />
      )}
      {page === "loading" && (

        <SendingLoader />

      )}
      <MusicPlayer play={playMusic} />

    </>
  );
}
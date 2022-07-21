import React, { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./component/Progress-bar.component";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const data = [
  { bgcolor: "#808080", completed: 60 },
  { bgcolor: "#5g5g5g", completed: 30 },
  { bgcolor: "blue", completed: 85 },
];

function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <Player autoplay loop src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json" style={{ height: "300px", width: "300px" }}>
        <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
      </Player>
      {data.map((item, index) => (
        <ProgressBar key={index} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      <ProgressBar bgcolor="green" completed={completed} />
    </div>
  );
}

export default App;

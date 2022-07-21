import React from "react";
import "./App.css";
import ProgressBar from "./component/Progress-bar.component";

const data = [
  { bgcolor: "#808080", completed: 60 },
  { bgcolor: "#5g5g5g", completed: 30 },
  { bgcolor: "blue", completed: 85 },
];

function App() {
  return (
    <div className="App">
      {data.map((item, index) => (
        <ProgressBar key={index} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
  );
}

export default App;

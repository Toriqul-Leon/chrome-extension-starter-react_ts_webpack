import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

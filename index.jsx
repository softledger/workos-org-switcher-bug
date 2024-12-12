import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import WorkosWithHistory from "./components/WorkosWithHistory";

function App() {
  return (
    <div>
      <h1>Hello React v17</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WorkosWithHistory>
        <App />
      </WorkosWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

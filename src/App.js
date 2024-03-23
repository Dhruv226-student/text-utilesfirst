import React, { useState } from "react";
import "./App.css";
// import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert2 from "./Component/Alert2";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode enabled Sucessfully", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled Sucessfully", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        
        <Navbar
          title="TextUttiles"
          aboutText="About TextUtTlies"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert2 alert={alert} />
        <div className="container">
        <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        </div>
    {/* <Routes > */}
            {/* <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            {/* </Route>
            </Routes> */}

      {/* </Router> */}
    </>
  );
}

export default App;

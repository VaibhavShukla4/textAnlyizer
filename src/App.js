import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  // Whether dark mode is enabled or not
  const [mode, setMode] = useState("light"); 
  const [textColor, setTextColor]=useState("white")
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
    if (mode === "light"||textColor==="white" ) {
      
      setMode("dark");
      setTextColor("dark")
      document.body.style.backgroundColor = "#042743";

      showAlert("","Dark mode has been enabled !");
    } else {
      setMode("light");
      setTextColor("white")
      document.body.style.backgroundColor = "white";
      
      showAlert("Light mode has been enabled !","");
    }
  };
  return (
    <>
      <Navbar
        title="Text-Anlyizer"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}
      />
      <Alert alert={alert} 

      />
      <div className="container my-3 text-center text-light">
        <TextForm
          showAlert={showAlert}
          heading="Text-Anlyizer "
          mode={mode}
          textColor={textColor}
        />
      </div>
    </>
  );
}

export default App;

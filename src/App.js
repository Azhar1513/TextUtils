import React, { useState } from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import About from './Components/About';
// import Alert from './components/Alert';
import Alert from './Components/Alert';
import Navbar from './components/Navbar';
// import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is dark or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/"
            // exact ko ham as leya use krty ha ta k react hamin exact page pr le jain react kabe kabe ghalat ho jata ha
              element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />}
            />
            
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

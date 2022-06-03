import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    console.log(mode)
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enabled', 'success')
      document.title = 'TextUtils - light mode'
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#0c2f76'
      showAlert('Dark mode enabled', 'success')
      document.title = 'TextUtils - Dark mode'
    }

  };

  const ColorPalet = (e) => {
    console.log('clicking me', e.target.value)
    document.body.style.backgroundColor = e.target.value;
  }

  return (

    <>
      {/* <Router>
        <Navbar title="TextUtils" aboutTxt="About us" mode={mode} ColorPalet={ColorPalet} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/"   element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router> */}


        <Navbar title="TextUtils" aboutTxt="About us" mode={mode} ColorPalet={ColorPalet} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <About /> */}
          <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
        </div>
    </>

  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Darkbutton from "./components/Darkbutton";
// import Dropdown from "./components/Dropdown";
// import Buttons from './components/Buttons';
// import Clocktime from './components/Clocktime';
// import Navbar from './components/Navbar';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import Dropdown from "./components/Dropdown";

import { BrowserRouter as Router,
      Routes,
      Route,
      // Link 
    } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const togglemode = (mdr) => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      // showlert("")
      showlert("Dark mode is on");
      // dynamically title changed
      // document.title = "text utisl dark mode";
    } else {
      setmode("light");
      showlert("light mode is on");
      document.body.style.backgroundColor = "white";
      // document.title = "text utisl light mode";
    }
  };
  return (
    <>
      <Router>
      <Navbar
          strt={mode}
          rad={togglemode}
          title="Text Utisl"
          c1="Home"
          c2="about"
        />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/About" element={ <Darkbutton />}></Route>
          <Route exact path="/" element={<TextForm alerts={showlert} heading="Enter the text to anlyze -- " strta={mode}/>}>
          </Route>
        </Routes>

        {/* if we dont give prop value then default props will use there value */}
        {/* <Navbar title = "Text Utisl" c1="Home" c2="about"/> */}

        {/* // textarea components */}
        {/* <TextForm alerts={showlert} heading="Enter the text to anlyze -- " strta={mode}/> */}
        {/* buttons */}
        {/* <Buttons name="Convert to Uppercase"/>
    <Buttons name="Convert to Lowercase"/> */}

        {/* clock component */}
        {/* <Clocktime/> */}

        {/* dark buutton component */}
        {/* <Darkbutton /> */}

        {/* drop-downmmenue */}
        {/* <Dropdown/> */}
      </Router>
    </>
  );
}
 
export default App;
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alerts from "./components/Alerts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


document.body.style.backgroundColor = "#071C21";
document.body.style.color = "#FFEBA1";



function App() {
  const [Mode, setMode] = useState("dark");

  const [alert, setAlert] = useState({
    msg: "Hide",
    type: "",
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#071C21";
      document.body.style.color = "#FFEBA1";
      document.querySelector("nav").style.color = "green";
      showAlert("Dark Mode Has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#75c3d8";
      document.body.style.color = "#060930";
      showAlert("Light Mode Has been Enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Text Utility" mode={Mode} toggleMode={toggleMode}></Navbar>
      <Alerts alert={alert}></Alerts>

      <div className="container mr-4">
        <Switch>
          <Route exact path="/about">
            <About mode={Mode}></About>
          </Route>
          <Route exact path="/">
            <TextForm
              heading="Text Utility - Manipulate your text easily"
              showAlert={showAlert}
            ></TextForm>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//Exporting this app file for other Component files by React
export default App;

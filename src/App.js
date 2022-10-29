import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
//import React, { useState } from 'react';
import Alert from './component/Alert';
//import About from './component/About';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  // };

  //function based component
  // const [mode, setMode] = useState('dark');
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backColor = 'grey';
  //   } else {
  //     setMode('light');
  //     document.body.style.backColor = 'grey';
  //   }
  // };
  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutils" />
      <Alert alert={alert} />

      <div className="container">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        <Textform heading="Enter the text to analyze below" />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

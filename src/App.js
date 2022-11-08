import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import About from './component/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar title="Textutils" />
        <Alert alert={alert} />

        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Textform heading="Enter the text to analyze below" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

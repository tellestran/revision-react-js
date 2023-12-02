import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from './Examples/MyComponent';
import ListToDo from "./ToDoApp/ListToDo";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import MyComponent from "./Examples/MyComponent";
import Home from "./Navigation/Home";
import Navbar from "./Navigation/Navbar";

function App() {
  //App = () => {}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/todo" exact element={<ListToDo />} />
            <Route path="/about" exact element={<MyComponent />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

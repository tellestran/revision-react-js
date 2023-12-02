import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Examples/MyComponent';
import ListTodo from './ToDoApp/ListToDo';

function App() { //App = () => {}
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
        <ListTodo />
      </header>
    </div>
  );
}

export default App;

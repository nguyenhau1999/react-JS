import logo from './logo.svg';
import './App.css';
import MyComponent from './views/Example/MyComponent.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello word minh la Hau
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;

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

        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
// import MyComponent from './views/Example/MyComponent.js';
import ListTodo from './views/Todos/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo app with React.JS (Hau)
        </p>

        {/* <MyComponent></MyComponent> */}
        <ListTodo></ListTodo>
      </header>
    </div>
  );
}

export default App;

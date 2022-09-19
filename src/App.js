import logo from './logo.svg';
import './App.scss';
// import MyComponent from './views/Example/MyComponent.js';
import ListTodo from './views/Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
    </div>
  );
}

export default App;

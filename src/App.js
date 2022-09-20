import logo from './logo.svg';
import './App.scss';
import MyComponent from './views/Example/MyComponent.js';
import ListTodo from './views/Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Nav from './views/Nav/Nav';
import Home from './views/Example/Home.js';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
       
        
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/todo">
            <ListTodo></ListTodo>
          </Route>
          <Route path="/about">
          <MyComponent></MyComponent>
          </Route>
        </Switch>
    
      
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
  </BrowserRouter>
  );
}

export default App;

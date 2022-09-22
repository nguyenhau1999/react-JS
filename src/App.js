import logo from './logo.svg';
import './App.scss';
import MyComponent from './views/Example/MyComponent.js';
import ListTodo from './views/Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import ListUser from './views/User/ListUser';
import Nav from './views/Nav/Nav';
import Home from './views/Example/Home.js';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import DetailUser from './views/User/DetailUser';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />     
        <Routes>
          <Route path="/" exact element={<Home/>} >
            
          </Route>
          <Route path="/todo" element={<ListTodo/>} >
        
          </Route>
          <Route path="/about" element={<MyComponent/>}>
          </Route>
          <Route path="/user" element={<ListUser/>}>
          </Route>
          <Route path="/user/:id" element={<DetailUser/>}>
          </Route>
        </Routes>
    
      
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


import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Logos from './views/Logos/Logos';
import Nav from './views/Nav/Nav';
// import Home from './views/Example/Home';




function App() {
  
  return (
    <>
    <div className="App">
      <header className="App-header">
      <Nav/>
      <Logos></Logos>
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
    </>
  );
}

export default App;

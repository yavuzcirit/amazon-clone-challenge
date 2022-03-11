import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    //BEM standards
    <div className="app">
    <Header />
    <Home />
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<>
          <Header />
          <Home />
          </>} />
          <Route path="/checkout" element={<>
          <Header />
          <Checkout />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

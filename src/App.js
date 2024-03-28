import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './component/Products.js';
import Hero from './component/Hero.js';




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/Product" element={<Products />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;

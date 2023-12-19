import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Button } from '@repo/ui';
import { Home } from './pages/home.page';
import { ProductList } from './pages/list.page';
import { ProductDetail } from './pages/detail.page';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/
              /1">Product Detail</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <div className="card">
          <Button label="Click me" />
        </div>
      </div>
    </Router>
  );
}

export default App;
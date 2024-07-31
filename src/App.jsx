import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Homepage = lazy(() => import('./components/Homepage'));
const CartItem = lazy(() => import('./components/CartItem'));
const FooterBar = lazy(() => import('./components/Footer'));

function App() {
  const [query, setQuery] = useState('');

  return (
    <Router>
      <Suspense fallback={<div className='text-center font-bold text-3xl m-60'>Loading...</div>}>
        <Navbar setQuery={setQuery} />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<CartItem query={query} IsCart={false} />} />
          <Route path='/cartItem' element={<CartItem query={query} IsCart={true} />} />
          <Route path='*' element={<div>404: Page Not Found</div>} />
        </Routes>
        {window.location.pathname !== '/cartItem' && <FooterBar />}
      </Suspense>
    </Router>
  );
}

export default App;

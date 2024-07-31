import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import './App.css';
import Logo from './assets/hu.jpg'

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Homepage = lazy(() => import('./components/Homepage'));
const CartItem = lazy(() => import('./components/CartItem'));
const FooterBar = lazy(() => import('./components/Footer'));

function AppContent() {
  const [query, setQuery] = useState('');
  const location = useLocation();

  return (
    <>
      <Navbar setQuery={setQuery} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cart' element={<CartItem query={query} IsCart={false} />} />
        <Route path='/cartItem' element={<CartItem query={query} IsCart={true} />} />
        <Route path='*' element={<div>404: Page Not Found</div>} />
      </Routes>
      {location.pathname !== '/cartItem' && <FooterBar />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center my-40">
        <img className='w-72  mx-auto' src={Logo} alt="Logo"/>
        <h3 className='font-mono font-bold text-2xl'>Lorem Ipsum</h3>
      </div>}>
        <AppContent />
      </Suspense>
    </Router>
  );
}

export default App;

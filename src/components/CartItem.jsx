import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import ShimmerEffect from './ShimmerEffect';
import Sidebar from './Sidebar';
import Paymentform from './Paymentform';

function CartItem({ query, IsCart }) {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ colors: [], brands: [] });
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const data = useSelector(state => (IsCart ? state.cart : state.product));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter data based on the query and filters
  const filteredData = data.filter(element => {
    const matchesQuery = element.title.toLowerCase().includes(query.toLowerCase()) ||
                         element.company.toLowerCase().includes(query.toLowerCase());
    const matchesColor = filter.colors.length === 0 || filter.colors.includes(element.color);
    const matchesBrand = filter.brands.length === 0 || filter.brands.includes(element.company);
    return matchesQuery && matchesColor && matchesBrand;
  });

  // Calculate total price
  const total = filteredData.reduce((total, item) => total + item.newPrice * item.quantity, 0);

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const handlePaymentClick = () => {
    setShowPaymentForm(true);
  };

  const closePaymentForm = () => {
    setShowPaymentForm(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar filterChange={handleFilter} />
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="p-4">
                  <ShimmerEffect />
                </div>
              ))
            : filteredData.map((element) => (
                <div key={element.id} className="p-4">
                  <Cart
                    id={element.id}
                    img={element.img}
                    title={element.title}
                    company={element.company}
                    color={element.color}
                    newPrice={element.newPrice}
                    quantity={element.quantity}
                    IsCart={IsCart}
                  />
                </div>
              ))}
        </div>
        {IsCart && (
          <div className="w-full mt-4 p-4 border-t-2 border-black">
            <h3>Total Price: ${total.toFixed(2)}</h3>
            <button onClick={handlePaymentClick} className="bg-black text-white rounded p-3">
              Make Payment
            </button>
          </div>
        )}
      </div>
      {showPaymentForm && <Paymentform onClose={closePaymentForm} />}
    </div>
  );
}

export default CartItem;

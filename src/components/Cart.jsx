import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slice';

function Cart({ id, img, title, company, color, quantity, IsCart,newPrice }) {
  const[clicked,setClicked]=useState(null)


  const dispatch = useDispatch();

  const handleAdd = () => {
    const product = { id, img, title, company, color,newPrice };
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='mx-7 my-3'>
    <div className=' h-80 w-56  rounded-lg m-4 border  inline-block shadow-xl'>
      <img src={img} alt={title} className="h-32 w-full p-7 rounded-lg bg-slate-50" />
      <h4 className=' font-sans text-center'>{title}</h4>
      <p className=' font-sans text-center'>{company}</p>
      <p className='font-sans text-center'>${newPrice}</p>
      {IsCart && <p className='font-sans text-center'>Quantity: {quantity}</p>}
      <button onClick={handleAdd} className=" mx-16 p-1 my-2 bg-black text-white rounded">
        {IsCart ? 'Add More' : 'Add To Cart'}
      </button>
      {IsCart && (
        <button onClick={handleRemove} className="  p-1  bg-red-700 text-white rounded " style={{marginLeft:"70px"}}>
          Remove
        </button>
      )}
    </div>
    </div>
  );
}

export default Cart;

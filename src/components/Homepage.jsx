import React from 'react';
import Photo from '../assets/gabre-cameron-xyO2dbVKrhQ-unsplash.jpg';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <main className='grid grid-cols-1 lg:grid-cols-2 bg-slate-50 mx-4 lg:mx-28 items-center mt-16 lg:mt-32 animate-fadeInUp'>
      <div className='p-5'>
        <h1 className='text-2xl lg:text-4xl py-5 px-4 lg:px-11 m-3'>Walk with Confidence</h1>
        <p className='px-4 lg:px-14 mt-4 break-normal'>
          Buying shoes should leave you happy and good-looking, with money in your pocket. Sneakers, Sports-Shoes, and Casuals—we’ve got your shoes covered.
        </p>
        <Link to='/cart'>
          <button className='my-7 bg-black text-white m-4 lg:m-12 p-3'>Shop Now</button>
        </Link>
      </div>
      <div className='p-4 lg:p-0'>
        <img src={Photo} className='bg-cover w-full animate-fadeInRight' alt="logo" />
      </div>
    </main>
  );
}

export default Homepage;

import React from 'react';

function ShimmerEffect() {
  return (
    <div className="mx-7 my-3">
      <div className="h-72 w-56 rounded-lg m-4 border border-black inline-block">
        <div className="h-32 w-full p-7 bg-slate-50 shimmer"></div>
        <div className="h-6 bg-gray-200 shimmer mx-4 my-2"></div>
        <div className="h-6 bg-gray-200 shimmer mx-4 my-2"></div>
        <div className="h-6 bg-gray-200 shimmer mx-4 my-2"></div>
        <div className="h-10 w-32 mx-auto bg-gray-200 shimmer my-2"></div>
        
      </div>
    </div>
  );
}

export default ShimmerEffect;

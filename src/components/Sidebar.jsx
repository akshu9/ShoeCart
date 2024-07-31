import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Sidebar({ filterChange }) {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const data = useSelector((state) => state.cart);

  const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white'];
  const brands = ['Nike', 'Adidas', 'Puma', 'Vans'];

  const handleColorChange = (e) => {
    const color = e.target.value;
    const newSelectedColors = selectedColors.includes(color)
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color];
    setSelectedColors(newSelectedColors);
    filterChange({ colors: newSelectedColors, brands: selectedBrands });
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newSelectedBrands);
    filterChange({ colors: selectedColors, brands: newSelectedBrands });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="lg:hidden p-2 text-xl">
        {isOpen ? <IoMdClose /> : <FiMenu />}
      </button>
      <div className={`lg:w-64 p-4 bg-gray-100 border-r fixed lg:relative lg:h-full transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <h3 className="text-lg font-semibold">Filters</h3>
        <div className="mt-4">
          <h4 className="font-semibold">Colors</h4>
          {colors.map(color => (
            <div key={color} className="flex items-center">
              <input 
                type="checkbox" 
                id={color} 
                name="color" 
                value={color}
                checked={selectedColors.includes(color)}
                onChange={handleColorChange} 
                className="block"
              />
              <label htmlFor={color} className="ml-2 capitalize">{color}</label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Brands</h4>
          {brands.map(brand => (
            <div key={brand} className="flex items-center">
              <input 
                type="checkbox" 
                id={brand} 
                name="brand" 
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={handleBrandChange} 
                className="block"
              />
              <label htmlFor={brand} className="ml-2 capitalize">{brand}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useState } from 'react';

const Paymentform = ({ onClose }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Information:', formData);
    alert('Payment Submitted');
    onClose()  // Close the form after submission
    // Here you would typically send the formData to your server or payment processor
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="relative max-w-md w-full p-2 bg-white shadow-md rounded-lg">
        <button type="button" onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          X
        </button>
        <h2 className="text-xl mb-4">Payment Information</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Cardholder Name</label>
          <input
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Expiration Date</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="123"
            required
          />
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit Payment</button>
      </form>
    </div>
  );
};

export default Paymentform;

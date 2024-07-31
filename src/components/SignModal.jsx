import React from 'react';
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/user';

const SignModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const onSuccess = (response) => {
    const userProfile = response.profileObj; // Adjust based on your Google Auth library
    const { name, imageUrl, email } = userProfile;
    dispatch(setUser({ name, imageUrl, email }));
    onClose();
  };

  const onFailure = (response) => {
    console.error(response);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">Sign In</h2>
        
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-2"
          onClick={onClose}
        >
          
          
         
        </button>
      </div>
    </div>
  );
};

export default SignModal;

import React, { useState } from 'react';
import { InputAuth } from '../../Components/InputAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputAuth
      {...props}
      type={showPassword ? 'text' : 'password'}
      showPasswordIcon={true}
      onIconClick={togglePasswordVisibility}
      iconComponent={showPassword ? <FaEye /> : <FaEyeSlash />}
    />
  );
}

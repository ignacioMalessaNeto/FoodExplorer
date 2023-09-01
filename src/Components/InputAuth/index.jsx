import { InputContainer, InputField, IconWrapper} from "./styles";
import { useState } from 'react';
import { TbEye, TbEyeClosed } from 'react-icons/tb'; 

export function InputAuth({ icon: Icon, type = 'text', ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <InputContainer>
      {Icon && (
        <IconWrapper onClick={togglePasswordVisibility}>
          {showPassword ? <TbEye size={20} /> : <TbEyeClosed size={20} />}
        </IconWrapper>
      )}
      <InputField {...rest} type={showPassword ? 'text' : type} />
    </InputContainer>
  );
}

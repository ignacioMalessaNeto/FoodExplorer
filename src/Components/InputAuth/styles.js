import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const InputField = styled.input`
  width: 100%;
  min-width: 80%;
  padding: 16px 14px;
  color: ${({ theme }) => theme.COLORS.LIGHT_800};
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_800};
  background: transparent;
  border-radius: 5px;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
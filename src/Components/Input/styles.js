import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  gap: 15px;

  padding: 1.2rem 2rem;

  border-radius: 10px;

  > input {
    width: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_600};

    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (max-width: 750px) {
    padding: 10px
  }
`;

const { default: styled } = require('styled-components');

export const Message = styled.div`
  padding: 30px;
  font-size: 36px;
`;

export const StyledInput = styled.input`
  padding: 3px;
  margin-right: 10px;
`;

export const StyledButton = styled.button`
  padding: 3px 5px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: darkblue;
  }
`;

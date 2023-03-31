import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: #212121;
  padding: 20px 20px;
`;

export const StyledNavLink = styled(NavLink)`
  background-color: #111111;
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &.active {
    color: red;
  }
  &:hover {
    color: orangered;
    background-color: #333333;
  }
`;

export const StyledSection = styled.section`
  padding: 20px 30px;
`;

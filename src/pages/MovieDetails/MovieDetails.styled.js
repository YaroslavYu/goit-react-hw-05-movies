import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Message = styled.div`
  padding: 30px;
  font-size: 36px;
`;

export const NavLinkContainer = styled.div`
  margin-top: 15px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

export const NavLinkTitle = styled.p`
  font-weight: 600;
`;

export const NavLinkList = styled.ul`
  list-style: none;
`;

export const NavLinkListItem = styled.li`
  padding: 3px;
`;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  &.active {
    color: orangered;
  }
  &:hover {
    color: orangered;
  }
`;

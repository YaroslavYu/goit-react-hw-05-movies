import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { pathTo } from 'common/pathes';
import { StyledHeader, StyledNavLink, StyledSection } from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to={pathTo.HOME}>HOME</StyledNavLink>
          <StyledNavLink to={pathTo.MOVIES}>MOVIES</StyledNavLink>
        </nav>
      </StyledHeader>
      <StyledSection>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </StyledSection>
    </>
  );
};

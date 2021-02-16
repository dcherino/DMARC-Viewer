import React from 'react';
import { HeaderWrapper, TopBar } from './Header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <TopBar>
        <h1>DMARC Viewer</h1>
      </TopBar>
    </HeaderWrapper>
  );
};

export default Header;

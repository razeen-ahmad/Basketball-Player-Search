import React, { useState } from 'react';
import Menu from './Menu';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import NavContainer from './NavContainer';

//main navbar component
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <NavContainer {...props}>
        <Logo
          w="max-content"
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Menu isOpen={isOpen} />
      </NavContainer>
    );
};

export default NavBar;
  
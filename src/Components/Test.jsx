import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onStateChange={handleStateChange} width={'250px'}>
      <a className="menu-item" href="/" onClick={closeMenu}>
        Home
      </a>
      <a className="menu-item" href="/about" onClick={closeMenu}>
        About
      </a>
      <a className="menu-item" href="/contact" onClick={closeMenu}>
        Contact
      </a>
    </Menu>
  );
}

export default BurgerMenu;

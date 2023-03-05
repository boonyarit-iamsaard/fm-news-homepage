import { useState, type FC } from 'react';

import Image from 'next/image';

import NavigationMenu from './NavigationMenu';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center px-4 py-7">
      <div className="container mx-auto flex max-w-[1100px] items-center justify-between">
        <div className="relative aspect-[65/40] h-7">
          <Image priority src="/images/logo.svg" fill alt="Logo" />
        </div>
        <button
          type="button"
          className="relative inline-block aspect-[40/17] w-10 md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Image priority src="/images/icon-menu.svg" fill alt="Menu" />
        </button>
        <NavigationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;

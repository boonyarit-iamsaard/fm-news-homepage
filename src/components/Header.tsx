import { type Dispatch, type FC, type SetStateAction } from 'react';

import Image from 'next/image';

interface HeaderProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setIsMenuOpen }) => {
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <header className="flex items-center px-4 py-7">
      <div className="container mx-auto flex max-w-[1100px] items-center justify-between">
        <div className="relative aspect-[65/40] h-7">
          <Image priority src="/images/logo.svg" fill alt="Logo" />
        </div>
        <button
          className="relative aspect-[40/17] w-10"
          onClick={handleOpenMenu}
        >
          <Image priority src="/images/icon-menu.svg" fill alt="Menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;

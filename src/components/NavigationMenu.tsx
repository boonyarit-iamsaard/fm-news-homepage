import { type Dispatch, type FC, type SetStateAction } from 'react';

import Image from 'next/image';

import { cn } from '@/utils/class-names';
import NavigationList from './NavigationList';

interface NavigationMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const NavigationMenu: FC<NavigationMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-10 block bg-tertiary-900 md:hidden',
          isMenuOpen ? 'block opacity-60' : 'hidden opacity-0'
        )}
      ></div>
      <nav
        className={cn(
          'fixed inset-y-0 right-0 z-20 w-64 transform space-y-4 bg-tertiary-100 p-4 transition-all duration-300 ease-in-out md:relative md:inset-auto md:flex md:w-auto md:transform-none md:items-center md:justify-center md:space-y-0 md:bg-transparent md:p-0',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          type="button"
          className="relative inline-block aspect-[32/31] w-8 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image priority src="/images/icon-menu-close.svg" fill alt="Close" />
        </button>
        <NavigationList />
      </nav>
    </>
  );
};

export default NavigationMenu;

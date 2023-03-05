import { type FC } from 'react';

interface NavigationItemsProps {
  label: string;
  href: string;
}

const items = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'New',
    href: '#',
  },
  {
    label: 'Popular',
    href: '#',
  },
  {
    label: 'Tranding',
    href: '#',
  },
  {
    label: 'Categories',
    href: '#',
  },
];

const NavigationItems: FC<NavigationItemsProps> = ({ label, href }) => (
  <li className="hover:text-secondary-400">
    <a href={href}>{label}</a>
  </li>
);

const NavigationList: FC = () => {
  return (
    <ul className="flex h-full flex-col space-y-4 text-lg leading-6 md:flex-row md:items-center md:space-y-0 md:space-x-10 md:text-body md:text-tertiary-600">
      {items.map(item => (
        <NavigationItems key={item.label} {...item} />
      ))}
    </ul>
  );
};

export default NavigationList;

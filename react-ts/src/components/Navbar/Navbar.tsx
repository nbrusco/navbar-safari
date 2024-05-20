import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Collapse, IconButton } from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { paths } from '../../routes/paths';

import NavList from './NavList/NavList';

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 800 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <nav className="relative rounded-none px-3 tablet:px-6 tablet:pb-2 pt-9 bg-[#0D0D0D] border-[#0D0D0D] z-10">
      <div className="flex w-full items-center justify-center">
          <NavList />
      </div>
    </nav>
  );
};

export default NavBar;

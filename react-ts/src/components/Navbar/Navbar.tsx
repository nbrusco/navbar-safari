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
    <Navbar className="relative w-full rounded-none px-3 tablet:px-6 tablet:pb-2 pt-9 bg-[#0D0D0D] border-[#0D0D0D] z-10">
      <div className="flex items-center justify-center mx-auto">
        <div className="hidden tablet:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent tablet:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {/* <Collapse open={openNav}>
        <NavList />
      </Collapse> */}
    </Navbar>
  );
};

export default NavBar;

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
    
    <Navbar className="relative max-w-none rounded-none px-3 tablet:px-6 tablet:pb-2 pt-9 bg-[#0D0D0D] border-[#0D0D0D] z-10"> 
      <div className="flex items-center justify-center mx-auto
      tablet:gap-6 hd:gap-10 3xl:gap-[78px]">
        <Link to={paths.home} className='min-w-[96px] max-w-[250px] w-20 lg:w-36 hd:w-44'>
          <img
            src={`/assets/logos/asd.jpg`}
            alt="Logo Zona"
            className="w-full tablet:-mb-8 hd:-mb-12 3xl:-mb-16 min-w-[96px] max-w-[250px]"
          />
        </Link>
        <div className="hidden tablet:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent tablet:hidden"
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
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavBar;

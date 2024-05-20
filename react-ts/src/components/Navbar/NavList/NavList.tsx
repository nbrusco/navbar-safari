import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { paths } from '../../../routes/paths';

const NavList = () => {

  const [openGamesMenu, setOpenGamesMenu] = useState(false);
  const [openGourmetMenu, setOpenGourmetMenu] = useState(false);
  const [openBirthdayMenu, setOpenBirthdayMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <ul className="my-2 flex flex-row [&>*]:text-white [&>li>a]:font-poppins [&>li]:py-4 hover:[&>li>a]:text-yellow-500 [&>li>a]:transition-colors gap-8
    ml-0 mt-2 text-base mb-0">
      <div className="flex flex-row font-gotham font-light ">
        <Menu
          open={openGamesMenu}
          placement="bottom-start"
          handler={setOpenGamesMenu}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          allowHover
        >
          <MenuHandler>
            <button
              className={`flex text-white bg-black font-gotham font-light
              gap-1 w-1
              text-xs pl-[7.5px] pr-[7.5px] py-[3px] gap-[5px]
              hd:text-base hd:pl-[10px] hd:pr-[15px] hd:py-[10px] hd:gap-[8px]
              3xl:text-xl`}
            >
              Juegos
              <ChevronDownIcon
                strokeWidth={4}
                className={`
                h-2.5 w-2.5
                h-2.5 w-2.5
                hd:h-4 hd:w-4
                3xl:h-5 3xl:w-5
                transition-transform ${openGamesMenu ? 'rotate-180' : ''}`}
              />
            </button>
          </MenuHandler>
          <MenuList className="rounded-2xl hd:rounded-3xl !rounded-ss-none px-3 py-2 hd:p-3">
            <Link
              to={paths.games}
            >
              <MenuItem className="font-gotham text-black font-bold
              text-xs hd:text-[17px]
              pl-1.5 p-0.5 hd:pl-1.5 hd:pt-[9px] hd:pb-2 hd:pr-3">
                EXPERIENCIA ZONA
              </MenuItem>
            </Link>
            <hr className="bg-black pt-[1px] mx-0.5 hd:mx-2 my-1" />
            <Link
              to={paths.gamesPromotions}
            >
              <MenuItem className="font-gotham  text-black
              text-xs hd:text-[17px]
              pl-1.5 p-0.5 hd:pl-1.5 hd:pt-[9px] hd:pb-2 hd:pr-3">
                EVENTOS & PROMOCIONES
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu
          open={openGourmetMenu}
          placement="bottom-start"
          handler={setOpenGourmetMenu}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          allowHover
        >
          <MenuHandler>
            <button
              className={`flex text-white bg-black font-gotham font-light
            gap-1 w-1
            text-xs pl-[7.5px] pr-[7.5px] py-[3px] gap-[5px]
            hd:text-base hd:pl-[10px] hd:pr-[15px] hd:py-[10px] hd:gap-[8px]
            3xl:text-xl
            `}
            >
              GOURMET
              <ChevronDownIcon
                strokeWidth={4}
                className={`
                h-2.5 w-2.5
                h-2.5 w-2.5
                hd:h-4 hd:w-4
                3xl:h-5 3xl:w-5
                transition-transform ${openGourmetMenu ? 'rotate-180' : ''}`}
              />
            </button>
          </MenuHandler>
          <MenuList className="rounded-2xl hd:rounded-3xl !rounded-ss-none px-3 py-2 hd:p-3">
            <Link to={paths.gourmet}>
              <MenuItem className="font-gotham text-black font-bold
              text-xs hd:text-[17px]
              pl-1.5 p-0.5 hd:pl-1.5 hd:pt-[9px] hd:pb-2 hd:pr-3">
                NUESTRO MENÚ
              </MenuItem>
            </Link>
            <hr className="bg-black pt-[1px] mx-0.5 hd:mx-2 my-1" />
            <Link
              to={paths.gourmetBranches}
            >
              <MenuItem className="font-gotham text-black
              text-xs hd:text-[17px]
              pl-1.5 p-0.5 hd:pl-1.5 hd:pt-[9px] hd:pb-2 hd:pr-3">
                NUESTROS LOCALES
              </MenuItem>
            </Link>
            <hr className="bg-black pt-[1px] mx-0.5 hd:mx-2 my-1" />
            <Link to={paths.gourmetPromotions}>
              <MenuItem className="font-gotham text-black
              text-xs hd:text-[17px]
              pl-1.5 p-0.5 hd:pl-1.5 hd:pt-[9px] hd:pb-2 hd:pr-3">
                EVENTOS & PROMOCIONES
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu
          open={openBirthdayMenu}
          placement="bottom-start"
          handler={setOpenBirthdayMenu}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          allowHover
        >
          <MenuHandler>
            <button
              className={`flex text-white bg-black font-gotham font-light
            gap-1 w-1
            text-xs pl-[7.5px] pr-[7.5px] py-[3px] gap-[5px]
            hd:text-base hd:pl-[10px] hd:pr-[15px] hd:py-[10px] hd:gap-[8px]
            3xl:text-xl
            `}
            >
              CUMPLES
              <ChevronDownIcon
                strokeWidth={4}
                className={`
                h-2.5 w-2.5
                h-2.5 w-2.5
                hd:h-4 hd:w-4
                3xl:h-5 3xl:w-5
                transition-transform ${openBirthdayMenu ? 'rotate-180' : ''}`}
              />
            </button>
          </MenuHandler>
          <MenuList className="rounded-2xl hd:rounded-3xl !rounded-ss-none px-3 py-2 hd:p-3">
            <Link to={paths.birthday}>
              <MenuItem className="font-gotham text-black font-bold
              text-xs hd:text-[17px]
              pl-1.5 p-0.5 hd:pl-1.5 hd:pt-[9px] hd:pb-2 hd:pr-3">
                RESERVÁ TU CUMPLE
              </MenuItem>
            </Link>
            <hr className="bg-black pt-[1px] mx-0.5 hd:mx-2 my-1" />
            <Link to={paths.birthdayPromotions}>
              <MenuItem className="font-gotham text-black
              text-xs hd:text-[17px]
              pl-1.5 p-0.5 hd:pl-1.5 hd:pt-[9px] hd:pb-2 hd:pr-3">
                EVENTOS & PROMOCIONES
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
      <div className="flex flex-row ">
          <button
            className={`flex text-white bg-black font-gotham font-light
            gap-1 w-1
            text-xs pl-[7.5px] pr-[7.5px] py-[3px] gap-[5px]
            hd:text-base hd:pl-[10px] hd:pr-[15px] hd:py-[10px] hd:gap-[8px]
            3xl:text-xl
            `}
          >
            <Link to={paths.branches} className='w-full'>
            LOCALES
        </Link>
          </button>
          <button
            className={`flex text-white bg-black font-gotham font-light
            gap-1 w-1
            text-xs pl-[7.5px] pr-[7.5px] py-[3px] gap-[5px]
            hd:text-base hd:pl-[10px] hd:pr-[15px] hd:py-[10px] hd:gap-[8px]
            3xl:text-xl`}
          >
            <Link to={paths.contact} className='w-full'>
            CONTACTO
        </Link>
          </button>
      
          <Menu
            open={openUserMenu}
            placement="bottom-start"
            handler={setOpenUserMenu}
            allowHover
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <MenuHandler>

              <button
                className="flex rounded-full text-black bg-white hover:text-white hover:bg-black font-gotham font-light
              gap-1 w-1
              text-xs pl-[7.5px] pr-[7.5px] py-[3px] gap-[5px]
              hd:text-base hd:pl-[10px] hd:pr-[15px] hd:py-[10px] hd:gap-[8px]
              3xl:text-xl"
              >
                asdasd
                <ChevronDownIcon
                  strokeWidth={4}
                  className={`
                h-2.5 w-2.5
                h-2.5 w-2.5
                hd:h-4 hd:w-4
                3xl:h-5 3xl:w-5
                transition-transform `}
                />
              </button>
            </MenuHandler>
            <MenuList className="rounded-2xl hd:rounded-3xl !rounded-se-none px-3 py-2 hd:p-3">
              <MenuItem  className="font-gotham text-black font-medium
              text-xs hd:text-[17px]
              pl-1.5 p-0.5 hd:pl-1.5 hd:pt-[9px] hd:pb-2 hd:px-3">
                Cerrar Sesión
              </MenuItem>
            </MenuList>
          </Menu>
       
          <Link to={paths.login} className='w-full'>
            <button
              className="flex rounded-full text-black bg-white hover:text-white hover:bg-black font-gotham font-light
              gap-1 w-1
              text-xs pl-[7.5px] pr-[7.5px] py-[3px] gap-[5px]
              hd:text-base hd:pl-[10px] hd:pr-[15px] hd:py-[10px] hd:gap-[8px]
              3xl:text-xl"
            >
              INGRESAR
            </button>
          </Link>
      </div>
    </ul >
  );
};

export default NavList;

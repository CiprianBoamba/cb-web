import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const logoCliked = () => {
    setActive('');
    window.scrollTo(0, 0);
  };

  const menuLinkCliked = () => {
    setActive(navLink.title);
  };
  const mobileLinkCliked = () => {
    setToggle(!toggle);
    setActive(navLink.title);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center  mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={logoCliked}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className={`${
                active === navLink.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={menuLinkCliked}
            >
              <a href={`${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        {/* mobile navigation bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((navLink, index) => (
                <li
                  key={index}
                  className={`${
                    active === navLink.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={mobileLinkCliked}
                >
                  <a href={`${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

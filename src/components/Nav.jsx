import React, { useContext } from "react";
import me2 from "../assets/me2.png";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ThemeContext } from "../App";

const Nav = ({ setModal }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className='flex justify-between items-center my-0 mx-auto px-5 py-0 w-full max-w-6xl'>
      <figure className=''>
        <img src={me2} alt='me!' className='rounded-full h-[50px] logo' />
      </figure>
      <ul className='nav__link--list'>
        <li className='mx-3 font-bold subtitle__hover'>
          <a href='#'>About</a>
        </li>
        <li className='mx-3 font-bold subtitle__hover'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='mx-3 font-bold subtitle__hover'>
          <a href='#' onClick={!setModal}>
            Contact
          </a>
        </li>
        <li className='mx-2 -my-0.5 text-2xl subtitle__hover hover:scale-110 active:scale-90 transition-all'>
          <a href=''>
            <HiOutlineLightBulb />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

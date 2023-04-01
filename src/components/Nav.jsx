import React from "react";
import me2 from "../assets/me2.png";
import { HiOutlineLightBulb } from "react-icons/hi";

const Nav = () => {
  const navLinkList = [
    { id: 1, title: "About" },
    { id: 2, title: "Projects" },
    { id: 3, title: "Contact" },
  ];

  return (
    <nav className='flex justify-between items-center my-0 mx-auto px-5 py-0 w-full max-w-6xl'>
      <figure className=''>
        <img src={me2} alt='me!' className='rounded-full h-[50px] logo' />
      </figure>
      <ul className='nav__link--list'>
        {navLinkList.map((navLinkList) => {
          return (
            <li className='mx-3 font-bold subtitle__hover' key={navLinkList.id}>
              <a href='#'>{navLinkList.title}</a>
            </li>
          );
        })}
        <li className='mx-2 -my-0.5 text-2xl subtitle__hover hover:scale-110 active:scale-90 transition-all'>
          <a href=''>
            < HiOutlineLightBulb />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

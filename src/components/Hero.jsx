import React from "react";

const Hero = () => {
  return (
    <header id='hero' className='header'>
      <div className='-mt-28'>
        {/* xs is 48 px */}
        <h1 className='mb-3 text-left font-semibold leading-none text-5xl sm:text-9xl title'>
          Hello!
        </h1>
        <h1 className='text-9xl mb-3 text-left leading-none text-[#e4991d] title'>
          <strong className='text-[#e4991d]'>I'm Chaylin.</strong>
        </h1>
        {/* xs is 12 px */}
        <p className='text-2xl max-w-md leading-loose header__para'>
          I'm <strong className='text-[#e4991d]'> passionate learner </strong>
          with the biggest love for tech. This is my personal website to
          showcase my skills and interests :)
        </p>
        <br />
        <p className='text-2xl leading-loose max-w-md header__para-secondary'>
          <a href=''>
            <strong className='text-[#e4991d] font-extrabold'>
              Click here{" "}
            </strong>
            to learn more about me!
          </a>
        </p>
        <a href='#' className='scroll'>
          <div className='scroll__icon transition__ease hover:scale-110 active:scale-90 header__para-secondary'></div>
        </a>
      </div>
    </header>
  );
};

export default Hero;

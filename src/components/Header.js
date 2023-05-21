import React from "react";

const Header = ({ themeSwitchHandler }) => {
  return (
    <div className='w-full flex items-center justify-between mb-[20px]'>
      <div className='flex flex-col'>
        <p className='text-[13px] font-bold text-vmc-300'>
          {" "}
          Welcome Boluwatife,
        </p>
        <span className='font-normal text-[12px] text-vmc-200 dark:text-white'>
          How're you feeling today?
        </span>
      </div>
      <div className='flex items-center'>
        <div className='mr-[25px]'>
          <img
            src='/light-mode.svg'
            alt='Light Mode Icon'
            className='inline-block dark:hidden'
          />
          <img
            src='/dark-mode.svg'
            alt='Dark Mode Icon'
            className='dark:inline-block hidden'
          />
        </div>
        <div className='cursor-pointer' onClick={themeSwitchHandler}>
          <p className='text-xs font-normal text-vmc-200 dark:text-white dark:hidden'>
            Apply Dark Theme
          </p>
          <p className='hidden text-xs font-normal text-vmc-200 dark:text-white dark:inline'>
            Apply Light Theme
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useRef } from "react";
import { NavLink } from "react-router-dom";
// import axios from "axios";

export const Signup = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  const signupHandler = async (event) => {
    event.preventDefault();
    const payload = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    // console.log(payload);
    //
    try {
      const newUser = await fetch(
        "https:127.0.0.1:8000/api/v1/patients/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      // const data = newUser.json();
      // console.log(data);
      console.log(newUser);
      // console.log(payload);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='bg-vmc-100 text-white w-full h-full flex flex-col items-center justify-center gap-7 py-20 dark:bg-tw-dark-100  dark:border-white dark:text-white'>
      <div className='cursor-pointer'>
        <svg
          width='54'
          height='53'
          viewBox='0 0 54 53'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='27'
            cy='26.3335'
            r='25.2937'
            stroke='white'
            strokeWidth='2'
          />
          <path
            d='M37.103 16.2306L16.897 36.4366'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.897 16.2306L37.103 36.4366'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className='bg-white rounded-2xl p-14 text-vmc-200 dark:bg-tw-dark-100 dark:border-[1px] dark:border-white  dark:text-white'>
        <div className='mb-7 flex justify-center'>
          <img src='/logo.png' alt='Iwosan Logo' />
        </div>
        <p className=' text-center text-base font-bold mb-11'>CREATE ACCOUNT</p>
        <form onSubmit={signupHandler} className='w-[450px] mb-[38.71px]'>
          <div className='mb-[25.5px]'>
            <label className='block text-xs font-normal pb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='w-full border-[1px] border-vmc-800 rounded-full text-xs font-normal text-vmc-200 py-5 pl-[21.5px] outline-gray-300 dark:bg-transparent dark:text-white dark:placeholder-white'
              type='text'
              id='name'
              ref={nameInput}
              placeholder='Ola boluwatife'
              required
            />
          </div>
          <div className='mb-[25.5px]'>
            <label className='block text-xs font-normal pb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full border-[1px] border-vmc-800 rounded-full text-xs font-normal text-vmc-200 py-5 pl-[21.5px] outline-gray-300 dark:bg-transparent dark:text-white dark:placeholder-white'
              type='email'
              id='email'
              ref={emailInput}
              placeholder='Olaboluwatofezzy@ymail.com'
              required
            />
          </div>
          <div className='mb-[12.3px]'>
            <label
              className='block text-xs font-normal pb-2'
              htmlFor='password'>
              Password
            </label>
            <input
              className='w-full border-[1px] border-vmc-800 rounded-full text-xs font-normal text-vmc-200 py-5 pl-[21.5px] outline-gray-300 dark:bg-transparent dark:text-white dark:placeholder-white'
              type='password'
              id='password'
              ref={passwordInput}
              placeholder='XXXXXXXXXXX'
              required
            />
          </div>
          <div className='flex gap-1 items-center mb-[42px]'>
            <input type='checkbox' />
            <p className='text-xs font-normal'>
              I accept the{" "}
              <span className='text-vmc-100 underline dark:text-white'>
                Terms & Conditions
              </span>
            </p>
          </div>

          <button className='cursor-pointer w-full bg-vmc-100 text-white text-center text-xs font-bold py-[20.56px] rounded-full'>
            SIGN UP
          </button>
        </form>
        <p className='text-center text-xs font-normal'>
          Already have an account?{" "}
          <NavLink
            to='/login'
            className=' text-vmc-100 underline dark:text-white'>
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

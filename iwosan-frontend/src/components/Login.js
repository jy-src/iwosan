import LoginScreen from "./LoginScreen";

export const Login = () => {
  return (
    <div className='bg-vmc-100 dark:bg-tw-dark-100 text-white w-full h-full flex flex-col items-center justify-center gap-7 py-20'>
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
      <LoginScreen />
    </div>
  );
};

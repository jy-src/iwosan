import React from "react";
import { DiagnosticsChart } from "./Chart/PieChart";
import { PatientChart } from "./Chart/PieChart";

const ChartContent = () => {
  return (
    <div className='w-full flex items-center gap-x-5 '>
      <div className='basis-2/6 border-[1px] border-vmc-700 rounded-[15px] dark:border-[#3D3D3D] py-[14px]'>
        {" "}
        <h2 className='text-vmc-200 font-bold text-[11px] dark:text-white pl-[15px]'>
          DIAGNOSTICS
        </h2>
        <div className='mt-5 mb-7 relative pl-[15px]'>
          <div className='absolute top-7  flex items-center'>
            <div className=' bg-vmc-100 font-bold text-[8px] text-white py-2 px-[10px] rounded-md '>
              MALARIA
            </div>
            <svg
              width='6'
              height='9'
              viewBox='0 0 4 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0.00011611 0L3.56519 2.85206L0.000200428 5.70411L0.00011611 0Z'
                fill='#100DB1'
              />
            </svg>
          </div>
          <div className='absolute right-5 bottom-4 flex items-center'>
            <svg
              width='6'
              height='10'
              viewBox='0 0 4 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3.56507 0L0 2.85206L3.56499 5.70411L3.56507 0Z'
                fill='#F80D38'
              />
            </svg>
            <div className=' bg-vmc-300 font-bold text-[8px] text-white py-2 px-[10px] rounded-md '>
              OTHERS
            </div>
          </div>
          <DiagnosticsChart />
        </div>
        <ul className='px-[15px] flex items-center justify-center flex-wrap gap-x-3 gap-y-3 -mt-2'>
          <li className='flex items-center gap-x-1'>
            <span className='w-2 h-2 rounded-full bg-vmc-100'></span>
            <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
              MALARIA
            </p>
          </li>
          <li className='flex items-center gap-x-1'>
            <span className='w-2 h-2 rounded-full bg-vmc-400'></span>
            <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
              COLD
            </p>
          </li>
          <li className='flex items-center gap-x-1'>
            <span className='w-2 h-2 rounded-full bg-vmc-500'></span>
            <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
              TYPHOID
            </p>
          </li>
          <li className='flex items-center gap-x-1'>
            {" "}
            <span className='w-2 h-2 rounded-full bg-vmc-300'></span>
            <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
              OTHERS
            </p>
          </li>
        </ul>
      </div>
      <div className='basis-2/6 border-[1px] border-vmc-700 rounded-[15px] dark:border-[#3D3D3D] py-[14px]'>
        {" "}
        <h2 className='text-vmc-200 font-bold text-[11px] dark:text-white pl-[15px]'>
          PATIENTS
        </h2>
        <div className='relative pl-[15px]'>
          <div className='absolute bottom-6 left-5 flex items-center'>
            <div className=' bg-vmc-100 font-bold text-[10px] text-white py-[5px] px-5 rounded-md '>
              MEN
            </div>
            <svg
              width='6'
              height='9'
              viewBox='0 0 4 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0.00011611 0L3.56519 2.85206L0.000200428 5.70411L0.00011611 0Z'
                fill='#100DB1'
              />
            </svg>
          </div>
          <div className='absolute right-2 top-1 flex items-center'>
            <svg
              width='6'
              height='10'
              viewBox='0 0 4 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3.56507 0L0 2.85206L3.56499 5.70411L3.56507 0Z'
                fill='#F80D38'
              />
            </svg>
            <div className=' bg-vmc-300 font-bold text-[10px] text-white py-[5px] px-3 rounded-md '>
              WOMEN
            </div>
          </div>
          <PatientChart />
        </div>
        <ul className='px-[15px] flex  justify-center flex-wrap gap-y-2 '>
          <li className='flex gap-x-16'>
            <div className='flex items-center gap-x-1'>
              <div className='w-2 h-2 rounded-full bg-vmc-100'></div>
              <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
                MEN
              </p>
            </div>
            <p className='text-[#656565] font-bold text-[8px] dark:text-white'>
              40%
            </p>
          </li>
          <li className='flex gap-x-16'>
            <div className='flex items-center gap-x-1'>
              <div className='w-2 h-2 rounded-full bg-vmc-300'></div>
              <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
                WOMEN
              </p>
            </div>
            <p className='text-[#656565] font-bold text-[8px] dark:text-white'>
              48%
            </p>
          </li>
          <li className='flex gap-x-16'>
            <div className='flex items-center gap-x-1'>
              <div className='w-2 h-2 rounded-full bg-vmc-400'></div>
              <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
                CHILDREN
              </p>
            </div>
            <p className='text-[#656565] font-bold text-[8px] dark:text-white'>
              12%
            </p>
          </li>
          {/* <li className='flex items-center gap-x-1'>
            <span className='w-2 h-2 rounded-full bg-vmc-400'></span>
            <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
              WOMEN
            </p>
          </li>

          <li className='flex items-center gap-x-1'>
            {" "}
            <span className='w-2 h-2 rounded-full bg-vmc-300'></span>
            <p className='font-bold text-vmc-200 text-[8px] dark:text-white'>
              CHILDREN
            </p>
          </li> */}
        </ul>
      </div>
      <div className='basis-2/6 border-[1px] border-vmc-700 rounded-[15px] dark:border-[#3D3D3D] pt-[14px]'>
        {" "}
        <h2 className='text-vmc-200 font-bold text-[11px] dark:text-white pl-[15px] mb-5'>
          HEALTH INDEX
        </h2>
        <div className='pl-[15px] relative z-40'>
          <div className='flex items-center -mb-2'>
            <p className='text-vmc-100 font-bold text-[28px]'>75%</p>
            <svg
              width='22'
              height='26'
              viewBox='0 0 22 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.6741 23.8462V2L19.4378 10.7675'
                stroke='#F80D38'
                stroke-width='4'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2 10.7675L10.7637 2L2 10.7675Z'
                stroke='#F80D38'
                stroke-width='4'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <p className='text-vmc-200 font-bold text-[8px] dark:text-white'>
            Patience health rate
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ChartContent;

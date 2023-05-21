import React from "react";

const DoctorList = ({ doctors }) => {
  return (
    <div className='px-4'>
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className='w-full p-[10px] border-[2px] border-vmc-700 rounded-xl flex items-center justify-between mb-2 dark:border-[#3D3D3D]'>
          <div className='flex items-center gap-x-[6px]'>
            <div className='w-[35px] h-[35px] bg-[#D6D6D6] rounded-full border-2 border-[#E1E1E1]'></div>
            <div>
              <p className='text-[10px] font-bold text-vmc-200 dark:text-white'>
                {doctor.name}
              </p>
              <p className={`text-[10px] font-bold ${doctor.color}`}>
                {doctor.status}
              </p>
            </div>
          </div>
          <div className='flex flex-col items-end gap-[6px]'>
            <img src='/oval.svg' alt='Icon' />
            <p className='text-[10px] text-vmc-200 font-normal dark:text-white'>
              {doctor.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;

import React from "react";

const doctorList = [
  {
    id: "1",
    name: "Dr. Scut Tom",
    status: "SICK VISIT",
    date: "Friday, August 11",
    color: "text-blue-500",
  },
  {
    id: "2",
    name: "Dr. Amina Ahmed",
    status: "Consultation",
    date: "Tuesday, July 30",
    color: " text-indigo-700",
  },
  {
    id: "3",
    name: "Dr. Ibrahim Yekeni",
    status: "Examination",
    date: "Wednesday, July 12",
    color: "text-yellow-400",
  },
  {
    id: "4",
    name: "Dr. Banabas Paul",
    status: "Emergency",
    date: "Monday, June 14",
    color: "text-blue-700",
  },
];
const PrevDoctorList = () => {
  return (
    <div className='px-4 mb-4'>
      {doctorList.map((doctor) => (
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

export default PrevDoctorList;

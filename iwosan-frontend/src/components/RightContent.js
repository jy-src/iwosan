import React from "react";
import BarChart from "./Chart/BarChart";
import DoctorList from "./DoctorList";
import PrevDoctorList from "./PrevDoctorList";

const doctorList = [
	{
		id: "1",
		name: "Dr. Ibrahim Yekeni",
		status: "Emergency",
		date: "Tuesday, October 24",
		color: "text-blue-700",
	},
	{
		id: "2",
		name: "Dr. Ebuka Kelechi",
		status: "Examination",
		date: "Monday, November 2",
		color: "text-yellow-400",
	},
	{
		id: "3",
		name: "Dr. Bridget Olowojeje",
		status: "Consultation",
		date: "Friday, November 13",
		color: "text-indigo-700",
	},
	{
		id: "4",
		name: "Dr. Michael Stwart",
		status: "Routine Checkup",
		date: "Thursday, December 9",
		color: "text-red-500",
	},
];
const RightContent = () => {
	return (
		<div className="bg-[#FfFfFf] border-[1px] border-vmc-700 basis-[30%] rounded-[15px] pt-[14px] dark:bg-black dark:border-[#3D3D3D]">
			<h2 className="text-vmc-200 font-bold text-[11px] dark:text-white pl-[15px]">
				OVERALL APPOINTMENTS
			</h2>
			<div className="-mt-1 mb-5">
				<BarChart />
				<ul className="px-[15px] flex items-center flex-wrap gap-x-5 gap-y-3 -mt-2">
					<li className="flex items-center gap-x-1">
						<span className="w-2 h-2 rounded-full bg-vmc-100"></span>
						<p className="font-bold text-vmc-200 text-[8px] dark:text-white">
							EMERGENCY
						</p>
					</li>
					<li className="flex items-center gap-x-1">
						<span className="w-2 h-2 rounded-full bg-vmc-400"></span>
						<p className="font-bold text-vmc-200 text-[8px] dark:text-white">
							EXAMINATION
						</p>
					</li>
					<li className="flex items-center gap-x-1">
						<span className="w-2 h-2 rounded-full bg-vmc-500"></span>
						<p className="font-bold text-vmc-200 text-[8px] dark:text-white">
							CONSULTATION
						</p>
					</li>
					<li className="flex items-center gap-x-1">
						{" "}
						<span className="w-2 h-2 rounded-full bg-vmc-300"></span>
						<p className="font-bold text-vmc-200 text-[8px] dark:text-white">
							ROUTINE CHECKUP
						</p>
					</li>
					<li className="flex items-center gap-x-1">
						{" "}
						<span className="w-2 h-2 rounded-full bg-vmc-600"></span>
						<p className="font-bold text-vmc-200 text-[8px] dark:text-white">
							SICK VISIT
						</p>
					</li>
				</ul>
			</div>
			<div className="w-full h-[1.6px] bg-vmc-700 mt-2 dark:bg-[#3D3D3D]"></div>
			<h2 className="text-vmc-200 font-bold text-[11px] dark:text-white pl-[15px] mt-4 mb-[10px]">
				UPCOMING APPOINTMENTS
			</h2>
			<DoctorList doctors={doctorList} />
			<div className="w-full h-[1.6px] bg-vmc-700 mt-[24px] mb-[15px] dark:bg-[#3D3D3D]"></div>
			<h2 className="text-vmc-200 font-bold text-[11px] dark:text-white pl-[15px] mb-[5px]">
				PREVIOUS APPOINTMENTS
			</h2>
			<div className="flex items-center px-[15px] py-[10px] font-bold text-[10px] text-vmc-200 text-center mb-2">
				<span className="basis-1/3 py-[12px] border-[1.8px] border-[#E1E1E1] rounded-tl-[7px] rounded-bl-[7px] cursor-pointer dark:border-[#3D3D3D] dark:text-white hover:bg-vmc-300 hover:text-white">
					DAY
				</span>
				<span className="basis-1/3 py-[12px] bg-vmc-300 text-white border-t-[1.8px] border-b-[1.8px] border-[#E1E1E1] cursor-pointer dark:border-[#3D3D3D] dark:text-white hover:bg-vmc-300 hover:text-white">
					WEEK
				</span>
				<span className="basis-1/3 py-[12px] border-[1.8px] border-[#E1E1E1] rounded-tr-[7px] rounded-br-[7px] cursor-pointer dark:border-[#3D3D3D] dark:text-white hover:bg-vmc-300 hover:text-white">
					MONTH
				</span>
			</div>
			<PrevDoctorList />
		</div>
	);
};

export default RightContent;

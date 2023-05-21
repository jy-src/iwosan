import React from "react";
import ChartContent from "./ChartContent";

const LeftContent = () => {
	return (
		<div className=" basis-[70%] rounded-2xl">
			<ChartContent />
			<div className="flex gap-x-5 mb-12">
				<div className="w-[70%]">
					<img
						src="/covid-19.png"
						alt="Covid Map"
						className="w-full dark:hidden"
					/>
					<img
						src="/covid-dark.png"
						alt="Covid Map"
						className="w-full hidden dark:inline-block"
					/>
				</div>
				<div className="w-[30%]">
					<img
						src="/range.png"
						alt="Range Map"
						className="w-full dark:hidden"
					/>
					<img
						src="/range-dark.png"
						alt="Range Map"
						className="w-full hidden dark:inline-block"
					/>
				</div>
			</div>
			<div className="w-full bg-[#FfFfFf] border-[1px] border-vmc-700 p-[15px]  rounded-[15px] dark:bg-black dark:border-[#3D3D3D] mb-5">
				<div className="flex items-center justify-between mb-[22px]">
					<h2 className="text-vmc-200 font-bold text-[11px] dark:text-white">
						DOCTORS
					</h2>
					<div className="flex items-center gap-x-[5px]">
						<input
							type="text"
							placeholder="Search doctors by name or title"
							className="w-[260px] py-[9px] pl-[18px] rounded-[5px] text-[10px] text-vmc-200 placeholder:text-[10px] placeholder:text-vmc-200 border-[1px] border-[#E7E7E7] outline-gray-200"
						/>
						<div className="flex items-center px-[15px] py-[10px] font-bold text-[10px] text-vmc-200 text-center">
							<span className="py-[8px] px-[20px] border-[1.8px] border-[#E1E1E1] rounded-tl-[7px] rounded-bl-[7px] cursor-pointer dark:border-[#3D3D3D] dark:text-white hover:bg-vmc-300 hover:text-white">
								ALL
							</span>
							<span className="py-[8px] px-[28px] bg-vmc-300 text-white border-t-[1.8px] border-b-[1.8px] border-[#E1E1E1] cursor-pointer dark:border-[#3D3D3D] dark:text-white hover:bg-vmc-300 hover:text-white">
								MEN{" "}
							</span>
							<span className="py-[8px] px-[28px] border-[1.8px] border-[#E1E1E1] rounded-tr-[7px] rounded-br-[7px] cursor-pointer dark:border-[#3D3D3D] dark:text-white hover:bg-vmc-300 hover:text-white">
								WOMEN
							</span>
						</div>
					</div>
				</div>
				<div className="w-full mb-[20px]">
					<img
						src="/doctors-list.png"
						alt="List"
						className="w-full dark:hidden"
					/>
					<img
						src="/doctors-list-dark.png"
						alt="List"
						className="w-full hidden dark:inline-block"
					/>
				</div>
				<div className="flex justify-center w-full">
					<span className="font-bold text-[10px] py-[5px] px-[18px] text-vmc-200 border-[1px] border-[#E7E7E7] cursor-pointer dark:border-[#3D3D3D] dark:text-white hover:bg-vmc-100 hover:text-white rounded-xl">
						GO TO DOCTORS
					</span>
				</div>
			</div>
		</div>
	);
};

export default LeftContent;

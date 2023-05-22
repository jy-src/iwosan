import React from "react";

const Nav = () => {
	const currentUser = JSON.parse(localStorage.getItem("user"));

	return (
		<div className="w-full bg-vmc-800 py-[20.92px] pl-6 pr-[30px] rounded-[20px] dark:bg-tw-dark-200 flex items-center mb-[17.5px]">
			<div className="mr-[14.7px]">
				<input
					type="text"
					placeholder="Search pathology results"
					className="w-[940px] py-[15px] pl-[30px] rounded-xl text-[10px] text-black placeholder:text-[10px] placeholder:text-vmc-200 border-[1px] border-[#C5C5C5] outline-gray-300"
				/>
			</div>
			<img src="/notification.svg" alt="Icon" className="mr-[14.7px]" />
			<div className="bg-[#C5C5C5] w-[1.8px] h-7 mr-[21px]"></div>
			<div className="flex items-center gap-x-3">
				<div className="w-[42px] h-[42px] bg-[#D6D6D6] rounded-full border-2 border-white"></div>
				<div className="flex flex-col">
					<span className="text-xs text-vmc-200 font-bold dark:text-white">
						{currentUser.email}
					</span>
					<span className="text-[10px] text-vmc-100 dark:text-white">
						PATIENT
					</span>
				</div>
			</div>
		</div>
	);
};

export default Nav;

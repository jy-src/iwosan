import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
	const navigate = useNavigate();

	const logoutHandler = (event) => {
		event.preventDefault();

		localStorage.removeItem("user");
		navigate("/");
	};
	const [open, setOpen] = useState(true);

	const location = useLocation();

	const Menus = [
		{
			id: "1",
			title: "Overview",
			src: "/overview.svg",
			dark: "/overview-light.svg",
			href: "/",
		},
		{
			id: "2",
			title: "Appointments",
			src: "/appointments.svg",
			dark: "/appointments-light.svg",
			//   href: "/appointments",
		},
		{
			id: "3",
			title: "Doctors",
			src: "/doctors.svg",
			dark: "/doctors-light.svg",
			//   href: "/doctors",
		},
		{
			id: "4",
			title: "Pathology Results",
			src: "/pathology.svg",
			dark: "/pathology-light.svg",
			//   href: "/pathology_result",
		},
		{
			id: "5",
			title: "Chats",
			src: "/chats.svg",
			dark: "/chats-light.svg",
			//   href: "/chat",
		},
	];
	return (
		<div
			className={`${
				open ? "w-[300px]" : "w-[90px]"
			} h-full bg-vmc-800 rounded-[20px] py-[20px] duration-300 dark:bg-tw-dark-200`}
		>
			<div
				className={`flex items-center justify-between px-[26px] mb-[21px] ${
					!open && "flex-col gap-5"
				}`}
			>
				<div className="flex items-center gap-[5px] ">
					<img src="/sidebar-logo.png" alt="Iwosan Logo" />
					<img
						src="/iwosan.png"
						alt="Iwosan text"
						className={`w-20 ${!open && "hidden"} dark:hidden`}
					/>
					<img
						src="/iwosan-light.png"
						alt="Iwosan text"
						className={`w-20 ${
							!open && "hidden dark:hidden"
						} hidden dark:inline-block`}
					/>
				</div>
				<img
					src="/expand.svg"
					alt="Expand Icon"
					className="cursor-pointer  dark:hidden"
					onClick={() => setOpen(!open)}
				/>
				<img
					src="/expand-icon-light.svg"
					alt="Expand Icon"
					className="cursor-pointer hidden dark:inline-block"
					onClick={() => setOpen(!open)}
				/>
			</div>
			<div className="w-full h-[1.5px] bg-[#D3D3D3] mb-[35px]"></div>
			<ul className="mb-[34px]">
				{Menus.map((menu) => (
					<Link key={menu.id} to={menu.href}>
						<li
							className={`${
								location.pathname === menu.href
									? "bg-[#DFE0E2] text-vmc-100 font-bold dark:text-vmc-100"
									: "text-vmc-200 font-normal "
							} py-4 pl-8 mb-5 text-xs  flex items-center gap-x-4 cursor-pointer hover:bg-[#DFE0E2] rounded-sm dark:text-white  dark:hover:text-vmc-200`}
						>
							<img
								src={menu.src}
								alt={`${menu.title} Icon`}
								className="dark:hidden"
							/>
							<img
								src={menu.dark}
								alt={`${menu.title} Icon`}
								className="hidden dark:inline-block"
							/>
							<span className={`${!open && "hidden"} origin-left duration-300`}>
								{menu.title}
							</span>
						</li>
					</Link>
				))}
			</ul>
			<div>
				<p
					className={`text-xs font-bold text-vmc-200 mb-[44px] pl-[26px] dark:text-white ${
						!open && "hidden"
					}`}
				>
					ACCOUNT
				</p>
				<ul className="mb-[450px]">
					<Link to="">
						<li className="text-vmc-200 font-normal py-4 pl-8 mb-5 text-xs  flex items-center gap-x-4 cursor-pointer hover:bg-[#DFE0E2] rounded-sm dark:text-white  dark:hover:text-vmc-200">
							<img
								src="/settings.svg"
								alt="Settings Icon"
								className="dark:hidden"
							/>
							<img
								src="/settings-light.svg"
								alt="Settings icon"
								className="hidden dark:inline-block"
							/>
							<span className={`${!open && "hidden"} origin-left duration-300`}>
								Settings
							</span>
						</li>
					</Link>
					<Link to="">
						<li className="text-[#F80D38] font-bold py-4 pl-8 text-xs  flex items-center gap-x-4 cursor-pointer hover:bg-[#DFE0E2] rounded-sm ">
							<img
								src="/logout.svg"
								alt="logout Icon"
								className="dark:hidden"
							/>
							<img
								src="logout-light.svg"
								alt="logout icon"
								className="hidden dark:inline-block"
							/>
							<span
								onClick={logoutHandler}
								className={`${!open && "hidden"} origin-left duration-300`}
							>
								Logout
							</span>
						</li>
					</Link>
				</ul>
				<div className="w-full h-[.5px] bg-[#D3D3D3]"></div>
				<div className="pl-[26px] flex items-center gap-x-2 pt-[27px]">
					<img src="/telephone.svg" alt="Icon" />
					<div className={`${!open && "hidden"}`}>
						<p className="font-bold text-xs text-vmc-300 italic pb-[2px]">
							Emergency Hotlines:
						</p>
						<p className="text-[10px] text-vmc-200 dark:text-white">
							{" "}
							+234 929282891 +234 60622098
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

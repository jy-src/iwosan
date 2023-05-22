import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginScreen = () => {
	const navigate = useNavigate();

	const emailInput = useRef();
	const passwordInput = useRef();

	const loginHandler = async (event) => {
		event.preventDefault();

		const payload = {
			email: emailInput.current.value,
			password: passwordInput.current.value,
		};

		try {
			const response = await axios.post(
				"http://127.0.0.1:5000/api/v1/patients/login",
				payload,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			const user = JSON.stringify(response.data.data.user);

			localStorage.setItem("user", user);
			navigate("/");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="bg-white rounded-2xl p-14 text-vmc-200 dark:bg-tw-dark-100 dark:border-[1px] dark:border-white  dark:text-white">
			<div className="mb-7 flex justify-center">
				<img src="/logo.png" alt="Iwosan Logo" />
			</div>
			<p className=" text-center text-base font-bold mb-11">LOGIN</p>
			<form onSubmit={loginHandler} className="w-[450px] mb-[38.71px]">
				<div className="mb-[25.5px]">
					<label className="block text-xs font-normal pb-2" htmlFor="email">
						Email
					</label>
					<input
						className="w-full border-[1px] border-vmc-800 rounded-full text-xs font-normal text-vmc-200 py-5 pl-[21.5px] outline-gray-300 dark:bg-transparent dark:text-white dark:placeholder-white"
						type="email"
						id="email"
						ref={emailInput}
						placeholder="Olaboluwatofezzy@ymail.com"
						required
					/>
				</div>
				<div className="mb-[12.3px]">
					<label className="block text-xs font-normal pb-2" htmlFor="password">
						Password
					</label>
					<input
						className="w-full border-[1px] border-vmc-800 rounded-full text-xs font-normal text-vmc-200 py-5 pl-[21.5px] outline-gray-300 dark:bg-transparent dark:text-white dark:placeholder-white"
						type="password"
						id="password"
						ref={passwordInput}
						placeholder="XXXXXXXXXXXXXX"
						required
					/>
				</div>
				<div className="flex justify-between mb-[42.3px]">
					<div className="flex gap-1 items-center">
						<input type="checkbox" />
						<p className="text-xs font-normal">Remember Me</p>
					</div>
					<span className="text-xs font-normal text-vmc-100 underline dark:text-white">
						Forgot Password?
					</span>
				</div>
				<button className="cursor-pointer w-full bg-vmc-100 text-white text-center text-xs font-bold py-[20.56px] rounded-full">
					LOGIN
				</button>
			</form>
			<p className="text-center text-xs font-normal">
				Don't have an account?{" "}
				<NavLink to="/signup" className=" text-vmc-100 underline">
					Create an account
				</NavLink>
			</p>
		</div>
	);
};

export default LoginScreen;

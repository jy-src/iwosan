// import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PatientDashboard } from "./components/PatientDashboard";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
// eslint-disable-next-line
// import { RequireAuth } from "./components/auth/RequireAuth";

function App() {
	const [theme, setTheme] = useState(null);

	// useEffect(() => {
	//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	//     setTheme("dark");
	//   } else {
	//     setTheme("light");
	//   }
	// }, []);
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const themeSwitchHandler = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						// <RequireAuth>
						<PatientDashboard themeSwitchHandler={themeSwitchHandler} />
						// </RequireAuth>
					}
				/>

				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;

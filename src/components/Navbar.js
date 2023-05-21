import { NavLink } from "react-router-dom";

export const Navbar = () => {
	const navLinkStyles = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			textDecoration: isActive ? "none" : "underline",
		};
	};

	return (
		<nav className="primary-nav">
			<NavLink style={navLinkStyles} to="/">
				Dashboard
			</NavLink>
			<NavLink style={navLinkStyles} to="/about">
				About
			</NavLink>
			<NavLink style={navLinkStyles} to="/products">
				Products
			</NavLink>
			<NavLink style={navLinkStyles} to="/profile">
				Profile
			</NavLink>
			<NavLink style={navLinkStyles} to="/login">
				Login
			</NavLink>
		</nav>
	);
};

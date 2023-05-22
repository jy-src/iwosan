import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
	const location = useLocation();

	const currentUser = localStorage.getItem("user");

	if (!currentUser) {
		return <Navigate to="/login" state={{ path: location.pathname }} />;
	}

	return children;
};

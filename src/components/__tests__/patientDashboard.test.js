import { render, screen, cleanup } from "@testing-library/react";
import { PatientDashboard } from "../PatientDashboard";

afterEach(() => {
	cleanup();
});

render(<PatientDashboard />);

test("should render dashboard with user email", () => {
	const PatientDashboard = screen.getByTestId("dashboard");

	const user = JSON.parse(localStorage.getItem("user"));

	expect(PatientDashboard).toBeInTheDocument(user.email);
	expect(PatientDashboard).toHaveTextContent("wash dishes");
});

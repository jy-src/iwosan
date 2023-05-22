import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
export const PatientDashboard = ({ themeSwitchHandler }) => {
	return (
		<div
			className="w-full min-h-screen bg-white py-[19.67px] px-[18px] dark:bg-black flex gap-[19.39px] relative"
			data-testid="dashboard"
		>
			<Sidebar />
			<MainContent themeSwitchHandler={themeSwitchHandler} />
		</div>
	);
};

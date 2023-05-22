import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const MainContent = ({ themeSwitchHandler }) => {
	return (
		<div className="w-full">
			<Nav />
			<Header themeSwitchHandler={themeSwitchHandler} />
			<div className="flex gap-x-6">
				<LeftContent />
				<RightContent />
			</div>
		</div>
	);
};

export default MainContent;
// {
//   /* <div>
//         <button
//           className='bg-green-200 text-sm font-medium rounded-full p-3 dark:bg-white'
//           onClick={themeSwitchHandler}>
//           Dark Mode
//         </button>

//       </div> */
// }

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function BarChart() {
	const [state, setState] = useState({
		series: [
			{
				name: "EMERGENCY",
				data: [15, 19, 31, 27, 22, 23, 23, 4, 4],
				color: "#100DB1",
			},
			{
				name: "EXAMINATION",
				data: [11, 17, 15, 15, 21, 14, 18],
				color: "#FECA57",
			},
			{
				name: "CONSULTATION",
				data: [13, 23, 20, 8, 13, 27, 15],
				color: "#763CEF",
			},
			{
				name: "ROUTINE CHECKUP",
				data: [13, 23, 20, 8, 13, 27, 15],
				color: "#F80D38",
			},
			{
				name: "SICK VISIT",
				data: [13, 23, 20, 8, 13, 27, 15],
				color: "#2798F7",
			},
		],
		options: {
			chart: {
				fontFamily: "Poppins",
				type: "pie",
				height: 150,
				stacked: true,
				background: "#ffffff00",
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},

			responsive: [
				{
					breakpoint: 480,
					options: {
						legend: {
							position: "bottom",
							offsetX: -10,
							offsetY: 0,
						},
					},
				},
			],
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: 14,
					borderRadius: 5,
				},
			},
			xaxis: {
				tickPlacement: "on",
				type: "Month",
				categories: [
					"April",
					"May",
					"June",
					"July",
					"Aug",
					"Sept",
					"Oct",
					"Nov",
					"Dec",
				],
				labels: {
					style: {
						colors: "#343434",
						fontSize: 12,
						fontWeight: 700,
					},
				},
			},
			yaxis: {
				show: false,
				showAlways: false,
			},
			fill: {
				opacity: 5,
			},
			grid: {
				borderColor: "#ffffff00",
			},
		},
	});
	// setState(...state);
	// console.log(setState());
	return (
		<div>
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="bar"
				width={380}
				height={260}
			/>
			{/* <ReactApexChart
        options={state.options}
        series={state.series}
        type='line'
        width={686}
        height={488}
      />
      <ReactApexChart
        options={state.options}
        series={state.series}
        type='area'
        width={686}
        height={488}
      /> */}
		</div>
	);
}

export default BarChart;

//  sparkline: { enabled: true }, toolbar: { show: false, }, }, dataLabels: { enabled: false }, legend: { show: false, }, yaxis: { show: false, }, xaxis: { show: false, labels: { show: false, }, axisBorder: { show: false, }, tooltip: { enabled: false, }

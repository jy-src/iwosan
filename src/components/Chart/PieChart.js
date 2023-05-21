import React from "react";
import Chart from "react-apexcharts";

export function DiagnosticsChart() {
  return (
    <Chart
      type='donut'
      width={250}
      height={160}
      series={[6, 35, 25, 11]}
      options={{
        chart: {
          fontFamily: "Poppins",
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "75%",
            },
          },
        },
        colors: ["#763CEF", "#F80D38", "#100DB1", "#FECA57"],
        labels: ["TYPHOID", "OTHERS", "MALARIA", "COLD"],
      }}></Chart>
  );
}

export function PatientChart() {
  return (
    <Chart
      type='donut'
      width={250}
      height={165}
      series={[12, 48, 40]}
      options={{
        chart: {
          fontFamily: "Poppins",
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "75%",
            },
          },
        },
        colors: ["#FECA57", "#F80D38", "#100DB1"],
        labels: ["CHILDREN", "WOMEN", "MEN"],
      }}></Chart>
  );
}

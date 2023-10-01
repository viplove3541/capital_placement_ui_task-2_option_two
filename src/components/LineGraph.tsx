import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required Chart.js elements and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define chart options
const options = {
  responsive: true, // Make the chart responsive to screen size
  Tooltip: true, // Enable tooltips

  scales: {
    x: {
      display: true,
      title: {
        display: false,
        text: "Month",
      },
    },
    y: {
      display: true,
      title: {
        display: false,
        text: "Elevation (meters)",
      },
      min: 0, // Customize the minimum elevation
      max: 1000, // Customize the maximum elevation
    },
  },

  plugins: {
    legend: {
      position: "top" as const, // Set the legend position to the top
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

// Define chart labels
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

// Define data for qualified and disqualified categories
const qualifiedData: number[] = [600, 305, 390, 600, 460, 812, 651]; // Replace with your qualified data points
const disqualifiedData: number[] = [560, 460, 300, 500, 230, 962, 421]; // Replace with your disqualified data points

// Define chart data
const data = {
  labels, // Assign labels to the x-axis
  datasets: [
    {
      label: "Qualified",
      data: qualifiedData,
      borderColor: "rgba(251, 227, 142, 0.9)", // Set the border color
      backgroundColor: "#FBE38E", // Set the background color
    },
    {
      label: "Disqualified",
      data: disqualifiedData,
      borderColor: "#9A89FF", // Set the border color
      backgroundColor: "#B1A5FF", // Set the background color
    },
  ],
};

// Define the LineGraph component
const LineGraph: React.FC = () => {
  return <Line options={options} data={data} />;
};

export default LineGraph;

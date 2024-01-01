import React from "react";
import "./App.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: [
    "Apartment",
    "Food",
    "Car/Transport",
    "Presents",
    "Health/Cosmetics",
    "Other",
  ],
  datasets: [
    {
      label: "My expenses pie chart",
      data: [30, 20, 15, 10, 15, 10],
      backgroundColor: [
        "rgba(40, 87, 9, 0.8)",
        "rgba(224, 141, 233, 0.8)",
        "rgba(13, 23, 209, 0.8)",
        "rgba(203, 50, 30, 0.8)",
        "rgba(242, 230, 17, 0.8)",
        "rgba(30, 30, 29, 0.8)",
      ],
      borderColor: [
        "rgba(1, 1, 1, 1)",
        "rgba(1, 1, 1, 1)",
        "rgba(1, 1, 1, 1)",
        "rgba(1, 1, 1, 1)",
        "rgba(1, 1, 1, 1)",
        "rgba(1, 1, 1, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

export function App() {
  return (
    <div>
      <h1>My expenses pie chart</h1>
      <Pie data={data} />
    </div>
  );
}

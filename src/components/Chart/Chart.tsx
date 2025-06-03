import React from "react";
import { Line } from "react-chartjs-2";
import { FSLResult } from "../../utils/fileProcessor";

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

export const Chart = ({ data }: { data: FSLResult[] }) => {
  const config = {
    labels: data.map((_data: FSLResult) => _data.date),
    datasets: [
      {
        label: "Bop",
        data: data.map((_data) => _data.value),

        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  console.log(config);
  return (
    //TODO: fix styling
    <div style={{ maxHeight: 500 }}>
      <Line data={config} />
    </div>
  );
};

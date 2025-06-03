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
    labels: data.map((_data: FSLResult) => _data.date.toISOString()),
    datasets: [
      {
        label: "FreeStyle Libre results",
        data: data.map((_data) => _data.value),

        borderColor: "#224411",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    elements: {
      line: { tension: 1 },
    },
  };

  return (
    <div>
      <Line data={config} options={options} />
    </div>
  );
};

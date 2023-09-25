import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Repartition des séances",
		},
	},
};

const data = {
	labels: ["Cryo", "Infra", "Tesla"],
	datasets: [
		{
			label: "Séances",
			data: [19, 12, 8],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
			],
			borderWidth: 1,
		},
	],
};

const PieChart = () => {
	return <Pie data={data} options={options} />;
};

export default PieChart;

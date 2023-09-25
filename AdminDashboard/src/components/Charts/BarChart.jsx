import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Evaluation des séances",
		},
	},
};

const data = {
	labels: ["Cryo", "Infra", "Tesla"],
	datasets: [
		{
			label: "Bien",
			data: [11, 13, 12],
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Mauvais",
			data: [4, 2, 3],
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};
const ChartBar = () => {
	return (
		<div className="">
			<Bar options={options} data={data} />
		</div>
	);
};

export default ChartBar;

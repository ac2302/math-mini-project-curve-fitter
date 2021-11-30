import React, { useState } from "react";
import regression from "../regression";
import functionPlot from "function-plot";

function Fitter({ datapoints }) {
	const [result, setResult] = useState(null);

	return (
		<div>
			<button
				className="fit-button"
				onClick={() => {
					const points = datapoints.map((dp) => [dp.x, dp.y]);
					let calculatedResult = regression.linear(points, {
						precision: 5,
					});
					setResult(calculatedResult);

					functionPlot({
						target: "#plot",
						width: 775,
						height: 600,
						title: calculatedResult.string,
						data: [
							{
								fn: calculatedResult.string.substr(4),
								graphType: "polyline",
							},
							{
								graphType: "scatter",
								fnType: "points",
								points: points,
							},
						],
					});
				}}
			>
				linear
			</button>

			<button
				className="fit-button"
				onClick={() => {
					const points = datapoints.map((dp) => [dp.x, dp.y]);
					let calculatedResult = regression.power(points, {
						precision: 5,
					});
					setResult(calculatedResult);

					functionPlot({
						target: "#plot",
						width: 775,
						height: 600,
						title: calculatedResult.string,
						data: [
							{
								fn: calculatedResult.string.substr(4),
								graphType: "polyline",
							},
							{
								graphType: "scatter",
								fnType: "points",
								points: points,
							},
						],
					});
				}}
			>
				power
			</button>

			<button
				className="fit-button"
				onClick={() => {
					const points = datapoints.map((dp) => [dp.x, dp.y]);
					let calculatedResult = regression.exponential(points, {
						precision: 5,
					});
					setResult(calculatedResult);

					functionPlot({
						target: "#plot",
						width: 775,
						height: 600,
						title: calculatedResult.string,
						data: [
							{
								fn: `${calculatedResult.equation[0]} * (2.7182818284590452353602874713526624977572470 ^ (${calculatedResult.equation[1]} * x))`,
								graphType: "polyline",
							},
							{
								graphType: "scatter",
								fnType: "points",
								points: points,
							},
						],
					});
				}}
			>
				exponential
			</button>

			<div id="plot"></div>
		</div>
	);
}

export default Fitter;

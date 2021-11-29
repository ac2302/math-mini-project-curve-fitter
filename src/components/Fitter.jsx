import React, { useState } from "react";
import regression from "regression";
import functionPlot from "function-plot";

let width = 800;
let height = 500;

function Fitter({ datapoints }) {
	const [result, setResult] = useState(null);

	return (
		<div>
			<button
				onClick={() => {
					const points = datapoints.map((dp) => [dp.x, dp.y]);
					let calculatedResult = regression.exponential(points, {
						precision: 5,
					});
					setResult(calculatedResult);

					functionPlot({
						target: "#plot",
						width: 580,
						height: 400,
						title: calculatedResult.string,
						data: [
							{
								fn: `${calculatedResult.equation[0]} * (2.71 ^ (${calculatedResult.equation[1]} * x))`,
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
				exponential curve
			</button>

			<div id="plot"></div>
		</div>
	);
}

export default Fitter;

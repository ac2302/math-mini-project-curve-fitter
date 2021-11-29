import React, { useState } from "react";
import regression from "regression";

function Fitter({ datapoints }) {
	const [result, setResult] = useState(null);

	return (
		<div>
			<button
				onClick={() => {
					const points = datapoints.map((dp) => [dp.x, dp.y]);
					setResult(regression.exponential(points));
				}}
			>
				exponential curve
			</button>

			{result && (
				<div>
					<h3>
						y = {result.equation[0]} e<sup> {result.equation[1]} x</sup>
					</h3>
				</div>
			)}
		</div>
	);
}

export default Fitter;

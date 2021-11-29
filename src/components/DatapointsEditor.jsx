import React, { useState } from "react";

function DatapointsEditor({ datapoints, setDatapoints }) {
	let [latest, setLatest] = useState(1);

	return (
		<div className="datapoints-editor">
			{datapoints.map((datapoint) => (
				<div key={datapoint.id}>
					{/* {datapoint.x} {datapoint.y} {datapoint.id} */}
					<DatapointEditor
						datapoints={datapoints}
						setDatapoints={setDatapoints}
						id={datapoint.id}
						key={datapoint.id}
					/>
				</div>
			))}
			<button
				onClick={() => {
					setDatapoints([
						...datapoints,
						{ x: latest, y: 1 + latest, id: latest },
					]);
					setLatest(latest + 1);
				}}
			>
				new item
			</button>
		</div>
	);
}

function DatapointEditor({ datapoints, setDatapoints, id }) {
	let coords = datapoints.filter((dp) => dp.id == id)[0];

	return (
		<div>
			<code>x = </code>
			<input
				type="number"
				defaultValue={coords.x}
				onChange={(e) => {
					setDatapoints((prevState) =>
						prevState.map((entry) => {
							if (entry.id === id) entry.x = Number(e.target.value);
							return entry;
						})
					);
				}}
			/>
			<code>y = </code>
			<input
				type="number"
				defaultValue={coords.y}
				onChange={(e) => {
					setDatapoints((prevState) =>
						prevState.map((entry) => {
							if (entry.id === id) entry.y = Number(e.target.value);
							return entry;
						})
					);
				}}
			/>
			<button
				onClick={() => {
					setDatapoints((prevState) => {
						return prevState.filter((entry) => entry.id !== id);
					});
				}}
			>
				remove
			</button>
		</div>
	);
}

export default DatapointsEditor;

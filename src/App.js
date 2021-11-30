import "./App.css";
import DatapointsEditor from "./components/DatapointsEditor";
import React, { useState, useEffect } from "react";
import Fitter from "./components/Fitter";

function App() {
	const [datapoints, setDatapoints] = useState([]);

	return (
		<div className="main-container">
			<h1>Curve Fitter</h1>
			<DatapointsEditor datapoints={datapoints} setDatapoints={setDatapoints} />
			<Fitter datapoints={datapoints} />
		</div>
	);
}

export default App;

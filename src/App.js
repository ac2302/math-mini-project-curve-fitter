import "./App.css";
import DatapointsEditor from "./components/DatapointsEditor";
import React, { useState, useEffect } from "react";
import Fitter from "./components/Fitter";

function App() {
	const [datapoints, setDatapoints] = useState([]);

	return (
		<div>
			<DatapointsEditor datapoints={datapoints} setDatapoints={setDatapoints} />
			<Fitter datapoints={datapoints} />
		</div>
	);
}

export default App;

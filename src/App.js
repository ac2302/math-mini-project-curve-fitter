import "./App.css";
import DatapointsEditor from "./components/DatapointsEditor";
import React, { useState, useEffect } from "react";

function App() {
	const [datapoints, setDatapoints] = useState([]);

	return (
		<div>
			<DatapointsEditor datapoints={datapoints} setDatapoints={setDatapoints} />
		</div>
	);
}

export default App;

import React, { useEffect } from "react";

import "./App.css";
import FireStore from "./firebase/firebase";
import Router from "./components/router/Router";

function App() {
	useEffect(() => {
		FireStore.collection("collection1")
			.get()
			.then((data) => {
				data.forEach((e) => {
					console.log(e.data());
				});
			});
	}, []);
	return (
		<div className="App">
			<Router />
		</div>
	);
}

export default App;

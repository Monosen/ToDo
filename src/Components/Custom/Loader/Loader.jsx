import React from "react";

import "./Loader.styles.css";

const Loader = () => {
	return (
		<div class="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;

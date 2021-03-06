import React from "react";

import closed from "../../svg/closed.svg";

const Items = ({
	title,
	id,
	handleAllListComplete,
	completed,
	handleItemListDelete,
	handleAllListIncomplete,
}) => {
	return (
		<div className="w-80 mx-4 my-3 border border-gray-300 shadow rounded px-3.5 py-4 h-36 transition transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-xl relative flex flex-col justify-between">
			<p className="mb-3">{title}</p>
			{!completed ? (
				<button
					onClick={() => handleAllListComplete(id)}
					className="px-5 py-3 bg-black text-white rounded capitalize mt-auto hover:text-black hover:bg-white border-2 border-black font-medium w-32"
				>
					complete
				</button>
			) : (
				<button
					onClick={() => handleAllListIncomplete(id)}
					className="px-5 py-3 bg-black text-white rounded capitalize mt-auto hover:text-black hover:bg-white border-2 border-black font-medium w-32"
				>
					reset
				</button>
			)}
			{completed && (
				<button onClick={() => handleItemListDelete(id)}>
					<img
						src={closed}
						alt={title}
						className="absolute w-6 top-0 right-0 cursor-pointer transition transform hover:-rotate-45"
					/>
				</button>
			)}
		</div>
	);
};

export default Items;

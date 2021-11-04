import React from "react";

import closed from "../../svg/closed.svg";

const Items = ({
	title,
	id,
	handleAllListComplete,
	completed,
	handleItemListDelete,
}) => {
	return (
		<div className="w-80 mx-4 my-3 border border-gray-300 shadow rounded px-3.5 py-4 h-36 transition transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-xl relative">
			<p className="mb-3">{title}</p>
			<button
				onClick={() => handleAllListComplete(id)}
				className="px-5 py-3 bg-black text-white rounded capitalize mt-auto hover:text-black hover:bg-white border-2 border-black font-medium"
			>
				completar
			</button>
			{completed && (
				<button onClick={() => handleItemListDelete(id)}>
					<img
						src={closed}
						alt={title}
						className="absolute w-6 top-0 right-0 cursor-pointer"
					/>
				</button>
			)}
		</div>
	);
};

export default Items;

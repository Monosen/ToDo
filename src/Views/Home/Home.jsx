import React, { useEffect, useState } from "react";

//Components
import Items from "../../Components/Home/Items";
import Loader from "../../Components/Custom/Loader/Loader";

const Home = () => {
	const [allList, setAllList] = useState([]);
	const [option, setOption] = useState(0);

	const handleAllListComplete = (id) => {
		if (!allList[id - 1].completed) {
			setAllList(
				allList.map((item) => {
					if (id === item.id) {
						item.completed = true;
					}
					return item;
				})
			);
		}
	};

	const handleAllListIncomplete = (id) => {
		setAllList(
			allList.map((item) => {
				if (id === item.id) {
					item.completed = false;
				}
				return item;
			})
		);
	};

	const handleItemIncomplete = () => {
		return allList.some((item) => item.completed === false);
	};

	const handleItemComplete = () => {
		return allList.some((item) => item.completed === true);
	};

	const handleItemListDelete = (id) => {
		setAllList(allList.filter((item) => item.id !== id));
	};

	useEffect(() => {
		const handlefecthData = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			);
			const result = await response.json();
			setAllList(result.slice(0, 20));
		};
		handlefecthData();
	}, []);

	return (
		<>
			<div className="h-48">
				<h1 className="text-center text-7xl py-5">To Do</h1>
				<div className="text-center">
					<button onClick={() => setOption(0)} className="p-4">
						All
					</button>
					{handleItemComplete() && (
						<button onClick={() => setOption(1)} className="p-4">
							Complete
						</button>
					)}
					{handleItemIncomplete() && (
						<button onClick={() => setOption(2)} className="p-4">
							Incomplete
						</button>
					)}
				</div>
			</div>
			<div className="flex flex-wrap justify-center container mx-auto max-w-7xl">
				{allList?.length > 0 && option === 0 ? (
					allList.map((item) => (
						<Items
							key={item.id}
							title={item.title}
							id={item.id}
							handleAllListComplete={handleAllListComplete}
							completed={item.completed}
							handleItemListDelete={handleItemListDelete}
							handleAllListIncomplete={handleAllListIncomplete}
						/>
					))
				) : allList?.length > 0 && option === 1 ? (
					allList.map(
						(item) =>
							item.completed && (
								<Items
									key={item.id}
									title={item.title}
									id={item.id}
									handleAllListComplete={handleAllListComplete}
									completed={item.completed}
									handleItemListDelete={handleItemListDelete}
									handleAllListIncomplete={handleAllListIncomplete}
								/>
							)
					)
				) : allList?.length > 0 && option === 2 ? (
					allList.map(
						(item) =>
							!item.completed && (
								<Items
									key={item.id}
									title={item.title}
									id={item.id}
									handleAllListComplete={handleAllListComplete}
								/>
							)
					)
				) : (
					<Loader className="mt-20" />
				)}
			</div>
		</>
	);
};

export default Home;

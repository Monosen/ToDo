import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";
import Error404 from "./Views/Error404/Error404";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="*">
					<Error404 />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;

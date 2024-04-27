import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Distribution from "./pages/Distrbution";
import Provider from "./context/Provider";
import Insight from "./pages/Insight";

const App = () => {
	return (
		<>
			<main>
				<Provider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/distribution" element={<Distribution />} />
						<Route path="/insight" element={<Insight />} />
						<Route path="*" element={<h1>Not Found</h1>} />
					</Routes>
				</Provider>
			</main>
		</>
	);
};

export default App;

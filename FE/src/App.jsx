import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Distribution from "./pages/Distrbution";
import Provider from "./context/Provider";
import Insight from "./pages/Insight";
import Home from "./pages/Home";
import DistributionID from "./pages/DistributionID";

const App = () => {
	return (
		<>
			<main>
				<Provider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/distribution" element={<Distribution />} />
						<Route path="/distribution/:id" element={<DistributionID/>} />
						<Route path="/insight" element={<Insight />} />
						<Route path="*" element={<h1>Not Found</h1>} />
					</Routes>
				</Provider>
			</main>
		</>
	);
};

export default App;

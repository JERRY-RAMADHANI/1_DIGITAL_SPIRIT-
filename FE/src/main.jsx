import "./css/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Provider from "@/context/Provider";
import Login from "./pages/Login";
import Distribution from "./pages/Distrbution";
import Insight from "./pages/Insight";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Login />
	},
	{
		path: "/distribution",
		element: <Distribution />
	},
	{
		path: "/insight",
		element: <Insight />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
);

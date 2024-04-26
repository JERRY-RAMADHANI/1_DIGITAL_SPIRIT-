import "./css/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Provider from "@/context/Provider";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
);

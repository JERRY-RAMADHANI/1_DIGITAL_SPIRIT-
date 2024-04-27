import { createContext, useState, useEffect } from "react";

const initState = {
	viewport: window.innerWidth,
	navIsOpen: false,
	activeLink: "home"
};

export const appStateContext = createContext();

export default function AppStateContextProvider({ children }) {
	const [appState, setAppState] = useState(initState);

	const handleResize = () => {
		setAppState((appState) => ({ ...appState, viewport: window.innerWidth }));
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return <appStateContext.Provider value={{ appState, setAppState }}>{children}</appStateContext.Provider>;
}

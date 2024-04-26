import AppStateContextProvider from "./AppStateContext";
import AuthContextProvider from "./AuthContext";

export default function Provider({ children }) {
	return (
		<AppStateContextProvider>
			<AuthContextProvider>{children}</AuthContextProvider>
		</AppStateContextProvider>
	);
}

import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
	const [auth, setAuth] = useState({ authenticated: false });

	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
}

import { createContext, useContext, useReducer } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const AuthContext = createContext();

const initialState = { user: null, isAuthenticated: false };

function reducer(state, action) {
	switch (action.type) {
		case "signup":
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			};
		case "login":
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			};
		case "logout":
			return {
				...state,
				user: null,
				isAuthenticated: false,
			};
		default:
			throw new Error("unknown action requested");
	}
}

function AuthProvider({ children }) {
	const [{ user, isAuthenticated }, dispatch] = useReducer(
		reducer,
		initialState
	);
	const [users, setUsers] = useLocalStorageState([], "ticketapp_session");

	function login(email, password) {
		const user = users.find(
			(u) => u.email === email && u.password === password
		);

		if (user) {
			dispatch({ type: "login", payload: user });
			return `Login successful! Welcome back ${user.name}`;
		} else {
			return "Invalid email or password.";
		}
	}

	function signup(name, email, password) {
		const currentUsers = users || [];
		const userExists = currentUsers.some((user) => user.email === email);
		if (userExists) {
			return "User already exists! Please login.";
		}
		const newUser = { name, email, password };
		setUsers([...currentUsers, newUser]);
		dispatch({ type: "signup", payload: newUser });
		return "Signup successful!";
	}

	function logout() {
		dispatch({ type: "logout" });
	}

	return (
		<AuthContext.Provider
			value={{ user, isAuthenticated, login, signup, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined)
		throw new Error("context was used outside Authprovider ");
	return context;
}

export { AuthProvider, useAuth };

import { createContext, useContext, useReducer, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const AuthContext = createContext();

const initialState = {
	user: null,
	isAuthenticated: false,
};

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
	const [users, setUsers] = useLocalStorageState([], "ticketapp_session");
	const [{ user, isAuthenticated }, dispatch] = useReducer(
		reducer,
		initialState,
		() => {
			if (users.length > 0) {
				return {
					user: users[0],
					isAuthenticated: true,
				};
			} else {
				return { user: null, isAuthenticated: false };
			}
		}
	);

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
		const newUser = { name, email, password, tickets: [] };
		setUsers([...currentUsers, newUser]);
		dispatch({
			type: "signup",
			payload: newUser,
		});
		return "Signup successful!";
	}

	function logout() {
		dispatch({ type: "logout" });
	}

	function addTicket(newTicket) {
		const updatedUser = {
			...user,
			tickets: [...user.tickets, newTicket],
		};
		dispatch({ type: "login", payload: updatedUser });

		const updatedUsers = users.map((user) =>
			user.email === updatedUser.email ? updatedUser : user
		);
		setUsers(updatedUsers);
	}
	function updateTicket(updatedTicket) {
		const updatedTickets = user.tickets.map((ticket) =>
			ticket.id === updatedTicket.id ? updatedTicket : ticket
		);

		const updatedUser = {
			...user,
			tickets: updatedTickets,
		};

		dispatch({ type: "login", payload: updatedUser });

		const updatedUsers = users.map((u) =>
			u.email === updatedUser.email ? updatedUser : u
		);
		setUsers(updatedUsers);
	}

	function deleteTicket(ticket) {
		const updatedTickets = user.tickets.filter((t) => t.id !== ticket.id);

		const updatedUser = {
			...user,
			tickets: updatedTickets,
		};

		dispatch({ type: "login", payload: updatedUser });

		const updatedUsers = users.map((u) =>
			u.email === updatedUser.email ? updatedUser : u
		);
		setUsers(updatedUsers);
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				login,
				signup,
				logout,
				addTicket,
				updateTicket,
				deleteTicket,
			}}
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

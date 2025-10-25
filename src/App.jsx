import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import AppLayout from "./pages/AppLayout";
import TicketManagerPage from "./components/TicketManagerPage";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />

					<Route
						path="app"
						element={
							<ProtectedRoute>
								<AppLayout />
							</ProtectedRoute>
						}
					>
						<Route index element={<Navigate replace to={"dashboard"} />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="tickets" element={<TicketManagerPage />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;

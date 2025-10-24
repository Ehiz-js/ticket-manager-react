import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import BackButton from "../components/BackButton";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const { isAuthenticated, login } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			setErrors({ success: `Login successful! Welcome back!` });
			setEmail("");
			setPassword("");
			navigate("/app", { replace: true });
		}
	}, [isAuthenticated, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let newErrors = {};

		if (!email) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = "Enter a valid email";
		}

		if (!password) {
			newErrors.password = "Password is required";
		} else if (password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
		}

		if (Object.keys(newErrors).length === 0) {
			const message = login(email, password);
			newErrors.email = message;
		}
		setErrors(newErrors);
	};

	return (
		<section className={styles.loginSection}>
			<div className={styles.container} style={{ position: "relative" }}>
				<BackButton />
				<h1 className={styles.title}>Welcome Back</h1>
				<p className={styles.subtitle}>Login to your Tickit account</p>

				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<label htmlFor="email">Email</label>
						{errors.success && (
							<span className={styles.success}>{errors.success}</span>
						)}
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="you@example.com"
						/>
						{errors.email && (
							<span className={styles.error}>{errors.email}</span>
						)}
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="••••••••"
						/>
						{errors.password && (
							<span className={styles.error}>{errors.password}</span>
						)}
					</div>

					<button type="submit" className={styles.btnPrimary}>
						Login
					</button>
				</form>
			</div>
		</section>
	);
}

export default Login;

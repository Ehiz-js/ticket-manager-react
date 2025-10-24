import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useAuth } from "../contexts/AuthContext";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const { isAuthenticated, signup } = useAuth();

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			setErrors({ success: `Signup successful! Welcome In!` });
			setName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
			navigate("/dashboard");
		}
	}, [isAuthenticated]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let newErrors = {};

		if (!name) newErrors.name = "Full name is required";

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

		if (!confirmPassword) {
			newErrors.confirmPassword = "Confirm your password";
		} else if (password !== confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		if (Object.keys(newErrors).length === 0) {
			const message = signup(name, email, password);
			newErrors.email = message;
		}
		setErrors(newErrors);
	};

	return (
		<section className={styles.loginSection}>
			<div className={styles.container} style={{ position: "relative" }}>
				<BackButton />
				<h1 className={styles.title}>Create Account</h1>
				<p className={styles.subtitle}>Sign up for a Tickit account</p>

				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<label htmlFor="name">Full Name</label>
						{errors.success && (
							<span className={styles.success}>{errors.success}</span>
						)}
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="John Doe"
						/>
						{errors.name && <span className={styles.error}>{errors.name}</span>}
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="email">Email</label>
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

					<div className={styles.inputGroup}>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="••••••••"
						/>
						{errors.confirmPassword && (
							<span className={styles.error}>{errors.confirmPassword}</span>
						)}
					</div>

					<button type="submit" className={styles.btnPrimary}>
						Sign Up
					</button>
				</form>

				<p className={styles.switchAuth}>
					Already have an account?{" "}
					<a onClick={() => navigate("/login")}>Login here</a>
				</p>
			</div>
		</section>
	);
}

export default Signup;

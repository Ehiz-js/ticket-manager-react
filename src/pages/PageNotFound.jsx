import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
	const navigate = useNavigate();

	return (
		<section className={styles.notFoundSection}>
			<div className={styles.container}>
				<h1 className={styles.title}>404</h1>
				<p className={styles.subtitle}>Oops! Page Not Found</p>
				<p className={styles.description}>
					The page you are looking for might have been removed, had its name
					changed, or is temporarily unavailable.
				</p>
				<button className={styles.btnPrimary} onClick={() => navigate("/")}>
					Go Back Home
				</button>
			</div>
		</section>
	);
}

export default PageNotFound;

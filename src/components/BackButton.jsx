import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

function BackButton() {
	const navigate = useNavigate();

	return (
		<button className={styles.backButton} onClick={() => navigate("/")}>
			&#8592;
		</button>
	);
}

export default BackButton;

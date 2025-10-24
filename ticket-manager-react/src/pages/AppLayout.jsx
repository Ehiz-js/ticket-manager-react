import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AppLayout() {
	return (
		<div className={styles.app}>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default AppLayout;

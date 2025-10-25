import { useState } from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
	const { logout } = useAuth();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleLogout = () => {
		logout();
		setMenuOpen(false);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				Tick<span>it</span>
				<img src="/tickit-logo.svg" alt="Tickit logo" />
			</div>

			<div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
				<button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
					&times;
				</button>

				<li>
					<NavLink
						to="dashboard"
						className={({ isActive }) =>
							isActive ? styles.activeLink : undefined
						}
						onClick={() => setMenuOpen(false)}
					>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink
						to="tickets"
						className={({ isActive }) =>
							isActive ? styles.activeLink : undefined
						}
						onClick={() => setMenuOpen(false)}
					>
						Tickets
					</NavLink>
				</li>
				<li>
					<button className={styles.logoutBtn} onClick={handleLogout}>
						Logout <FontAwesomeIcon icon={faRightFromBracket} />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;

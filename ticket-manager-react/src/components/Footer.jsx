import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.brand}>
					<img src="/tickit-logo.svg" alt="Tickit logo" />
					<h3>
						Tick<span>it</span>
					</h3>
				</div>

				<p className={styles.copyright}>
					© {new Date().getFullYear()} Tickit. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;

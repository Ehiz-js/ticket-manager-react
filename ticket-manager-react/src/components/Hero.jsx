import React from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate();

	return (
		<section className={styles.hero}>
			<header className={styles.header}>
				Tick<span>it</span>
				<img src="/tickit-logo.svg" alt="tickit logo" />
			</header>

			<div className={styles.heroContent}>
				<article>
					<h1>
						<span>Stay</span> On Track,
					</h1>
					<p>With Every Tickit.</p>
				</article>

				<div className={styles.heroButtons}>
					<button
						className={`${styles.btn} ${styles.btnSecondary}`}
						onClick={() => navigate("login")}
					>
						Login
					</button>
					<button
						className={`${styles.btn} ${styles.btnPrimary}`}
						onClick={() => navigate("signup")}
					>
						Get Started
					</button>
				</div>

				<svg
					className={styles.waves}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fill="#1e293b"
						fillOpacity="1"
						d="M0,128L30,138.7C60,149,120,171,180,160C240,149,300,107,360,106.7C420,107,480,149,540,186.7C600,224,660,256,720,250.7C780,245,840,203,900,165.3C960,128,1020,96,1080,101.3C1140,107,1200,149,1260,192C1320,235,1380,277,1410,298.7L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
					></path>
				</svg>
			</div>

			<div className={styles.circle1}></div>
			<div className={styles.circle2}></div>
		</section>
	);
}

export default Hero;

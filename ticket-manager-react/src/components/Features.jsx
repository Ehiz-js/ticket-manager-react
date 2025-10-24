import React from "react";
import styles from "./Features.module.css";

function Features() {
	return (
		<section className={styles.features}>
			<h2 id="features-heading">Why Choose Tickit?</h2>
			<p className={styles.subtext}>
				Manage your tickets smarter and faster — with features built for
				clarity, control, and speed.
			</p>

			<div className={styles.grid}>
				<article className={styles.feature}>
					<img
						src="/illustrations/manage.svg"
						alt="Organized ticket dashboard illustration"
					/>
					<h3>Smart Ticket Management</h3>
					<p>
						Create, view, update, and delete tickets effortlessly. Keep every
						task in check with intuitive controls.
					</p>
				</article>

				<article className={styles.feature}>
					<img
						src="/illustrations/insights.svg"
						alt="Real-time ticket analytics illustration"
					/>
					<h3>Real-Time Insights</h3>
					<p>
						Get instant statistics on your tickets — open, in-progress, or
						resolved — all from a single dashboard.
					</p>
				</article>

				<article className={styles.feature}>
					<img
						src="/illustrations/secure.svg"
						alt="Secure authentication illustration"
					/>
					<h3>Secure Access</h3>
					<p>
						Tickit ensures your data is protected through session-based access.
						Work confidently and safely every time.
					</p>
				</article>
			</div>
		</section>
	);
}

export default Features;

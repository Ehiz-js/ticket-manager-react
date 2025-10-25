import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./Dashboard.module.css";

function Dashboard() {
	const { user } = useAuth();

	const tickets = user.tickets;

	const totalTickets = tickets.length;
	const openTickets = tickets.filter((t) => t.status === "open").length;
	const resolvedTickets = tickets.filter((t) => t.status === "closed").length;
	const inProgressTickets = tickets.filter(
		(t) => t.status === "in_progress"
	).length;

	return (
		<section className={styles.dashboardSection}>
			<div className={styles.container}>
				<h1 className={styles.title}>Welcome back, {user.name}</h1>

				{/* Major Stat */}
				<div className={styles.majorStat}>
					<h2>Total Tickets</h2>
					<p className={styles.statNumber}>{totalTickets}</p>
				</div>

				{/* Minor Stats */}
				<div className={styles.minorStats}>
					<div className={styles.statCard}>
						<h3>Open Tickets</h3>
						<progress
							value={openTickets}
							max={totalTickets || 1}
							className={styles.progressBar}
						></progress>
						<span>{openTickets}</span>
					</div>
					<div className={styles.statCard}>
						<h3>In Progress</h3>
						<progress
							value={inProgressTickets}
							max={totalTickets || 1}
							className={styles.progressBar}
						></progress>
						<span>{inProgressTickets}</span>
					</div>

					<div className={styles.statCard}>
						<h3>Resolved Tickets</h3>
						<progress
							value={resolvedTickets}
							max={totalTickets || 1}
							className={styles.progressBar}
						></progress>
						<span>{resolvedTickets}</span>
					</div>
				</div>

				<div className={styles.quickActions}>
					<NavLink to="/app/tickets" className={styles.actionBtn}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className={styles.plusIcon}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
						Create Ticket
					</NavLink>

					<NavLink to="/app/tickets?view=list" className={styles.actionBtn}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className={styles.ticketIcon}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 5.25h16.5v3A2.25 2.25 0 0118 10.5a2.25 2.25 0 010 4.5 2.25 2.25 0 011.5 2.25v3H3.75v-3A2.25 2.25 0 015.25 15a2.25 2.25 0 010-4.5A2.25 2.25 0 013.75 8.25v-3z"
							/>
						</svg>
						View Tickets
					</NavLink>
				</div>
			</div>
		</section>
	);
}

export default Dashboard;

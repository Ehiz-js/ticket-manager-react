import { useLocalStorageState } from "../hooks/useLocalStorageState";
import styles from "./Dashboard.module.css";

const dummyTickets = [
	{
		id: 1,
		title: "Login not working",
		status: "open",
		createdAt: "2025-10-24",
	},
	{
		id: 2,
		title: "Page crashes on submit",
		status: "resolved",
		createdAt: "2025-10-23",
	},
	{
		id: 3,
		title: "Unable to reset password",
		status: "open",
		createdAt: "2025-10-22",
	},
	{
		id: 4,
		title: "UI overlap on mobile",
		status: "resolved",
		createdAt: "2025-10-21",
	},
	{
		id: 5,
		title: "Notification emails not sent",
		status: "open",
		createdAt: "2025-10-20",
	},
	{
		id: 6,
		title: "Error 500 on dashboard",
		status: "resolved",
		createdAt: "2025-10-19",
	},
];

function Dashboard() {
	const [tickets, setTickets] = useLocalStorageState(dummyTickets, "tickets"); // your tickets array in localStorage

	const safeTickets = tickets || [];

	const totalTickets = safeTickets.length;
	const openTickets = safeTickets.filter((t) => t.status === "open").length;
	const resolvedTickets = safeTickets.filter(
		(t) => t.status === "resolved"
	).length;

	return (
		<section className={styles.dashboardSection}>
			<div className={styles.container}>
				<h1 className={styles.title}>Ticket Dashboard</h1>

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
						<h3>Resolved Tickets</h3>
						<progress
							value={resolvedTickets}
							max={totalTickets || 1}
							className={styles.progressBar}
						></progress>
						<span>{resolvedTickets}</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Dashboard;

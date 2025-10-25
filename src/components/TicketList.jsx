import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import styles from "./TicketList.module.css";

function TicketList({ onEdit, onDelete }) {
	const { user } = useAuth();
	const tickets = user.tickets;

	const [confirmTicket, setConfirmTicket] = useState(null);
	const [deleteMessage, setDeleteMessage] = useState("");

	function handleConfirmDelete(ticket) {
		setConfirmTicket(ticket);
	}

	function handleCancel() {
		setConfirmTicket(null);
	}

	function handleConfirm() {
		onDelete(confirmTicket);
		setConfirmTicket(null);
		setDeleteMessage("Ticket deleted successfully.");
		setTimeout(() => setDeleteMessage(""), 3000);
	}

	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>Your Tickets</h2>

			{deleteMessage && (
				<p className={styles.successMessage}>{deleteMessage}</p>
			)}

			<div className={styles.list}>
				{tickets.length === 0 ? (
					<p className={styles.emptyMessage}>
						No tickets found. Create one to get started!
					</p>
				) : (
					tickets.map((ticket) => (
						<div key={ticket.id} className={styles.card}>
							<div className={`${styles.status} ${styles[ticket.status]}`}>
								{ticket.status.replace("_", " ")}
							</div>

							<h3 className={styles.title}>{ticket.title}</h3>
							<p className={styles.desc}>
								{ticket.description || "No description"}
							</p>

							<div className={styles.footer}>
								<span className={styles.date}>
									{new Date(ticket.createdAt).toLocaleDateString()}
								</span>

								<div className={styles.actions}>
									<button
										className={styles.editBtn}
										onClick={() => onEdit(ticket)}
									>
										Edit
									</button>

									<button
										className={styles.deleteBtn}
										onClick={() => handleConfirmDelete(ticket)}
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					))
				)}
			</div>

			{confirmTicket && (
				<div className={styles.confirmOverlay}>
					<div className={styles.confirmBox}>
						<h3>Are you sure you want to delete this ticket?</h3>

						<div className={styles.confirmActions}>
							<button className={styles.confirmDelete} onClick={handleConfirm}>
								Delete
							</button>

							<button className={styles.confirmCancel} onClick={handleCancel}>
								Back
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default TicketList;

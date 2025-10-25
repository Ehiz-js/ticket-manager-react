import { useState, useEffect } from "react";
import styles from "./TicketForm.module.css";

function TicketForm({ onCreateTicket, formData, onUpdateTicket }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState("open");
	const [priority, setPriority] = useState("medium");
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (formData) {
			setTitle(formData.title);
			setDescription(formData.description);
			setStatus(formData.status);
			setPriority(formData.priority);
			setMessage("");
		}
	}, [formData]);

	function handleSubmit(e) {
		e.preventDefault();
		if (!title.trim() || !status) return;

		const newTicket = {
			id: formData ? formData.id : crypto.randomUUID(),
			title,
			description,
			status,
			priority,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		if (formData) {
			onUpdateTicket(newTicket);
			setMessage("Ticket updated successfully.");
			setTimeout(() => setMessage(""), 3000);
		} else {
			onCreateTicket(newTicket);
			setMessage("Ticket created successfully.");
			setTimeout(() => setMessage(""), 3000);
		}

		setTitle("");
		setDescription("");
		setStatus("open");
		setPriority("medium");
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h2>Create New Ticket</h2>

			<label>Title</label>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>

			<label>Description</label>
			<textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				rows={4}
			/>

			<label>Status</label>
			<select value={status} onChange={(e) => setStatus(e.target.value)}>
				<option value="open">Open</option>
				<option value="in_progress">In Progress</option>
				<option value="closed">Closed</option>
			</select>

			<label>Priority</label>
			<select value={priority} onChange={(e) => setPriority(e.target.value)}>
				<option value="high">High</option>
				<option value="medium">Medium</option>
				<option value="low">Low</option>
			</select>

			<button type="submit">
				{formData ? "Update Ticket" : "Create Ticket"}
			</button>

			{message && <p className={styles.success}>{message}</p>}
		</form>
	);
}

export default TicketForm;

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import TicketForm from "./TicketForm";
import TicketList from "./TicketList";

function TicketManagerPage() {
	const [formData, setFormData] = useState(null);
	const { addTicket, updateTicket, deleteTicket } = useAuth();
	const listRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (location.search.includes("view=list") && listRef.current) {
			listRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

	function handleCreateTicket(ticket) {
		addTicket(ticket);
	}
	function handleEditTicket(ticket) {
		setFormData({
			id: ticket.id,
			title: ticket.title,
			description: ticket.description,
			status: ticket.status,
			priority: ticket.priority,
		});
	}
	function handleUpdateTicket(ticket) {
		updateTicket(ticket);
		setFormData(null);
	}

	function handleDeleteTicket(ticket) {
		deleteTicket(ticket);
	}

	return (
		<main>
			<TicketForm
				onCreateTicket={handleCreateTicket}
				formData={formData}
				onUpdateTicket={handleUpdateTicket}
			/>
			<div ref={listRef}>
				<TicketList onEdit={handleEditTicket} onDelete={handleDeleteTicket} />
			</div>
		</main>
	);
}

export default TicketManagerPage;

// Ticket Management
const TicketManager = {
  STORAGE_KEY: 'tickets',
  
  getAllTickets() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },
  
  getTicketById(id) {
    const tickets = this.getAllTickets();
    return tickets.find(t => t.id === id);
  },
  
  saveTickets(tickets) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tickets));
  },
  
  addTicket(ticketData) {
    const tickets = this.getAllTickets();
    const newTicket = {
      ...ticketData,
      id: Date.now().toString()
    };
    tickets.push(newTicket);
    this.saveTickets(tickets);
    Toast.success('Ticket created successfully!');
  },
  
  updateTicket(id, updates) {
    const tickets = this.getAllTickets();
    const index = tickets.findIndex(t => t.id === id);
    if (index !== -1) {
      tickets[index] = { ...tickets[index], ...updates };
      this.saveTickets(tickets);
      Toast.success('Ticket updated successfully!');
    }
  },
  
  deleteTicket(id) {
    const tickets = this.getAllTickets();
    const filtered = tickets.filter(t => t.id !== id);
    this.saveTickets(filtered);
    Toast.success('Ticket deleted successfully!');
  },
  
  getStats() {
    const tickets = this.getAllTickets();
    return {
      total: tickets.length,
      open: tickets.filter(t => t.status === 'open').length,
      inProgress: tickets.filter(t => t.status === 'in_progress').length,
      closed: tickets.filter(t => t.status === 'closed').length
    };
  }
};
import React, { createContext, useState } from 'react';
import { DATA } from '../constants'; // Replace with your data import

// Create a Context
export const TicketsContext = createContext();

// Create and export the Provider component
export default function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState(DATA);

  // Function to add a new ticket
  const addTicket = (newTicket) => {
    setTickets((prevTickets) => [newTicket, ...prevTickets]);
  };

  return (
    <TicketsContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketsContext.Provider>
  );
}



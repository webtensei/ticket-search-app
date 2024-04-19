import {ITicket} from "../types/Ticket.ts";

export function sortByPrice(initialTickets:ITicket[]):ITicket[] {
   return initialTickets.sort((a, b) => a.price - b.price)
}
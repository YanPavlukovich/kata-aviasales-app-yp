import axios from 'axios';
import { BASE_URL } from './core';
import { TicketType } from '../types/tickets';


export const getTickets = async (searchId: string) => {
	try {
		const url = `${BASE_URL}/tickets/${searchId}`;
		return await axios.get(url);
	} catch (e) {
		return false;
	}
};

let countErrors = 0;

export async function getAllTickets(searchId: string): Promise<TicketType[] | undefined> {
	try {
		const response = await getTickets(searchId);
		if (!response) {
			throw new Error('Could not get all tickets');
		}
		const {data,status} = response;
		return (status === 200 && !data.stop)
			? [...data.tickets, ...(await getAllTickets(searchId) || [])]
			: data.tickets;
	} catch (e) {
		countErrors++;
		if(countErrors === 5) {
			throw e;
		}
	}

	return await getAllTickets(searchId);
}

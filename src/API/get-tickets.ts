import axios from 'axios';
import { BASE_URL } from './core';


export const getTickets = async (searchId: string) => {
	try {
		const url = `${BASE_URL}/tickets/${searchId}`
		return await axios.get(url);
	} catch (e) {
		return false;
	}
}

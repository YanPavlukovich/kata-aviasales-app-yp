import { BASE_URL } from "./core";
import axios from "axios";

export type SearchResponse = {
	searchId: string;
}

export const searchInitiated = async () => {
	const url = `${BASE_URL}/search`;
	const response = await axios.get(url);

	return response.data;
}

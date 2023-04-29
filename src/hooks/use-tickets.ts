import { useEffect, useState } from "react";
import { selectFilters } from "../store/slices/filter-slice";
import { selectSortType } from "../store/slices/sort-slice";
import { selectTickets } from "../store/slices/tickets-slice";
import { useAppSelector } from "./hooks";
import { TicketType } from "../types/tickets";
import { sortFunctions } from "../utils/ticket-sort-criteria";


export const useTickets = () => {
	const tickets = useAppSelector(selectTickets);
	const {isAllActive, without, oneTransfer, twoTransfer,threeTransfer} = useAppSelector(selectFilters);
	const activeSort = useAppSelector(selectSortType);

	const [selectedTickets, setSelectedFilters] = useState<TicketType[]>([]);

	useEffect(() => {


		const sorted = [...tickets].sort((a,b) => {
			const callback = sortFunctions[activeSort];
			return callback ? callback(a,b) : 1;
		});

		const filtered = sorted.filter((ticket) => {
			return isAllActive
				? true
				: [without, oneTransfer, twoTransfer,threeTransfer]
				.filter((transfer, index) => {
					if(!transfer) return false;
					return ticket.segments
						.some((segment) => segment.stops.length === index);}).length;
				});


		setSelectedFilters(filtered);
	}, [tickets,activeSort,isAllActive, without, oneTransfer, twoTransfer,threeTransfer]);

	return selectedTickets;
};

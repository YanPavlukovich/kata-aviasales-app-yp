import { useEffect, useState } from "react";
import { selectFilters } from "../store/slices/filter-slice";
import { selectSortType } from "../store/slices/sort-slice";
import { selectTickets } from "../store/slices/tickets-slice";
import { useAppSelector } from "./hooks";
import { TicketType } from "../types/tickets";
import { sortFunctions } from "../utils/ticket-sort-criteria";
import { filterFunctions } from "../utils/ticket-filter-criteria";

export const useTickets = () => {
	const tickets = useAppSelector(selectTickets);
	const filters = useAppSelector(selectFilters);
	const activeSort = useAppSelector(selectSortType);

	const [selectedTickets, setSelectedFilters] = useState<TicketType[]>([]);

	useEffect(() => {
		const activeFilters = filters.filter((f) => f.active);

		const sorted = [...tickets].sort((a,b) => {
			const callback = sortFunctions[activeSort];
			return callback ? callback(a,b) : 1;
		});

		const filtered = sorted.filter((ticket) => {
			return !activeFilters.length
				? true
				: activeFilters.every((filter) => {
					const {filterType, filterPayload} = filter;
					const filterCallback = filterFunctions[filterType];

					return filterCallback(ticket, filterPayload);
				});
		});
		setSelectedFilters(filtered);
	}, [tickets,activeSort,filters]);

	return selectedTickets;
};

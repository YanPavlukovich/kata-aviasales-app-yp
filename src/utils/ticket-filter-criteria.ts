import { TicketType } from "../types/tickets";

type FilterCriteriaType = <T>(ticket: TicketType, payload?: T) => boolean;
type FilterFunctionsType = {
	stops: FilterCriteriaType;
}

export const filterFunctions: FilterFunctionsType = {
  stops: (ticket, payload) => {
    const [{ stops: stops1 }, { stops: stops2 }] = ticket.segments;
    return stops1.length === payload || stops2.length === payload;
  },
};

export type FilterTypes = keyof FilterFunctionsType;

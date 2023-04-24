import { TicketType } from "../types/tickets";

type SortCriteriaType = (a: TicketType, b: TicketType) => number;
type SortFunctionsType = {
	optimum?: SortCriteriaType;
	fast?: SortCriteriaType;
	cheap?: SortCriteriaType;
}

export const sortFunctions: SortFunctionsType = {
	optimum: () => 1,
	fast: (a,b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration),
	cheap: (a,b) => a.price - b.price,
}

export type SortTypes = keyof SortFunctionsType;

import { FilterTypes } from "../utils/ticket-filter-criteria";
import { UniqueId } from "./core"

export type FilterType = {
	id: UniqueId;
	label: string;
	filterType: FilterTypes;
	filterPayload: string | number | boolean;
	active: boolean;
};

export type FilterInitialType = {
	label: string;
	filterType: FilterTypes;
	filterPayload: string | number | boolean;
}

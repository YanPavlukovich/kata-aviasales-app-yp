import { FilterTypes } from "../store/slices/filter-slice";

export type FilterInitialType = {
	label: string;
	filterType: FilterTypes;
	filterPayload: string | number | boolean;
	active: boolean;
}

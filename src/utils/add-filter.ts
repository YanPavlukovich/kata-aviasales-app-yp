import { nanoid } from "@reduxjs/toolkit";
import { FilterInitialType, FilterType } from "../types/filters";

type AddFilterType = (initial: FilterInitialType) => FilterType;

export const addFilter: AddFilterType = ({label, filterType, filterPayload}) => {
	return {
		id: nanoid(),
		label,
		filterType,
		filterPayload,
		active: false,
	};
};

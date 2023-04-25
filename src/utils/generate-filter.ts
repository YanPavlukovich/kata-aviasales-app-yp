import { nanoid } from "@reduxjs/toolkit";
import { FilterInitialType, FilterType } from "../types/filters";

type GenerateFilterType = (initial: FilterInitialType) => FilterType;

export const generateFilter: GenerateFilterType = ({label, filterType, filterPayload}) => {
	return {
		id: nanoid(),
		label,
		filterType,
		filterPayload,
		active: false,
	};
};

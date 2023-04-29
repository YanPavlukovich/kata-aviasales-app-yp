import { UniqueId } from './../../types/core';
import { createSlice } from "@reduxjs/toolkit";
import { FilterType, FilterInitialType } from "../../types/filters";
import { generateFilter } from '../../utils/generate-filter';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type FilterState = {
	filters: FilterType[];
}

const initialState: FilterState = {
	filters: [],
};

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<FilterInitialType>) => {
			state.filters.length !== 4 ? state.filters.push(generateFilter(action.payload)) : null;

		},
		changeFilter: (state, action: PayloadAction<UniqueId>) => {
			state.filters = state.filters.map((filter) => ({
				...filter,
				active: action.payload === filter.id ? !filter.active : filter.active,
			}));
		},
		changeAllFilters: (state, action) => {
      state.filters = state.filters.map((filter) => ({
        ...filter,
        active: action.payload,
      }));
		},
	},
});

export const {setFilter, changeFilter, changeAllFilters} = filterSlice.actions;
export const selectFilters = (state: RootState) => state.filters.filters;
export default filterSlice.reducer;

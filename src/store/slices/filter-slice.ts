import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type FilterState = {
	isAllActive: boolean,
	without: boolean,
	oneTransfer: boolean,
	twoTransfer: boolean,
	threeTransfer: boolean,
}

export type FilterTypes = 'isAllActive' | 'without' | 'oneTransfer' | 'twoTransfer' | 'threeTransfer'

const initialState: FilterState = {
	isAllActive: true,
	without: true,
	oneTransfer: true,
	twoTransfer: true,
	threeTransfer: true,
};

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setAllActive: (state) => {
			const newState = {...state};
			newState.isAllActive= !state.isAllActive;
			newState.without= !state.isAllActive;
			newState.oneTransfer= !state.isAllActive;
			newState.twoTransfer= !state.isAllActive;
			newState.threeTransfer= !state.isAllActive;

			return newState;
		},
		setFilter: (state, {payload}: PayloadAction<FilterTypes>) => {
			const newState = {...state};
			newState[payload] = !state[payload];
			if (newState.without && newState.oneTransfer && newState.twoTransfer &&newState.threeTransfer) {
				newState.isAllActive = true;
			} else {
				newState.isAllActive = false;
			}
			return newState;
		}
	},
});

export const {setAllActive, setFilter} = filterSlice.actions;
export const selectFilters = (state: RootState) => state.filters;
export default filterSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import TicketReducer from './slices/tickets-slice';
import FilterReducer from './slices/filter-slice';
import SortReducer from './slices/sort-slice';

export const store = configureStore({
	reducer: {
		tickets: TicketReducer,
		filters: FilterReducer,
		sort: SortReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

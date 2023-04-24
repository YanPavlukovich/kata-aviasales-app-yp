import { configureStore } from '@reduxjs/toolkit';
import TicketsReducer from './slices/tickets-slice';
import FiltersReducer from './slices/filter-slice';

export const store = configureStore({
	reducer: {
		tickets: TicketsReducer,
		filters: FiltersReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

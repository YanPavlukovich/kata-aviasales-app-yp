import { configureStore } from '@reduxjs/toolkit';
import TicketsReducer from './slices/tickets-slice';

export const store = configureStore({
	reducer: {
		tickets: TicketsReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

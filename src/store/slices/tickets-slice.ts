import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import type { RootState } from "../store";
import { TicketType } from "../../types/tickets";
import { getAllTickets } from "../../API/get-tickets";

type TicketsState = {
	searchId: string,
	tickets: TicketType[],
}

const initialState: TicketsState = {
	searchId: "",
	tickets: [],
};

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (searchId: string) => {
  const response: TicketType[] | undefined = await getAllTickets(searchId);

  if (response) {
    return response;
  }

  throw new Error('unable to get tickets');
});

export const counterSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
		setSearchId: (state, action: PayloadAction<string>) => {
			state.searchId = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTickets.fulfilled, (state, action: PayloadAction<TicketType[]>) => {
			state.tickets = [...state.tickets, ...action.payload];
		});
	}
})

export const { setSearchId } = counterSlice.actions;

export const selectTickets = (state: RootState) => state.tickets.tickets;
export const selectSearchId = (state: RootState) => state.tickets.searchId;

export default counterSlice.reducer;

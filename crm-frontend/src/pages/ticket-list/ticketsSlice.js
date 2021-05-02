import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tickets: [],
    isLoading: false,
    error: ''
}

const tickeListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
        fetchTicketLoading: (state) =>
        {
            state.isLoading = true;
        },
        fetchTicketSuccess: (state, { payload }) =>
        {
            state.tickets = payload;
            state.isLoading = false;
        },
        fetchTicketFail: (state, { payload }) =>
        {
            state.isLoading = false;
            state.error = payload
        },
    },
});

const { reducer, actions } = tickeListSlice;

export const {fetchTicketFail, fetchTicketLoading, fetchTicketSuccess} = actions

export default reducer;
import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
} from "./ticketsSlice";
import axios from "axios";

const fetchAllTickets = () => (dispatch) => {
  dispatch(fetchTicketLoading());
  ///fetch data from api
    try
    {
        const result = await axios.get(
            'http://localhost:3001/v1/ticket',
            {
                headers: {
                    Authorization: ''
                }
            }
            
      )
  } catch (error)
  {
      dispatch(fetchTicketFail(error.message));
  }

  dispatch();
};

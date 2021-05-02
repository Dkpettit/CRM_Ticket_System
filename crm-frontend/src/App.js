/**
 * Name: App.js
 * Author: Dave Pettit
 * Date: April 24, 2021
 * Purpose: React interface loaded to 'root' in index.js, called by ReactDom.render function
 *  
 * 
 * https://www.youtube.com/watch?v=yiO8qXQ4BIc
 */

 // npx create-react-app .
 // npm install react-bootstrap bootstrap
 // yarn start

import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/Dashboard/Dashboard.page';
import {AddTicket} from './pages/new-ticket/AddTicket.page'

import { Entry } from './pages/entry/Entry.page';
import { TicketLists } from './pages/ticket-list/TicketList.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketLists />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tId">
              <Ticket />
            </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

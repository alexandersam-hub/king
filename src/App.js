import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Roster from "./Roster/Roster";
import Login from "./login/Login";

function App() {
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path='/' component={Roster}/>
                <Route path='/roster' component={Roster}/>
                <Route path='/login' component={Login}/>
            </Switch>

        </BrowserRouter>
    );
}

export default App;

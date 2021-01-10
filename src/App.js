import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AdminNavbar from './NavBar';
import RetailerDashBoard from './RetailerDashBoard';
import My_Profile from './userProfile';
import My_Billing_Final from './My_Billing_Final';
import Help from './Help';
import Inventory from './Inventory';
import UpdateProduct from './UpdateProduct';

export default class App extends React.Component {
render() {    
    return (
    <div className="App">
        <BrowserRouter>
        <div>
            <AdminNavbar />
            <Switch>
                <Route path="/RetailerDashBoard" render={()=><RetailerDashBoard/>}/>
                <Route path="/userProfile" render={()=><My_Profile/>} />
                <Route path="/My_Billing_Final" render={()=><My_Billing_Final/>} />
                <Route path="/Inventory" render={()=><Inventory/>} />
                <Route path="/Help" render={()=><Help/>} />
            </Switch>
        </div>
        </BrowserRouter>
    </div>
    );
}
}


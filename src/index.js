import React from 'react';
import ReactDOM from 'react-dom';
import RetailerHeader from './RetailerHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import RetailerDashBoard from './RetailerDashBoard';
import My_Billing_Final from "./My_Billing_Final";
import My_Profile from "./userProfile";
import App from "./App";
import Inventory from './Inventory';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct'

ReactDOM.render(
    //Passing prop txt to App this looks like attribute in HTML
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, Switch, Route } from 'react-router-dom'
import {AddProduct} from './Add-Product'
import {EditProduct} from './Edit-Product'
import { ProductDetails } from './Product-Details'
import { UserList } from './UserList'
import { AddUser } from './Add-User'
import { Productlist } from '../containers/productList'

export class Navigation extends React.Component{
    render(){
        return(
            <div>
                <Link to="/products">Products</Link><br></br>
                <Link to="/addproduct">Add Product</Link><br></br>
                <Link to="/searchproduct">Search Product</Link><br></br>
                <Link to="/users">List of Users</Link><br></br>
                <Link to="/adduser">Add User</Link><br></br>


                <Switch>
                    <Route path="/products" component={Productlist}></Route>
                    <Route path="/productdetails/:id" component={ProductDetails}></Route>
                    <Route path="/addproduct" component={AddProduct}></Route>
                    <Route path="/editproduct/:id" component={EditProduct}></Route>
                    <Route path="/users" component={UserList}></Route>
                    <Route path="/adduser" component={AddUser}></Route>
                </Switch>
            </div>

        )
    }
}
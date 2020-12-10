import React from 'react';
import './Login.css';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsDataService from "../services/News.service";

import { Link } from 'react-router-dom'

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={userEmail:"", userPassword:"", redirect: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCancel(event){
        this.setState({
            redirect: !this.state.redirect
        });
        event.preventDefault();
    }
    handleSubmit(event){
        let email = this.state.userEmail;
        let password = this.state.userPassword;
       
        if(email==="" || password===""){
            alert("Enter credentials first!!!");
        }else{
            NewsDataService.getUserByEmail(email).then((data)=>{
                console.log(data);
                let user = data.data;
                let status = "Approved";
                console.log(user[0].password);
                if(((email === user[0].email) && (password === user[0].password)) && (status===user[0].status)){
                    alert("login successfull");
                }else if((email !== user[0].email) || (password !== user[0].password)){
                    alert("Invalid username or password!!!");
                }else if(user[0].status==="Rejected"){
                    alert("Sorry, your application is rejected.");
                }else{
                    alert("Your application is under process. Please wait for confirmation email!");
                }
            });
        }
        event.preventDefault();
    }
    render(){
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to='/'/>;
        }
        return(
            <div id='login'>
                <div className="container">
               <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                            <h3 className="display-4 text-center text-info">Login</h3>
                            <div className="form-group">
                                <label className="text-info">Email:</label><br></br>
                                <input type="email" name="userEmail" id="userEmail" value={this.state.userEmail} onChange={this.handleChange} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label className="text-info">Password:</label><br></br>
                                <input type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} id="userPassword" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                                <button type="button" onClick={this.handleCancel} className="btn btn-danger btn-block">Cancel</button>
                            </div>
                            <div id="forgot-link" className="text-left">
                                Forgot password? <Link to={`/forgotpassword`}>Click here</Link>
                            </div>
                            <div id="register-link" className="text-left">
                                Not a registered reporter? <Link to={`/adduser`}>Apply Here</Link>
                            </div>
                        </form>
                    </div>                
                </div>
            </div>
            </div>
            </div>
           
        )
    }
}
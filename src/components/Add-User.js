import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import Axios from 'axios';

export class AddUser extends React.Component{
    constructor(){
        super();
        this.state = {id:"",name:"",job:"",salary:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event){
        let id = this.state.id;
        let name = this.state.name;
        let job = this.state.job;
        let salary = this.state.salary;
        Axios.post('https://reqres.in/api/users',{
            "id":id,
            "name":name,
            "job":job,
            "salary":salary
        }).then((response)=>{
            alert("user added");
            console.log(response.data);
        })
        event.preventDefault();
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Employee Id:</label>
                        <div>
                            <input type="number" class="form-control" name="id" value={this.state.id} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name:</label>
                        <div>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Job:</label>
                        <div>
                            <input type="text" class="form-control" name="job" value={this.state.price} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Salary:</label>
                        <div>
                            <input type="number" class="form-control" name="salary" value={this.state.quantity} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
import React from 'react'
import './Add-Product.css'

import 'bootstrap/dist/css/bootstrap.css'

export class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {id:"",name:"",price:"",quantity:"",image:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event){
        alert("Product added"+ this.state.name);
        event.preventDefault();
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Product ID:</label>
                        <div>
                            <input type="number" class="form-control" name="id" value={this.state.id} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Product Name:</label>
                        <div>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Product Price:</label>
                        <div>
                            <input type="number" class="form-control" name="price" value={this.state.price} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Product Quantity:</label>
                        <div>
                            <input type="number" class="form-control" name="quantity" value={this.state.quantity} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Product Image:</label>
                        <div>
                            <input type="file" name="image" value={this.state.image} onChange={this.handleChange}></input>
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
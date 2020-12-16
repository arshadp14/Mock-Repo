import React from 'react'
import './Main-Section.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

export class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showImage: true
        }
    }
    toggleImage=()=>{
        this.setState({
            showImage:!this.state.showImage
        });
    }
    render(){
        return(
                <tr>
                    <td> 
                        <Link to={`/productdetails/${this.props.product.id}`}>{this.props.product.id}</Link>
                    </td>
                    <td>{this.props.product.name}</td>
                    <td>{this.props.product.price}</td>
                    <td>{this.props.product.quantity}</td>
                    <td>
                       {this.state.showImage?<img src={this.props.product.image} alt="Not available" 
                       title={this.props.product.name}/>: "Not available" }
                    </td>
                    <td>
                        <button className="btn btn-primary" onClick={this.toggleImage}>{this.state.showImage? 'Hide':'Show'}</button>
                    </td>
                    <td>
                        <Link to={`/editproduct/${this.props.product.id}`}>Edit</Link>
                    </td>
                </tr>
        )
    }
}

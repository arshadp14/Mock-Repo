import React from 'react'
import  Product  from './Products';
import 'bootstrap/dist/css/bootstrap.css'

export class ProductDetails extends React.Component{
    constructor(props) {
        super(props);
        this.ProductId = this.props.match.params.id;
        this.products = [
                new Product(1,"iPhone 11",71000,1,"/images/iphone11.jpg"),
                new Product(3,"Apple watch SE",34000,1,"/images/watchSE.jpg"),
                new Product(2,"iPhone 6s",25000,1,"/images/iphone6s.jpg")];

        this.productDetails = this.products.find((p) => p.id == this.ProductId);

    }
       
    render(){
        return(
            <div className="container">
                <p>Product Name: {this.productDetails.name}</p>
                <p>Product Price: {this.productDetails.price}</p>
                <p>Product Quantity: {this.productDetails.quantity}</p>
                <p>Product Picture: <img src={this.productDetails.image} alt="Not available"></img></p>
            </div>
        )
    }
}
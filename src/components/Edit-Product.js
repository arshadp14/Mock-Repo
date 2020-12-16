import React from 'react';
import  Product  from './Products';
import 'bootstrap/dist/css/bootstrap.css'

export class EditProduct extends React.Component {

    constructor(props) {
        super(props);
        this.ProductId = this.props.match.params.id;
        this.products = [
            new Product(1,"iPhone 11",71000,1,"/images/iphone11.jpg"),
                new Product(3,"Apple watch SE",34000,1,"/images/watchSE.jpg"),
                new Product(2,"iPhone 6s",25000,1,"/images/iphone6s.jpg")];

        this.editProduct = this.products.find((p) => p.id == this.ProductId);

        this.state = {
            pname: this.editProduct.name,
            pprice: this.editProduct.price,
            pquantity: this.editProduct.quantity,
            pimgLoc: this.editProduct.image
        };


    }


    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.prod = new Product(this.props.pid, this.state.pname, this.state.pprice, this.state.pquanty, this.state.pimgLoc);
        let index = this.products.indexOf(this.editProduct);
        console.log("Index: ", index)
        this.products.splice(index, 1, this.prod);
        console.log(this.products)
        alert("Product is added!!!" + this.products[0])
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Product Name:
                <input type="text"
                    name="pname"
                    value={this.state.pname}
                    onChange={this.handleChange}></input><br>
                </br>
                   Product Price:
                <input type="text"
                    name="pprice"
                    value={this.state.pprice}
                    onChange={this.handleChange}></input><br>
                </br>
                   Product Quantity:
                <input type="text"
                    name="pquanty"
                    value={this.state.pquanty}
                    onChange={this.handleChange}></input><br>
                </br>
                   Product Picture:
                <input type="text"
                    name="pimgLoc"
                    value={this.state.pimgLoc}
                    onChange={this.handleChange}></input><br>
                </br>

                <input type="submit" value="Edit"></input>
            </form>

        );
    }
}
import React from 'react'
import './Main-Section.css'
import Product from './Products.js'
import {ProductList} from './ProductList'
import 'bootstrap/dist/css/bootstrap.css'
// import { Sum } from './Sum';



let products = [new Product(1,"iPhone 11",71000,1,"/images/iphone11.jpg"),
                new Product(3,"Apple watch SE",34000,1,"/images/watchSE.jpg"),
                new Product(2,"iPhone 6s",25000,1,"/images/iphone6s.jpg")];
                
// function showProduct(id){
//     return (` Name: ${p.name}, Price: ${p.price}, Qunatity: ${p.quantity}`);
// }

export class MainSection extends React.Component{
   
    render(){
        // let a = 14;
        // let b = 22;
        let id = 102;
        
        return(
            
            <div className="main">
                
                <p>Available products:</p>
                <div className="tbl">
                <table className="table table-hover table-dark">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                    {products.map(
                        (p)=>(
                            <ProductList product={p}></ProductList>
                        ))
                    }
                    </tbody>
                </table>
                </div>
                {/* <Sum a={a} b={b}></Sum> */}
            </div>
        );
    }
}
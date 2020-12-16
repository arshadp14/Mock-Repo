import React from 'react'
import { connect } from 'react-redux';

export class Productlist extends React.Component{
    products;
    constructor(props){
        super(props);
        this.products =  this.props.products;
    }
    render(){
        return(
            <div>
               {this.products.map((p)=>{
                   return <li>{p.name}</li>
               })}
            </div>
        )
    }
}

const mapStateToProp = (state)=>({
    products:state.products.products
})

export default connect(mapStateToProp)(Productlist);
import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css'
export class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer>
                   <small>{this.props.msg}</small> 
                </footer>
            </div>
        )
    }
}
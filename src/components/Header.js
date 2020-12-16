import React from 'react'
import './Header.css'
import 'font-awesome/css/font-awesome.min.css';

export const Header = (props)=>{
    return(
        <header>
            <div className="head">
               <div className="icon">
                    <i className="fa fa-apple" aria-hidden="true"></i>
               </div> 
               <div className="heading">
                    {props.msg}
               </div>
            </div>
        </header>
    )
}
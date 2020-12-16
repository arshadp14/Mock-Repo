import React from 'react'
import PropTypes from 'prop-types'
export class Sum extends React.Component{
    render(){
        Sum.propTypes = {
            a: PropTypes.number.isRequired,
            b: PropTypes.number.isRequired
        }
        return(
            <div>
                Addition is:
                {this.props.a} + {this.props.b} = {this.props.a + this.props.b} 
            </div>
        )
    }
}
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export class Search extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }
    
      handleSubmit(event) {
        alert('Search product: ' + this.input.current.value);
        event.preventDefault();
      }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                    <label>
                        Enter product name:
                        <input type="text" ref={this.input} />
                    
                    </label>
                    <div> <input type="submit" value="Search" className="btn btn-info" /></div>
                    
                    </div>
        
      </form>
            </div>
        )
    }
}
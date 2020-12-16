import React from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

export class UserList extends React.Component{
    constructor(){
        super();
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.post('https://reqres.in/api/users',{
            'name':'Arshad',
            'job':'leader'
        }).then((response)=>{
            alert("user added");
            console.log(response.data);
            
        })

        Axios.get('https://reqres.in/api/users?page=2').then((response)=>{
            let users = response.data.data;
            this.setState({users});
        })
    }
    render(){
        return(
            <div>
                {this.state.users.map((u)=>{
                    return <li>{u.first_name}</li>
                })}
            </div>
        )
    }
}
import React from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"
import AddUsers from './AddUsers';

class User extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isEdit: false
        }
    }
    user = this.props.user
    render(){
        return(<div className='user'>  
                <IoCloseCircleSharp className ="delete-icon" onClick={()=>{
                    this.props.deleteUser(this.user.id)
                }}/>       
                <IoHammerSharp className ="edit-icon" onClick={()=>{
                    // this.props.editUser(this.user)
                    this.setState({isEdit: !this.state.isEdit})
                }}/>       
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <p>{this.user.email}</p>
                <p><img className='avatar' src={this.user.avatar} alt=''/></p>
                <b>{this.user.isHappy?"Счастлив :)":"В депрессии :("}</b>

                {this.state.isEdit && <AddUsers addUser ={this.props.editUser} user = {this.user}/>}
                </div>)}
                  
    }
export default User
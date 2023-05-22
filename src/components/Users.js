import React from 'react';
import User from './User';

class Users extends React.Component{
    render(){
        if(this.props.users.length){
            return(
                <div>{this.props.users.map(el=>
                    <User editUser ={this.props.editUser} deleteUser = {this.props.deleteUser} key={el.id} user ={el} />
                    )}
                    </div>
            )
        }
        else{
            return(<div className='users-upsent'><b>Пользователей нет!</b></div>)
        }
       
    }

}
export default Users
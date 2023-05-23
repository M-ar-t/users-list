import React from 'react';
import Header from './components/Header'
import Users from './components/Users';
import AddUsers from './components/AddUsers';
import axios from "axios"

const baseURL = "https://reqres.in/api/users?page=1"
class App extends React.Component{
    constructor(props){
        super(props)

        axios.get(baseURL).then((res)=>{
            this.setState({users:res.data.data})
        })
        this.state ={
            users:[]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}
    render(){
        return(
        <div>
            <Header title ="Список пользователей"/>
            <div className='mainDiv'>
                <main>
                    <Users editUser ={this.editUser} users ={this.state.users } deleteUser = {this.deleteUser}/>
                </main>
                <aside >
                    <AddUsers addUser ={this.addUser} />
                </aside>
            </div>
          
      </div>)
    }

    addUser(user){
        const id = this.state.users.length + 1
        this.setState({users:[...this.state.users, {id, ...user}]})
     }

     deleteUser(id){
        this.setState({users:this.state.users.filter(el => el.id !== id)})
     }
     editUser(user){
            let usersArr = this.state.users
            usersArr[user.id-1] = user
            
            this.setState({users:[]},()=>{
                this.setState({users:[...usersArr]})
            })
     }

}

export default App

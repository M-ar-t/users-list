import React from 'react';

class AddUsers extends React.Component{
    userAdd ={}
    constructor(props){
        super(props)
        this.state = {
            first_name :"",
            last_name: "",
            email: '',
            avatar:"",
            isHappy:false

        }
    }
    render(){
        return(
            <form ref={(el)=>this.myForm = el}>
                <input type='text' placeholder='Имя' onChange={(e)=>{this.setState({first_name:e.target.value})}}/>
                <input type='text' placeholder='Фамилия'onChange={(e)=>{this.setState({last_name:e.target.value})}}/>
                <input placeholder='email'onChange={(e)=>{this.setState({email:e.target.value})}}/>
                <input placeholder='Ссылка на фото'onChange={(e)=>{this.setState({avatar:e.target.value})}}/>
                <label htmlFor='isHappy'>Счастлив</label>
                <input type='checkbox' id='isHappy'onChange={(e)=>{this.setState({isHappy:e.target.checked})}}/>
                <button type='button' onClick={()=> {
                    this.myForm.reset()
                    this.userAdd ={...this.state}
                    if (this.props.user){
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.addUser(this.userAdd)     

                }}>Добавить</button>
            </form>
        )
    }

}
export default AddUsers
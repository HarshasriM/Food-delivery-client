import React, { Component } from 'react';
import Header2 from "../../Header2";
import "./Resgister.css"
const registerUrl ="http://localhost:8000/auth/register";
class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            password:"",
            phone:"",
            address:"",
            
        }
    }
    handleName =(e)=>{
        this.setState({name:e.target.value})
    }
    handlePassword =(e)=>{
        this.setState({password:e.target.value})
    }
    handleEmail =(e)=>{
        this.setState({email:e.target.value})
    }
    handlePhone =(e)=>{
        this.setState({phone:e.target.value})
    }
    handleAddress=(e)=>{
        this.setState({address:e.target.value})
    }
    handleSubmit = ()=>{
        //method:POSt
        //body:json data
        //headers:json
        fetch(registerUrl,{
            method:"POST",
            body: JSON.stringify(this.state),
            headers:{
                accept:"application/json",
                "Content-Type":"application/json",
            }
        })
        .then(this.props.history.push("/login"))
        
    }
    render() {
        console.log(this.state)
        return (
            <>
                <Header2 />
            
                <div className='container-fluid main-content'>
                    <div className='loginbox'>
                        <input type='text' name ="name" id ="name" placeholder='Enter your Name' className='col-md-8 fields'  onChange={this.handleName} /><br/><br/>
                        <input 
                        type='email'
                         id ="email" 
                         placeholder='Enter your email' 
                         className='col-md-8 fields'  
                         onChange={this.handleEmail} 
                         name="email"/><br /><br />
                        
                        <input type='password' name = "password" id ="password" placeholder='Enter your password' className='col-md-8 fields'  onChange={this.handlePassword} /><br/><br/>
                       
                        <input type='phone' name ="phone" id ="phone" placeholder='Enter your phonenumber' className='col-md-8 fields'  onChange={this.handlePhone} /><br/><br/>
                        <textarea id="address" name="address" rows="4" cols="50" placeholder='Enter your address' className='col-md-8 fields'  onChange={this.handleAddress}></textarea>
                        <br /><br />
                        <div className='col-md-4'></div>
                        <div style={{marginTop:"30px"}}>
                            <button onClick = {this.handleSubmit} type = "submit" className='btn btn-info'>Register</button>  
                        </div>
                    </div>
            
                </div>
            </>
        );
    }
}

export default Register;
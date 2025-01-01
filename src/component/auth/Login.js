import React, { Component } from 'react';
import Header2 from "../../Header2";
import "./Login.css"
import {Link} from "react-router-dom";
const loginUrl = "http://localhost:8000/auth/login";
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            email:"",
            password:"",
            message:"",
            
        }
    }
    
    handlePassword =(e)=>{
        this.setState({password:e.target.value})
    }
    handleEmail =(e)=>{
        this.setState({email:e.target.value})
    }
    handleSubmit = ()=>{
        //method:POSt
        //body:json data
        //headers:json
        fetch(loginUrl,{
            method:"POST",
            body: JSON.stringify(this.state),
            headers:{
                accept:"application/json",
                "Content-Type":"application/json",
            }
        })
        .then((res)=>(res.json()))
        .then((data)=>{
            console.log(data);
            if(data.auth === false){
                this.setState({message:data.token});
                alert(data.token);
            }
            else{
                sessionStorage.setItem("Itk",data.token)
                this.props.history.push("/")
            }
        
        })
        
    }
    render() {
        return (
            <>
            <Header2 />
            <div className='container-fluid main-content'>
                <div className='loginbox'>
                    <label className='form-group' for="email"></label>
                    <input type='email' id ="email" placeholder='Enter your email' className='col-md-10 fields' onChange={this.handleEmail}/><br /><br />
                    <label className='form-group' for="password"></label>
                    <input type='password' id ="password" placeholder='Enter your password' className='col-md-10 fields' onChange={this.handlePassword}/><br/><br/>
                    <div className='col-md-0'></div>
                    <div className='buttons'>
                        <button type = "submit" className='btn btn-info' onClick={this.handleSubmit}>Login</button>
                        <div>
                            <span>Don't you have an account?</span><Link to="/register">register</Link>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Login;
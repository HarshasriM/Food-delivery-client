import React, { Component } from 'react';
import "./Header.css";
import {Link} from  "react-router-dom";


const userUrl = "http://localhost:8000/auth/userInfo";
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            userData:"",
        }
    }
    handleLoggedOut =()=>{
        sessionStorage.setItem("loginStatus","loggedout");
        sessionStorage.setItem("userInfo","")
        sessionStorage.removeItem("Itk")
        this.setState({userData:""})
    }
    conditionalHeader = ()=>{
        if(this.state.userData.name){
            let data= this.state.userData;
            sessionStorage.setItem("loginStatus","loggedIn");
            sessionStorage.setItem("userInfo",JSON.stringify(data));
            return(
                <>
                    <Link  className='login anchor1'>Hi {data.name}</Link>
                    <Link  to ="/" className='createacc anchor1 ' onClick={this.handleLoggedOut}>Logout</Link>
                </>
            )
        }
        else{
            return(
                <>
                    <Link to="/login"  className='login anchor1'>Login</Link>
                    <Link to="/register" className='createacc anchor1 '>Create an account</Link>
                </>
            )
        }
        
    }
    render() {
        return (
            <div>
                <header>
                        <div className='hstack gap-3'>
                            <div id="brand-name" className='mt-1'>Zomato App </div>
                            <div className='p-2  ms-auto'>
                                <Link className="btn btn-info" id="btn1" to="/">Home</Link>
                                {this.conditionalHeader()}
                                
                            </div>
                        </div>
                    
                </header>
            </div>
        );
           
           
    }
    componentDidMount(){
        fetch(userUrl,{
            method:"GET",
            headers:{
                "x-access-token":sessionStorage.getItem("Itk")
            }
        })
        .then((res)=>(res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({userData:data})
        })
    }
}

export default Header;
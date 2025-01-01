import React, { Component } from 'react';
import "../src/Header2.css";
import { Link } from 'react-router-dom';
const userUrl = "http://localhost:8000/auth/userInfo";
class Header2 extends Component {
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
                    <Link  className='login anchor'>Hi {data.name}</Link>
                    <Link  to ="/" className='createacc anchor ' onClick={this.handleLoggedOut}>Logout</Link>
                </>
            )
        }
        else{
            return(
                <>
                    <Link to="/login"  className='login anchor'>Login</Link>
                    <Link to="/register" className='createacc anchor '>Create an account</Link>
                </>
            )
        }
        
    }
    render() {
        return (
            <div>
                <header className='header'>
                    <div className="header_class">
                        <div className="logo1">em</div>
                        <nav className="navigation"> 
                            <Link className="btn btn-info" to="/">Home</Link>
                            {this.conditionalHeader()}
                        </nav>   
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

export default Header2;
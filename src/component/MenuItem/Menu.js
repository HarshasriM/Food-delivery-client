import React, { Component } from 'react';
import axios from 'axios';
import "./Menu.css";
import {Link}  from "react-router-dom";
const url ="http://localhost:4000";
class Menu extends Component {
    constructor(){
        super()
        this.state = {
            menuList : "",
            details :"",
            userItem:"",
        }
    }
    orderId=[]
    placeOrder = (id) =>{
        let quantity = document.getElementById(id);
        quantity.innerHTML = +quantity.innerHTML + (1);
        this.orderId.push(id)
        this.addToCart(this.orderId)
    }
    addToCart = (data) =>{
        this.setState({userItem:data},()=>{
            console.log("userItem",this.state.userItem)
        })
    }
    finalOrder = ()=>{
        
        let menuId = sessionStorage.getItem("menu")
        //console.log(typeof(menuId));
        let orders=[];
        if(menuId)
        {   (menuId.split(",")).map((item) =>{
                orders.push(parseInt(item))
                return ""
            })
        }
        else{
            alert("Please add menus to your orders")
        }
        fetch(`${url}/menuItem`, {
            method: "POST",
            body: JSON.stringify(orders),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
                console.log("MenuData", data)
                let totalPrice = 0;
                
                data.map((item) => {
                    let count = this.countMenuId(this.orderId,item.menu_id)
                    totalPrice = totalPrice + parseFloat(item.menu_price)*count
                    return ""
                })
                console.log("totalprice",totalPrice)
                totalPrice = sessionStorage.setItem("totalPrice", totalPrice)
            })
            //this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)

    }
    countMenuId=(data,id)=>{
        let count=0
        data.filter((item)=>{
            if(item === id)
                count+=1
            return ""
        })
        return count
    }

    removeOrder = (id) =>{
        let quantity = document.getElementById(id);
        if(quantity.innerHTML>0)
            quantity.innerHTML = +quantity.innerHTML - (1);
        else
            quantity.innerHTML =0
        let index = this.orderId.indexOf(id)
        /*delete this.orderId[index]*/
        if(index>-1){
            this.orderId.splice(index,1)
        }
        this.addToCart(this.orderId)
    }
    renderMenu = ((data) =>{
        if(data){
            return(
                (data).map((item)=>{
                    return(
                        <div key = {item.menu_id} className='container-fluid'>
                            <div className="card1">
                               
                                <div className='row'>
                                    <div className='col-md-10 menu-text'>
                                        <p><img
                                                    className="featureIcon"
                                                    src="https://i.ibb.co/wJvrhYg/veg.png"
                                                    alt="pureVeg" /> 
                                        </p>
                                        <h2 className='menu-name'>{item.menu_name}</h2>
                                        <p className='menu-name'>cost :{item.menu_price}</p>
                                        <p style={{color:"#696b78"}}>{item.description}</p>
                                        
                                    </div>
                                    <div className="col-md-2" >
                                        <img className = "menu-img" src = {item.menu_image} alt={item.menu_name}/>
                                        <div className='adding-menu'>
                                                <span onClick={()=>{this.placeOrder(item.menu_id)}}><i className="fa-solid fa-plus" style={{color: "#26a269"}}></i></span>
                                                <span id={item.menu_id}>0</span>
                                                <span onClick={()=>{this.removeOrder(item.menu_id)}}><i className="fa-solid fa-minus" style={{color: "#26a269",}} ></i></span>
                                        </div>
                                    </div>
                                  
                                </div>
                                <hr /> 
                            </div> 
                                                 
                        </div>
                )

                
            })
            )
        }})
    render() {
        const pay = ()=>{
            sessionStorage.setItem("menu",this.state.userItem)
            this.finalOrder();
            //this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
        }
        return (
                <>
                    <Link to={`/placeOrder/${this.state.details.restaurant_name}`}><button className='btn btn-danger' id = "pay" onClick={()=>{pay()}}>Pay Now</button></Link>
                    <h2 className='rest-name' style={{marginBottom:"50px",marginLeft:"100px"}}>{this.state.details.restaurant_name}</h2>
                    
                    {this.renderMenu(this.state.menuList)}
                </>
                )
    }
    async componentDidMount(){
        let restId = this.props.match.params.restId;
        //console.log(restId);
        let response = await axios.get(`${url}/details/${restId}`,{method:"GET"})
        //console.log(response);
        this.setState({details : response.data[0]})
        let menuData= await axios.get(`${url}/menu/${restId}`,{method:"GET"})
        this.setState({menuList : menuData.data})
        //console.log(menuData);
    }
}

export default Menu;
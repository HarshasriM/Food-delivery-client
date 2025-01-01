import axios from 'axios';
import React, { Component } from 'react';
import Header2 from "../../Header2";
import "./Details.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const url ="http://localhost:4000";

class Details extends Component {
    constructor(){
        super()
        this.state = {
            details :"",
            menuList :"",
            mealId : sessionStorage.getItem("mealId"),
        }
    }
    render() {
        let {details} = this.state;
        return (
           
            <div>
               <Header2 />
               <div className='container-fluid outer-div'>
                    <div className='res-img'>
                        <img src = {details.restaurant_thumb} alt ={details.restaurant_name}/>
                    </div>
                    <div>
                        <h3 className='rest-name'>{details.restaurant_name}</h3>
                    </div>
                    <div className='order'>
                        <Link className='btn btn-danger' to={`/listing/${this.state.mealId}`}>Back</Link>
                        <Link className='btn btn-danger' to={`/menuItem/${this.state.details.restaurant_id}`}>place online order</Link>
                    </div>
                    <div className='tabs'>
                        <Tabs>
                           <TabList style={{borderColor:"#192F60"}}>
                                <Tab style={{color:"#192F60" ,font:"normal normal 600 16px/27px Poppins"}}>Overview</Tab>   
                                <Tab style={{color:"#192F60" ,font:"normal normal 600 16px/27px Poppins"}}>Contact</Tab>
                           </TabList>
                           <TabPanel style={{marginLeft:"30px"}}>
                                <h2 className='about'>About this Place</h2>
                                <div>
                                    <h3 className='rating'>Rating</h3>
                                    <p className='rating-info'>{details.average_rating}</p>
                                    <p className='rating-info'>{details.rating_text}</p> 
                                </div>
                                <div>
                                    <h3 className='rating'>Average Cost</h3>
                                    <p className='rating-info'>Rs. {details.cost} per person (approx..)</p>
                                </div>
                           </TabPanel>
                           <TabPanel style={{marginLeft:"30px"}}>
                                <div>
                                    <p className='phone'>Phone Number</p>
                                    <p id='number'>+91{details.contact_number}</p>
                                </div>
                                <div>
                                    <h3 className='rating'>{details.restaurant_name}</h3>
                                    <p className='rating-info'>{details.address}</p>
                                </div>

                           </TabPanel>
                        </Tabs>
                    </div>
               </div>
            </div>
        );
    }
    async componentDidMount(){
        //console.log(this.props);
        let restId = this.props.location.search.split("=")[1]//['?restId', '1']
        //console.log(restId)
        let response = await axios.get(`${url}/details/${restId}`,{method:"GET"})
        console.log(response);
        this.setState({details : response.data[0]})
        let menuData= await axios.get(`${url}/menu/${restId}`,{method:"GET"})
        this.setState({menuList : menuData.data})
        console.log(menuData);

    }
}

export default Details;
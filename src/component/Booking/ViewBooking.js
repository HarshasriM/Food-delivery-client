import React ,{useState,useEffect}from 'react';
import Header2 from '../../Header2';

import DisplayOrder from './DisplayOrder';
import axios from 'axios';
const url = "http://localhost:4000/orders?email=";

const ViewBooking = ()=>{
    let sessionData = sessionStorage.getItem("userInfo")
    console.log(sessionData);
    let data = JSON.parse(sessionData);
    console.log(data);

    //used for fetch call in hooks
    useEffect (()=>{
        let result = axios.get(`${url}${data.email}`)
        .then((res)=>{
            console.log(res.data)
            setOrders(
                res.data
            )
        })
    },[])////call only once
    const [orders,setOrders]=useState();
   
    return (
        <>
            <Header2/>
            <DisplayOrder orderData={orders}/>
        </>
    );
}

export default ViewBooking;
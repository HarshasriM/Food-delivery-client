import React , { useState} from 'react';

import Header2 from '../../Header2';
const url = "http://localhost:4000/placeorder";
const PlaceOrder =  (props)=>{
    console.log(props);
    let sessionData = sessionStorage.getItem("userInfo")
    console.log(sessionData);
    let data = JSON.parse(sessionData);
    console.log(data);

    const initialValues = {
        id:Math.floor(Math.random()*1000000),
        rest_name:props.match.params.restName,
        name:data.name,
        email:data.email,
        phone:data.phone,
        address:data.address,
        cost:sessionStorage.getItem("totalPrice")
    }
    const [values,setValues] = useState(initialValues)

    const handleInputChange =(e) =>{
        const {name,value} = e.target
        //name-array
        setValues({
            ...value,
            [name]:value,
        })

    }
    const checkout=()=>{
        fetch(url,{
            method:"POST",
            body:JSON.stringify(values),
            headers:{
                accept:"application/json",
                "Content-Type":"application/json",
            }
        })
        .then(props.history.push("/viewBooking"))
    }
    return (
        
            <>
            <Header2 />
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order for {props.match.params.restName}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                    name="name" value={values.name} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                    name="email" value={values.email} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                    name="phone" value={values.phone} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="address" className="control-label">Address</label>
                                <input className="form-control" id="address"
                                    name="address" value={values.address} onChange={handleInputChange} />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Price is Rs. {values.cost}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success' onClick={checkout} >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
       
    );
}

export default PlaceOrder;
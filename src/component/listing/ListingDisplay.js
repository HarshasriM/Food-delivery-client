import React from 'react';
import "./ListingDisplay.css";
import {Link} from "react-router-dom";
const ListingDisplay = (props) =>{
    //{restdata}->destructuring from props
    const rendercuisine = ((item)=>{
        return (item.cuisines).map((data)=>{
            return(
                <span className="style-1">{data.cuisine_name} ,</span>
            )
        })
    })
    const rendermealtype = ((item)=>{
        return (item.mealTypes).map((data)=>{
            return(
                <span className="style-1">{data.mealtype_name} ,</span>
            )
        })
    })
    const renderData = ({restdata}) =>{
        console.log(restdata);
        if(restdata){
            if(restdata.length>0){
                return restdata.map((item)=>{
                    return(
                            <div className="break-1">
                                <div className='row'>
                                    <div className="col-md-4">
                                        <img className = 'img1' src={item.restaurant_thumb} alt={item.restaurant_name} />
                                    </div>
                                    <div className='col-md-8' style={{marginTop:"20px"}}>
                                        <Link className="h6" to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <p><span className="style-1">Rating: </span><span className='style-2'>  {item.rating_text}</span></p>
                                        <p className="style-2">{item.address}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='food-info'>
                                    <p><span className="style-2">CUSINES: </span> {rendercuisine(item)}</p>
                                
                                
                                    <p><span className="style-2">MEALTYPE: </span> {rendermealtype(item)}</p>
                                
                                    <p className='style-2'>COST :  Rs {item.cost}</p>
                                </div>
                            </div>
                    )
                })
            }
            else{
                return (
                    <div>
                        <div className='break-1'>
                            <h1 className='h6 error'> Sorry! there no restaurants</h1>
                        </div>
                    </div>
                )
            }

        }

    }
    return(
        <div className='content'>
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;
import React from 'react';
import "./QuickDisplay.css";
import {Link} from "react-router-dom";
export const QuickDisplay = (props)=>{

       const listMeal =({mealData}) =>{
            console.log(mealData)
           if(mealData){
            return mealData.map((item)=>{
                return(
                    <Link className="link" key = {item._id} to={`/listing/${item.mealtype_id}`}>
                        <div className="card mb-3" style={{maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img className="titleitem img-fluid rounded-start" src={item.meal_image} alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card_body">
                                    <h5>{item.mealtype}</h5>
                                    <p>{item.content}</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
          }
       }
       return (
        <>
            
            <div className="maincard">
                {listMeal(props)}
            </div>
        </>
       )
}

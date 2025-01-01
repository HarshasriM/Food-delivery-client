import React, { Component } from 'react';
import "./CuisineFilter.css";
import axios from "axios";
const url = "http://localhost:4000/filter";
class CuisineFilter extends Component {

    filterCuisine =((event)=>{
           console.log(event.target.value)
           let cuisineId = event.target.value;
           let mealId = this.props.mealId
           console.log(mealId)
           let cuisineUrl ;
           if(cuisineId === ""){
                cuisineUrl = `${url}/${mealId}`
           }
           else{
                cuisineUrl = `${url}/${mealId}?cuisine_id=${cuisineId}`
           }
           axios.get(cuisineUrl)
           .then((res)=>{
                console.log(res.data)
                this.props.restPerCuisine(res.data)
           })
        
    })
    render() {
        return (
            <div>
               <p className="side-heading">cusine</p>
                <div onChange={this.filterCuisine}>
                    
                    <input type="radio" id="NorthIndia" name="cuisine" value="1" className="checkbox" />
                    <label for="NorthIndia"  className="checkbox1">NorthIndia</label><br />
                    <input type="radio" id="SouthIndia" name="cuisine" value="2"  className="checkbox" />
                    <label for="SouthIndia"  className="checkbox1">SouthIndia</label><br />
                    <input type="radio" id="Chinese" name="cuisine" value="3" className="checkbox" />
                    <label for="Chinese"  className="checkbox1">Chinese</label><br />
                    <input type="radio" id="FastFood" name="cuisine" value="4"  className="checkbox"/>
                    <label for="FastFood"  className="checkbox1">FastFood</label><br />
                    <input type="radio" id="StreetFood" name="cuisine" value="5" className="checkbox" />
                    <label for="StreetFood"  className="checkbox1">StreetFood</label><br />
                </div> 
            </div>
        )
    }
}

export default CuisineFilter;
import React, { Component } from 'react';
import "./CuisineFilter.css";
import axios from 'axios';
const url = "http://localhost:4000/filter";
class sort extends Component {
    filterSort = ((event)=>{
        let sort = event.target.value;
        let sortUrl;
        let mealId = this.props.mealId;
        if(sort === ""){
            sortUrl = `${url}/${mealId}`
        }
        else{
            sortUrl = `${url}/${mealId}?lcost=1&hcost=5000&sort=${sort}`
        }
        axios.get(sortUrl)
        .then((res)=>{
             console.log(res.data)
             this.props.restPerCost(res.data)
        })
     
    })
    render() {
        return (
            <div>
                <p className="side-heading">Sort</p>
                <div onChange={this.filterSort}>
                    <input type="radio" id="price high to low" name="sort" value="-1" className="checkbox" />
                    <label for="price high to low"  className="checkbox1">price high to low</label><br />
                    <input type="radio" id="price low to high" name="sort" value="1"  className="checkbox" />
                    <label for="price low to high"  className="checkbox1">price low to high</label><br />
                </div>
            </div>
        );
    }
}

export default sort;
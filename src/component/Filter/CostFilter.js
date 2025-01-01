import React, { Component } from 'react';
import "./CuisineFilter.css"
import axios from 'axios';
import Sort from "./Sort";
const url = "http://localhost:4000/filter";

class CostFilter extends Component {
    filterCost =((event)=>{
        console.log(event.target.value)
        let costRange= event.target.value.split('-');
        console.log(costRange)
        let lcost = costRange[0]
        let hcost = costRange[1]
        let mealId = this.props.mealId
        console.log(mealId)
        let costUrl ;
        if(costRange === ""){
             costUrl = `${url}/${mealId}`
        }
        else{
            costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl)
        .then((res)=>{
             console.log(res.data)
             this.props.restPerCost(res.data)
        })
     
    })
    
 setDataSort=(data) =>{
    this.props.restPerCost(data)
 }
    render() {
        return (
            <div>
                 <p className="side-heading">Cost For One</p>
                <div onChange={this.filterCost}>
                    <input type="radio" id="less-than 500" name="cost" value="1-500" className="checkbox" />
                    <label for="less-than 500"  className="checkbox1">less-than 500"</label><br />
                    <input type="radio" id="500-1000" name="cost" value="500-1000"  className="checkbox" />
                    <label for="500-1000"  className="checkbox1">500-1000</label><br />
                    <input type="radio" id="1000-1500" name="cost" value="1000-1500" className="checkbox" />
                    <label for="1000-1500"  className="checkbox1">1000-1500</label><br />
                    <input type="radio" id="1500-2000" name="cost" value="1500-2000"  className="checkbox" />
                    <label for="1500-2000"  className="checkbox1">1500-2000</label><br />
                    <input type="radio" id="2000+" name="cost" value="2000-1000000" className="checkbox" />
                    <label for="2000+"  className="checkbox1">2000+</label><br />
                </div>
               
                <Sort mealId = {this.props.mealId} restPerCost = {this.props.restPerCost}/>
            </div>
        );
    }
}

export default CostFilter;
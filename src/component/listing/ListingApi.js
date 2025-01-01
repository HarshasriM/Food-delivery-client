import React, { Component } from 'react';
import Header2 from "../../Header2";
import  "./ListingApi.css";
import CuisineFilter from '../Filter/CuisineFilter';
import CostFilter from '../Filter/CostFilter';
import  ListingDisplay  from './ListingDisplay';

const murl ="http://localhost:4000/restaurants?meal_id=";
class ListingApi extends Component {
    link = ()=>{
        let mealId = this.props.match.params.mealId;
        fetch(`${murl}${mealId}`,{method : "GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurantList : data});
            console.log(data)
            })
    }
    setDataFilter=((data) =>{
        this.setState({restaurantList : data})
    })
    setDataCost=((data) =>{
        this.setState({restaurantList : data})
    })
    constructor(){
        super();
        this.state = {
            restaurantList :"",
        }
    }
    render() {
        return (
            <div>
              <Header2/>
              <div className='item'>
                <div className="division">
                    <div id="filter">
                        <p className="filter-heading">Filters</p>
                        <button className="btn btn-info mt-1" onClick={this.link}>Clear</button>
                        <CuisineFilter mealId = {this.props.match.params.mealId} restPerCuisine = {(data)=>{
                            this.setDataFilter(data);
                        }}/>
                        <CostFilter mealId = {this.props.match.params.mealId} restPerCost = {(data)=>{
                            this.setDataCost(data);
                        }}/>
                    </div>
                    <div>
                    <ListingDisplay restdata = {this.state.restaurantList}/>
                    </div>
                    
                </div>
               
              </div>
            </div>
            
        );
    }
    componentDidMount(){
        //console.log(this.props)
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem("mealId",mealId);
        fetch(`${murl}${mealId}`,{method : "GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurantList : data});
            console.log(data)
            })
    }
}
export default ListingApi;
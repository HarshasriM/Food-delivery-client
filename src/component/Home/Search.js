import React, { Component } from 'react';
import "./Search.css";

const lurl = "http://localhost:4000/locations"
const rurl = "http://localhost:4000/restaurants?state_id="
class Search extends Component {
    constructor(){
        super()
        this.state ={
           locations:"",
           restaurants:"",
        }
    }
    returnStateId = (item)=>{
        const temp = this.state.locations
        for (let i = 0 ; i<temp.length ;i++){
            if(temp[i].state === item){
                return temp[i].state_id;
            }
        }
    }
    handleCity=(event)=>{
        const stateName = event.target.value;
        const stateId = this.returnStateId(stateName)
       //const stateId = event.target.value
        fetch(`${rurl}${stateId}`,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>this.setState({restaurants :data}))
    }
    renderCity = (data) =>{
        if(data) {
            //console.log(data)
            return data.map((item) => {
                return(
                    //<option key= {item._id} value={item.state_id}>{item.state}</option>
                    <option>{item.state}</option>
                )
            })
        }
    }
    renderRest=(data)=>{
        if(data) {
            //console.log(data)
            return data.map((item) => {
                return(
                   // <option value={item.restaurant_id}>{item.restaurant_name}</option>
                   <option >{item.restaurant_name}</option>
                )
            })
        }
    }
    render() {
        return (
            <div>
                 <div className='row text-center'>
                    <div className='col-12 mb-3' style={{marginTop:"50px"}}>
                        <p class="logo px-4 py-2 ">e!</p>
                    </div>
                </div>
                <div className='row text-center mt-3'>
                    <div className='col-md-12'>
                        <p className='title'>Find the best restaurants and cafes,bars</p>
                    </div>
                </div>
                <div class="location">
                    <div class="col-sm-3">
                        <input class="form-control" list="datalistOptions" id="exampleDataList" onChange={this.handleCity}
                            placeholder="Please type a location" style={{borderRadius: "0px"}}/>
                        <datalist id="datalistOptions" >
                            <option>Please choose city</option>
                            <option>-----SELECT YOUR CITY-------</option>
                            {this.renderCity(this.state.locations)}
                        </datalist>    
                    </div>
                    <div class="col-sm-5 search" >
                        <input class="form-control" placeholder="Search for restaurants" list="datalistOptions1"  style={{borderRadius: "0px", paddingLeft: "60px"}} />
                        <i class="bi bi-search"></i>
                        <datalist id="datalistOptions1" >
                            <option>Search restaurants</option>
                            <option>-----Select restaurants-------</option>
                            {this.renderRest(this.state.restaurants)}
                        </datalist>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        fetch(`${lurl}`,{method :"GET"})
        .then((res)=> res.json())
        .then((data)=> this.setState({locations :data}))
    }
}

export default Search;
import React, { Component } from 'react';

class LifeCycleA extends Component {
    constructor(){
        super()
        this.state ={
            name:"sangeetha",
            age : 14
        }
        console.log("LifeCycleA constructor")
    }


    static getDerivedStateFromProps(){
       
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    handleNameChange= (event) => {
        this.setState({
            name: event.target.value,
            //newname

        })
    }
    handleageChange= (event) => {
        this.setState({
            age: event.target.value,

        })
    }
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                LifeCycleA
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                <input type="text" value={this.state.age} onChange={this.handleageChange} />
            </div>
        );
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
}

export default LifeCycleA;
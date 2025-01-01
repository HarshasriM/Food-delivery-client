import React, { Component } from 'react';
import Header from '../../Header';
import QuickSearch from './QuickSearch';
import Search from './Search';
import "./Home.css"
class Home extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid back-img'>
                    <Header/>
                    <Search/> 
                </div>
                <QuickSearch/>
            </div>
        );
    }
}

export default Home;
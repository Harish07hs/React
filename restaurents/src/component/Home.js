import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import RestaurantList from './RestaurantList';

const url = "http://localhost:8900/restaurants";

class Home extends Component {
    constructor() {
        super()

        this.state = {
            restaurants: ''
        }
    }

    render() {
        console.log(">>>", this.state.restaurants);
        console.log("render");

        return (
            <Fragment>
                <div className="container">
                    <Banner />
                    <RestaurantList restaurantData={this.state.restaurants}></RestaurantList>
                </div>
            </Fragment>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch(url, {
            method: 'GET'
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({ restaurants: data });
            })
    };
}


export default Home;
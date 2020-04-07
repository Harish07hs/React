import React from 'react';
// import { Link } from 'react-router-dom';

const RestaurantList = (props) => {

    const renderList = ({ restaurantData }) => {

        if (restaurantData) {
            return restaurantData.map((item, index) => {
                return (

                    <div className="col-xs-12 col-sm-4 col-md-3">
                        <div className="card bg-dark text-white profile-card-5 m-2">
                            <div className="card-img-block">
                                <img className="card-img-top" src={item.backgroundImageURL} alt="Restaurant1221" style={{ width: '100%' }}></img>
                            </div>
                            <div className="card-body pt-0">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text"><b>Category:</b> {item.category}</p>
                                <p className="card-text"><b>Contact:</b> {item.contact!=null ? item.contact.formattedPhone: "Not Available"}</p>
                                <p className="card-text"><b>Location:</b> {item.location!=null ? item.location.formattedAddress.join(' '): "Not Available"}</p>
                            </div>
                        </div>
                    </div> 

                )
            })
        } else {
            return (
                <img src="/images/loader1.gif" alt="Loader" />
            )
        }

    }

    return (
            <div className="card-deck row mt-4">
                {renderList(props)}
            </div>
    )
}


export default RestaurantList;
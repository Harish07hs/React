import React from 'react';

const Banner = () =>{

    const images = [1,2,3,4,5,6,7]; //images are stoed as names postfixed with numbers ex: imageName + number -> ban1

    const carouselIndicators =   images.map((img,index) =>
                                        <li key={index} data-target="#demo" data-slide-to={img} className={(img === 1 ? "active": "")}></li>
                                        );

    const carouselItems = images.map((img,index) =>
                         <div key={index} className={'carousel-item ' + (img === 1 ? "active": "")}>
                            <img src={'/images/banner/ban'+ img+ '.jpg'} alt="Restaurants"  height="400"></img>
                            <div className="carousel-caption">
                                <p>Restaurants</p>
                                <h1>Count the memories not the calories.</h1>
                            </div> 
                        </div>                                                                                          
                    );

    return(
            <div id="demo" className="carousel slide" data-ride="carousel" >  
                {/* style={{backgroundImage:'url("restaurents/public/images/HomeBackgroud.jpg")'}} */}
                {/* <!-- Indicators --> */}
                <ul className="carousel-indicators">
                {carouselIndicators}
                </ul>
                
                {/* <!-- The slideshow --> */}
                <div className="carousel-inner">
                    {carouselItems}
                </div>
                
                {/* <!-- Left and right controls --> */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
    )
}

export default Banner;
import React from 'react';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel';
import cancel from '../../img/cancel.png';
import tick from '../../img/tick.png';

const PageDetails = () => {
  return (
    <div id="matchPage">
      <div id="matchTitle">
        <h1 id="matchTitleText">DINNER PLAN?</h1>
      </div>
      <div id="containerDiv">
        <div className="d-flex justify-content-center align-items-center">
          <div id="rejectDiv">
            <button
              className="btn btn-primary chooseBtn hvr-bob shadow"
              id="rejectBtn"
            >
              <img src={cancel} alt="" id="cancelIcon" className="icon"></img>
            </button>
          </div>
          <div id="cardDiv">
            <div
              className="card mx-2 restaurant shadow"
              style={{ width: '28rem' }}
            >
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://blog.tubikstudio.com/wp-content/uploads/2019/12/asian-food-illustration-2.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="https://blog.tubikstudio.com/wp-content/uploads/2019/12/asian-food-illustration-2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://blog.tubikstudio.com/wp-content/uploads/2019/12/asian-food-illustration-2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="card-body cardBody">
                <h5 className="card-title">McDonald's</h5>
                <h5 className="card-price">$$</h5>
                <h5 className="card-opening">open now</h5>
                <p className="card-text card-link">
                  <a className="mapslink" href="www.mcdonalds.com/menu">
                    www.mcdonalds.com/menu
                  </a>
                </p>
                <p className="card-link">
                  <span className="ratingContainer">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </span>
                </p>
                <div className="phonediv">
                  <p className="card-link">514-893-2035</p>
                </div>
                <div className="mapsdiv">
                  <p className="card-link">
                    <a className="mapslink" href="googlemaps.com">
                      1595 Rachel Est Street, H2J 4A7, Montreal, QC
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="acceptDiv">
            <button
              className="btn btn-primary chooseBtn hvr-bob shadow"
              id="acceptBtn"
            >
              <img src={tick} alt="" id="tickIcon" className="icon"></img>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- JS Imports--> */}
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default PageDetails;

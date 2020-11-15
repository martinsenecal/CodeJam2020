import React from 'react';

const PageDetails = () => {
  return (
    <div id="matchPage">
    <div id="matchTitle">
        <h1 id="matchTitleText">
            DINNER PLAN?
        </h1>
    </div>
    <div id="containerDiv">
      <div className="d-flex justify-content-center align-items-center">
        <div id="rejectDiv">
          <button className="btn btn-primary chooseBtn hvr-bob shadow" id="rejectBtn">
              <img src="../img/cancel.png" alt="" id="cancelIcon" className="icon"></img>
          </button>
        </div>
        <div id="cardDiv">
          <div className="card mx-2 restaurant shadow" style="width: 28rem;">
              <div className="card-body cardBody">
                <h5 className="card-title">McDonald's</h5>
                <h5 className="card-price">$$</h5>
                <h5 className="card-opening">open now</h5>
                <p className="card-text card-link"><a className="mapslink" href="www.mcdonalds.com/menu">www.mcdonalds.com/menu</a></p>
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
                <p className="card-link"><a className="mapslink" href="googlemaps.com">1595 Rachel Est Street, H2J 4A7, Montreal, QC</a></p>
              </div>
                </div>
              </div>
            </div>
        <div id="acceptDiv">
          <button className="btn btn-primary chooseBtn hvr-bob shadow" id="acceptBtn">
              <img src="../img/tick.png" alt="" id="tickIcon" className="icon"></img>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PageDetails;

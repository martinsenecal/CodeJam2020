import React from 'react';

const PageDetails = () => {
  return (
    <div id="matchPage">
      {/*<!--Title-->*/}
      <div id="matchTitle">
        <h1 id="matchTitleText">
          DINNER PLAN?
          </h1>
      </div>

      {/*<!--Reject, RestoCard, Accept-->*/}
      <div id="containerDiv">
        <div className="d-flex justify-content-center align-items-center">
          <div id="rejectDiv">
            <button className="btn btn-primary chooseBtn hvr-bob shadow" id="rejectBtn">
              <img src="cancel.png" alt="" id="cancelIcon" className="icon">
            </button>
          </div>
            <div id="cardDiv">
              <div className="card mx-2 restaurant shadow" style="width: 28rem;">
                {/*<!--  Carousel Here-->*/}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner card-img-top cardImgDiv">
                    <div className="carousel-item active">
                      <img className="d-block w-100 cardImg" src="https://blog.tubikstudio.com/wp-content/uploads/2019/12/asian-food-illustration-2.png" alt="First slide">
                    </div>
                      <div className="carousel-item">
                        <img className="d-block w-100 cardImg" src="https://blog.tubikstudio.com/wp-content/uploads/2019/12/mexican-food-illustration-tubikarts-2.png" alt="Second slide">
                    </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 cardImg" src="https://blog.tubikstudio.com/wp-content/uploads/2019/12/Italian-food-illustration-tubikarts-2.png" alt="Third slide">
                    </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
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
                        <div className="reviews">
                          { /*<!-- Panel one -->
                      <!-- Full-width slides/quotes -->*/}
                          <div className="mySlides">
                            <div className="reviewHolder">
                              <q>
                                I love you the more in that I believe you had liked me for my own sake and for nothing else
      </q>
                            </div>
                            <p className="author">- John Keats</p>
                          </div>

                          <div className="mySlides">
                            <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
                            <p className="author">- Ernest Hemingway</p>
                          </div>

                          <div className="mySlides">
                            <q>I have not failed. I've just found 10,000 ways that won't work.</q>
                            <p className="author">- Thomas A. Edison</p>
                          </div>

                          {/*<!-- Next/prev buttons -->*/}
                          <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                          <a className="next" onclick="plusSlides(1)">&#10095;</a>
                        </div>
                        {/*<!-- Dots/bullets/indicators -->*/}
                        <div className="dot-container">
                          <span className="dot" onclick="currentSlide(1)"></span>
                          <span className="dot" onclick="currentSlide(2)"></span>
                          <span className="dot" onclick="currentSlide(3)"></span>
                        </div>
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
                      <img src="tick.png" alt="" id="tickIcon" className="icon">
            </button>
          </div>
                  </div>
                </div>
              </div>
    );
};

export default PageDetails;

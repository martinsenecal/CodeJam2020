import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Results = () => {
  return (
    <div id="matchPageEnd">
      <div id="containerDivEnd">
        <h1 className="matchMsg">YOU FOUND A MATCH !</h1>
        <div className="winningCard">
          <div id="cardDiv">
            <div
              className="card mx-2 restaurant shadow hvr-pulse-win"
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
                <h5 className="card-title" id="winningTitle">
                  McDonald's
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

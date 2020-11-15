import React from 'react';
import '../../Landing.css';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

function MyVerticallyCenteredModal(props) {
  const logShit = () => {
    console.log('it worked');
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Start Food Hunting
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary">
            {' '}
            Copy Room ID to Clipboard{' '}
          </button>
        </div>
        {/* <!-- Filters --> */}
        <hr />
        <h5>Search Filters:</h5>
        <div id="filters">
          <div class="mb-5">
            <div class="range-heading">
              <h6>Price:</h6>
            </div>
            <div class="d-flex justify-content-around align-items-center">
              <button onClick={logShit()}>$</button>
              <button onClick={logShit()}>$$</button>
              <button onClick={logShit()}>$$$</button>
              <button onClick={logShit()}>$$$$</button>
            </div>
          </div>
          <div class="mb-5">
            <div class="range-heading">
              <h6>Distance:</h6>
            </div>
            <div class="range-wrap-km range-wrap">
              <input type="text"></input>
            </div>
          </div>
          <div class="mb-5">
            <div class="range-heading">
              <h6>Cuisine:</h6>
            </div>
            <div class="dropdown d-flex justify-content-center">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown-toggle"
                >
                  Cuisine
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Landing = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className="section">
      <div className="section">
        <div className="section">
          {/* <h1>Landing Page</h1>
          <p>Landing Page... Test for Now</p> */}

          <div
            className="modal fade"
            id="createModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Start Food Hunting
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* <!-- Copy ID button--> */}
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary">
                      {' '}
                      Copy Room ID to Clipboard{' '}
                    </button>
                  </div>
                  {/* <!-- Filters --> */}
                  <h5>Search Filters:</h5>
                  <div id="filters">
                    <div className="mb-3">
                      <div className="range-heading">
                        <h6>Price:</h6>
                      </div>
                      <div className="range-wrap-price range-wrap">
                        <input
                          type="range"
                          className="range-price range"
                          min="1"
                          max="4"
                        ></input>
                        <output className="bubble-price bubble ml-1"></output>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="range-heading">
                        <h6>Distance:</h6>
                      </div>
                      <div className="range-wrap-km range-wrap">
                        <input
                          type="range"
                          className="range-km range"
                          min="0"
                          max="10"
                        ></input>
                        <output className="bubble-km bubble ml-1"></output>
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="range-heading">
                        <h6>Cuisine:</h6>
                      </div>
                      <div className="dropdown d-flex justify-content-center">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Select Cuisine
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Let's Hunt!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Join Room Modal--> */}
          <div
            className="modal fade"
            id="joinModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Start Food Hunting
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* <!-- Copy ID button--> */}
                  <div className="justify-content-between">
                    <form>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">
                          Enter a room ID
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="ROOM112"
                        ></input>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Let's Hunt!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Landing Page Markup Starts Here--> */}
          <div className="d-flex" id="landingPage">
            <div id="backgroundchange">
              <div className="backgroundimg" id="back1"></div>
              <div className="backgroundimg" id="back2"></div>
              <div className="backgroundimg" id="back3"></div>
              <div className="backgroundimg" id="back4"></div>
            </div>
            <div
              id="titleDiv"
              className="p-3 mb-5 rounded d-flex justify-content-center align-items-center flex-column"
            >
              <h1 id="title">Dinner Plans?</h1>
            </div>
            <div
              id="buttonContainer"
              className="shadow-lg p-3 mb-5 rounded d-flex justify-content-center align-items-center flex-column"
            >
              <Button
                className="btn btn-primary landingBtn grow"
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                Launch vertically centered modal
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <button
                type="button"
                className="btn btn-primary landingBtn grow"
                id="join"
                data-toggle="modal"
                data-target="#joinModal"
              >
                <span className="buttonText">Join Room</span>
              </button>
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

          {/* <!-- JS Functions--> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;

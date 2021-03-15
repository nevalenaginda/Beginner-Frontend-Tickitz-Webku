import React, { Component } from "react";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";
import axios from "axios";
import "./assets/StyleHome.css";
import ImageBanner1 from "./assets/img/image-1.png";
import ImageBanner2 from "./assets/img/image-2.png";
import ImageBanner3 from "./assets/img/image-3.png";
import { Link } from "react-router-dom";

const { REACT_APP_API_TICKET } = process.env;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  componentDidMount() {
    axios
      .get(REACT_APP_API_TICKET + "/movie")
      .then((res) => {
        const image = res.data.data;
        this.setState({ image });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { image } = this.state;
    return (
      <>
        <CustomNavBar />
        <header>
          <div className="container mt-5">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-6">
                <p className="mt-1 mt-md-3 mt-lg-5">
                  Nearest Cinema, Newest Movie,
                </p>
                {/* <h1>{image.data.data[1].image}</h1> */}
                <h1>Find out now!</h1>
              </div>
              <div className="col-12 col-sm-12 mt-5 mt-lg-0 col-lg-6 d-flex justify-content-center container-card">
                {/* <CustomCardShowingMovies SrcImg={ImageBanner1} /> */}
                <div className="card-movie">
                  <img src={ImageBanner1} className="card-img-top" alt="ok" />
                </div>
                <div className="card-movie">
                  <img src={ImageBanner2} className="card-img-top" alt="ok" />
                </div>
                <div className="card-movie">
                  <img src={ImageBanner3} className="card-img-top" alt="ok" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Showing Movie --> */}
        <section className="showing-movie bg4">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h1 className="now-showing">Now Showing</h1>
                <a href="/">view all</a>
              </div>
            </div>
            <div className="row mt-5 pl-2 pl-lg-0 overflow-auto">
              <div className="col-12 px-0 now-showing-movie">
                {image.map((item) => (
                  <div key={item.id_movie} className="card">
                    <div className="image-card">
                      <img src={item.image} alt={item.image} />
                    </div>
                  </div>
                ))}

                {/* <div className="card">
                  <div className="image-card">
                    <img src={ImageBanner1} />
                  </div>
                </div>
                <div className="card">
                  <div className="image-card">
                    <img src={ImageBanner1} />
                  </div>
                </div>
                <div className="card">
                  <div className="image-card">
                    <img src={ImageBanner1} />
                  </div>
                </div>
                <div className="card">
                  <div className="image-card">
                    <img src={ImageBanner1} />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Showing Movie --> */}

        {/* <!-- Upcoming Movies --> */}
        <section className="upcoming-movies">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h1 className="upcoming">Upcoming Movies</h1>
                <a href="/">view all</a>
              </div>
            </div>
            <div className="mt-4 container-btn-month">
              <button href="/" className="btn btn-month main">
                September
              </button>
              <button href="#" className="btn btn-month">
                October
              </button>
              <button href="#" className="btn btn-month">
                November
              </button>
              <button href="#" className="btn btn-month">
                Desember
              </button>
              <button href="#" className="btn btn-month">
                January
              </button>
              <button href="#" className="btn btn-month">
                February
              </button>
              <button href="#" className="btn btn-month">
                March
              </button>
              <button href="#" className="btn btn-month">
                April
              </button>
              <button href="#" className="btn btn-month">
                May
              </button>
            </div>
            <div className="row pl-2 pl-lg-0 overflow-auto">
              <div className="col-12 px-0 container-upcoming-movie">
                {image.map((item) => (
                  <div key={item.id_movie} className="card">
                    <div className="card-upcoming-movie">
                      <img src={item.image} alt={item.image} />
                      <p
                        className="card-title mb-3"
                        style={{ ["font-size"]: "13px" }}
                      >
                        {item.movie_title}
                      </p>
                      <span
                        className="card-text"
                        style={{ ["font-size"]: "11px" }}
                      >
                        {item.category}
                      </span>
                      <Link
                        to={`/detail/${item.id_movie}`}
                        className="btn btn-details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}

                {/* Jadwal */}

                {/* <div key={item.id_movie} className="card">
                    <div className="image-card">
                      <img src={item.image} alt={item.image} />
                    </div>
                  </div> */}
                {/* <div className="card">
                  <div className="card-upcoming-movie">
                    <img src={ImageBanner2} />
                    <p>The Witches</p>
                    <span>Adventure, Comedy</span>
                    <a href="#" className="btn btn-details">
                      Details
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-upcoming-movie">
                    <img src={ImageBanner2} />
                    <p>Tenet</p>
                    <span>Action, Sci-Fi</span>
                    <a href="#" className="btn btn-details">
                      Details
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-upcoming-movie">
                    <img src={ImageBanner2} />
                    <p>Black Widow</p>
                    <span>Action, Adventure, Sci-Fi</span>
                    <a href="#" className="btn btn-details">
                      Details
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-upcoming-movie">
                    <img src={ImageBanner2} />
                    <p>The Witches</p>
                    <span>Adventure, Comedy</span>
                    <a href="#" className="btn btn-details">
                      Details
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Upcoming Movies --> */}

        {/* Jumbotron Join Member */}
        <section className="join">
          <div className="container">
            <div className="jumbotron bg-white">
              <p>Be the vanguard of the</p>
              <h1>Moviegoers</h1>
              <form className="form-inline join-now">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your email"
                />
                <button className="btn btn-join-now" type="submit">
                  Join now
                </button>
              </form>
              <p className="text-join-now">
                By joining you as a Tickitz member,
                <br />
                we will always send you the <br /> latest updates via email .
              </p>
            </div>
          </div>
        </section>
        <CustomFooter />
      </>
    );
  }
}

export default Home;

import React, { Component } from "react";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";
import axios from "axios";
import "./assets/StyleHome.css";
import ImageBanner1 from "./assets/img/image-1.png";
import ImageBanner2 from "./assets/img/image-2.png";
import ImageBanner3 from "./assets/img/image-3.png";
import { Link } from "react-router-dom";
import CardMovie from "../../../components/CardMovie";

const { REACT_APP_API_TICKET } = process.env;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  onChangeMovieName = (inputMovieName) => {
    console.log("data di parent : ", inputMovieName);
    const movieName = inputMovieName;
    if (movieName) {
      axios
        .get(
          `${REACT_APP_API_TICKET}/movie?search-by=movie_title&item=${movieName}`
        )
        .then((res) => {
          const image = res.data.data;
          this.setState({ image });
          this.props.history.push(`/?search-by=movie_title&item=${movieName}`);
        })
        .catch((err) => {
          console.log(err);
          this.setState({ image: [] });
        });
    } else {
      axios
        .get(`${REACT_APP_API_TICKET}/movie`)
        .then((res) => {
          const image = res.data.data;
          this.setState({ image });
          this.props.history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  componentDidMount() {
    axios
      .get(`${REACT_APP_API_TICKET}/movie`)
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
    console.log(this.props);
    return (
      <>
        <CustomNavBar
          login={localStorage.getItem("token")}
          onChange={(inputMovieName) => this.onChangeMovieName(inputMovieName)}
        />
        <header>
          <div className="container mt-5">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-6">
                <p className="mt-1 mt-md-3 mt-lg-5">
                  Nearest Cinema, Newest Movie,
                </p>

                <h1>Find out now!</h1>
              </div>
              <div className="col-12 col-sm-12 mt-5 mt-lg-0 col-lg-6 d-flex justify-content-center container-card">
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
                  <CardMovie id={item.id_movie} posterMovie={item.image} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <div key={item.id_movie} className="card">
                    <div className="image-card">
                      <img src={item.image} alt={item.image} />
                    </div>
                  </div> */}
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
              <button href="/" className="btn btn-month">
                October
              </button>
              <button href="/" className="btn btn-month">
                November
              </button>
              <button href="/" className="btn btn-month">
                Desember
              </button>
              <button href="/" className="btn btn-month">
                January
              </button>
              <button href="/" className="btn btn-month">
                February
              </button>
              <button href="/" className="btn btn-month">
                March
              </button>
              <button href="/" className="btn btn-month">
                April
              </button>
              <button href="/" className="btn btn-month">
                May
              </button>
            </div>
            <div className="row pl-2 pl-lg-0 overflow-auto pt-5 pb-5">
              <div className="col-12 px-0 container-upcoming-movie">
                {image.map((item) => (
                  <div key={item.id_movie} className="card">
                    <div className="card-upcoming-movie">
                      <img src={item.image} alt={item.image} />
                      <p
                        className="card-title mb-3"
                        // eslint-disable-next-line
                        style={{ ["font-size"]: "13px" }}
                      >
                        {item.movie_title}
                      </p>
                      <span
                        className="card-text"
                        // eslint-disable-next-line
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
                <div className="row">
                  <div className="col-sm-12 col-md-7 mt-3">
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Type your email"
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <button
                      className="btn mt-3 btn-join-now w-100"
                      type="submit"
                    >
                      Join now
                    </button>
                  </div>
                </div>
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

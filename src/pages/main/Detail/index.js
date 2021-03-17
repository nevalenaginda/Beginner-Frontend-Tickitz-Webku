import React, { Component } from "react";
import "./assets/StyleDetail.css";
import axios from "axios";
import { Link } from "react-router-dom";
import alertCustom from "../../../components/Alerts";
import Moment from "moment";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";
import Cinema21Image from "./assets/img/CineOne21-cinema.png";
import EbvIdImage from "./assets/img/ebv.id-cinema.png";
import HiflixImage from "./assets/img/hiflix-cinema.png";

const { REACT_APP_API_TICKET } = process.env;

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }
  componentDidMount() {
    const id_movie = this.props.match.params.id.toString();
    axios
      .get(REACT_APP_API_TICKET + "movie/" + id_movie)
      .then((res) => {
        // console.log(res);
        const movie = res.data.data;
        this.setState({ movie });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props);
    const { movie } = this.state;
    const changeTime = (time) => {
      return Moment(time).format("MMMM DD, YYYY");
    };

    const btnDelete = (data) => {
      axios
        .delete(REACT_APP_API_TICKET + "movie/" + data)
        .then((res) => {
          this.props.history.push("/");
          alertCustom("success", "Succes delete movie");
        })
        .catch((err) => {
          console.log(err);
          alertCustom("error", err.data.message);
        });
    };

    return (
      <div>
        <CustomNavBar login={localStorage.getItem("token")} />
        <header>
          {movie.length > 0 ? (
            <div className="container mt-5">
              <div className="row mt-5">
                <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
                  <div className="card movie-header">
                    <img src={movie[0].image} alt="Movie Header" />
                  </div>
                </div>
                <div className="col-12 movie col-lg-7 mt-5 mt-lg-0 pl-0">
                  <div className="text-center text-lg-left mb-3">
                    <h3 className=" mt-2 text-dark f-weight mb-3">
                      {movie[0].movie_title}
                    </h3>

                    <p className="f-lg mt-2 mb-4">{movie[0].category} </p>
                  </div>
                  <div className="row flex-row flex-lg-column ml-auto ml-lg-n3 movie-detail">
                    <div className="col-6 col-lg-12">
                      <h5 className="color8">Release Date</h5>
                      <h4 className="mb-4">
                        {changeTime(movie[0].release_date)}{" "}
                      </h4>
                    </div>
                    <div className="col-6 col-lg-12">
                      <h5 className="color8">Duration</h5>
                      <h4 className="mb-4">{movie[0].duration_movie}</h4>
                    </div>
                    <div className="col-6 col-lg-12">
                      <h5 className="color8">Directed by</h5>
                      <h4 className="mb-4">{movie[0].directed_by} </h4>
                    </div>
                    <div className="col-6 col-lg-12">
                      <h5 className="color8">Casts</h5>
                      <h4 className="mb-4">{movie[0].casts}</h4>
                    </div>
                    <div className="col-12 d-flex flex-column f-lg c-black">
                      <hr className="c-black f-weight" />
                    </div>
                    <div className="col-12">
                      <h4 className="f-weight mt-4 mb-4">Synopsis</h4>
                      <p className="f-sm">{movie[0].synopsis}</p>
                    </div>
                    <div className="col-12 mt-5 text-center">
                      <Link
                        onClick={() =>
                          btnDelete(this.props.match.params.id.toString())
                        }
                        className="btn btn-input col-5 mr-3"
                      >
                        Delete Movie
                      </Link>
                      <Link
                        to={`/update/${this.props.match.params.id}`}
                        className="btn btn-input col-5 w-30 mr-3"
                      >
                        Update
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container mt-5">
              <div className="row mt-5">
                <div className="col mt-5">
                  <h1 className="text-center f-weight">Server Error 500</h1>
                </div>
              </div>
            </div>
          )}
        </header>

        <section className="cinema bg4 pt-5">
          <div className="date">
            <div className="container">
              <div className="row mb-2 mb-md-4">
                <div className="col-12">
                  <h2 className="text-center">Showtimes and Tickets</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <form className="form-inline d-flex justify-content-center">
                    <input type="date" className="form-control" />
                    <select className="custom-select-admin">
                      <option value="Jakarta">Jakarta</option>
                      <option value="Lampung">Lampung</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row container-cinema justify-content-center mb-5">
              <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
                <div className="card cinema-card">
                  <div className="row flex-column flex-sm-row pt-3">
                    <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                      <img src={EbvIdImage} alt="Ebv" className="ebv" />
                    </div>
                    <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                      <h2>ebv.id</h2>
                      <p>
                        Whatever street No. 12, South{" "}
                        <br className="d-block d-sm-none" /> Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="mx-auto" />
                  <div className="row">
                    <div className="col">
                      <nav className="nav pl-3 flex-row">
                        <p className="nav-link" href="/">
                          08:30am
                        </p>
                        <p className="nav-link" href="/">
                          10:00am
                        </p>
                        <p className="nav-link empty" href="/">
                          12:00pm
                        </p>
                        <p className="nav-link" href="/">
                          02:00pm
                        </p>
                        <p className="nav-link" href="/">
                          04:00pm
                        </p>
                        <p className="nav-link empty" href="/">
                          06:00pm
                        </p>
                        <p className="nav-link" href="/">
                          08:00pm
                        </p>
                      </nav>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col px-5 d-flex justify-content-between align-items-center">
                      <h3>Price</h3>
                      <p className="price">$10.00/seat</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                      <button type="button" className="btn book-now">
                        Book now
                      </button>
                      <a href="/" className="add-cart">
                        Add Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
                <div className="card cinema-card d-none d-sm-block">
                  <div className="row flex-column flex-sm-row pt-3">
                    <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                      <img
                        src={Cinema21Image}
                        alt="Cineone"
                        className="cineone"
                      />
                    </div>
                    <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                      <h2>CineOne21</h2>
                      <p>
                        Downcare street No. 21, East{" "}
                        <br className="d-block d-sm-none" /> Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="mx-auto" />
                  <div className="row">
                    <div className="col">
                      <nav className="nav pl-3 flex-row">
                        <p className="nav-link empty" href="/">
                          08:30am
                        </p>
                        <p className="nav-link" href="/">
                          10:00am
                        </p>
                        <p className="nav-link" href="/">
                          12:00pm
                        </p>
                        <p className="nav-link" href="/">
                          02:00pm
                        </p>
                        <p className="nav-link" href="/">
                          04:00pm
                        </p>
                        <p className="nav-link" href="/">
                          06:00pm
                        </p>
                        <p className="nav-link empty" href="/">
                          08:00pm
                        </p>
                      </nav>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col px-5 d-flex justify-content-between align-items-center">
                      <h3>Price</h3>
                      <p className="price">$10.00/seat</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                      <button type="button" className="btn book-now">
                        Book now
                      </button>
                      <a href="/" className="add-cart">
                        Add Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
                <div className="card cinema-card d-none d-sm-block">
                  <div className="row flex-column flex-sm-row pt-3">
                    <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                      <img src={HiflixImage} alt="Hiflix" className="hiflix" />
                    </div>
                    <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                      <h2>hiflix Cinema</h2>
                      <p>
                        Colonel street No. 2, East{" "}
                        <br className="d-block d-sm-none" /> Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="mx-auto" />
                  <div className="row">
                    <div className="col">
                      <nav className="nav pl-3 flex-row">
                        <p className="nav-link" href="/">
                          08:30am
                        </p>
                        <p className="nav-link" href="/">
                          10:00am
                        </p>
                        <p className="nav-link" href="/">
                          12:00pm
                        </p>
                        <p className="nav-link empty" href="/">
                          02:00pm
                        </p>
                        <p className="nav-link" href="/">
                          04:00pm
                        </p>
                        <p className="nav-link empty" href="/">
                          06:00pm
                        </p>
                        <p className="nav-link" href="/">
                          08:00pm
                        </p>
                      </nav>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col px-5 d-flex justify-content-between align-items-center">
                      <h3>Price</h3>
                      <p className="price">$10.00/seat</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                      <button type="button" className="btn book-now">
                        Book now
                      </button>
                      <a href="/" className="add-cart">
                        Add Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <nav>
                  <ul className="pagination-custom">
                    <li>
                      <a href="/" className="page-active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="/">2</a>
                    </li>
                    <li>
                      <a href="/">3</a>
                    </li>
                    <li>
                      <a href="/">4</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <CustomFooter />
      </div>
    );
  }
}

export default Detail;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleResult } from '../../store/actions/index';

class SingleResult extends Component {
  componentDidMount() {
    this.props.fetchSingleResult(this.props.match.params.id);
  }
  render() {
    return (
      <div className="container text-dark  text-center mt-3  p-4">
        {this.props.movieDetails ? (
          <div className="col text">
            <div className="card p-4">
              <p>IMDB Rating: {this.props.movieDetails.imdbRating}/10</p>
              <img
                className="card-img mx-auto"
                src={this.props.movieDetails.Poster}
                alt="unavailable"
                style={{ width: '200px' }}
              />

              <p className="card-text">{this.props.movieDetails.Runtime}</p>
              <div className="card-body">
                <h5 className="card-title">{this.props.movieDetails.Title}</h5>
                <p className="card-text">
                  Plot- {this.props.movieDetails.Plot}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Released- {this.props.movieDetails.Released}
                </li>
                <li className="list-group-item">
                  Genre- {this.props.movieDetails.Genre}
                </li>
                <li className="list-group-item">
                  Director- {this.props.movieDetails.Director}
                </li>
                <li className="list-group-item">
                  Writer- {this.props.movieDetails.Writer}
                </li>
                <li className="list-group-item">
                  Actors- {this.props.movieDetails.Actors}
                </li>
                <li className="list-group-item">
                  Language- {this.props.movieDetails.Language}
                </li>
                <li className="list-group-item">
                  Country- {this.props.movieDetails.Country}
                </li>
                <li className="list-group-item">
                  Awards- {this.props.movieDetails.Awards}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          'No Movie Yert'
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { movieDetails: state.movieinfo.movieDetails };
};
export default connect(mapStateToProps, { fetchSingleResult })(SingleResult);

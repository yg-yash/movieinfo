import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../UI/Loading';

class Results extends React.Component {
  state = {
    responseText: '',
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.searchResults) {
      if (
        nextProps.searchResults.Response !== this.props.searchResults.Response
      ) {
        this.setState({ responseText: 'No Result Found' });
      }
      return true;
    }
    return false;
  }

  renderList = () => {
    return (
      <div className="container mt-3 row p-4">
        {this.props.searchResults &&
        this.props.searchResults.Response === 'True'
          ? this.props.searchResults.Search.map((el) => {
              return (
                <div className="col-sm text-dark m-4 " key={el.imdbID}>
                  <div
                    className="card"
                    style={{ width: '250px', height: '450px' }}
                  >
                    <div className="card-body p-3">
                      <img
                        src={el.Poster}
                        alt="unavailable"
                        style={{ width: '200px' }}
                      />
                      <p className="font-weight-bold">{el.Title}</p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Year {el.Year}</cite>
                      </footer>
                      <Link
                        className="btn btn-primary"
                        to={`/singleResult/${el.imdbID}`}
                      >
                        More Info
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : this.state.responseText}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.props.loading ? <Loading /> : this.renderList()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.movieinfo.searchResults,
    loading: state.movieinfo.loading,
  };
};

export default connect(mapStateToProps)(Results);

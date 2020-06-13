import React, { Component } from "react";
import { fetchResults } from "../../actions/index";
import { connect } from "react-redux";
import Results from "./Results";

class SearchPage extends Component {
  state = {
    search: ""
  };
  onInputChange = e => {
    this.setState({ search: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchResults(this.state.search);
  };
  render() {
    return (
      <div className="container text-center mt-5">
        <div className="card  p-3 bg-danger text-white">
          <div className="card-title display-4">
            Search Movies,Tv Shows And Many More
          </div>
          <div className="card-body">
            <form
              className="form-inline active-pink-3 active-pink-4"
              onSubmit={this.onFormSubmit}
            >
              <input
                className="form-control form-control-sm w-100"
                type="text"
                onChange={this.onInputChange}
                value={this.state.search}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-block btn-primary btn-outline-secondary mt-3 text-dark">
                <i className="fa fa-search" aria-hidden="true"></i>Search
              </button>
            </form>
          </div>
        </div>
        <Results />
      </div>
    );
  }
}

export default connect(null, { fetchResults })(SearchPage);

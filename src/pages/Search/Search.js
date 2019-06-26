import React from "react";
import { DelayInput } from "react-delay-input";
import { connect } from "react-redux";

import OrganisationsList from "../../components/OrganisationsList";

import { fetchDataByQuery } from "../../actions/organisations";
import "./Search.scss";


class Search extends React.Component {
  componentDidMount() {
    this.props.fetchDataByQuery();
  }
  render() {
    return (
      <div>
        <header >
          <img src={logo}/>
          <div className="search-container">
            <DelayInput
              className="form-control "
              minLength={2}
              delayTimeout={500}
              onChange={event =>
                this.props.fetchDataByQuery(event.target.value)
              }
            />
          </div>
        </header>
        <OrganisationsList organisations={this.props.organisations} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  organisations: state.organisations.data
});

const mapDispatchToProps = {
  fetchDataByQuery
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

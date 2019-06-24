import React from "react";
import { DelayInput } from "react-delay-input";
import { connect } from "react-redux";

import OrganisationsList from "../../components/OrganisationsList";

import { fetchDataByQuery } from "../../actions/organisations";
import './Search.scss'

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchDataByQuery();
  }
  render() {
    return (
      <div>
        <div className='search-container'>
          <DelayInput
            className="form-control mb-4"
            minLength={2}
            delayTimeout={500}
            onChange={event => this.props.fetchDataByQuery(event.target.value)}
          />
        <OrganisationsList organisations={this.props.organisations} />
        </div>
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

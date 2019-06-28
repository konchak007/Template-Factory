import React from "react";
import { DelayInput } from "react-delay-input";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import githubIcon from "../../images/github.png";

import OrganisationsList from "../../components/OrganisationsList";

import { fetchDataByQuery } from "../../actions/organisations";
import "./Search.scss";

class Search extends React.Component {
  componentDidMount() {
    const { fetchDataByQuery } = this.props;
    fetchDataByQuery();
  }

  render() {
    const { fetchDataByQuery, organisations } = this.props;
    return (
      <div>
        <header>
          <div className="search-container">
            <img src={githubIcon} alt="logo" />
            <DelayInput
              className="form-control "
              minLength={2}
              delayTimeout={500}
              onChange={event => fetchDataByQuery(event.target.value)}
            />
          </div>
        </header>
        <OrganisationsList organisations={organisations} />
      </div>
    );
  }
}

Search.propTypes = {
  fetchDataByQuery: PropTypes.func.isRequired,
  organisations: PropTypes.array.isRequired
};

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

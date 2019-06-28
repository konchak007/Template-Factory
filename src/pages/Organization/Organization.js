import React from "react";
import { connect } from "react-redux";

import { fetchOrganisationByName } from "../../actions/organisations";
import OrganisationInfo from "../../components/OrganisationInfo";
import Spinner from "../../components/Spinner";

class Organization extends React.Component {
  componentDidMount() {
    const { fetchOrganisationByName, name } = this.props;
    fetchOrganisationByName(name);
  }
  componentWillUnmount() {}
  render() {
    const { isLoading, data } = this.props;

    if (isLoading) {
      return <Spinner />;
    }
    if (!isLoading && !data) {
      return "404";
    }
    return <OrganisationInfo {...data} />;
  }
}

const mapStateToProps = (state, props) => ({
  ...state.organisations.currentOrganisation,
  name: props.match.params.name
});

const mapDispatchToProps = {
  fetchOrganisationByName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Organization);

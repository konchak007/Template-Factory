import React from "react";
import {connect } from 'react-redux'

import { fetchOrganisationByName } from '../../actions/organisations';
import  OrganisationInfo from '../../components/OrganisationInfo'

class Organization extends React.Component {
  componentDidMount() {
    const { fetchOrganisationByName, name } = this.props;

    fetchOrganisationByName(name);
  }
  render() {
    const { isLoading, data } = this.props;

    if (isLoading) {
      return 'Loading...';
    }
    if (!isLoading && !data) {
      return '404';
    }
console.log(data)
    return <OrganisationInfo {...data} />;
  }
}

const mapStateToProps = (state, props) =>({
  ...state.organisations.currentOrganisation,
  name: props.match.params.name
})

const mapDispatchToProps = {
  fetchOrganisationByName
}

export default connect(mapStateToProps,  mapDispatchToProps)(Organization);

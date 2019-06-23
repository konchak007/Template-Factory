import React from 'react';
import {DelayInput} from 'react-delay-input';
import { connect } from 'react-redux';

import OrganisationsList from '../../components/OrganisationsList';

import {fetchDataByQuery} from '../../actions/organisations'

const Search = (props)=> (
  <div>
    <DelayInput
      minLength={2}
      delayTimeout={500}
      onChange={event => props.fetchDataByQuery(event.target.value)}
    />
    <OrganisationsList organisations={props.organisations} />
  </div>
)

const mapStateToProps = state => ({
  organisations: state.organisations.data
})

const mapDispatchToProps = {
  fetchDataByQuery
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

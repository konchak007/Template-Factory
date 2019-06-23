import React from 'react'

const OrganizationList= (props) => props.organisations.map(el => (
  <div key={el.id}>
    {el.login}
  </div>)
);

export default OrganizationList;

import React from "react";
import OrganizationCard from "./OrganizationCard/OrganizationCard";

const OrganizationList = props =>
  props.organisations.map(({ login, id, avatar_url }) => (
    <OrganizationCard key={id} id={id} name={login} avatar={avatar_url} />
  ));

export default OrganizationList;

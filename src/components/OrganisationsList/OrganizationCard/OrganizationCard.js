import React from "react";
import { Link } from "react-router-dom";
import "./OrganisationCard.scss";

const OrganizationCard = ({ name, avatar }) => {
  return (
    <Link to={`/organisation/${name}`}>
      <div className="organisation-card">
        <img src={avatar} />
        {name}
      </div>
    </Link>
  );
};
export default OrganizationCard;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./OrganisationCard.scss";

const OrganizationCard = ({ name, avatar }) => (
  <Link to={`/organisation/${name}`}>
    <div className="organisation-card ">
      <img src={avatar} alt="avatar" />
      {name}
    </div>
  </Link>
);

OrganizationCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default OrganizationCard;

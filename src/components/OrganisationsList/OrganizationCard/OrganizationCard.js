import React from "react";
import { Link } from "react-router-dom";

const OrganizationCard = ({  name, avatar }) => {
  return (
    <Link to={`/organisation/${name}`}>
      <div>
        <img src={avatar} width="100px" height="100px" />
        {name}
      </div>
    </Link>
  );
};
export default OrganizationCard;

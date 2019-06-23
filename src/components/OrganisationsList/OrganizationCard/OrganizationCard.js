import React from "react";
import { Link } from 'react-router-dom';

const OrganizationCard = ({ id, name, avatar }) => {
  return (
    <Link to={`/organisation/${id}`}>
      <div>
        <img src={avatar} width="100px" height="100px" />
        {name}
      </div>
    </Link>
  );
};
export default OrganizationCard;

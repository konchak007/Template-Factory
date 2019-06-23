import React from "react";

const OrganizationCard = ({ id, name, avatar }) => {
  return (
    <div>
      <img src={avatar} width="100px" height="100px" />
      {name}
    </div>
  );
};
export default OrganizationCard;

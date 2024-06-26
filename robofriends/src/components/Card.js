import React from "react";

//Object destructing
const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadown-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="" />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default Card;

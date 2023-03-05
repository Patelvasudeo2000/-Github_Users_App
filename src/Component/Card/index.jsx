import React from "react";
import "./index.css";

const Card = ({ userName, profilePic, profileUrl }) => {
  return (
    <div>
      <div className="card">
        <img
          src={profilePic}
          alt="Profile Image"
          className="profileimage"
        />
        <h4>{userName}</h4>
        <a href={profileUrl} target="_blank" className="profilebtn">
          Visit Profile
        </a>
      </div>
    </div>
  );
};

export default Card;

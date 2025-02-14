import React from "react";
import "./userCard.css";

const UserCard = () => {
  const users = {
    profilePhoto: "https://media.gettyimages.com/id/175440771/photo/handsome-young-man-gesturing-thumbs-up-isolated.jpg?s=612x612&w=gi&k=20&c=rNDrj73bXAla605kVUdLvr2OkDNYhx8ITsk585iaeyI=",
    name: "Johnathan Doe",
    mail: "johndoe@gmail.com",
    phone: 2837401934,
    address: "John Doe's residence"
  };

  return (
    <div className="user-card">
      <img
        className="profile-photo"
        src={users.profilePhoto}
        alt="Profile"
      />
      <div className="user-info">
        <h2 className="user-name">{users.name}</h2>
        <p className="user-detail">{users.mail}</p>
        <p className="user-detail">{users.phone}</p>
        <p className="user-detail">{users.address}</p>
      </div>
    </div>
  );
};

export default UserCard;
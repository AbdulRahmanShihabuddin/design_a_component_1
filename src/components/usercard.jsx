import React from "react";

const Usercard = () => {
  const users = {
    profilePhoto:"https://media.gettyimages.com/id/175440771/photo/handsome-young-man-gesturing-thumbs-up-isolated.jpg?s=612x612&w=gi&k=20&c=rNDrj73bXAla605kVUdLvr2OkDNYhx8ITsk585iaeyI=",
    name:"Johnathan Doe",
    mail:"johndoe@gmail.com",
    phone:2837401934,
    address:"John Doe's residence"
  }
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={users.profilePhoto}
        alt="Profile"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{users.name}</h2>
        <p className="text-gray-600">{users.mail}</p>
        <p className="text-gray-600">{users.phone}</p>
        <p className="text-gray-600">{users.address}</p>
      </div>
    </div>
  );
};

export default Usercard;

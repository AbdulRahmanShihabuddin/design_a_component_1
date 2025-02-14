import React from "react";

const Usercard = ({ key }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={key.profilePhoto}
        alt="Profile"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{key.name}</h2>
        <p className="text-gray-600">{key.email}</p>
        <p className="text-gray-600">{key.phone}</p>
        <p className="text-gray-600">{key.address}</p>
      </div>
    </div>
  );
};

export default Usercard;

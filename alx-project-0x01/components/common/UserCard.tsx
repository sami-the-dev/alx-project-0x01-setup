import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({
  address,
  company,
  email,
  id,
  name,
  phone,
  username,
  website,
}) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-gray-50 p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <div className="mb-2">
        <p className="text-gray-800">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Website:</span> {website}
        </p>
      </div>
      <div className="mb-2">
        <p className="text-gray-800">
          <span className="font-semibold">Company:</span> {company?.name}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Address:</span> {address?.street},{" "}
          {address?.city}
        </p>
      </div>
      <div className="text-xs text-gray-400">ID: {id}</div>
    </div>
  );
};

export default UserCard;

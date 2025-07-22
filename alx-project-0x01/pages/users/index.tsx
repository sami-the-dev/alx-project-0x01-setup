import React from "react";

import Header from "@/components/layout/Header";

import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

type StaticProps = {
  users: UserProps[];
};
const Users: React.FC<StaticProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <p className="text-2xl font-semibold text-gray-700 mt-4 mx-2">
        Users Content
      </p>
      <div className="grid grid-cols-4 gap-4 mt-3">
        {users.map((user, index) => (
          <UserCard
            address={user.address}
            company={user.company}
            email={user.email}
            id={user.id}
            name={user.name}
            phone={user.phone}
            username={user.username}
            website={user.website}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

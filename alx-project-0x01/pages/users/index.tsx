import React, { useState } from "react";

import Header from "@/components/layout/Header";

import { UserFormData, UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

type StaticProps = {
  users: UserProps[];
};
const Users: React.FC<StaticProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserFormData>();

  const handleAddPost = (user: UserFormData) => {
    setUser({ ...user });
  };

  return (
    <div>
      <Header />
      <main>
        <div className="flex justify-between">
          <p className="text-2xl font-semibold text-gray-700 mt-4 mx-2">
            Users Content
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer shadow mt-4 mr-4 transition-colors duration-200"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>
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
      </main>
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
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

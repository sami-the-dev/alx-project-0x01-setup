import { UserFormData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onSubmit, onClose }) => {
  const [user, setUser] = useState<UserFormData>({
    id: 0,
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setUser((prevUsers) => ({ ...prevUsers, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-blue-500 opacity-50" />
      <div className="bg-white rounded-lg shadow-lg py-12 px-8 z-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-3 focus:border-0 focus:ring-blue-500"
              value={user?.name || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-3 focus:border-0 focus:ring-blue-500"
              value={user?.email || ""}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-sm text-gray-600 hover:text-white hover:bg-gray-500 focus:outline-none transition-colors duration-200 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="px-6 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

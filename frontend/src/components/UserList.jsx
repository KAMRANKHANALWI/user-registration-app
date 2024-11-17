import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const UserList = ({ users, onEdit, onDelete }) => {
  const totalUsers = users.length;

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Registered Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-2 font-medium">Name</th>
              <th className="px-4 py-2 font-medium">Email</th>
              <th className="px-4 py-2 font-medium">Date of Birth</th>
              <th className="px-4 py-2 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {new Date(user.dateOfBirth).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 justify-center flex space-x-4">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => onEdit(user)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => onDelete(user._id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td className="px-4 py-2 font-medium" colSpan="3">
                Total Users
              </td>
              <td className="px-4 py-2 text-right font-medium">{totalUsers}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="text-gray-500 text-sm mt-4 ml-4">
        A list of all registered users in the system.
      </p>
    </div>
  );
};

export default UserList;


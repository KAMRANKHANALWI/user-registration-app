import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Modal from "../components/Modal";
import UserForm from "../components/UserForm";
import Navbar from "../components/Navbar";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    setUsers(response.data);
  };

  const handleAddOrUpdate = async (user) => {
    if (user._id) {
      await axios.put(`http://localhost:5000/api/users/${user._id}`, user);
    } else {
      await axios.post("http://localhost:5000/api/users", user);
    }
    fetchUsers();
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar onAddUser={() => setIsModalOpen(true)} />

      {/* Page Content */}
      <div className="container mx-auto p-4 pt-20">
        <UserList
          users={users}
          onEdit={(user) => {
            setEditingUser(user);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <UserForm onSubmit={handleAddOrUpdate} editingUser={editingUser} />
        </Modal>
      </div>
    </div>
  );
};

export default Home;

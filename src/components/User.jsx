import React, { useState } from 'react';
import { Eye, Trash2, Bell, Headphones, User, Plus } from 'lucide-react';
import AddUserModal from './AddUserModal';

export default function UserManagementPage({ onNavigateToProfile }) {
  const [users, setUsers] = useState([
    { id: 1, name: 'Dave Richards', email: 'dave@mail.com', contact: '+1 234-567-8900' },
    { id: 2, name: 'Abhishek Hari', email: 'hari@mail.com', contact: '+1 234-567-8901' },
    { id: 3, name: 'Nishta Gupta', email: 'nishta@mail.com', contact: '+1 234-567-8902' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleView = (id) => {
    alert(`Viewing user ${id}`);
  };

  const handleAddUser = (userData) => {
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const newUser = {
      id: newId,
      name: userData.name,
      email: userData.email,
      contact: userData.contact
    };
    setUsers([...users, newUser]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="w-full max-w-[1280px] mx-auto h-[72px] px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[84.67px] h-[44.58px] border-[2.7px] border-black flex flex-col items-center justify-center">
              <div className="text-base font-bold text-black leading-tight">LOGO</div>
              <div className="text-[10px] text-black leading-tight">EST 2005</div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-gray-900">
              <Headphones size={22} />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Bell size={22} />
            </button>
            <button className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Table Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900 leading-tight">Users</h1>
            <button
              onClick={openModal}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
            >
              <Plus size={18} />
              Add user
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Sr. No
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    User name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    E-mail
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.contact}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => handleView(user.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add User Modal */}
      <AddUserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddUser={handleAddUser}
        onNavigateToProfile={onNavigateToProfile}
      />
    </div>
  );
}
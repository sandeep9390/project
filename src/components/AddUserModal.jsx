import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AddUserModal({ isOpen, onClose, onAddUser, onNavigateToProfile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.contact) {
      onAddUser(formData);
      setFormData({ name: '', email: '', contact: '' });
      onClose();
      // Navigate to My Profile page after adding user
      if (onNavigateToProfile) {
        onNavigateToProfile();
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', contact: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50" style={{ opacity: 1 }}>
      <div className="bg-white rounded-lg shadow-xl mr-8 flex flex-col" style={{ width: '623px', height: '720px', opacity: 1 }}>
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 leading-tight">Add User</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-4 flex-1 flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name of the user
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Type here"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Email and Contact Row */}
              <div className="grid grid-cols-2 gap-4" style={{ gap: '10px' }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 mt-8 pt-6" style={{ gap: '10px' }}>
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors border border-gray-200"
                style={{ minWidth: '100px' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm"
                style={{ minWidth: '100px' }}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

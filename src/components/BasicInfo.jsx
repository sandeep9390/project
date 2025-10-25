import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

export default function BasicInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Dave',
    lastName: 'Richards',
    email: 'dave@mail.com',
    yearOfBirth: '',
    gender: '',
    phoneNumber: '8332883854',
    alternatePhone: '',
    address: '',
    pincode: '',
    domicileState: '',
    domicileCountry: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-0">
        <h2 className="text-base font-medium text-gray-800">Basic Details</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50/80 p-1.5 rounded-md"
        >
          <Edit3 size={16} />
        </button>
      </div>

      {/* Form */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-y-3">
          {/* First Row: First Name, Last Name, Email ID */}
          <div className="grid grid-cols-3 gap-x-4">
            {/* First Name */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="e.g. John"
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="e.g. Doe"
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. mrnobody@mail.com"
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>

          {/* Second Row: Year of Birth, Gender, Phone Number, Alternate Phone */}
          <div className="grid grid-cols-4 gap-x-4">
            {/* Year of Birth */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Year of birth
              </label>
              <div className="relative">
                <select
                  name="yearOfBirth"
                  value={formData.yearOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500 appearance-none cursor-pointer"
                >
                  <option value="">YYYY</option>
                  {Array.from({ length: 50 }, (_, i) => 2024 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Gender
              </label>
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500 appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Phone number
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-2 border border-r-0 rounded-l-md bg-gray-50 border-gray-200">
                  <span className="text-sm mr-1">🇮🇳</span>
                  <select
                    disabled={!isEditing}
                    className="bg-transparent border-none outline-none text-sm text-gray-800 appearance-none cursor-pointer"
                  >
                    <option value="+91">+91</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-r-md text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>

            {/* Alternate Phone */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Alternate Phone no
              </label>
              <input
                type="tel"
                name="alternatePhone"
                value={formData.alternatePhone}
                onChange={handleInputChange}
                placeholder="e.g. 9876543210"
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>

          {/* Third Row: Address, Pincode, Domicile State */}
          <div className="grid grid-cols-3 gap-x-4">
            {/* Address */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter here"
                rows={3}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500 resize-none"
              />
            </div>

            {/* Pincode and Domicile Country (stacked) */}
            <div className="flex flex-col gap-y-3">
              {/* Pincode */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Enter here"
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              {/* Domicile Country */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Domicile country
                </label>
                <div className="relative">
                  <select
                    name="domicileCountry"
                    value={formData.domicileCountry}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500 appearance-none cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Domicile State */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Domicile state
              </label>
              <div className="relative">
                <select
                  name="domicileState"
                  value={formData.domicileState}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500 appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                  <option value="Florida">Florida</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {isEditing && (
          <div className="flex justify-end gap-3 pt-4 mt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
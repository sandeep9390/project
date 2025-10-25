import React, { useState } from 'react';
import { Bell, Headphones, User, Copy, Edit3 } from 'lucide-react';
import BasicInfo from './BasicInfo';
import EducationSkills from './EducationSkills';
import Experience from './Experience';

export default function MyProfile({ onBackToUsers }) {
  const [activeTab, setActiveTab] = useState('basic-info');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'basic-info':
        return <BasicInfo />;
      case 'education-skills':
        return <EducationSkills />;
      case 'experience':
        return <Experience />;
      default:
        return <BasicInfo />;
    }
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
              <div className="text-[10px] text-black leading-tight">ESTD 2024</div>
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
        {/* Profile Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6">
          <div className="flex items-center gap-6">
            {/* Profile Picture */}
            <div className="w-24 h-24 rounded-full border-4 border-indigo-200 bg-indigo-100 flex items-center justify-center">
              <User size={40} className="text-indigo-600" />
            </div>
            
            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dave Richards</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <span>dave@mail.com</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <Copy size={16} />
                </button>
              </div>
              <p className="text-gray-600">+91 8332883854</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => handleTabChange('basic-info')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'basic-info'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Basic Info
            </button>
            <button
              onClick={() => handleTabChange('education-skills')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors relative ${
                activeTab === 'education-skills'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Education & skills
              <div className="absolute -top-1 right-2 w-2 h-2 bg-orange-500 rounded-full"></div>
            </button>
            <button
              onClick={() => handleTabChange('experience')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'experience'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

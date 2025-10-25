import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

export default function EducationSkills() {
  const [isEditing, setIsEditing] = useState(false);
  const [educationData, setEducationData] = useState({
    schoolCollege: '',
    highestDegree: '',
    course: '',
    yearOfCompletion: '',
    grade: ''
  });
  const [skillsData, setSkillsData] = useState({
    skills: '',
    projects: ''
  });

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setSkillsData(prev => ({
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
      {/* Education Details Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-gray-800">Education Details</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50/80 p-1.5 rounded-md"
          >
            <Edit3 size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-y-3">
          {/* School/College */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              School / College
            </label>
            <input
              type="text"
              name="schoolCollege"
              value={educationData.schoolCollege}
              onChange={handleEducationChange}
              placeholder="e.g. Lincoln College"
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>

          {/* Highest degree */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Highest degree or equivalent
            </label>
            <input
              type="text"
              name="highestDegree"
              value={educationData.highestDegree}
              onChange={handleEducationChange}
              placeholder="e.g. Bachelors in Technology"
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Course
            </label>
            <input
              type="text"
              name="course"
              value={educationData.course}
              onChange={handleEducationChange}
              placeholder="e.g. Computer science engineering"
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>

          {/* Year of completion and Grade */}
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Year of completion
              </label>
              <div className="relative">
                <select
                  name="yearOfCompletion"
                  value={educationData.yearOfCompletion}
                  onChange={handleEducationChange}
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

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Grade
              </label>
              <input
                type="text"
                name="grade"
                value={educationData.grade}
                onChange={handleEducationChange}
                placeholder="Enter here"
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Projects Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-gray-800">Skills & Projects</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50/80 p-1.5 rounded-md"
          >
            <Edit3 size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-y-4">
          {/* Skills */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Skills
            </label>
            <textarea
              name="skills"
              value={skillsData.skills}
              onChange={handleSkillsChange}
              placeholder="Enter here"
              rows={4}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500 resize-none"
            />
          </div>

          {/* Projects */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Projects
            </label>
            <textarea
              name="projects"
              value={skillsData.projects}
              onChange={handleSkillsChange}
              placeholder="Enter here"
              rows={4}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <div className="flex justify-end gap-3 pt-4 px-4 pb-4 border-t border-gray-200">
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
  );
}

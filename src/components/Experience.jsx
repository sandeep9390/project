import React, { useState } from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';

export default function Experience() {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      duration: '2020 - Present',
      description: 'Led development of web applications using React and Node.js. Managed a team of 5 developers and implemented agile methodologies.'
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: '2018 - 2020',
      description: 'Developed and maintained multiple web applications. Worked with modern JavaScript frameworks and cloud technologies.'
    }
  ]);

  const addExperience = () => {
    const newExperience = {
      id: experiences.length + 1,
      company: '',
      position: '',
      duration: '',
      description: ''
    };
    setExperiences([...experiences, newExperience]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const updateExperience = (id, field, value) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Work Experience</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <Edit3 size={20} />
        </button>
      </div>

      {/* Add Experience Button */}
      {isEditing && (
        <div className="mb-6">
          <button
            onClick={addExperience}
            className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 hover:text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-50"
          >
            <Plus size={16} />
            Add Experience
          </button>
        </div>
      )}

      {/* Experience List */}
      <div className="space-y-6">
        {experiences.map((experience) => (
          <div key={experience.id} className="border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={experience.company}
                    onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-md text-sm ${
                      isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position
                  </label>
                  <input
                    type="text"
                    value={experience.position}
                    onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-md text-sm ${
                      isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  value={experience.duration}
                  onChange={(e) => updateExperience(experience.id, 'duration', e.target.value)}
                  placeholder="e.g. 2020 - Present"
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border rounded-md text-sm ${
                    isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={experience.description}
                  onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
                  placeholder="Describe your role and responsibilities..."
                  rows={4}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border rounded-md text-sm ${
                    isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                  }`}
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => removeExperience(experience.id)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-red-600 hover:text-red-700 border border-red-200 rounded-md hover:bg-red-50"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

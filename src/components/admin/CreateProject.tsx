import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { BackButton } from '../BackButton';

export const CreateProject = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/admin/projects');
  };

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Create New Project</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Project Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium">Team</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Mobile Team</option>
                <option>Design Team</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Deadline</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="col-span-2 space-y-2">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows={4}
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/projects')}
            >
              Cancel
            </Button>
            <Button type="submit">
              Create Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
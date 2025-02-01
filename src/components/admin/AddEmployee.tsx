import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { BackButton } from '../BackButton';

export const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/admin/employees');
  };

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Add New Employee</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Department</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Development</option>
                <option>Sales</option>
                <option>HR</option>
                <option>Testing</option>
                <option>Marketing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Role</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Salary</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/employees')}
            >
              Cancel
            </Button>
            <Button type="submit">
              Add Employee
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
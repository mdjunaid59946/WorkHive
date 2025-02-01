import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Users, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { BackButton } from '../BackButton';

const departments = ['All', 'Development', 'Sales', 'HR', 'Testing', 'Marketing'];

const mockEmployees = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Senior Developer',
    department: 'Development',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Sales Manager',
    department: 'Sales',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  // Add more mock employees...
];

export const EmployeeList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredEmployees = mockEmployees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Directory</h1>
        <Button onClick={() => navigate('/admin/employees/add')}>
          <Users className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <select
            className="pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map(employee => (
          <div
            key={employee.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/admin/employees/${employee.id}`)}
          >
            <div className="flex items-center space-x-4">
              <img
                src={employee.image}
                alt={employee.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{employee.name}</h3>
                <p className="text-gray-600">{employee.role}</p>
                <p className="text-sm text-gray-500">{employee.department}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
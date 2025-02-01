import React from 'react';
import { useParams } from 'react-router-dom';
import { Mail, Phone, Calendar, Building2, Users, Briefcase } from 'lucide-react';
import { BackButton } from '../BackButton';

const mockEmployee = {
  id: 1,
  name: 'John Doe',
  role: 'Senior Developer',
  department: 'Development',
  email: 'john.doe@techcorp.com',
  phone: '+1 (555) 123-4567',
  joinDate: '2022-03-15',
  salary: '$120,000',
  projects: ['E-commerce Platform', 'Mobile App'],
  team: 'Frontend Development',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
};

export const EmployeeProfile = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <BackButton />

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start space-x-6">
          <img
            src={mockEmployee.image}
            alt={mockEmployee.name}
            className="h-32 w-32 rounded-lg object-cover"
          />
          <div className="space-y-4 flex-1">
            <div>
              <h1 className="text-2xl font-bold">{mockEmployee.name}</h1>
              <p className="text-gray-600">{mockEmployee.role}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>{mockEmployee.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>{mockEmployee.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span>Joined {mockEmployee.joinDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-gray-400" />
                <span>{mockEmployee.department}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Current Projects
            </h2>
            <div className="space-y-2">
              {mockEmployee.projects.map(project => (
                <div key={project} className="bg-gray-50 p-3 rounded">
                  {project}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Team Information
            </h2>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-medium">Team: {mockEmployee.team}</p>
              <p className="text-gray-600">Salary: {mockEmployee.salary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
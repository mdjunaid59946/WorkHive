import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, CheckCircle, Clock } from 'lucide-react';
import { BackButton } from '../BackButton';

const mockProject = {
  id: 1,
  name: 'E-commerce Platform',
  description: 'Building a modern e-commerce platform with React and Node.js',
  status: 'In Progress',
  progress: 75,
  startDate: '2024-01-15',
  deadline: '2024-04-30',
  team: 'Frontend Development',
  projectHead: {
    name: 'Sarah Johnson',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  members: [
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    // Add more team members...
  ],
  milestones: [
    {
      title: 'Project Setup',
      status: 'Completed',
      date: '2024-01-20',
    },
    {
      title: 'Frontend Development',
      status: 'In Progress',
      date: '2024-03-15',
    },
    // Add more milestones...
  ],
};

export const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <BackButton />

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">{mockProject.name}</h1>
            <p className="text-gray-600 mt-1">{mockProject.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            mockProject.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
            'bg-green-100 text-green-800'
          }`}>
            {mockProject.status}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Timeline
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Start Date:</span>
                <span>{mockProject.startDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Deadline:</span>
                <span>{mockProject.deadline}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Project Head
            </h2>
            <div className="flex items-center space-x-3">
              <img
                src={mockProject.projectHead.image}
                alt={mockProject.projectHead.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{mockProject.projectHead.name}</p>
                <p className="text-sm text-gray-600">{mockProject.projectHead.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Team Members</h2>
          <div className="grid grid-cols-2 gap-4">
            {mockProject.members.map(member => (
              <div
                key={member.id}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Milestones</h2>
          <div className="space-y-4">
            {mockProject.milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {milestone.status === 'Completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-blue-500" />
                  )}
                  <div>
                    <p className="font-medium">{milestone.title}</p>
                    <p className="text-sm text-gray-600">{milestone.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  milestone.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {milestone.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
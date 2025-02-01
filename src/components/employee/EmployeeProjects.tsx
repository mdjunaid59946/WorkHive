import React, { useState } from 'react';
import { Search, FolderKanban, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { BackButton } from '../BackButton';

const mockProjects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Building a modern e-commerce platform with React and Node.js',
    team: 'Frontend Development',
    progress: 75,
    role: 'Developer',
    tasks: [
      { title: 'Implement user authentication', status: 'completed' },
      { title: 'Design product catalog', status: 'in-progress' },
    ],
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Creating a cross-platform mobile app using React Native',
    team: 'Mobile Team',
    progress: 40,
    role: 'Developer',
    tasks: [
      { title: 'Set up development environment', status: 'completed' },
      { title: 'Create navigation structure', status: 'in-progress' },
    ],
  },
  // Add more projects...
];

const mockAvailableProjects = [
  {
    id: 3,
    name: 'Analytics Dashboard',
    description: 'Building a real-time analytics dashboard',
    team: 'Frontend Development',
    requiredSkills: ['React', 'D3.js', 'TypeScript'],
    openPositions: 2,
  },
  // Add more available projects...
];

export const EmployeeProjects = () => {
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'current' | 'available'>('current');

  const filteredProjects = mockProjects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredAvailableProjects = mockAvailableProjects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="space-x-4">
          <Button
            variant={view === 'current' ? 'default' : 'outline'}
            onClick={() => setView('current')}
          >
            <FolderKanban className="h-4 w-4 mr-2" />
            Current Projects
          </Button>
          <Button
            variant={view === 'available' ? 'default' : 'outline'}
            onClick={() => setView('available')}
          >
            <Users className="h-4 w-4 mr-2" />
            Available Projects
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {view === 'current' ? (
        <div className="grid gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {project.role}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h4 className="font-medium">Current Tasks</h4>
                {project.tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <span>{task.title}</span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      task.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredAvailableProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </div>
                <Button>
                  Join Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-4">
                <h4 className="font-medium mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {project.requiredSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-1" />
                <span>{project.openPositions} open positions</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
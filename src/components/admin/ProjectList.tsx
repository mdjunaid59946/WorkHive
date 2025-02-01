import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FolderKanban, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { BackButton } from '../BackButton';

const mockProjects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    status: 'In Progress',
    progress: 75,
    team: 'Frontend Development',
    members: 8,
    deadline: '2024-04-30',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    status: 'Planning',
    progress: 25,
    team: 'Mobile Team',
    members: 6,
    deadline: '2024-06-15',
  },
  // Add more mock projects...
];

export const ProjectList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredProjects = mockProjects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button onClick={() => navigate('/admin/projects/new')}>
          <FolderKanban className="h-4 w-4 mr-2" />
          Create Project
        </Button>
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

      <div className="grid gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/admin/projects/${project.id}`)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600">{project.team}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {project.status}
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

            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{project.members} members</span>
              </div>
              <span>Deadline: {project.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
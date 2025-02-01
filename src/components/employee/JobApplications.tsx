import React, { useState } from 'react';
import { Search, Briefcase, Building2, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { BackButton } from '../BackButton';

const departments = ['All', 'Development', 'Sales', 'HR', 'Testing', 'Marketing'];

const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Development',
    location: 'Main Office',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$100,000 - $130,000',
    description: 'We are looking for an experienced Frontend Developer...',
    requirements: [
      'Strong experience with React and TypeScript',
      'Experience with state management',
      'Understanding of modern CSS',
    ],
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Development',
    location: 'Main Office',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$90,000 - $120,000',
    description: 'Seeking a Product Manager to lead our development team...',
    requirements: [
      'Experience in software development',
      'Strong leadership skills',
      'Excellent communication',
    ],
  },
  // Add more jobs...
];

export const JobApplications = () => {
  const [search, setSearch] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Opportunities</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search positions..."
              className="pl-10 pr-4 py-2 border rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border rounded-lg"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <div className="flex items-center space-x-4 mt-2 text-gray-600">
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-1" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{job.experience}</span>
                  </div>
                </div>
              </div>
              <Button>Apply Now</Button>
            </div>

            <div className="mt-4">
              <p className="text-gray-600">{job.description}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-medium mb-2">Requirements</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <span className="font-medium text-blue-800">Salary Range: </span>
              <span className="text-blue-600">{job.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
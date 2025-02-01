import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Building2,
  MessageSquare,
  Briefcase
} from 'lucide-react';
import { Button } from '../ui/button';

const DashboardButton = ({ icon: Icon, label, onClick }: any) => (
  <Button
    variant="ghost"
    className="w-full flex items-center p-3 hover:bg-blue-50"
    onClick={onClick}
  >
    <Icon className="mr-2 h-5 w-5" />
    {label}
  </Button>
);

const StatCard = ({ icon: Icon, label, value }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600">{label}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
      <Icon className="h-8 w-8 text-blue-500" />
    </div>
  </div>
);

export const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Navigation Buttons */}
      <div className="grid grid-cols-5 gap-4">
        <DashboardButton
          icon={LayoutDashboard}
          label="Dashboard"
          onClick={() => navigate('/employee/dashboard')}
        />
        <DashboardButton
          icon={MessageSquare}
          label="Team Communication"
          onClick={() => navigate('/employee/communication')}
        />
        <DashboardButton
          icon={FolderKanban}
          label="Projects"
          onClick={() => navigate('/employee/projects')}
        />
        <DashboardButton
          icon={Briefcase}
          label="Job Applications"
          onClick={() => navigate('/employee/jobs')}
        />
        <DashboardButton
          icon={Building2}
          label="Office Layout"
          onClick={() => navigate('/employee/office')}
        />
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-3 gap-6">
        <StatCard
          icon={Users}
          label="Employee Details"
          value="View Profile"
        />
        <StatCard
          icon={FolderKanban}
          label="Active Projects"
          value="2 Projects"
        />
        <StatCard
          icon={Building2}
          label="Floor Plan"
          value="View Layout"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">Project Update: E-commerce Platform</p>
              <p className="text-sm text-gray-600">Sprint review scheduled for tomorrow</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">Meeting Room Booked</p>
              <p className="text-sm text-gray-600">Conference Room A - 2:00 PM</p>
            </div>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
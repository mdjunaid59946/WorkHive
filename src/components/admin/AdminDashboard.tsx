import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  FolderKanban,
  Building2,
  FileText,
  Bell,
  Briefcase,
  PlusCircle
} from 'lucide-react';
import { Button } from '../ui/button';

const DashboardButton = ({ icon: Icon, label, value, onClick }: any) => (
  <div 
    className="bg-white/90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center justify-between mb-4">
      <Icon className="h-8 w-8 text-blue-600" />
      <span className="text-sm font-medium text-blue-600">{value}</span>
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
  </div>
);

const NotificationBadge = () => (
  <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
    <span className="text-xs text-white">3</span>
  </div>
);

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = {
    totalEmployees: 156,
    activeProjects: 12,
    openPositions: 8,
    departments: 6
  };

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardButton
          icon={Users}
          label="Total Employees"
          value={`${stats.totalEmployees} Members`}
          onClick={() => navigate('/admin/employees')}
        />
        <DashboardButton
          icon={FolderKanban}
          label="Active Projects"
          value={`${stats.activeProjects} Projects`}
          onClick={() => navigate('/admin/projects')}
        />
        <DashboardButton
          icon={Briefcase}
          label="Open Positions"
          value={`${stats.openPositions} Positions`}
          onClick={() => navigate('/admin/jobs')}
        />
        <DashboardButton
          icon={Building2}
          label="Floor Plan"
          value={`${stats.departments} Departments`}
          onClick={() => navigate('/admin/office')}
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white/90 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
          <div className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <NotificationBadge />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <PlusCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">New Job Application</p>
                <p className="text-sm text-gray-600">Senior Developer Position</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Review</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Project Update</p>
                <p className="text-sm text-gray-600">E-commerce Platform - Phase 2 Complete</p>
              </div>
            </div>
            <Button variant="outline" size="sm">View</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">New Employee</p>
                <p className="text-sm text-gray-600">Sarah Johnson joined Development Team</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Profile</Button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        <Button 
          className="p-6 h-auto flex flex-col items-center space-y-2"
          onClick={() => navigate('/admin/employees/add')}
        >
          <Users className="h-6 w-6" />
          <span>Add New Employee</span>
        </Button>
        <Button 
          className="p-6 h-auto flex flex-col items-center space-y-2"
          onClick={() => navigate('/admin/projects/new')}
        >
          <FolderKanban className="h-6 w-6" />
          <span>Create Project</span>
        </Button>
        <Button 
          className="p-6 h-auto flex flex-col items-center space-y-2"
          onClick={() => navigate('/admin/office/manage')}
        >
          <Building2 className="h-6 w-6" />
          <span>Manage Office Layout</span>
        </Button>
      </div>
    </div>
  );
};
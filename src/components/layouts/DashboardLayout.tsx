import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  User, 
  Key, 
  Bell,
  Building2
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/button';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const { logout, userRole } = useAuthStore();
  const isAdmin = userRole === 'admin';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={`min-h-screen flex ${isAdmin ? 'bg-gradient-tech' : 'bg-gradient-modern'}`}>
      {/* Sidebar */}
      <div className="w-64 bg-white/90 backdrop-blur-sm shadow-lg animate-fade-in">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-800">TechCorp</h1>
        </div>
        
        {/* User Settings */}
        <div className="p-4 border-t border-gray-100">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile Details
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Key className="mr-2 h-4 w-4" />
              Change Password
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="h-16 bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-end px-4 animate-fade-in">
          {isAdmin && (
            <Button variant="ghost" className="mr-4">
              <Bell className="h-5 w-5" />
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2">3</span>
            </Button>
          )}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {isAdmin ? 'Admin' : 'Employee'}</span>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              {isAdmin ? 'A' : 'E'}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 animate-slide-up">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
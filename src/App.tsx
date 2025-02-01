import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getGreeting } from './lib/utils';
import { LoginForm } from './components/LoginForm';
import { Button } from './components/ui/button';
import { useAuthStore } from './store/authStore';
import { LogIn } from 'lucide-react';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { EmployeeDashboard } from './components/employee/EmployeeDashboard';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">TechCorp</h1>
        <Button variant="outline" onClick={() => window.location.href = '/login'}>
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      </header>
      <main className="container mx-auto px-4 pt-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 animate-fade-in">
            {getGreeting()}!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Welcome to TechCorp's internal portal. Please login to access your dashboard.
          </p>
        </div>
      </main>
    </div>
  );
}

function App() {
  const { isAuthenticated, userRole } = useAuthStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            isAuthenticated && userRole === 'admin' ? (
              <DashboardLayout>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="employees/*" element={<div>Employee Management (Coming Soon)</div>} />
                  <Route path="projects/*" element={<div>Project Management (Coming Soon)</div>} />
                  <Route path="documents/*" element={<div>Document Management (Coming Soon)</div>} />
                  <Route path="office/*" element={<div>Office Layout Management (Coming Soon)</div>} />
                  <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                </Routes>
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        
        {/* Employee Routes */}
        <Route
          path="/employee/*"
          element={
            isAuthenticated && userRole === 'employee' ? (
              <DashboardLayout>
                <Routes>
                  <Route path="dashboard" element={<EmployeeDashboard />} />
                  <Route path="communication" element={<div>Team Communication (Coming Soon)</div>} />
                  <Route path="projects" element={<div>Projects (Coming Soon)</div>} />
                  <Route path="jobs" element={<div>Job Applications (Coming Soon)</div>} />
                  <Route path="office" element={<div>Office Layout (Coming Soon)</div>} />
                  <Route path="*" element={<Navigate to="/employee/dashboard" replace />} />
                </Routes>
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuthStore } from '../store/authStore';
import { Lock, AtSign, Building } from 'lucide-react';

// Demo credentials - In a real app, these would be handled by a backend
const DEMO_CREDENTIALS = {
  admin: {
    email: 'admin@techcorp.com',
    password: 'admin123'
  },
  employee: {
    email: 'employee@techcorp.com',
    password: 'employee123'
  }
};

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState<'admin' | 'employee'>('employee');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const credentials = role === 'admin' ? DEMO_CREDENTIALS.admin : DEMO_CREDENTIALS.employee;
    
    if (email === credentials.email && password === credentials.password) {
      login(role);
      navigate(role === 'admin' ? '/admin/dashboard' : '/employee/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in">
          <div className="text-center space-y-2">
            <Building className="w-12 h-12 mx-auto text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('employee')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    role === 'employee'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Employee
                </button>
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    role === 'admin'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={role === 'admin' ? 'admin@techcorp.com' : 'employee@techcorp.com'}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={role === 'admin' ? 'admin123' : 'employee123'}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full py-2 animate-pulse-subtle">
              Sign In
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Demo Credentials:<br />
            Admin: admin@techcorp.com / admin123<br />
            Employee: employee@techcorp.com / employee123
          </div>
        </div>
      </div>
    </div>
  );
};
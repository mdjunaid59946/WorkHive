import React, { useState } from 'react';
import { Building2, Users, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { BackButton } from '../BackButton';

const departments = ['Development', 'Sales', 'HR', 'Testing', 'Marketing'];

const mockSeats = {
  Development: {
    total: 40,
    occupied: 35,
    temporary: 2,
  },
  Sales: {
    total: 25,
    occupied: 20,
    temporary: 1,
  },
  // Add more departments...
};

const mockMeetingRooms = [
  {
    id: 1,
    name: 'Conference Room A',
    capacity: 20,
    status: 'Available',
    equipment: ['Projector', 'Video Conference'],
  },
  {
    id: 2,
    name: 'Meeting Room B',
    capacity: 8,
    status: 'Occupied',
    equipment: ['Whiteboard', 'TV Screen'],
  },
  // Add more rooms...
];

export const OfficeLayout = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Development');
  const [view, setView] = useState<'layout' | 'seats' | 'management' | 'rooms'>('layout');

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Office Layout</h1>
        <div className="space-x-4">
          <Button
            variant={view === 'layout' ? 'default' : 'outline'}
            onClick={() => setView('layout')}
          >
            <Building2 className="h-4 w-4 mr-2" />
            Seat Layout
          </Button>
          <Button
            variant={view === 'seats' ? 'default' : 'outline'}
            onClick={() => setView('seats')}
          >
            <Users className="h-4 w-4 mr-2" />
            Seat Assignment
          </Button>
          <Button
            variant={view === 'management' ? 'default' : 'outline'}
            onClick={() => setView('management')}
          >
            <Building2 className="h-4 w-4 mr-2" />
            Seat Management
          </Button>
          <Button
            variant={view === 'rooms' ? 'default' : 'outline'}
            onClick={() => setView('rooms')}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Meeting Rooms
          </Button>
        </div>
      </div>

      {view === 'layout' && (
        <div className="grid grid-cols-3 gap-6">
          {departments.map(dept => (
            <div
              key={dept}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all ${
                selectedDepartment === dept
                  ? 'bg-blue-50 border-2 border-blue-500'
                  : 'bg-white hover:shadow-lg'
              }`}
              onClick={() => setSelectedDepartment(dept)}
            >
              <h3 className="text-lg font-semibold mb-2">{dept}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Total Seats: {mockSeats[dept]?.total || 0}</p>
                <p>Occupied: {mockSeats[dept]?.occupied || 0}</p>
                <p>Available: {(mockSeats[dept]?.total || 0) - (mockSeats[dept]?.occupied || 0)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'seats' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Available Seats</h2>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: mockSeats[selectedDepartment]?.total || 0 }).map((_, index) => {
              const isOccupied = index < (mockSeats[selectedDepartment]?.occupied || 0);
              return (
                <div
                  key={index}
                  className={`aspect-square rounded-lg flex items-center justify-center ${
                    isOccupied ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}
                >
                  {isOccupied ? 'Occupied' : 'Free'}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {view === 'management' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Seat Management</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Temporary Seating</h3>
              <p>Current temporary seats: {mockSeats[selectedDepartment]?.temporary || 0}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Check-in/Check-out</h3>
              <div className="space-y-2">
                <p>Today's check-ins: 15</p>
                <p>Today's check-outs: 8</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'rooms' && (
        <div className="grid gap-6">
          {mockMeetingRooms.map(room => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <p className="text-gray-600">Capacity: {room.capacity} people</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {room.equipment.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  room.status === 'Available'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {room.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
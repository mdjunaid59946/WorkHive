import React, { useState } from 'react';
import { MessageSquare, Users, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { BackButton } from '../BackButton';

const mockCommunities = [
  {
    id: 1,
    name: 'Frontend Team',
    members: 12,
    lastMessage: 'Updated the UI components',
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    name: 'Project Alpha',
    members: 8,
    lastMessage: 'Sprint planning at 2 PM',
    timestamp: '9:45 AM',
  },
  // Add more communities...
];

const mockMessages = [
  {
    id: 1,
    sender: 'John Doe',
    message: 'Hey team, I've pushed the latest changes.',
    timestamp: '10:30 AM',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    sender: 'Sarah Johnson',
    message: 'Great! I'll review them shortly.',
    timestamp: '10:32 AM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  // Add more messages...
];

export const TeamCommunication = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(mockCommunities[0]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="grid grid-cols-4 gap-6">
        {/* Communities List */}
        <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Communities</h2>
          <div className="space-y-2">
            {mockCommunities.map(community => (
              <div
                key={community.id}
                className={`p-3 rounded-lg cursor-pointer ${
                  selectedCommunity.id === community.id
                    ? 'bg-blue-50'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCommunity(community)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{community.name}</h3>
                  <span className="text-sm text-gray-500">{community.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{community.lastMessage}</p>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{community.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="col-span-3 bg-white rounded-lg shadow-md flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{selectedCommunity.name}</h2>
                <p className="text-sm text-gray-600">
                  {selectedCommunity.members} members
                </p>
              </div>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                View Members
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {mockMessages.map(msg => (
              <div key={msg.id} className="flex items-start space-x-3">
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="h-8 w-8 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{msg.sender}</span>
                    <span className="text-sm text-gray-500">{msg.timestamp}</span>
                  </div>
                  <p className="mt-1 text-gray-800">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
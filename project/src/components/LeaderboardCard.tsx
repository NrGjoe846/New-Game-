import React from 'react';
import { Users } from 'lucide-react';

const LeaderboardCard = () => {
  const leaders = [
    { name: 'Alex Chen', points: 2450, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100' },
    { name: 'Sarah Kim', points: 2380, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100' },
    { name: 'Mike Ross', points: 2310, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100' },
  ];

  return (
    <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Leaderboard</h3>
        <Users className="w-6 h-6 text-blue-400" />
      </div>
      
      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-8 h-8">
              <img 
                src={leader.avatar} 
                alt={leader.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{leader.name}</h4>
              <p className="text-sm text-gray-400">{leader.points} XP</p>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardCard;
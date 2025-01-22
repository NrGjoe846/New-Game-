import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Trophy, Star, Code, Book, Timer, Target, Award, GitBranch } from 'lucide-react';

const ProfileDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { icon: <Trophy className="w-5 h-5" />, label: 'Total XP', value: '12,450' },
    { icon: <Star className="w-5 h-5" />, label: 'Achievements', value: '24/50' },
    { icon: <Code className="w-5 h-5" />, label: 'Problems Solved', value: '156' },
    { icon: <Book className="w-5 h-5" />, label: 'Courses Completed', value: '8' },
    { icon: <Timer className="w-5 h-5" />, label: 'Current Streak', value: '12 days' },
    { icon: <Target className="w-5 h-5" />, label: 'Accuracy', value: '94%' },
  ];

  const achievements = [
    { name: 'Python Master', progress: 75, total: 100, level: 3 },
    { name: 'JavaScript Ninja', progress: 60, total: 100, level: 2 },
    { name: 'Algorithm Expert', progress: 45, total: 100, level: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-8">
            <div className="relative">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-500/30"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{user?.name}</h1>
              <p className="text-gray-400 mb-4">{user?.email}</p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300">
                  Edit Profile
                </button>
                <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-6">Skill Progress</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">{achievement.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">Level {achievement.level}</span>
                </div>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{achievement.progress} XP</span>
                  <span>{achievement.total} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
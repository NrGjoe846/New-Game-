import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Trophy, Star, Code, Book, Timer, Target, Award, GitBranch, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import BackButton from '../BackButton';
import { useSpring, animated } from 'react-spring';

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

  const activityData = [
    { day: 'Mon', commits: 5 },
    { day: 'Tue', commits: 8 },
    { day: 'Wed', commits: 12 },
    { day: 'Thu', commits: 6 },
    { day: 'Fri', commits: 9 },
    { day: 'Sat', commits: 4 },
    { day: 'Sun', commits: 7 },
  ];

  const maxCommits = Math.max(...activityData.map(d => d.commits));

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: parseInt(stats[0].value.replace(',', '')) },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton label="Back to Dashboard" />
        </div>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 mb-8 border border-white/20"
        >
          <div className="flex items-center gap-8">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-blue-500/30"
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Award className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </div>
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold mb-2"
              >
                {user?.name}
              </motion.h1>
              <p className="text-gray-400 mb-4">{user?.email}</p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
                >
                  Edit Profile
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                >
                  Share Profile
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-400">{stat.label}</p>
                  {index === 0 ? (
                    <animated.p className="text-2xl font-bold">
                      {number.to(n => n.toLocaleString(undefined, { maximumFractionDigits: 0 }))}
                    </animated.p>
                  ) : (
                    <p className="text-2xl font-bold">{stat.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 mb-8 border border-white/20"
        >
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-bold">Activity</h2>
          </div>
          <div className="flex items-end justify-between h-40 gap-2">
            {activityData.map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.commits / maxCommits) * 100}%` }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full bg-blue-500/20 rounded-t-lg relative group"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {data.commits} commits
                  </div>
                </motion.div>
                <span className="text-xs text-gray-400">{data.day}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold mb-6">Skill Progress</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">{achievement.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Level {achievement.level}</span>
                  </div>
                </div>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{achievement.progress} XP</span>
                  <span>{achievement.total} XP</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
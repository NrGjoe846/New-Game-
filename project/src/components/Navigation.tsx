import React from 'react';
import { GraduationCap, User, Settings, Bell } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/10 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">UNAI Verse</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="nav-icon-button">
              <Bell className="w-6 h-6" />
            </button>
            <button className="nav-icon-button">
              <Settings className="w-6 h-6" />
            </button>
            <button className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 px-4 py-2 rounded-full transition-all duration-300">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
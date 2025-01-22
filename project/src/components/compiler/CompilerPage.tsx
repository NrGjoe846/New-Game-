import React from 'react';import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import BackButton from '../BackButton';

const CompilerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-2xl font-bold">Code Editor</h1>
          </div>
        </div>

        {/* Full-screen Code Editor */}
        <div className="h-[calc(100vh-12rem)]">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default CompilerPage;
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CodeEditor from '../CodeEditor/CodeEditor';

const CompilerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold">Code Editor</h1>
          </div>
        </div>

        {/* Full-screen Code Editor */}
        <div className="h-[calc(100vh-12rem)]">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default CompilerPage;

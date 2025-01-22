import React, { useState } from 'react';
import { Book, Code, Play, CheckCircle, Lock, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Topic {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  locked: boolean;
  subtopics?: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

interface Phase {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  expanded?: boolean;
}

const coursePhases: Phase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1: Python Basics and Core Concepts',
    description: 'Understanding Python syntax, basic operations, and foundational topics that are critical for proficiency in Python.',
    topics: [
      {
        id: 'intro',
        title: '1. Introduction to Python Programming',
        description: 'Learn about Python installation, IDE setup, and write your first program.',
        completed: false,
        locked: false,
        subtopics: [
          { id: 'setup', title: 'Installing Python (Anaconda, PyCharm, or basic Python)', completed: false },
          { id: 'ide', title: 'Setting up the IDE', completed: false },
          { id: 'first-program', title: 'Writing your first Python program: print("Hello, World!")', completed: false },
          { id: 'syntax', title: 'Python syntax, keywords, and comments', completed: false },
          { id: 'interpreter', title: 'Python\'s interpreter vs. compiled languages', completed: false }
        ]
      },
      {
        id: 'data-types',
        title: '2. Basic Data Types and Variables',
        description: 'Master Python\'s fundamental data types and variable system.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'numbers', title: 'Numbers (integers, floats, complex)', completed: false },
          { id: 'strings', title: 'Strings', completed: false },
          { id: 'booleans', title: 'Booleans', completed: false },
          { id: 'type-conversion', title: 'Type conversion (e.g., int to float, string to int)', completed: false },
          { id: 'variables', title: 'Variable naming conventions and dynamic typing', completed: false }
        ]
      },
      {
        id: 'operators',
        title: '3. Operators and Expressions',
        description: 'Learn about different types of operators in Python.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'arithmetic', title: 'Arithmetic operators: +, -, *, /, //, %', completed: false },
          { id: 'comparison', title: 'Comparison operators: ==, !=, >, <, >=, <=', completed: false },
          { id: 'logical', title: 'Logical operators: and, or, not', completed: false },
          { id: 'assignment', title: 'Assignment operators: =, +=', completed: false },
          { id: 'bitwise', title: 'Bitwise operators (optional for beginners)', completed: false }
        ]
      }
    ]
  },
  {
    id: 'phase-2',
    title: 'Phase 2: Data Structures and Collections',
    description: 'Storing and manipulating collections of data essential for programming tasks.',
    topics: [
      {
        id: 'lists',
        title: '7. Lists',
        description: 'Master Python lists and their operations.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'create-modify', title: 'Creating and modifying lists', completed: false },
          { id: 'indexing', title: 'List indexing, slicing, and iteration', completed: false },
          { id: 'methods', title: 'List methods: append(), extend(), insert(), remove(), pop()', completed: false },
          { id: 'comprehensions', title: 'List comprehensions', completed: false }
        ]
      }
    ]
  },
  {
    id: 'phase-3',
    title: 'Phase 3: Intermediate Topics',
    description: 'Exploring deeper Python features for writing cleaner, more efficient code.',
    topics: [
      {
        id: 'file-handling',
        title: '12. File Handling',
        description: 'Learn to work with files in Python.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'read-write', title: 'Reading from and writing to text files', completed: false },
          { id: 'file-modes', title: 'File modes: r, w, a, x', completed: false },
          { id: 'context-managers', title: 'Context managers with with open()', completed: false },
          { id: 'csv', title: 'Handling CSV files (optional)', completed: false }
        ]
      }
    ]
  }
];

const PythonFundamentals = () => {
  const [phases, setPhases] = useState(coursePhases.map(phase => ({ ...phase, expanded: false })));

  const togglePhase = (phaseId: string) => {
    setPhases(prevPhases =>
      prevPhases.map(phase => ({
        ...phase,
        expanded: phase.id === phaseId ? !phase.expanded : phase.expanded
      }))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/dashboard"
            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold mb-2">Python Fundamentals</h1>
            <p className="text-gray-400">
              A comprehensive course covering Python programming from basics to advanced concepts
            </p>
          </div>
        </div>

        {/* Course Progress */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Course Progress</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">5% Complete</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-[5%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">1 Topic Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">24 Topics Remaining</span>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="space-y-6">
          {phases.map((phase) => (
            <div key={phase.id} className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 overflow-hidden">
                  {/* Phase Header */}
                  <button
                    onClick={() => togglePhase(phase.id)}
                    className="w-full p-6 text-left hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg">
                          <Book className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{phase.title}</h3>
                          <p className="text-gray-400 text-sm">{phase.description}</p>
                        </div>
                      </div>
                      {phase.expanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Phase Content */}
                  {phase.expanded && (
                    <div className="border-t border-white/10">
                      {phase.topics.map((topic) => (
                        <div key={topic.id} className="p-6 border-b border-white/10 last:border-b-0">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-lg ${
                                topic.locked ? 'bg-gray-700/50' : 'bg-blue-500/20'
                              }`}>
                                {topic.locked ? (
                                  <Lock className="w-5 h-5 text-gray-400" />
                                ) : (
                                  <Code className="w-5 h-5 text-blue-400" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">{topic.title}</h4>
                                {topic.description && (
                                  <p className="text-sm text-gray-400">{topic.description}</p>
                                )}
                              </div>
                            </div>
                            {!topic.locked && (
                              <Link
                                to={`/compiler`}
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 flex items-center gap-2"
                              >
                                <Play className="w-4 h-4" />
                                <span>Start</span>
                              </Link>
                            )}
                          </div>

                          {/* Subtopics */}
                          {topic.subtopics && (
                            <div className="ml-12 space-y-3">
                              {topic.subtopics.map((subtopic) => (
                                <div
                                  key={subtopic.id}
                                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                                >
                                  <div className="flex items-center gap-3">
                                    {subtopic.completed ? (
                                      <CheckCircle className="w-4 h-4 text-green-400" />
                                    ) : (
                                      <div className="w-4 h-4 rounded-full border border-gray-500" />
                                    )}
                                    <span className="text-sm">{subtopic.title}</span>
                                  </div>
                                  {!topic.locked && !subtopic.completed && (
                                    <Link
                                      to={`/compiler`}
                                      className="px-3 py-1 text-sm bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all duration-300"
                                    >
                                      Start
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PythonFundamentals;

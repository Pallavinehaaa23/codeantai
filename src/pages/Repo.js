import React from 'react';
import { FaSearch, FaSyncAlt, FaPlus, FaDatabase } from 'react-icons/fa';
import './Repo.css'; // Ensure this file is correctly linked

const repositories = [
  { name: 'Design System', visibility: 'Public', language: 'TypeScript', storage: '50MB', updated: '1 day ago' },
  { name: 'CodeAnt CI App', visibility: 'Private', language: 'JavaScript', storage: '30MB', updated: '2 days ago' },
  { name: 'Analytics Dashboard', visibility: 'Private', language: 'Python', storage: '200MB', updated: '5 days ago' },
  { name: 'Mobile App', visibility: 'Public', language: 'Swift', storage: '100MB', updated: '3 days ago' },
  { name: 'E-Commerce Platform', visibility: 'Private', language: 'Java', storage: '500MB', updated: '6 days ago' },
  { name: 'Blog Website', visibility: 'Public', language: 'HTML/CSS', storage: '20MB', updated: '4 days ago' },
  { name: 'Social Network', visibility: 'Private', language: 'PHP', storage: '300MB', updated: '5 days ago' },
];

const Repo = () => {
  return (
    <div className="repo-container bg-white p-6 rounded-lg shadow mt-6 sm:ml-6 sm:mr-6 mb-6 max-h-full overflow-auto">
      {/* Page Header */}
      <div className="repo-header flex flex-col sm:flex-row justify-between items-start mb-4 mt-6">
        <header className="repo-title mb-4 sm:mb-0 sm:text-left text-left">
          <h1 className="text-lg sm:text-2xl font-medium mb-2">Repositories</h1>
          <p className="text-gray-600 text-sm sm:text-base">33 total repositories</p>
        </header>

        {/* Action Buttons */}
        <div className="repo-actions flex flex-row sm:flex-row items-center justify-between w-full sm:w-auto space-x-1 sm:space-x-4 space-y-2 sm:space-y-0">
          <button className="refresh-btn w-full sm:w-auto flex items-center justify-center px-3 py-1 sm:px-4 sm:py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 mt-2 sm:mt-0">
            <FaSyncAlt className="mr-2" /> Refresh All
          </button>
          <button className="add-repo-btn w-full sm:w-auto flex items-center justify-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FaPlus className="mr-2" /> Add Repository
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar flex items-center border border-gray-300 rounded-lg p-2 w-full max-w-md mb-4 mx-auto sm:mx-0">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="flex-1 outline-none text-sm"
        />
      </div>

      {/* Repository List */}
      <div className="repo-list overflow-auto">
        <ul className="space-y-4">
          {repositories.map((repo, index) => (
            <li key={index} className="repo-item">
              <div className="repo-info flex flex-col space-y-2">
                <div className="repo-header flex items-center space-x-4">
                  <h2 className="repo-name text-sm font-medium text-gray-800">{repo.name}</h2>
                  <span
                    className={`repo-visibility text-xs font-medium px-2 py-0.5 rounded-lg ${repo.visibility === 'Public'
                      ? 'bg-blue-100 text-blue-600 border border-sky-600'
                      : 'bg-gray-100 text-gray-600 border border-gray-300'
                      }`}
                  >
                    {repo.visibility}
                  </span>
                </div>

                <div className="repo-details flex flex-wrap text-xs text-gray-600">
                  <div className="repo-language flex items-center mr-4">
                    <span>{repo.language}</span>
                    <span className="text-blue-500 ml-1">●</span>
                  </div>
                  <div className="repo-storage flex items-center mr-4">
                    <FaDatabase className="text-gray-500 mr-1" />
                    <span>{repo.storage}</span>
                  </div>
                  <div className="repo-updated flex items-center">
                    <span>{repo.updated}</span>
                  </div>
                </div>
              </div>
              <hr className="my-3 border-gray-300" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Repo;

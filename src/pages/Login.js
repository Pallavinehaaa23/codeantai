import React, { useState } from 'react';
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { LuKeyRound } from "react-icons/lu";
import img1 from '../images/codeantai pic.jpg';

function Login() {
  const [authOption, setAuthOption] = useState("saas");

  return (
    <div className="flex w-full h-screen">
      {/* Left Column - Static content */}
      <div className="hidden lg:flex justify-center items-center w-1/2 bg-transparent p-6 relative">
        <div className="bg-white shadow-lg rounded-xl p-6 mb-4 border border-gray-200">
          <div className="flex items-center mb-4">
            <img className="h-9 mr-4 mt-[-8px]" src={img1} alt="Logo" />
            <h3 className="text-xl font-bold">AI to Detect & Fix Code</h3>
          </div>
          <p className="border-b border-gray-300 mb-4"></p>

          <div className="flex justify-between mt-8 space-x-6">
            <div className="text-center">
              <b className="text-xl">30+</b><br />
             Language support
            </div>
            <div className="text-center">
              <b className="text-xl">10K+</b><br />
              Developers
            </div>
            <div className="text-center">
              <b className="text-xl">100K+</b><br />
              Hours saved
            </div>
          </div>
        </div>

        <img
          className="opacity-30 hidden sm:block absolute bottom-0 left-0 w-auto h-[250px] p-0 transform rotate-[-5deg]"
          src={img1}
          alt="Footer"
        />
      </div>

      {/* Right Column - Login Options */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white p-6 h-full">
        <div className="w-full max-w-lg shadow-lg rounded-xl p-8 mt-5 h-[500px]">
          <div className="flex justify-center items-center mb-5">
            <img className="h-9 mr-4 mt-[-2px]" src={img1} alt="Logo" />
            <h2 className="text-2xl font-normal mx-2 mr-5">CodeAnt AI</h2>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Welcome to CodeAnt AI</h2>

          {/* Authentication Options */}
          <div className="btns mb-4 flex flex-row space-x-4 mx-6">
            <button
              onClick={() => setAuthOption("saas")}
              className={`h-10 w-full sm:w-64 border-2 border-gray-300 ${authOption === "saas" ? "bg-blue-600 text-white" : "bg-transparent text-black"} rounded-lg`}
            >
              SAAS
            </button>

            <button
              onClick={() => setAuthOption("self")}
              className={`h-10 w-full sm:w-64 border-2 border-gray-300 ${authOption === "self" ? "bg-blue-600 text-white" : "bg-transparent text-black"} rounded-lg`}
            >
              Self Hosted
            </button>
          </div>

          <p className="border-b border-gray-300 mb-4"></p>

          {/* Display Options based on Selected Authentication */}
          <div className="options mx-2 overflow-y-auto h-[250px]">
            {authOption === "saas" ? (
              <>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <FaGithub size={22} />
                  <p className="font-md ml-4 text-center">Sign in with GitHub</p>
                </div>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <FaBitbucket size={22} color="blue" />
                  <p className="font-md ml-4 text-center">Sign in with Bitbucket</p>
                </div>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <VscAzureDevops size={22} color="blue" />
                  <p className="font-md ml-4 text-center">Sign in with Azure</p>
                </div>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <FaGitlab size={22} color="red" />
                  <p className="font-md ml-4 text-center">Sign in with GitLab</p>
                </div>
              </>
            ) : (
              <>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <FaGitlab size={22} color="red" />
                  <p className="font-md ml-4 text-center">Self Hosted GitLab</p>
                </div>
                <div className="option flex items-center justify-center mb-3 border-2 border-gray-300 px-6 py-2 rounded-lg">
                  <LuKeyRound size={22} />
                  <p className="font-md ml-4 text-center">Sign in with SSO</p>
                </div>
              </>
            )}
          </div>
        </div>

        <p className="text-center mt-4 text-sm">
          By signing up, you agree to our <b>Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
}

export default Login;

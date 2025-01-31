import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-teal-700 mb-4">Welcome to TaskMate</h1>
        <p className="text-lg text-gray-700 mb-8">Your ultimate task management companion. Organize your life, achieve your goals, and stay on top of your tasks effortlessly.</p>
        <Link to="/todopage">
          <button className="px-6 py-3 bg-teal-500 text-white rounded-3xl hover:bg-teal-600 transition duration-300">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
        <div className="p-6 bg-white shadow-lg rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-4">To-Do List</h3>
          <p className="text-gray-600 mb-4">Easily track your tasks and mark them off when completed. Stay productive with a simple yet powerful to-do list.</p>
          <Link to="/todopage">
            <button className="px-4 py-2 bg-teal-500 text-white rounded-3xl hover:bg-teal-600 transition duration-300">
              Explore To-Do
            </button>
          </Link>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-4">Weather Updates</h3>
          <p className="text-gray-600 mb-4">Get real-time weather updates to plan your day and stay ahead of any weather changes.</p>
          <Link to="/weatherpage">
            <button className="px-4 py-2 bg-teal-500 text-white rounded-3xl hover:bg-teal-600 transition duration-300">
              View Weather
            </button>
          </Link>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-4">Budget Tracker</h3>
          <p className="text-gray-600 mb-4">Manage your finances by tracking income and expenses. Stay within your budget and achieve financial goals.</p>
          <Link to="/budgettrackerpage">
            <button className="px-4 py-2 bg-teal-500 text-white rounded-3xl hover:bg-teal-600 transition duration-300">
              Track Budget
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-teal-700 mb-6">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="p-6 bg-white shadow-lg rounded-xl max-w-xs">
            <p className="text-gray-600 mb-4">"TaskMate has transformed the way I stay organized. It's intuitive, fast, and reliable!"</p>
            <p className="font-semibold text-teal-700">John Doe</p>
            <p className="text-sm text-gray-500">Business Owner</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl max-w-xs">
            <p className="text-gray-600 mb-4">"I love the budget tracker feature. It's helped me save money and plan ahead." </p>
            <p className="font-semibold text-teal-700">Jane Smith</p>
            <p className="text-sm text-gray-500">Freelancer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-teal-700 mb-4">Start Organizing Your Life Today!</h2>
        <p className="text-lg text-gray-700 mb-6">Get started with TaskMate and see the difference it can make in your productivity and organization.</p>
        <Link to="/todopage">
          <button className="px-6 py-3 bg-teal-500 text-white rounded-3xl hover:bg-teal-600 transition duration-300">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

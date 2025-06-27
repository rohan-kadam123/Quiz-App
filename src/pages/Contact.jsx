import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen px-6 py-16 sm:px-10 lg:px-20 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-indigo-400 drop-shadow">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 text-center mb-10">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you!
        </p>

        <form className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-semibold py-3 rounded-lg shadow-lg transition duration-300"
          >
            📩 Send Message
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          We'll get back to you as soon as possible!
        </p>
      </div>
    </div>
  );
};

export default Contact;


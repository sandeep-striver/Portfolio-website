import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5')`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Sandeep <span className="text-blue-400">Chaudhary</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Passionate Computer Science Engineering Student
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Specializing in IoT app development with a strong foundation in Flutter, ReactJS, and RESTful APIs. 
            Seeking to apply my skills in building user-centric applications while contributing to innovative 
            solutions in a dynamic development environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm a passionate developer with expertise in mobile and web development, 
              always eager to learn and contribute to innovative projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
              <p className="text-gray-600">
                Expertise in Flutter and Android development, creating user-friendly mobile applications 
                with modern design principles and efficient performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Proficient in ReactJS API and modern web technologies, building responsive 
                and interactive web applications with clean, maintainable code.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-gray-600">
                Experience with OCR technology and AI integration, utilizing machine learning 
                models to create intelligent applications and data processing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">OCR Text Recognition App</h3>
              <p className="text-gray-600 mb-4">
                Multi-language text scanner app for Android utilizing Machine Learning Kit 
                for accurate text extraction from images.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Android</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ML Kit</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">OCR</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Inventory Management System</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive system to handle stock tracking, patterns, and user accounts 
                with database management and notifications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Database</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Management</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Notifications</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Chat with CSV App</h3>
              <p className="text-gray-600 mb-4">
                Streamlit-based application that extracts insights from CSV data analysis 
                using Llama2 model for intelligent data interaction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Streamlit</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Llama2</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Data Analysis</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
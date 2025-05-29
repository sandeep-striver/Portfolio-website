const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "OCR-based Text Recognition App",
      description: "A comprehensive text scanner application for Android that utilizes Machine Learning Kit for accurate text extraction from images with multi-language support.",
      fullDescription: "This Android application leverages Google's ML Kit for text recognition to provide accurate OCR functionality. The app supports multiple languages and can extract text from various image formats. Users can capture images using the camera or select from gallery, and the extracted text can be edited, copied, or shared. The application features a clean, intuitive interface and handles different text orientations and lighting conditions effectively.",
      technologies: ["Android", "Machine Learning Kit", "Java", "OCR", "Image Processing"],
      features: [
        "Multi-language text recognition",
        "Camera and gallery integration",
        "Real-time text extraction",
        "Text editing and sharing capabilities",
        "Support for various image formats",
        "Offline text recognition"
      ],
      image: "https://images.unsplash.com/photo-1597239450996-ea7c2c564412",
      github: "#",
      demo: "#",
      status: "Completed",
      category: "Mobile Development"
    },
    {
      id: 2,
      title: "Inventory Management System",
      description: "A comprehensive inventory management system designed to handle stock tracking, pattern analysis, and user account management with database integration.",
      fullDescription: "This robust inventory management system provides businesses with tools to efficiently track stock levels, analyze inventory patterns, and manage user accounts. The system includes features for real-time stock monitoring, automated low-stock alerts, comprehensive reporting, and user role management. Built with scalability in mind, it can handle large inventories and multiple user types with different permission levels.",
      technologies: ["Database Management", "User Authentication", "Notifications", "Analytics", "Web Development"],
      features: [
        "Real-time stock tracking",
        "Automated low-stock notifications",
        "User role management",
        "Inventory pattern analysis",
        "Comprehensive reporting",
        "Multi-location support",
        "Barcode scanning integration"
      ],
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      github: "#",
      demo: "#",
      status: "Completed",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Chat with CSV App",
      description: "A Streamlit-based application that enables users to interact with CSV data through natural language queries using the Llama2 model for intelligent data analysis.",
      fullDescription: "This innovative application combines the power of natural language processing with data analysis capabilities. Users can upload CSV files and ask questions about their data in plain English. The application uses the Llama2 model to understand queries and generate appropriate responses, including data insights, visualizations, and statistical analysis. The Streamlit interface provides an intuitive way to interact with complex datasets without requiring technical expertise.",
      technologies: ["Streamlit", "Llama2", "Python", "Data Analysis", "NLP", "CSV Processing"],
      features: [
        "Natural language query processing",
        "CSV file upload and processing",
        "Interactive data visualizations",
        "Statistical analysis automation",
        "Export results and insights",
        "Multiple chart types support",
        "Real-time data interaction"
      ],
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      github: "#",
      demo: "#",
      status: "Completed",
      category: "AI/ML"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development projects demonstrating expertise in mobile development, 
            web applications, and AI/ML integration. Each project represents a unique challenge 
            and learning opportunity in my journey as a developer.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div 
                  className="h-64 lg:h-80 rounded-lg shadow-lg bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${project.image}')`
                  }}
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8 card-hover">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{project.fullDescription}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.slice(0, 6).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-600">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.github}
                      className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Projects Coming Soon</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 text-sm">Full-stack e-commerce solution with React and Node.js</p>
              <span className="inline-block mt-3 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">In Planning</span>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Visualization Dashboard</h3>
              <p className="text-gray-600 text-sm">Interactive dashboards with D3.js and Python backend</p>
              <span className="inline-block mt-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">In Development</span>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Chatbot</h3>
              <p className="text-gray-600 text-sm">Intelligent chatbot with natural language processing</p>
              <span className="inline-block mt-3 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Research Phase</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
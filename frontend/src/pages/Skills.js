import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = {
    "Programming Languages": [
      { name: "Java (OCA)", level: 90, color: "bg-orange-500" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "C", level: 80, color: "bg-blue-500" },
    ],
    "Mobile Development": [
      { name: "Flutter", level: 88, color: "bg-blue-400" },
      { name: "Android Studio", level: 85, color: "bg-green-500" },
    ],
    "Web Development": [
      { name: "ReactJS API", level: 87, color: "bg-cyan-500" },
      { name: "HTML/CSS", level: 90, color: "bg-red-500" },
      { name: "JavaScript", level: 85, color: "bg-yellow-400" },
    ],
    "Development Tools": [
      { name: "Git", level: 88, color: "bg-gray-700" },
      { name: "Firebase", level: 82, color: "bg-orange-400" },
      { name: "VS Code", level: 92, color: "bg-blue-600" },
    ],
    "Technologies": [
      { name: "RESTful APIs", level: 85, color: "bg-purple-500" },
      { name: "Machine Learning Kit", level: 78, color: "bg-pink-500" },
      { name: "Database Management", level: 80, color: "bg-indigo-500" },
    ]
  };

  const certifications = [
    {
      name: "Oracle Certified Associate (OCA) - Java",
      issuer: "Oracle",
      year: "2023",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Technical Skills</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across 
            various programming languages, frameworks, and development tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <div key={category} className="bg-white rounded-lg shadow-lg p-8 card-hover">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category}</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${skill.color} progress-bar transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4 text-center">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{cert.name}</h3>
                <p className="text-blue-600 font-medium text-center">{cert.issuer}</p>
                <p className="text-gray-600 text-center">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Interests */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas of Interest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Development</h3>
              <p className="text-gray-600 text-sm">Internet of Things applications and smart device integration</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm">AI models and intelligent application development</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Technologies</h3>
              <p className="text-gray-600 text-sm">Modern web frameworks and responsive design</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analysis</h3>
              <p className="text-gray-600 text-sm">Data processing and insights extraction</p>
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            I believe in staying updated with the latest technologies and continuously expanding my skill set. 
            Currently exploring advanced React patterns, cloud technologies, and AI/ML integration in mobile applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Cloud Computing</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Microservices</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">DevOps</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Blockchain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
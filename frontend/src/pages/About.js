const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Computer Science Engineering student with a strong foundation in software development 
            and a drive to create innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div 
              className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg')`
              }}
            ></div>
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hello, I'm Sandeep</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Computer Science Engineering student at Gurgaon University, specializing in 
              IoT app development with a strong foundation in Flutter, ReactJS, and RESTful APIs. 
              My journey in technology is driven by curiosity and a desire to build solutions that make a difference.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Throughout my academic journey, I've developed expertise in multiple programming languages 
              including Java (OCA certified), Python, and C. I'm particularly passionate about mobile 
              and web development, constantly exploring new technologies and frameworks to enhance my skills.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I believe in continuous learning and applying knowledge to real-world problems. My projects 
              range from OCR-based applications to inventory management systems, each presenting unique 
              challenges that have shaped my problem-solving abilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:sandeep.chaudhary411@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/sandeep-chaudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Science Engineering</h3>
              <p className="text-blue-600 font-medium">Gurgaon University</p>
              <p className="text-gray-600">2021 - Present</p>
              <p className="text-gray-600 mt-2">CGPA: 12 DGGPA</p>
              <p className="text-gray-700 mt-3">
                Focused on software development, data structures, algorithms, and modern programming paradigms. 
                Active participant in coding competitions and technical workshops.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Class 12</h3>
              <p className="text-green-600 font-medium">Gwal School, Gurgaon</p>
              <p className="text-gray-600">Completed</p>
              <p className="text-gray-700 mt-3">
                Strong foundation in mathematics and science subjects, which laid the groundwork 
                for my journey into computer science and engineering.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Class 10</h3>
              <p className="text-purple-600 font-medium">Mother Kherati Convent School, New Delhi</p>
              <p className="text-gray-600">Completed</p>
              <p className="text-gray-700 mt-3">
                Developed strong analytical and logical thinking skills that continue to benefit 
                my approach to problem-solving in programming.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership & Extra-Curricular */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership & Activities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Qualities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Dynamic leader with natural ability to inspire confidence and foster teamwork
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Quickly grasp new concepts and technologies with a strong work ethic
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Showcase exceptional organizational and problem-solving skills
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Activities & Conferences</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Joint International Conference</h4>
                  <p className="text-gray-600">Work as IT support team Leader held in Gurgaon University</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Code Cubical 2.0</h4>
                  <p className="text-gray-600">
                    Participated in Code Cubical 2.0 Hackathon by Geek Room, developed Smart Query. 
                    AI-focusing on front and integration and intelligent query handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
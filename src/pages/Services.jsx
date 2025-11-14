import React, { useState, useEffect } from "react";
import PageTransition from '../components/PageTransition';

export default function Services() {
  const [isOpen, setIsOpen] = useState(true); // Popup opens on page load
  const [activeSection, setActiveSection] = useState(""); // Track current section

  // Sections list
  const sections = [
    { id: "final-year-project", name: "Final Year Project" },
    { id: "training", name: "Hands-on Training" },
    { id: "research", name: "Research & Journal Support" },
    { id: "internship", name: "Internship Programs" },
    { id: "career-guidance", name: "Career Guidance" }, // new 5th section
  ];

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset for header
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="relative">

        {/* Page Header */}
        <div className="max-w-5xl mx-auto px-6 bg-gray-200 py-12 text-center">
          <h1 className="text-5xl font-bold mt-18 text-gray-900 mb-4">🌟 Our Services</h1>
          <p className="text-gray-700 text-lg">
            Empowering students and professionals with hands-on learning, real-time projects, and career-ready skills.
          </p>
        </div>

        {/* Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-2xl w-80 p-6 relative animate-fadeIn">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Jump to Section
              </h2>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded transition ${
                        activeSection === section.id
                          ? "bg-blue-100 font-semibold"
                          : "text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      {section.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Services Sections */}
        {/* 1. Final Year Project */}
        <section id="final-year-project" className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-gray-300 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-semibold text-blue-600 mb-4">
                1. Final Year Project (UG & PG)
              </h3>
              <p className="text-gray-700 text-lg mb-2">
                We help students choose, plan, design, and build their final-year
                projects from scratch — with full mentoring and documentation
                support.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Idea selection based on latest technologies</li>
                <li>Full technical mentoring and documentation support</li>
                <li>IEEE research paper guidance (if required)</li>
                <li>Complete code support and explanation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Hands-on Training */}
        <section id="training" className="py-20 bg-gray-100 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-gray-300 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-semibold text-blue-600 mb-4">
                2. Hands-on Training & Skill Development Courses
              </h3>
              <p className="text-gray-700 text-lg mb-2">
                We train students through <strong>real-time projects</strong>, not
                just theory.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Full-stack Web Development</li>
                <li>Mobile App Development (Flutter / Android)</li>
                <li>Python + Machine Learning</li>
                <li>Cybersecurity & Ethical Hacking</li>
                <li>Data Science (Beginner to Advanced)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Research & Journal Support */}
        <section id="research" className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-gray-300 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-semibold text-blue-600 mb-4">
                3. Research & Journal Support
              </h3>
              <p className="text-gray-700 text-lg mb-2">
                We assist students and scholars in completing all research
                deliverables on time.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Synopsis preparation</li>
                <li>Project report assistance</li>
                <li>IEEE paper formatting</li>
                <li>Plagiarism check & improvement guidance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Internship Programs */}
        <section id="internship" className="py-20 bg-gray-100 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-gray-300 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-semibold text-blue-600 mb-4">
                4. Internship Programs with Certificates
              </h3>
              <p className="text-gray-700 text-lg mb-2">
                Gain real-time industrial experience and boost your career with
                certified internships.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Web Development</li>
                <li>App Development</li>
                <li>Cloud Computing</li>
                <li>AI & Data Science</li>
                <li>Testing Tools (Selenium, JUnit)</li>
                <li>Python (Django)</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Career Guidance */}
        <section id="career-guidance" className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-gray-300 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-semibold text-blue-600 mb-6">
                5. Career Guidance – Build Your Career with Confidence
              </h3>

              {/* Skill Assessment */}
              <div className="mb-6">
                <h4 className="text-2xl font-semibold text-gray-700 mb-2">1. Skill Assessment & Career Mapping</h4>
                <p className="text-gray-700 text-lg mb-2">
                  We understand you — your:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg mb-2">
                  <li>Strengths</li>
                  <li>Interests</li>
                  <li>Career goals</li>
                </ul>
                <p className="text-gray-700 text-lg">
                  Then we recommend the best matching career path.
                </p>
              </div>

              {/* Resume & Portfolio */}
              <div className="mb-6">
                <h4 className="text-2xl font-semibold text-gray-700 mb-2">2. Resume & Portfolio Building</h4>
                <p className="text-gray-700 text-lg mb-2">
                  We create a professional resume that highlights:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg mb-2">
                  <li>Skills</li>
                  <li>Project experience</li>
                  <li>Technical strengths</li>
                </ul>
                <p className="text-gray-700 text-lg mb-2">
                  We also help you build:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg">
                  <li>GitHub portfolio</li>
                  <li>LinkedIn profile</li>
                </ul>
              </div>

              {/* Interview Prep */}
              <div className="mb-6">
                <h4 className="text-2xl font-semibold text-gray-700 mb-2">3. Interview & Placement Preparation</h4>
                <p className="text-gray-700 text-lg mb-2">
                  We train you to:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg">
                  <li>Answer technical & HR interview questions</li>
                  <li>Present your project confidently</li>
                  <li>Crack real interviews</li>
                </ul>
                <p className="text-gray-700 text-lg mt-2">
                  Includes mock interviews & feedback.
                </p>
              </div>

              {/* Roadmap */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-700 mb-2">4. Roadmap for IT Careers</h4>
                <p className="text-gray-700 text-lg mb-2">
                  We give step-by-step learning paths for careers like:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg">
                  <li>Full Stack Developer</li>
                  <li>Flutter App Developer</li>
                  <li>Data Scientist</li>
                  <li>Automation Tester</li>
                  <li>Cybersecurity Analyst</li>
                  <li>AI/ML Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}

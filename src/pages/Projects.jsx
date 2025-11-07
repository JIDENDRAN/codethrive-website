import React from "react";
import PageTransition from "../components/PageTransition"

export default function Projects() {
    return (
        <PageTransition>
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
  
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl mt-14 font-bold text-gray-900 mb-4">🚀 Projects at CodeThrive InfoTech</h2>
            <p className="text-gray-700  text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              At <strong>CodeThrive InfoTech</strong>, we help students gain <strong>hands-on experience </strong> 
              through real-time, industry-oriented projects. From software development to AI, IoT, and cybersecurity — 
              we build practical skills that make you <strong>career-ready</strong>.
            </p>
          </div>
  
          {/* Projects List */}
          <div className="space-y-16">
  
            <div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-4">💻 Software Development Projects</h3>
              <p className="text-gray-700 mb-3 text-lg">
                Create powerful digital solutions for web, mobile, and cloud.
              </p>
              <p className="font-semibold text-gray-800 mb-1">Project Areas:</p>
              <ul className="list-disc list-inside text-gray-700 mb-2 text-lg">
                <li>Web Applications</li>
                <li>Mobile Applications (Android / iOS)</li>
                <li>Cloud Applications (AWS / Firebase)</li>
              </ul>
              <p className="font-semibold text-gray-800 mb-1">Technologies Used:</p>
              <p className="text-gray-700 text-lg">Flutter · React JS · Node JS · Firebase · Django · MERN Stack · and more</p>
            </div>
  
            <div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-4">🤖 AI & Machine Learning Projects</h3>
              <p className="text-gray-700 mb-3 text-lg">
                Explore the world of intelligent systems that learn and predict.
              </p>
              <p className="font-semibold text-gray-800 mb-1">Project Areas:</p>
              <ul className="list-disc list-inside text-gray-700 mb-2 text-lg">
                <li>Machine Learning Models (Prediction / Classification)</li>
                <li>Deep Learning (Object Detection / Face Recognition)</li>
                <li>Natural Language Processing (Chatbots / Voice Assistants)</li>
              </ul>
              <p className="font-semibold text-gray-800 mb-1">Technologies Used:</p>
              <p className="text-gray-700 text-lg">Python · TensorFlow · OpenCV</p>
            </div>
  
            <div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-4">🌐 IoT & Embedded Systems Projects</h3>
              <p className="text-gray-700 mb-3 text-lg">
                Connect the real world with smart technology.
              </p>
              <p className="font-semibold text-gray-800 mb-1">Project Areas:</p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>IoT-based Automation</li>
                <li>Sensor Monitoring Systems</li>
                <li>RFID / GPS / Arduino / Raspberry Pi Solutions</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-4">🔒 Cybersecurity & Ethical Hacking Projects</h3>
              <p className="text-gray-700 mb-3 text-lg">
                Learn how to build and secure modern systems.
              </p>
              <p className="font-semibold text-gray-800 mb-1">Project Areas:</p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Network Security Projects</li>
                <li>Vulnerability Assessment Tools</li>
                <li>Awareness & Security Automation</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-4">📊 Data Science Projects</h3>
              <p className="text-gray-700 mb-3 text-lg">
                Turn raw data into real-time, meaningful insights.
              </p>
              <p className="font-semibold text-gray-800 mb-1">Project Areas:</p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Data Analytics Dashboards</li>
                <li>Power BI / Tableau Visualizations</li>
                <li>Real-time Data Monitoring</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-4">💡 Bring Your Own Project Idea</h3>
              <p className="text-gray-700 mb-3 text-lg">
                Have your own project concept? We’ll help you transform it into a real-time working model — 
                with <strong>code support, documentation, and viva guidance</strong>. Any domain, any technology — 
                <strong> your ideas are welcome!</strong>
              </p>
              <p className="text-gray-800 font-semibold mb-1">Still Confused About Choosing a Project?</p>
            
              <p className="text-gray-700 text-lg">
  Don’t worry — our mentors will help you choose the <strong>best project</strong> based on your skills, interests, and goals.
                </p>
                <a href="contact" className="inline-block mt-4 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition"
                >
                👉 Book a FREE project consultation!
                </a>

            </div>
  
          </div>
        </div>
      </section>
      </PageTransition>
    );
  }
  
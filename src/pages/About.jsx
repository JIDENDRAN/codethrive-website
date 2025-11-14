import React from 'react'
import PageTransition from "../components/PageTransition"




export default function About() {
  return (
    <PageTransition>

    <section
      className="min-h-screen py-20 px-6 sm:px-12 bg-gray-200 bg-cover bg-center bg-no-repeat"
    
    >
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm border border-gray-300 shadow-lg rounded-3xl p-12 sm:p-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12 text-center">
          About CodeThrive Infotech
        </h1>

        {/* Who We Are */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">Who We Are</h2>
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            <strong>CodeThrive Infotech</strong> is an{" "}
            <span className="font-semibold text-gray-700">
              Ed-Tech-based project and career development company
            </span>{" "}
            recognized by the <strong>Government of India</strong>. We
            specialize in helping students become{" "}
            <strong>industry-ready professionals</strong> through practical
            learning, hands-on project experience, and expert mentorship.
          </p>

          <ul className="mt-6 list-disc list-inside text-gray-800 text-lg space-y-2 text-justify">
            <li>The <strong>right guidance</strong> to build their future</li>
            <li><strong>Real-time project experience</strong> for confidence</li>
            <li>
              A <strong>clear career direction</strong> to turn skills into
              success
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">Our Mission</h2>
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            To <strong>empower students</strong> with practical technical
            skills, <strong>real-world exposure</strong>, and{" "}
            <strong>career-focused mentorship</strong> that prepare them to
            thrive in the ever-evolving IT industry.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">Our Vision</h2>
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            To become a <strong>trusted educational partner</strong> bridging
            the gap between <strong>academics and the IT industry</strong>.
          </p>
          <blockquote className="mt-6 border-l-4 border-gray-500 pl-6 italic text-gray-600 text-lg">
            “Projects build knowledge, skills build careers — we build both.”
          </blockquote>
        </div>
      </div>
    </section>
  





    </PageTransition>
  )
}

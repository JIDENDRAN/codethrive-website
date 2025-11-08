import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition"



export default function Home() {

  return (
    <>
     <PageTransition>
     <Helmet>
        <title>CodeThrive InfoTech | Web, AI & Cybersecurity Projects</title>
        <meta
          name="description"
          content="We design and build academic & business projects with one-to-one guidance, internships, and placement support."
        />
      </Helmet>
    <section
      aria-label="CodeThrive Infotech Home Section"
      className="relative flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat min-h-[600px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/assets/background.jpeg')",
      }}
    >
      {/* Background overlay */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-10 py-20 sm:py-28 flex justify-center">
        <div className="p-4 sm:p-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200 max-w-2xl">
        <h2 className="flex items-center gap-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
  <img src="/assets/favicon.png" alt="CodeThrive Logo" className="w-28 h-20 ml-6 " />
  <span className="ml-4">CodeThrive Infotech</span>
</h2>

    <p className="mt-4 ml-20 text-base sm:text-lg text-gray-600 ">
      " WE Shape Skills That Shape Futures "
    </p>

    <div className="mt-8  mr-6 flex flex-wrap gap-4 flex justify-center ">
      <Link
        to="/services"
        className="px-8 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Explore Services
      </Link>
      <Link
        to="/contact"
        className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
      >
        Contact Us
      </Link>
    </div>
  </div>
</div> 
</section>      
      
{/* Card Section */}
<div className="mt-8 bg-gradient-to-br from-blue-100 via-blue-50 to-white py-10 px-8 rounded-3xl shadow-inner border border-blue-200"
>
  
  {/* Link Cards */}
  <div className="flex flex-wrap justify-center items-center gap-6 mb-8 bg-white/70 py-6 px-8 rounded-2xl shadow-inner border border-blue-100 backdrop-blur-sm">
  {[
    { name: "Projects", path: "/projects" },
    { name: "Internships", path: "/services#internship" },
    { name: "Research Papers", path: "/services#research" }, // corrected path
    { name: "Career Guidance", path: "/services#career-guidance" }, // corrected path
  ].map((item, index, arr) => (
    <div key={item.path} className="flex items-center">
      {/* Tab Link */}
      <Link
        to={item.path}
        className="relative text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300
                   before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-500
                   before:transition-all before:duration-300 hover:before:w-full"
      >
        {item.name}
      </Link>

      {/* Two parallel divider lines (not after the last item) */}
      {index !== arr.length - 1 && (
        <div className="mx-6 flex flex-col justify-center">
          <span className="block w-[2px] h-4 bg-blue-300 mb-1 rounded"></span>
          <span className="block w-[2px] h-4 bg-blue-300 rounded"></span>
        </div>
      )}
    </div>
  ))}
</div>

  {/* Action Buttons */}
  <div className="flex flex-wrap justify-center gap-6 mb-8">
    <Link
      to="/services"
      className="px-8 py-3 rounded-lg border-2 border-blue-500 text-blue-600 font-semibold 
                 bg-white shadow-sm hover:bg-blue-600 hover:text-white hover:shadow-[0_0_12px_#3B82F6] 
                 transition-all duration-300"
    >
      View Domains
    </Link>

    <Link
      to="/projects"
      className="px-8 py-3 rounded-lg border-2 border-blue-500 text-blue-600 font-semibold 
                 bg-white shadow-sm hover:bg-blue-600 hover:text-white hover:shadow-[0_0_12px_#3B82F6] 
                 transition-all duration-300"
    >
      Get Project Guidance
    </Link>
    <Link
      to="/FAQ"
      className="px-10 py-3 rounded-full border border-blue-300 text-blue-800 font-semibold 
                 bg-white/60 backdrop-blur-md shadow-[0_0_8px_#bfdbfe] hover:bg-blue-600 hover:text-white 
                 hover:shadow-[0_0_15px_#3B82F6] transition-all duration-300"
    >
      💡 Why Choose Us?
    </Link>

    <Link
      to="/FAQ"
      className="px-10 py-3 rounded-full border border-indigo-300 text-indigo-800 font-semibold 
                 bg-white/60 backdrop-blur-md shadow-[0_0_8px_#c7d2fe] hover:bg-indigo-600 hover:text-white 
                 hover:shadow-[0_0_15px_#6366F1] transition-all duration-300"
    >
      ❔ FAQ
    </Link>
  </div>



</div>











</PageTransition>   
</>
        
  );
}

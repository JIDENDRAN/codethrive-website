import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition"



export default function Home() {
  return (
    <>
     <PageTransition>
    <section
      aria-label="CodeThrive Infotech Home Section"
      className="relative flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat min-h-[600px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/assets/background.jpeg')",
      }}
    >
      {/* Background overlay */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 py-20 sm:py-28 flex justify-center">
        <div className="p-8 sm:p-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            CodeThrive Infotech
          </h2>
    <p className="mt-4 text-base sm:text-lg text-gray-600 ">
      Empowering Businesses with Innovative IT Solutions designed to boost
      performance and drive growth.
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
      


<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
      Our Core Services
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: "💻",
          title: "Project Development",
          desc: "We design and build custom academic and business projects using the latest technologies."
        },
        {
          icon: "🎯",
          title: "Career Guidance",
          desc: "Get expert career advice, internship opportunities, and tech interview preparation support."
        },
        {
          icon: "🌐",
          title: "Web Development",
          desc: "Build responsive, secure, and scalable websites tailored to your business goals."
        },
        {
          icon: "🔐",
          title: "Cybersecurity Solutions",
          desc: "Protect your digital assets with our AI-driven security tools and cyber threat monitoring."
        },
        {
          icon: "🤝",
          title: "Technical Consultation",
          desc: "Get end-to-end technical consultation and guidance for your software or research projects."
        }
      ].map((service, index) => (
        <Link
          key={index}
          to="/services"
           className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition block hover:-translate-y-1 no-underline hover:no-underline"
           style={{ textDecoration: "none" }}
        >
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            {service.icon} {service.title}
          </h3>
          <p className="text-gray-700">{service.desc}</p>
        </Link>
      ))}
    </div>
  </div>
</section>

</PageTransition>   
</>
        
  );
}

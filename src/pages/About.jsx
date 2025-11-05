import React from 'react'
import PageTransition from "../components/PageTransition"




export default function About() {
  return (
    <PageTransition>
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-4">About CodeThrive Infotech</h2>
      <p className="text-gray-700 leading-relaxed">
        CodeThrive Infotech helps businesses grow with practical digital solutions.
        Located in Avinashi, Tiruppur (Tamil Nadu), we specialize in Web & App Development,
        IT Training, and Software Solutions tailored to your needs.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Our Mission</h3>
          <p className="text-gray-600 mt-2">To empower businesses with modern technology and effective training.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Our Approach</h3>
          <p className="text-gray-600 mt-2">Customer-centric development, hands-on training, and ongoing support.</p>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}

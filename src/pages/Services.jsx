import React from 'react'
import PageTransition from '../components/PageTransition'

export default function Services() {
  const services = [
    { title: 'Web Development', desc: 'Responsive websites, e-commerce, CMS.' },
    { title: 'App Development', desc: 'Android/iOS apps and PWA solutions.' },
    { title: 'Cybersecurity Solutions', desc: 'Vulnerability assessment and security best practices.' },
    { title: 'Cloud Consulting', desc: 'Cloud migration, infra setup and optimization.' },
    { title: 'AI & Automation', desc: 'Automation flows and AI-powered features.' }
  ]
  
  return (
    <PageTransition>
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 border rounded-lg hover:shadow">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  )
}

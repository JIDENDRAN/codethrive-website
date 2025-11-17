import React from 'react'
import ContactForm from '../components/ContactForm'
import PageTransition from '../components/PageTransition'

export default function Contact() {
  return (
    <PageTransition>
    <section
      aria-label="CodeThrive Infotech Home Section"
      className="relative flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat min-h-[600px]"
      style={{ backgroundImage: "url('/assets/contact.jpeg')" }}
    >
    
    <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

      <div>
        <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
        <p className="text-gray-700 mb-6">Have a project or want to learn more? Send us a message or reach out via WhatsApp.</p>

        <div className="space-y-3">
          <p><strong>Email:</strong> <a href="mailto:codethriveinfotech@gmail.com">codethriveinfotech@gmail.com</a></p>
          <p><strong> Contact:</strong> <a href="tel:+919150781685">+91 9150781685, </a><a href="tel:+919787857769">+91 9787857769 </a> </p>
          <p><strong> WhatsApp:</strong> <a href="tel:+919150781685">+91 9150781685</a></p>
          <p><strong>Location:</strong> Tiruppur, Coimbatore, Madurai, Theni</p>
        </div>

        <div className="mt-6">
          <a href="https://wa.me/919150781685" className="inline-block px-4 py-2 bg-green-500 text-white rounded-md">Chat on WhatsApp</a>
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
    </section>
    </PageTransition>
  )
}

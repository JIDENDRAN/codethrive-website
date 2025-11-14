import React, { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const phoneNumber = "918754720031" 
    const text = `📩 *New Contact Form Submission*
👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
💬 Message: ${form.message}`

    const encodedMessage = encodeURIComponent(text)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank")
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto"
    >
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
          className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          required
          className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
          className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-white">CodeThrive</span>. 
          All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-400">Privacy</a>
          <a href="#" className="hover:text-blue-400">Terms</a>
          <a href="#" className="hover:text-blue-400">Support</a>
        </div>
      </div>
    </footer>
  )
}

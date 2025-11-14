import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ContactPopup
 * - Auto opens after 2s
 * - Dark theme card (bottom-right)
 * - Avatar, chat bubble, WhatsApp / Call / Email buttons
 * - Re-open floating button with glow
 *
 * NOTE: Make sure framer-motion is installed:
 * npm i framer-motion
 */

const avatarSvg = (
  <svg
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-full"
  >
    <rect width="24" height="24" rx="6" fill="#0f172a" />
    <path
      d="M12 12a3.2 3.2 0 100-6.4A3.2 3.2 0 0012 12zM4.8 19.2c0-1.98 3.78-3.6 7.2-3.6s7.2 1.62 7.2 3.6"
      stroke="#9be7ff"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    // Auto-open after 2 seconds
    const t = setTimeout(() => {
      setOpen(true);
      setShowFloating(false);
    }, 2000);

    return () => clearTimeout(t);
  }, []);

  // When closed, show floating button after small delay
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setShowFloating(true), 600);
  };

  // Reopen from floating button
  const handleReopen = () => {
    setOpen(true);
    setShowFloating(false);
  };

  // Share contact details (customize these)
  const phone = "+916380427699";
  const waLink = `https://wa.me/${phone.replace(/\D/g, "")}`;
  const mailto = "mailto:codethriveinfotech@gmail.com";

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.36, ease: "easeOut" }}
              className="w-80 max-w-xs sm:w-80"
            >
              <div className="relative">
                {/* Card */}
                <div className="bg-[#0f172a] text-white rounded-2xl shadow-2xl border border-white/6 p-4 sm:p-5 backdrop-blur-md">
                  {/* Close button */}
                  <button
                    aria-label="Close contact popup"
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-white/80 hover:text-white text-lg leading-none"
                  >
                    ×
                  </button>

                  {/* Header: avatar + title */}
                  <div className="flex items-center gap-3">
                    <div className="flex-none">{avatarSvg}</div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold">
                        CodeThrive InfoTech
                      </h4>
                      <p className="text-xs text-white/70 -mt-0.5">
                        AI · Cybersecurity · Web
                      </p>
                    </div>
                  </div>

                  {/* Chat bubble */}
                  <div className="mt-3 mb-3">
                    <div className="inline-block bg-white/6 px-3 py-2 rounded-lg text-sm text-white/90">
                      Hi 👋 Need any help with a project or internship?
                    </div>
                  </div>

                  {/* Contact lines */}
                  <div className="text-sm text-white/85 mb-3">
                    <div className="mb-1">📞 <span className="font-medium">+91 63804 27699</span></div>
                    <div>✉️ <span className="font-medium">codethriveinfotech@gmail.com</span></div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-1 gap-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-medium py-2 rounded-lg"
                    >
                      {/* WhatsApp SVG */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="">
                        <path d="M20.5 3.5L3.5 20.5" stroke="white" strokeWidth="0"></path>
                        <path d="M21 12.004c0 4.97-4.03 9-9 9a8.95 8.95 0 01-4.673-1.266L3 21l1.266-3.327A8.95 8.95 0 013 12.004c0-4.97 4.03-9 9-9s9 4.03 9 9z" fill="white" opacity="0.06"/>
                        <path d="M16.472 14.19c-.297-.15-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.767.966-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.476-.885-.788-1.48-1.76-1.653-2.06-.173-.298-.018-.459.13-.609.134-.133.298-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.372-.025-.521-.075-.15-.672-1.612-.921-2.21-.243-.58-.49-.5-.672-.51l-.573-.01c-.198 0-.521.074-.794.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.15.198 2.095 3.2 5.076 4.487  .709.306 1.26.489 1.693.626.712.226 1.36.194 1.873.118.571-.085 1.758-.718 2.006-1.41.248-.693.248-1.288.173-1.41-.074-.133-.272-.198-.57-.347z" fill="white"/>
                      </svg>
                      WhatsApp
                    </a>

                    <a
                      href={`tel:${phone}`}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg"
                    >
                      {/* Phone SVG */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M3 5.999a1 1 0 011-1h3.6a1 1 0 01.95.69l.7 2.3a1 1 0 01-.24 1.02L7.4 11.8a12.05 12.05 0 005.8 5.8l2.79-1.36a1 1 0 011.02-.24l2.3.69a1 1 0 01.69.95V20a1 1 0 01-1 1A17 17 0 013 5.999z" fill="white"/>
                      </svg>
                      Call Now
                    </a>

                    <a
                      href={mailto}
                      className="flex items-center justify-center gap-2 bg-white text-[#0f172a] hover:opacity-95 transition font-medium py-2 rounded-lg"
                    >
                      {/* Mail SVG */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M3 6.5v11a1 1 0 001 1h16a1 1 0 001-1v-11" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 7.5l-9 6-9-6" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating re-open button */}
      <div className="fixed bottom-5 right-5 z-40">
        <AnimatePresence>
          {!open && showFloating && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleReopen}
              className="relative inline-flex items-center justify-center px-4 py-3 bg-[#0f172a] text-white rounded-full shadow-lg"
              aria-label="Open contact popup"
            >
              {/* Glow ring */}
              <span className="absolute -inset-1 rounded-full blur-2xl opacity-25 bg-gradient-to-r from-cyan-400 to-sky-500 animate-pulse-slow border border-white"></span>

              <span className="relative z-10 text-sm font-medium">Contact Us</span>

            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Tiny style additions for slow pulse (works with Tailwind config) */}
      <style>{`
        @keyframes pulse-slow {
          0% { opacity: .2; transform: scale(0.98); }
          50% { opacity: .45; transform: scale(1.03); }
          100% { opacity: .2; transform: scale(0.98); }
        }
        .animate-pulse-slow { animation: pulse-slow 2.8s infinite; }
      `}</style>
    </>
  );
}

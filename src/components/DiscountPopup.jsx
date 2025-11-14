import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DiscountPopup = () => {
  const [open, setOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour timer

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <>
      {/* Floating Mini Bubble */}
      {!open && (
        <motion.div
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 left-6 z-50 cursor-pointer"
        >
          <div className="relative px-5 py-3 rounded-full bg-gray-600 text-white shadow-lg hover:scale-105 transition-transform">
            <span className="absolute -inset-1 rounded-full blur-xl opacity-30 bg-gradient-to-r from-cyan-400 to-sky-400 animate-pulse-slow"></span>
            <span className="relative z-10 font-semibold">🎁 Grab Offer</span>
          </div>
        </motion.div>
      )}

      {/* Main Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <div className="relative bg-gray-700 border border-gray-500 rounded-3xl p-6 w-80 shadow-xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
              >
                ✖
              </button>

              {/* Header */}
              <h2 className="text-3xl font-extrabold mb-3 text-white tracking-tight">
                ⚡ Hurry! 20% OFF Today Only!
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-3">
                Grab this exclusive deal for{" "}
                <span className="font-semibold text-white">college & engineering students</span> — don’t miss out!
              </p>

              {/* Timer */}
              <div className="inline-block bg-gray-600 border border-gray-500 rounded-full px-4 py-2 mb-3 text-white font-medium shadow-inner">
                ⏳ Hurry, offer ends in: {formatTime(timeLeft)}
              </div>

              {/* Extra Hook */}
              <p className="text-gray-300 text-xs mb-4 font-medium">
                Limited spots available — act fast!
              </p>

              {/* Apply Button with Glow */}
              <a
                href="/contact"
                className="relative inline-block w-full text-center bg-cyan-500 text-white py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <span className="absolute -inset-1 rounded-full blur-xl opacity-30 bg-gradient-to-r from-cyan-400 to-sky-400 animate-pulse-slow"></span>
                <span className="relative z-10">Claim Your 20% OFF</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DiscountPopup;

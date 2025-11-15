import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// QUESTIONS
const questions = [
  {
    key: "course",
    title: "Which course are you enrolled in?",
    options: ["MCA", "BCA", "BE / B.Tech", "B.Sc CS", "Diploma", "Other"],
  },
  {
    key: "year",
    title: "Which study year are you in?",
    options: ["1st", "2nd", "3rd", "Final Year"],
  },
  {
    key: "domain",
    title: "Which domain are you interested in?",
    options: [
      "Web Development",
      "AI / ML",
      "Cybersecurity",
      "Data Science",
      "App Development",
      "Cloud Computing",
    ],
  },
  {
    key: "budget",
    title: "Preferred budget range?",
    options: ["Below ₹1000", "₹1000–₹3000", "₹3000–₹6000", "₹6000+"],
  },
  {
    key: "projectType",
    title: "Project type you need?",
    options: ["Mini Project", "Full Project", "Research Project", "Internship Project"],
  },
  {
    key: "guidance",
    title: "Need one-to-one guidance?",
    options: ["Yes", "No"],
  },
  {
    key: "internship",
    title: "Need internship as well?",
    options: ["Yes", "No"],
  },
];

export default function SurveyPopup() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const total = questions.length;

  // Auto-open after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (index < total - 1) {
      setIndex((i) => i + 1);
    } else {
      setIndex(total); // final screen
    }
  };

  const waMessage = encodeURIComponent(
    `Hi CodeThrive, I need a project.\n${JSON.stringify(answers, null, 2)}`
  );
  const waLink = `https://wa.me/916382093290?text=${waMessage}`;

  // Fade animation only
  const fade = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <>
      {/* Avatar Button (bottom-left) */}
      {!open && (
        <div className="fixed bottom-6 left-6 z-[9999]">
          <button onClick={() => setOpen(true)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
              className="w-14 h-14 rounded-full shadow-lg border bg-white p-2 hover:scale-105 transition"
              alt="survey"
            />
          </button>
        </div>
      )}

      {/* Popup */}
      <div className="fixed bottom-6 left-6 z-[9999] pointer-events-none">
        <AnimatePresence>
          {open && (
            <motion.div
              key={index}
              {...fade}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto w-[310px] bg-white rounded-xl shadow-xl border border-gray-200 p-4"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {index < total ? "Quick Survey" : "Completed 🎉"}
                </h3>

                <button
                  onClick={() => {
                    setOpen(false);
                    setIndex(0);
                  }}
                  className="text-gray-400 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Question / Final Screen */}
              {index < total ? (
                <>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">
                    {questions[index].title}
                  </h4>

                  <div className="grid grid-cols-2 gap-2">
                    {questions[index].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect(questions[index].key, opt)}
                        className="px-3 py-2 bg-gray-50 border border-gray-200 text-sm rounded-lg hover:bg-blue-50 transition"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {/* Progress Dots */}
                  <div className="flex justify-center gap-1 mt-4">
                    {Array.from({ length: total }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-2 rounded-full ${
                          i === index ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      ></div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-600 mb-2">
                    Here are your answers:
                  </p>

                  <div className="bg-gray-50 border border-gray-200 p-2 text-xs rounded-lg mb-3">
                    <pre className="whitespace-pre-wrap">
                      {JSON.stringify(answers, null, 2)}
                    </pre>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    className="block text-center bg-green-600 text-white py-2 rounded-lg text-sm mb-2"
                  >
                    WhatsApp Us
                  </a>

                  <a
                    href="/contact"
                    className="block text-center bg-blue-600 text-white py-2 rounded-lg text-sm"
                  >
                    Register Now
                  </a>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

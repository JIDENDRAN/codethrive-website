import React, { useState } from "react";
import PageTransition from "../components/PageTransition";

const faqData = [
  {
    question: "Do you provide complete project support?",
    answer: "Yes. We provide end-to-end support including:\n- Project development\n- Documentation / Report\n- PPT\n- Viva explanation",
  },
  {
    question: "Do you provide explanation for every line of code?",
    answer: "Absolutely. We explain the code in simple terms during live sessions until you are confident to present it.",
  },
  {
    question: "Can I customize my project based on college requirements?",
    answer: "Yes. We modify the project according to your university format suggestions.",
  },
  {
    question: "Do you provide IEEE research papers?",
    answer: "Yes. We provide:\n- IEEE Paper Guidance\n- Paper formatting & plagiarism check \n- Support for publication",
  },
  {
    question: "Will I get documentation and report?",
    answer: "Yes. You will receive:\n- Synopsis\n- Report\n- PPT\n- Flow diagrams (DFD, UML, ER diagrams)",
  },
  {
    question: "How is the project delivered?",
    answer: "We deliver through:\n- Online meeting (Google Meet)\n- Source code sharing via GitHub / Drive",
  },
  {
    question: "Do you offer internships?",
    answer: "Yes. We provide internships in all domains with certificates",
  },
  {
    question: "Do you provide partial payments?",
    answer: "Yes. Payment is milestone-based:\n- No full payment upfront\n- Pay as the project progresses",
  },
  {
    question: "How to start a project with CodeThrive Info Tech?",
    answer: "Just 3 steps:\n1. Choose project domain\n2. Discuss requirements\n3. Start development with us",
  },
  {
    question: "What if my project gets rejected or faculty asks for changes?",
    answer: "No worries — We provide unlimited revisions until approval.",
  },
  {
    question: "Do you provide ready-made projects?",
    answer: "We don't give copy-paste ready-made projects. Every project is:\n- Freshly developed\n- Customizable\n- Unique for each student",
  },
  {
    question: "Will you help us during final viva?",
    answer: "Yes. We conduct a mock viva to prepare you for questions from the examiner.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageTransition>
         <section className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">

      

 {/* Top Feature Section */}
<div className="mb-12  mt-10 text-center">
  <h1 className="text-4xl font-bold text-gray-900 mb-6">
    Why Students Choose Us
  </h1>
  <ul className="list-disc text-gray-700 text-2xl max-w-3xl mx-auto space-y-4 text-left">
    <li>One-to-one project guidance</li>
    <li>Live project support</li>
    <li>We explain every line of code</li>
    <li>Placement-oriented training programs</li>
    <li>Countless successful projects</li>
  </ul>
</div>


        {/* FAQ Header */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          ❓ Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-blue-600 py-1"
              >
                {faq.question}
                <span className="ml-2 text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-700 mt-1 text-sm whitespace-pre-line">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
    </PageTransition>
  );
}

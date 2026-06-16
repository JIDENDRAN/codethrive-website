import React from 'react';
import PageTransition from '../components/PageTransition';
import { 
  ShieldCheck, 
  Building2, 
  Award, 
  Globe, 
  Mail, 
  Phone, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export default function Verify() {
  // Dynamic Year for the copyright section
  const currentYear = new Date().getFullYear();

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-slate-100 via-white to-blue-50 flex items-center justify-center">
        
        {/* Main Verification Card */}
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100/85 hover:shadow-2xl transition-all duration-300">
          
          {/* Header Block */}
          <div className="bg-[#0B1D33] py-8 px-6 text-center shadow-md">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase">
              CodeThrive Infotech
            </h1>
            <div className="flex items-center justify-center gap-2 text-blue-300 mt-2.5 font-semibold text-sm tracking-wide">
              <ShieldCheck className="h-5 w-5 text-blue-400 animate-pulse" />
              <span>Organization Verification</span>
            </div>
          </div>

          {/* Verification Status Banner */}
          <div className="py-10 px-6 text-center border-b border-gray-100">
            {/* Green Checkmark Circle */}
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200 shadow-sm">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>

            <span className="text-green-600 font-extrabold text-sm sm:text-base tracking-widest block mb-1">
              VERIFIED ORGANIZATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              CodeThrive Infotech
            </h2>
          </div>

          {/* Approval Details */}
          <div className="py-8 px-6 sm:px-8 space-y-5">
            {/* AICTE Approval */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-250 border border-transparent hover:border-gray-100">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
                  AICTE Internship Portal Registered Organization
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Verified educational training & internship partner
                </p>
              </div>
            </div>

            {/* MSME Udyam Approval */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-250 border border-transparent hover:border-gray-100">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
                  MSME (Udyam) Registered Enterprise
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Registered under Ministry of Micro, Small & Medium Enterprises
                </p>
                <p className="text-xs text-blue-600 font-semibold mt-1 bg-blue-50/50 px-2.5 py-0.5 rounded-md inline-block">
                  Reg No: UDYAM-TN-03-0329986
                </p>
              </div>
            </div>
          </div>

          {/* About & Metadata Table */}
          <div className="px-6 sm:px-8 pb-10">
            <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-5 sm:p-6 text-left">
              <h4 className="text-base font-bold text-gray-800 mb-2.5">
                About Organization
              </h4>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm mb-6 text-justify">
                CodeThrive Infotech is a technology-driven company providing internship programs, project training, software development, and IT services.
              </p>

              {/* Data Table */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Website */}
                <div className="flex justify-between items-center py-2 border-b border-gray-200/50">
                  <span className="font-medium text-gray-500 flex items-center gap-1.5">
                    <Globe className="h-4 w-4 text-gray-400" /> Website
                  </span>
                  <a 
                    href="https://project.codethriveinfotech.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 hover:underline"
                  >
                    project.codethriveinfotech.in
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Email */}
                <div className="flex justify-between items-center py-2 border-b border-gray-200/50">
                  <span className="font-medium text-gray-500 flex items-center gap-1.5">
                    <Mail className="h-4 w-4 text-gray-400" /> Email
                  </span>
                  <a 
                    href="mailto:codethriveinfotech@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                  >
                    codethriveinfotech@gmail.com
                  </a>
                </div>

                {/* Contact */}
                <div className="flex justify-between items-center py-2 border-b border-gray-200/50">
                  <span className="font-medium text-gray-500 flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-gray-400" /> Contact
                  </span>
                  <a 
                    href="tel:+919150781685" 
                    className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                  >
                    +91 91507 81685
                  </a>
                </div>

                {/* Status */}
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-500 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-gray-400" /> Status
                  </span>
                  <div className="flex items-center gap-1.5 bg-green-50 text-green-700 font-semibold px-2.5 py-0.5 rounded-full text-xs border border-green-150">
                    <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Active</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer inside Card */}
          <div className="bg-[#0B1D33] py-4 text-center border-t border-slate-800">
            <p className="text-gray-400 text-[10px] sm:text-xs">
              &copy; {currentYear} CodeThrive Infotech. All Rights Reserved.
            </p>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}

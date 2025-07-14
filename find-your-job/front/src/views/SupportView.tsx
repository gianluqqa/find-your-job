"use client"
import { useState } from 'react';
import ComplaintForm from 'src/components/support/ComplaintForm';

export default function SupportView() {
  const [showComplaintForm, setShowComplaintForm] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Support Center
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're here to help you navigate your job search safely and effectively. 
            If you encounter any issues with employers or job postings, we're ready to assist.
          </p>
        </div>

        {!showComplaintForm ? (
          <>
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Report Suspicious Activity</h2>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Encountered a suspicious job posting or employer? Help us maintain a safe platform 
                    by reporting any fraudulent activity, discrimination, or inappropriate behavior.
                  </p>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Job scams or fraudulent postings
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Discrimination in hiring practices
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Harassment or inappropriate communication
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Requests for personal information upfront
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">How We Help</h2>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Our support team takes every report seriously and follows a comprehensive process:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-emerald-600 font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Investigation</h3>
                        <p className="text-slate-600 text-sm">We review your complaint within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-emerald-600 font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Action</h3>
                        <p className="text-slate-600 text-sm">We take appropriate measures against violations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-emerald-600 font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Follow-up</h3>
                        <p className="text-slate-600 text-sm">We keep you informed throughout the process</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Stay Safe While Job Hunting</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h3 className="font-semibold text-red-800 mb-2">🚨 Red Flags to Watch For:</h3>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Requests for money or personal financial information</li>
                        <li>• "Too good to be true" salary offers</li>
                        <li>• Pressure to respond immediately</li>
                        <li>• Poor grammar or unprofessional communication</li>
                        <li>• Vague job descriptions</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">✅ Legitimate Employers Will:</h3>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Have a professional website and email domain</li>
                        <li>• Provide clear job descriptions and requirements</li>
                        <li>• Conduct proper interviews before hiring</li>
                        <li>• Never ask for money upfront</li>
                        <li>• Respect your time and privacy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Contact Support</h2>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Need immediate assistance? Our support team is available to help with any concerns 
                    about your job search experience.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <svg className="w-5 h-5 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-800">Email Support</p>
                        <p className="text-slate-600 text-sm">support@findyourjob.com</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <svg className="w-5 h-5 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-800">Response Time</p>
                        <p className="text-slate-600 text-sm">24-48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to File a Complaint?</h2>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Our dedicated support team will handle your case with complete confidentiality and professionalism. 
                Your report helps us maintain a safe and trustworthy platform for all job seekers.
              </p>
              <button
                onClick={() => setShowComplaintForm(true)}
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span>File a Complaint</span>
              </button>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <button
                onClick={() => setShowComplaintForm(false)}
                className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Support Center
              </button>
            </div>
            <ComplaintForm />
          </div>
        )}
      </div>
    </section>
  );
}
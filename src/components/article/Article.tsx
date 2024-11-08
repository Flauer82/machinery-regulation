import { Activity, AlertTriangle, Book, Check, FileText, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="mb-12">
        <div className="mb-8">
          <Link 
            to="/technical-requirements"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View Technical Requirements
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Key Changes in the New EU Machinery Regulation 2023/1230
        </h1>
        <p className="text-xl text-gray-600 italic mb-2">
          A Practical Analysis for the Energy Sector
        </p>
        <div className="text-sm text-gray-500">
          By Lorenzo Fiorentino, Eniprogetti Machinery Dpt.
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The EU has introduced a significant update to machinery legislation with 
          Regulation 2023/1230, replacing Directive 2006/42/EC. This transition from 
          a directive to a regulation ensures uniform application across all EU member 
          states, eliminating the need for national transposition.
        </p>
        
        {/* Timeline Alert */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">
                Implementation Timeline
              </h3>
              <p className="text-blue-800">
                The regulation will apply from January 14, 2027, giving manufacturers 
                approximately 3.5 years to adapt to the new requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Changes Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Key Changes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Scope and Definitions card - spans both columns */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-6 h-6 text-indigo-600" />
              <h3 className="font-semibold text-lg">Updated Scope and Definitions</h3>
            </div>
            <p className="text-gray-600 text-align:justify max-w-3xl">
              Significant expansion of regulatory scope to include software safety functions and autonomous systems. 
              Key definitions have been updated to address new technologies and clarify requirements for machinery modifications. 
              New roles and responsibilities introduced for supervision of autonomous machinery operations, with particular 
              emphasis on safety functions and substantial modifications criteria.
            </p>
          </div>

          {/* Digital Technologies */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-lg">Digital Technologies</h3>
            </div>
            <p className="text-gray-600">
              New requirements for AI-enabled machinery, autonomous systems, and 
              software updates that affect safety.
            </p>
          </div>
          {/* Cybersecurity */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-lg">Cybersecurity</h3>
            </div>
            <p>Introduction of cybersecurity requirements to prevent safety risks from malicious third-party interference.</p>
          </div>

          {/* Digital Documentation */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-lg">Digital Documentation</h3>
            </div>
            <p>Option to provide instructions and declarations in digital format, with specific requirements for accessibility.</p>
          </div>

          {/* Risk Assessment */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-red-600" />
              <h3 className="font-semibold text-lg">Risk Assessment</h3>
            </div>
            <p>Enhanced requirements for risk assessment, including specific considerations for autonomous systems.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Impact on Safety Components</h2>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Component Type</th>
              <th className="text-left py-2">New Requirements</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Software Safety Components</td>
              <td className="py-2">Now explicitly covered, including AI and ML systems</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Control Systems</td>
              <td className="py-2">Enhanced requirements for autonomous operation</td>
            </tr>
            <tr>
              <td className="py-2">Protective Devices</td>
              <td className="py-2">Updated specifications for digital safeguards</td>
            </tr>
          </tbody>
        </table>
      </div>
      </section>

      <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Key Actions for Compliance</h2>
      <div className="space-y-4">
        {[
          'Review and update risk assessment procedures',
          'Evaluate cybersecurity measures for networked machinery',
          'Update technical documentation processes',
          'Review digital instruction formats',
          'Assess AI/ML components against new requirements'
        ].map((action, index) => (
          <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span>{action}</span>
          </div>
        ))}
      </div>
      </section>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-gray-600 text-sm">
        <p>Note: This article provides a general overview of the changes. For specific requirements, 
        please consult the full text of Regulation (EU) 2023/1230.</p>
      </footer>
    </div>
  );
}
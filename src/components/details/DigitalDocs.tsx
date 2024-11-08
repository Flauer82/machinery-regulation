import { FileText, Globe, Download, Printer, Shield, Clock, Link as LinkIcon, AlertTriangle, RefreshCw, Check, Eye, Settings } from 'lucide-react';

export default function DigitalDocs() {
  const sections = [
    {
      category: "Document Availability",
      icon: Globe,
      color: "blue",
      items: [
        {
          title: "Online Access",
          description: "Requirements for digital document accessibility",
          requirements: [
            "Minimum 10-year online availability",
            "Web-accessible format",
            "Platform-independent access",
            "24/7 availability requirements",
            "Backup and redundancy measures"
          ]
        },
        {
          title: "Access Management",
          description: "Control and tracking of document access",
          requirements: [
            "User authentication systems",
            "Access logging capabilities",
            "Geographic accessibility compliance",
            "Multi-device support",
            "Bandwidth optimization"
          ]
        }
      ]
    },
    {
      category: "Storage and Retrieval",
      icon: Download,
      color: "green",
      items: [
        {
          title: "Local Storage Options",
          description: "Requirements for offline document storage",
          requirements: [
            "Downloadable format support",
            "Version synchronization",
            "Offline accessibility features",
            "Storage format standards",
            "Data integrity verification"
          ]
        },
        {
          title: "Document Organization",
          description: "Structure and categorization requirements",
          requirements: [
            "Logical file organization",
            "Metadata requirements",
            "Search functionality",
            "Cross-reference capabilities",
            "Documentation hierarchy"
          ]
        }
      ]
    },
    {
      category: "Format Requirements",
      icon: Settings,
      color: "purple",
      items: [
        {
          title: "Document Formats",
          description: "Supported file formats and standards",
          requirements: [
            "PDF/A compliance",
            "Machine-readable formats",
            "Multimedia content support",
            "Language versioning",
            "Technical drawing formats"
          ]
        },
        {
          title: "Print Compatibility",
          description: "Requirements for physical reproduction",
          requirements: [
            "Print-ready formatting",
            "Paper size standardization",
            "Color management",
            "Resolution requirements",
            "Print quality validation"
          ]
        }
      ]
    },
    {
      category: "Version Control",
      icon: Clock,
      color: "orange",
      items: [
        {
          title: "Version Management",
          description: "Requirements for document versioning",
          requirements: [
            "Version tracking system",
            "Change log maintenance",
            "Version comparison tools",
            "Approval workflow tracking",
            "Historical version access"
          ]
        },
        {
          title: "Update Procedures",
          description: "Managing document updates and revisions",
          requirements: [
            "Update notification system",
            "Distribution tracking",
            "Revision marking",
            "Superseded document handling",
            "Emergency update procedures"
          ]
        }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Digital Documentation Requirements</h1>
        <p className="text-gray-600">Detailed requirements for digital documentation under Regulation 2023/1230</p>
      </header>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <section.icon className={`w-8 h-8 text-${section.color}-600`} />
            <h2 className="text-xl font-bold">{section.category}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {item.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <footer className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-blue-800">Documentation Note</h4>
            <p className="text-blue-900 text-sm">
              Digital documentation must be provided in both accessible digital formats and traditional paper 
              formats when requested. Manufacturers must ensure all documentation remains available and 
              accessible for at least 10 years after the machinery or related product has been placed on the market.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
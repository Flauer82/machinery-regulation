import { Shield, Lock, AlertTriangle, Wifi, Database, FileText, Settings, RefreshCw, Network, Check, Eye, Bell } from 'lucide-react';

export default function CyberSecurityDetail() {
  const sections = [
    {
      category: "Access Control & Authentication",
      icon: Lock,
      color: "red",
      items: [
        {
          title: "Physical Access Security",
          description: "Protection against unauthorized physical access",
          requirements: [
            "Access control for critical components",
            "Tamper detection systems",
            "Hardware security modules",
            "Physical port protection",
            "Security breach logging"
          ]
        },
        {
          title: "Digital Authentication",
          description: "Multi-level authentication systems",
          requirements: [
            "Role-based access control",
            "Multi-factor authentication",
            "Session management",
            "Credentials protection",
            "Access logging and auditing"
          ]
        }
      ]
    },
    {
      category: "Network Security",
      icon: Wifi,
      color: "blue",
      items: [
        {
          title: "Communication Security",
          description: "Secure data transmission protocols",
          requirements: [
            "Encrypted communications",
            "Secure network protocols",
            "Network segmentation",
            "Traffic monitoring",
            "Intrusion detection"
          ]
        },
        {
          title: "Remote Access",
          description: "Secure remote operation capabilities",
          requirements: [
            "VPN requirements",
            "Remote session security",
            "Connection monitoring",
            "Access time restrictions",
            "Emergency shutdown capabilities"
          ]
        }
      ]
    },
    {
      category: "Software Security",
      icon: Shield,
      color: "green",
      items: [
        {
          title: "Update Management",
          description: "Secure software update processes",
          requirements: [
            "Digital signature verification",
            "Rollback capabilities",
            "Version control",
            "Update authorization",
            "Testing requirements"
          ]
        },
        {
          title: "Runtime Protection",
          description: "Active protection during operation",
          requirements: [
            "Memory protection",
            "Process isolation",
            "Execution control",
            "Resource monitoring",
            "Error handling"
          ]
        }
      ]
    },
    {
      category: "Incident Response",
      icon: Bell,
      color: "orange",
      items: [
        {
          title: "Detection & Monitoring",
          description: "Security incident identification",
          requirements: [
            "Real-time monitoring",
            "Anomaly detection",
            "Event correlation",
            "Alert generation",
            "Incident logging"
          ]
        },
        {
          title: "Response Procedures",
          description: "Actions for security incidents",
          requirements: [
            "Incident classification",
            "Response protocols",
            "Communication procedures",
            "Recovery processes",
            "Documentation requirements"
          ]
        }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Cybersecurity Requirements</h1>
        <p className="text-gray-600">Comprehensive cybersecurity measures under Regulation 2023/1230</p>
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
                  <h4 className="font-semibold mb-2">Implementation Requirements:</h4>
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

      <footer className="mt-6 p-4 bg-red-50 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-red-800">Critical Security Note</h4>
            <p className="text-red-900 text-sm">Cybersecurity measures must be regularly reviewed and updated 
            to address emerging threats. Integration with existing industrial control systems must ensure 
            no compromise to operational safety.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

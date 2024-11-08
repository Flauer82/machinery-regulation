import { Shield, Settings, AlertTriangle, FileText, Activity, Check, RefreshCw, Database, Clock, Zap } from 'lucide-react';

export default function SafetyComponentsDetail() {
  const sections = [
    {
      category: "Control Systems",
      icon: Settings,
      color: "blue",
      items: [
        {
          title: "Safety Functions",
          description: "Core safety control requirements",
          requirements: [
            "Independent safety circuits",
            "Redundant monitoring",
            "Fail-safe operation",
            "Response time verification",
            "Performance level validation"
          ]
        },
        {
          title: "Operational Controls",
          description: "System operation management",
          requirements: [
            "Mode selection control",
            "Emergency stop functions",
            "Reset procedures",
            "Override management",
            "Operational state monitoring"
          ]
        }
      ]
    },
    {
      category: "Protection Devices",
      icon: Shield,
      color: "red",
      items: [
        {
          title: "Physical Guards",
          description: "Mechanical protection systems",
          requirements: [
            "Guard interlocking",
            "Guard positioning",
            "Strength requirements",
            "Access prevention",
            "Visibility requirements"
          ]
        },
        {
          title: "Electronic Protection",
          description: "Electronic safety devices",
          requirements: [
            "Presence detection",
            "Position monitoring",
            "Response time",
            "Environmental immunity",
            "Diagnostic capabilities"
          ]
        }
      ]
    },
    {
      category: "Software Safety",
      icon: Database,
      color: "purple",
      items: [
        {
          title: "Safety Software",
          description: "Software-based safety functions",
          requirements: [
            "Safety integrity level",
            "Real-time performance",
            "Error handling",
            "Data validation",
            "State monitoring"
          ]
        },
        {
          title: "System Integration",
          description: "Safety system integration requirements",
          requirements: [
            "Interface validation",
            "Communication safety",
            "System response",
            "Failure management",
            "Recovery procedures"
          ]
        }
      ]
    },
    {
      category: "Monitoring Systems",
      icon: Activity,
      color: "green",
      items: [
        {
          title: "Performance Monitoring",
          description: "Continuous safety performance tracking",
          requirements: [
            "Parameter monitoring",
            "Status indication",
            "Data recording",
            "Trend analysis",
            "Maintenance alerts"
          ]
        },
        {
          title: "Diagnostic Systems",
          description: "System health and fault diagnostics",
          requirements: [
            "Self-diagnostic functions",
            "Error detection",
            "Fault classification",
            "Maintenance support",
            "Testing facilities"
          ]
        }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Safety Components Requirements</h1>
        <p className="text-gray-600">Essential safety component requirements under Regulation 2023/1230</p>
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
                  <h4 className="font-semibold mb-2">Technical Requirements:</h4>
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

      <footer className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-yellow-800">Safety Critical Note</h4>
            <p className="text-yellow-900 text-sm">All safety components must be validated and certified 
            according to the appropriate conformity assessment procedures. Regular testing and maintenance 
            are essential for ensuring continued safe operation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

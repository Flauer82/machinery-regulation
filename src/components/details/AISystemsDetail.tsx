import { Cpu, Settings, Shield, AlertTriangle, Clock, Database, FileText, BarChart, UserCheck, RefreshCw, Check, Zap } from 'lucide-react';

export default function AISystemsDetail() {
  const sections = [
    {
      category: "Safety Architecture",
      icon: Shield,
      color: "blue",
      items: [
        {
          title: "Control System Safety",
          description: "Systems must implement hierarchical safety controls",
          requirements: [
            "Independent safety monitoring systems",
            "Redundant safety checks",
            "Fail-safe mechanisms",
            "Emergency stop functions",
            "Safety state monitoring"
          ]
        },
        {
          title: "Decision Boundaries",
          description: "Clear limitations on autonomous decision-making",
          requirements: [
            "Predefined operational limits",
            "Movement restrictions",
            "Action validation",
            "Safety parameter enforcement",
            "Boundary violation detection"
          ]
        }
      ]
    },
    {
      category: "Data Management",
      icon: Database,
      color: "green",
      items: [
        {
          title: "Recording Requirements",
          description: "Mandatory data logging for safety decisions",
          requirements: [
            "12-month data retention",
            "Decision process logging",
            "Safety event recording",
            "Performance metrics tracking",
            "System state logging"
          ]
        },
        {
          title: "Data Analysis",
          description: "Requirements for data processing and analysis",
          requirements: [
            "Real-time analysis capabilities",
            "Pattern recognition",
            "Anomaly detection",
            "Performance trending",
            "Safety correlation analysis"
          ]
        }
      ]
    },
    {
      category: "Learning System Controls",
      icon: Cpu,
      color: "purple",
      items: [
        {
          title: "Learning Boundaries",
          description: "Controls on machine learning processes",
          requirements: [
            "Defined learning parameters",
            "Training data validation",
            "Learning outcome verification",
            "Safety constraint enforcement",
            "Learning process monitoring"
          ]
        },
        {
          title: "Update Management",
          description: "Requirements for system updates and evolution",
          requirements: [
            "Controlled update process",
            "Safety impact assessment",
            "Rollback capabilities",
            "Version control",
            "Update validation"
          ]
        }
      ]
    },
    {
      category: "Human Interaction",
      icon: UserCheck,
      color: "orange",
      items: [
        {
          title: "Operator Interface",
          description: "Requirements for human-machine interaction",
          requirements: [
            "Clear status indicators",
            "Intuitive controls",
            "Emergency override capability",
            "Mode awareness",
            "Warning systems"
          ]
        },
        {
          title: "Supervision Systems",
          description: "Requirements for human oversight",
          requirements: [
            "Real-time monitoring tools",
            "Intervention capabilities",
            "Performance reporting",
            "Alert systems",
            "Audit trails"
          ]
        }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">AI & Autonomous Systems Requirements</h1>
        <p className="text-gray-600">Detailed requirements under Regulation 2023/1230</p>
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
            <h4 className="font-semibold text-blue-800">Implementation Note</h4>
            <p className="text-blue-900 text-sm">These requirements must be implemented by January 14, 2027. 
            Regular assessment and updates may be needed to ensure continued compliance as AI technology evolves.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

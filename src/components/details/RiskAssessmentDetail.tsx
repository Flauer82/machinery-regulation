import { AlertTriangle, Search, FileText, BarChart, Activity, Shield, Eye, RefreshCw, Check, Clock, Settings, Zap } from 'lucide-react';

export default function RiskAssessmentDetail() {
  const sections = [
    {
      category: "Initial Risk Identification",
      icon: Search,
      color: "blue",
      items: [
        {
          title: "Hazard Analysis",
          description: "Systematic identification of potential hazards",
          requirements: [
            "Machinery functional analysis",
            "Operational environment assessment",
            "User interaction scenarios",
            "Foreseeable misuse identification",
            "AI/ML behavior analysis"
          ]
        },
        {
          title: "Use Case Assessment",
          description: "Analysis of intended and foreseeable usage",
          requirements: [
            "Normal operation scenarios",
            "Maintenance scenarios",
            "Emergency situations",
            "Special operations",
            "Training requirements"
          ]
        }
      ]
    },
    {
      category: "Risk Analysis Process",
      icon: Activity,
      color: "red",
      items: [
        {
          title: "Risk Calculation",
          description: "Quantitative and qualitative risk evaluation",
          requirements: [
            "Severity assessment",
            "Probability calculation",
            "Exposure evaluation",
            "Risk level determination",
            "Uncertainty analysis"
          ]
        },
        {
          title: "Risk Factors",
          description: "Consideration of all risk-influencing factors",
          requirements: [
            "Technical factors",
            "Human factors",
            "Environmental conditions",
            "System interactions",
            "Temporal aspects"
          ]
        }
      ]
    },
    {
      category: "Risk Treatment",
      icon: Shield,
      color: "green",
      items: [
        {
          title: "Risk Mitigation",
          description: "Measures to reduce identified risks",
          requirements: [
            "Inherent safe design",
            "Technical protection measures",
            "Information for users",
            "Training requirements",
            "Personal protective equipment"
          ]
        },
        {
          title: "Implementation",
          description: "Application of risk reduction measures",
          requirements: [
            "Hierarchy of controls",
            "Validation of measures",
            "Documentation of changes",
            "Impact assessment",
            "Effectiveness verification"
          ]
        }
      ]
    },
    {
      category: "Monitoring & Review",
      icon: RefreshCw,
      color: "purple",
      items: [
        {
          title: "Performance Monitoring",
          description: "Continuous assessment of risk controls",
          requirements: [
            "Regular inspections",
            "Performance indicators",
            "Incident investigation",
            "Feedback collection",
            "Trend analysis"
          ]
        },
        {
          title: "System Updates",
          description: "Management of system changes",
          requirements: [
            "Change impact assessment",
            "Update validation",
            "Documentation updates",
            "Staff communication",
            "Retraining requirements"
          ]
        }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Risk Assessment Framework</h1>
        <p className="text-gray-600">Enhanced risk assessment requirements under Regulation 2023/1230</p>
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
    </div>
  );
}

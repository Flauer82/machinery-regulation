import { Book, FileText, Settings, RefreshCw, UserCheck, AlertTriangle, Check } from 'lucide-react';

export default function ScopeDefinitionsDetail() {
  const sections = [
    {
      category: "Safety Software Coverage",
      icon: FileText,
      color: "blue",
      items: [
        {
          title: "Software Safety Functions",
          description: "New requirements for safety-critical software",
          requirements: [
            "Explicit inclusion of standalone safety software",
            "Software validation requirements",
            "Integration with hardware systems",
            "Update and modification procedures",
            "Version control requirements"
          ]
        },
        {
          title: "Software Assessment",
          description: "Evaluation criteria for safety software",
          requirements: [
            "Risk assessment methodology",
            "Performance validation",
            "Failure mode analysis",
            "Security considerations",
            "Documentation requirements"
          ]
        }
      ]
    },
    {
      category: "Machinery Definitions",
      icon: Settings,
      color: "green",
      items: [
        {
          title: "Partly Completed Machinery",
          description: "Updated definition and requirements",
          requirements: [
            "Clear scope of application",
            "Integration requirements",
            "Documentation needs",
            "Risk assessment obligations",
            "Conformity procedures"
          ]
        },
        {
          title: "Substantial Modification",
          description: "Framework for major changes",
          requirements: [
            "Criteria for substantial changes",
            "Assessment requirements",
            "Documentation updates",
            "New risk assessments",
            "Conformity reassessment"
          ]
        }
      ]
    },
    {
      category: "Autonomous Systems",
      icon: RefreshCw,
      color: "purple",
      items: [
        {
          title: "Autonomous Mobile Machinery",
          description: "Requirements for self-operating systems",
          requirements: [
            "Operational boundaries definition",
            "Safety system requirements",
            "Environmental interaction rules",
            "Emergency stop capabilities",
            "Human interface requirements"
          ]
        },
        {
          title: "Supervisory Functions",
          description: "Requirements for human oversight",
          requirements: [
            "Supervisor role definition",
            "Remote monitoring capabilities",
            "Intervention mechanisms",
            "Alert and warning systems",
            "Training requirements"
          ]
        }
      ]
    },
    {
      category: "Implementation Framework",
      icon: UserCheck,
      color: "orange",
      items: [
        {
          title: "Regulatory Compliance",
          description: "Framework for ensuring compliance",
          requirements: [
            "Documentation requirements",
            "Assessment procedures",
            "Conformity marking",
            "Market surveillance provisions",
            "Enforcement mechanisms"
          ]
        },
        {
          title: "Transition Guidelines",
          description: "Implementation and adaptation process",
          requirements: [
            "Timeline requirements",
            "Adaptation procedures",
            "Legacy system handling",
            "Documentation updates",
            "Staff training needs"
          ]
        }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Scope and Definitions</h1>
        <p className="text-gray-600">Detailed analysis of updated scope and definitions under Regulation 2023/1230</p>
      </header>

      {/* Sections rendering - same structure as other detail components */}
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
            <p className="text-blue-900 text-sm">
              These updated definitions and scope changes represent significant modifications to the regulatory 
              framework. Organizations should carefully review their existing systems and documentation to ensure 
              alignment with the new requirements by the implementation deadline.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
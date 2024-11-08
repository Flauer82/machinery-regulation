import { Link } from 'react-router-dom';
import { Globe, Download, Printer, Book, Clock, Cpu, Shield, FileText, AlertTriangle, ChevronRight, Settings, Database, RefreshCw, UserCheck, Lock, Cog, Network, Bell, Search, Activity, CheckCircle, GitBranch } from 'lucide-react';

export default function TechnicalRequirements() {
  const sections = [
    {
      title: "Scope and Definitions",
      icon: Book,
      items: [
        {
          icon: FileText,
          title: "Safety Software",
          details: "New coverage for software ensuring safety functions"
        },
        {
          icon: Settings,
          title: "Machine Definitions",
          details: "Updated definitions for machinery categories"
        },
        {
          icon: RefreshCw,
          title: "Modifications",
          details: "New framework for substantial modifications"
        },
        {
          icon: UserCheck,
          title: "Autonomous Systems",
          details: "Definitions for autonomous machinery supervision"
        }
      ],
      detailsPath: "/technical-requirements/scope-definitions"
    },
    {
      title: "AI & Autonomous Systems",
      icon: Cpu,
      items: [
        {
          icon: Settings,
          title: "Safety Functions",
          details: "Self-monitoring capabilities with defined operational boundaries"
        },
        {
          icon: Database,
          title: "Data Logging",
          details: "One-year retention of safety-related decision data"
        },
        {
          icon: RefreshCw,
          title: "Learning Systems",
          details: "Controlled evolution within safety parameters"
        },
        {
          icon: UserCheck,
          title: "Human Oversight",
          details: "Supervisory functions for autonomous operations"
        }
      ],
      detailsPath: "/technical-requirements/ai-systems"
    },
    {
      title: "Digital Documentation",
      icon: FileText,
      items: [
        {
          icon: Globe,
          title: "Online Accessibility",
          details: "Accessible for minimum 10 years after market placement"
        },
        {
          icon: Download,
          title: "Offline Storage",
          details: "Downloadable format for local storage and access"
        },
        {
          icon: Printer,
          title: "Print Options",
          details: "Ability to generate paper copies on request"
        },
        {
          icon: Clock,
          title: "Version Control",
          details: "Tracking of updates and modifications"
        }
      ],
      detailsPath: "/technical-requirements/digital-documentation"
    },
    {
      title: "Cybersecurity Requirements",
      icon: Shield,
      items: [
        {
          icon: Lock,
          title: "Hardware Security",
          details: "Protection against unauthorized physical access"
        },
        {
          icon: Cog,
          title: "Software Protection",
          details: "Secure update processes and integrity verification"
        },
        {
          icon: Network,
          title: "Network Security",
          details: "Secure protocols and threat detection systems"
        },
        {
          icon: Bell,
          title: "Incident Response",
          details: "Automated detection and response procedures"
        }
      ],
      detailsPath: "/technical-requirements/cybersecurity"
    },
    {
      title: "Risk Assessment Framework",
      icon: AlertTriangle,
      items: [
        {
          icon: Search,
          title: "Hazard Identification",
          details: "Comprehensive analysis of potential risks"
        },
        {
          icon: Activity,
          title: "Risk Analysis",
          details: "Evaluation of AI/ML and cybersecurity risks"
        },
        {
          icon: CheckCircle,
          title: "Mitigation Measures",
          details: "Implementation of risk control strategies"
        },
        {
          icon: RefreshCw,
          title: "Continuous Monitoring",
          details: "Ongoing assessment and updates"
        }
      ],
      detailsPath: "/technical-requirements/risk-assessment"
    },
    {
      title: "Safety Components",
      icon: Shield,
      items: [
        {
          icon: Cog,
          title: "Control Systems",
          details: "Self-diagnostic and fail-safe mechanisms"
        },
        {
          icon: Shield,
          title: "Protection Devices",
          details: "Access control and status monitoring"
        },
        {
          icon: GitBranch,
          title: "Software Safety",
          details: "Version control and integrity validation"
        },
        {
          icon: Database,
          title: "Performance Tracking",
          details: "Continuous monitoring and logging"
        }
      ],
      detailsPath: "/technical-requirements/safety-components"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Technical Requirements Overview</h1>
      
      {sections.map((section) => (
        <div key={section.title} className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <section.icon className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">{section.title}</h2>
            </div>
            <Link
              to={section.detailsPath || '/default-path'}
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100"
            >
              View Details
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.items.map((item) => (
              <div key={item.title} className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
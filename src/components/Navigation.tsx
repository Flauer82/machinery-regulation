import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Home, FileText } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const breadcrumbs = [
    { path: '/', label: 'Article' },
    { path: '/technical-requirements', label: 'Technical Requirements' },
    { path: '/technical-requirements/ai-systems', label: 'AI & Autonomous Systems' },
    { path: '/technical-requirements/cybersecurity', label: 'Cybersecurity' },
    { path: '/technical-requirements/digital-documentation', label: 'Digital Documentation' },
    { path: '/technical-requirements/risk-assessment', label: 'Risk Assessment' },
    { path: '/technical-requirements/safety-components', label: 'Safety Components' },
  ].filter(crumb => location.pathname.includes(crumb.path));

  return (
    <div className="bg-white shadow-sm">
      {/* Reference Links Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10 space-x-6 text-sm">
            <a 
              href="https://eur-lex.europa.eu/eli/dir/2006/42/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <FileText className="w-4 h-4 mr-1" />
              Directive 2006/42/EC
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="https://eur-lex.europa.eu/eli/reg/2023/1230/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <FileText className="w-4 h-4 mr-1" />
              Regulation (EU) 2023/1230
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-gray-100"
              title="Back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="p-2 rounded-full hover:bg-gray-100"
              title="Forward"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-gray-100"
              title="Home"
            >
              <Home className="w-5 h-5" />
            </Link>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.path} className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
                <Link
                  to={crumb.path}
                  className={`text-sm ${
                    location.pathname === crumb.path
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
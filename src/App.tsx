import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Article from './components/article/Article';
import TechnicalRequirements from './components/article/TechnicalRequirements';
import AISystemsDetail from './components/details/AISystemsDetail';
import CyberSecurityDetail from './components/details/CyberSecurityDetail';
import DigitalDocs from './components/details/DigitalDocs';
import RiskAssessmentDetail from './components/details/RiskAssessmentDetail';
import SafetyComponentsDetail from './components/details/SafetyComponentsDetail';
import ScopeDefinitionsDetail from './components/details/ScopeDefinition';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/technical-requirements" element={<TechnicalRequirements />} />
          <Route path="/technical-requirements/scope-definitions" element={<ScopeDefinitionsDetail />} />
          <Route path="/technical-requirements/ai-systems" element={<AISystemsDetail />} />
          <Route path="/technical-requirements/cybersecurity" element={<CyberSecurityDetail />} />
          <Route path="/technical-requirements/digital-documentation" element={<DigitalDocs />} />
          <Route path="/technical-requirements/risk-assessment" element={<RiskAssessmentDetail />} />
          <Route path="/technical-requirements/safety-components" element={<SafetyComponentsDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
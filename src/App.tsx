import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { AnimatedBackground } from './components/AnimatedBackground';

// Page imports
import { HomePage } from './components/pages/HomePage';
import { LoginPage } from './components/pages/LoginPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { CropRecommendationPage } from './components/pages/CropRecommendationPage';
import { SoilNutrientPage } from './components/pages/SoilNutrientPage';
import { DiseaseDetectionPage } from './components/pages/DiseaseDetectionPage';
import { WeatherInsightsPage } from './components/pages/WeatherInsightsPage';
import { KnowledgeBasePage } from './components/pages/KnowledgeBasePage';

// Placeholder components for remaining pages
import { PlaceholderPage } from './components/PlaceholderPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    const pageProps = { onNavigate: handleNavigate };
    
    switch (currentPage) {
      case 'home':
        return <HomePage {...pageProps} isLoggedIn={isLoggedIn} />;
      case 'login':
        return <LoginPage {...pageProps} onLogin={handleLogin} />;
      case 'register':
        return <RegisterPage {...pageProps} onLogin={handleLogin} />;
      case 'dashboard':
        return <DashboardPage {...pageProps} />;
      case 'crop-recommendation':
        return <CropRecommendationPage {...pageProps} />;
      case 'soil-nutrient':
        return <SoilNutrientPage {...pageProps} />;
      case 'disease-detection':
        return <DiseaseDetectionPage {...pageProps} />;
      case 'weather':
        return <WeatherInsightsPage {...pageProps} />;
      case 'knowledge-base':
        return <KnowledgeBasePage {...pageProps} />;
      case 'offline-mode':
        return <PlaceholderPage title="Offline Mode" description="Access saved data and continue working without internet connection" icon="wifi-off" />;
      case 'profile':
        return <PlaceholderPage title="Farmer Profile" description="Manage your profile, farm details, and preferences" icon="user" />;
      case 'settings':
        return <PlaceholderPage title="Settings" description="Configure app preferences, notifications, and account settings" icon="settings" />;
      case 'community':
        return <PlaceholderPage title="Community & Help" description="Connect with other farmers, get support, and share knowledge" icon="users" />;
      case 'reports':
        return <PlaceholderPage title="Reports & History" description="View detailed analytics, historical data, and generate reports" icon="bar-chart" />;
      default:
        return <HomePage {...pageProps} isLoggedIn={isLoggedIn} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation Sidebar */}
      {currentPage !== 'login' && currentPage !== 'register' && (
        <Navigation 
          currentPage={currentPage} 
          onNavigate={handleNavigate}
          isLoggedIn={isLoggedIn}
        />
      )}
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        {/* Full-screen desktop layout with sidebar offset */}
        <div className={`min-h-screen transition-all duration-300 ${
          currentPage !== 'login' && currentPage !== 'register' 
            ? 'lg:ml-64' // Only left margin for sidebar, full width content
            : '' // No constraints when no sidebar
        }`}>
          {/* Content takes full available space */}
          <div className="min-h-screen">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full min-h-screen"
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Logout button for logged in users */}
      {isLoggedIn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleLogout}
          className="fixed top-6 right-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
        >
          Logout
        </motion.button>
      )}
    </div>
  );
}
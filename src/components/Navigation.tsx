import { motion } from 'motion/react';
import { 
  Home, 
  User, 
  LogIn, 
  UserPlus, 
  LayoutDashboard, 
  Sprout, 
  TestTube, 
  Bug, 
  Cloud, 
  BookOpen, 
  Wifi, 
  Settings, 
  Users, 
  FileText,
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
}

const menuItems = [
  { id: 'home', label: 'Home', icon: Home, public: true },
  { id: 'login', label: 'Login', icon: LogIn, public: true, hideWhenLoggedIn: true },
  { id: 'register', label: 'Register', icon: UserPlus, public: true, hideWhenLoggedIn: true },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, requiresAuth: true },
  { id: 'crop-recommendation', label: 'Crop Recommendation', icon: Sprout, requiresAuth: true },
  { id: 'soil-nutrient', label: 'Soil Management', icon: TestTube, requiresAuth: true },
  { id: 'disease-detection', label: 'Disease Detection', icon: Bug, requiresAuth: true },
  { id: 'weather', label: 'Weather Insights', icon: Cloud, requiresAuth: true },
  { id: 'knowledge-base', label: 'Knowledge Base', icon: BookOpen, public: true },
  { id: 'offline-mode', label: 'Offline Mode', icon: Wifi, requiresAuth: true },
  { id: 'profile', label: 'Profile', icon: User, requiresAuth: true },
  { id: 'settings', label: 'Settings', icon: Settings, requiresAuth: true },
  { id: 'community', label: 'Community', icon: Users, public: true },
  { id: 'reports', label: 'Reports', icon: FileText, requiresAuth: true },
];

export function Navigation({ currentPage, onNavigate, isLoggedIn }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const filteredMenuItems = menuItems.filter(item => {
    if (item.requiresAuth && !isLoggedIn) return false;
    if (item.hideWhenLoggedIn && isLoggedIn) return false;
    return true;
  });

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-sm border-lime-200"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen || window.innerWidth >= 1024 ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-sm border-r border-lime-200 shadow-xl z-40 lg:w-64 lg:bg-white lg:shadow-lg lg:border-r-2 lg:border-lime-100"
      >
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 mb-8 pt-12 lg:pt-0"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center">
              <Sprout className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CropCare</h1>
              <p className="text-sm text-gray-600">Smart Farming</p>
            </div>
          </motion.div>

          <nav className="space-y-2">
            {filteredMenuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-lime-500 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:bg-lime-50 hover:text-lime-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </motion.div>
              );
            })}
          </nav>
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
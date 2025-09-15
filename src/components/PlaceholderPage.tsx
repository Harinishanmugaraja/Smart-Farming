import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  WifiOff, 
  User, 
  Settings, 
  Users, 
  BarChart3,
  Construction,
  ArrowLeft
} from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap = {
  'wifi-off': WifiOff,
  'user': User,
  'settings': Settings,
  'users': Users,
  'bar-chart': BarChart3
};

export function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Construction;

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-gradient-to-br from-lime-400 to-lime-600 rounded-3xl flex items-center justify-center mx-auto mb-8"
            >
              <Icon className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center space-x-2 text-lime-600 mb-6">
                <Construction className="w-5 h-5" />
                <span className="font-medium">Coming Soon</span>
              </div>
              
              <p className="text-gray-500 mb-8">
                This feature is currently under development. We're working hard to bring you 
                the best farming management tools. Stay tuned for updates!
              </p>
              
              <Button 
                onClick={() => window.history.back()}
                className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
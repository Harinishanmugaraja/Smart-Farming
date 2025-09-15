import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { 
  Sprout, 
  Droplets, 
  Thermometer, 
  Sun, 
  AlertTriangle, 
  TrendingUp, 
  Calendar,
  MapPin,
  Bell,
  ArrowRight,
  Activity,
  Shield,
  BarChart3
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

const quickActions = [
  {
    icon: Sprout,
    title: 'Crop Recommendations',
    description: 'Get AI-powered crop suggestions',
    color: 'from-green-400 to-lime-500',
    page: 'crop-recommendation'
  },
  {
    icon: Droplets,
    title: 'Soil Analysis',
    description: 'Check soil nutrient levels',
    color: 'from-blue-400 to-cyan-500',
    page: 'soil-nutrient'
  },
  {
    icon: Shield,
    title: 'Disease Detection',
    description: 'Scan for plant diseases',
    color: 'from-red-400 to-pink-500',
    page: 'disease-detection'
  },
  {
    icon: Sun,
    title: 'Weather Insights',
    description: 'View weather forecasts',
    color: 'from-yellow-400 to-orange-500',
    page: 'weather'
  }
];

const recentActivities = [
  { id: 1, type: 'scan', message: 'Disease scan completed for Field A', time: '2 hours ago', status: 'success' },
  { id: 2, type: 'weather', message: 'Rain predicted for tomorrow', time: '4 hours ago', status: 'warning' },
  { id: 3, type: 'nutrient', message: 'Soil test results available', time: '6 hours ago', status: 'info' },
  { id: 4, type: 'crop', message: 'New crop recommendation generated', time: '1 day ago', status: 'success' }
];

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Green Valley Farm</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>September 15, 2025</span>
              </div>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 flex items-center space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <Bell className="w-4 h-4" />
              <span>3 Alerts</span>
            </Button>
            <Button className="bg-lime-500 hover:bg-lime-600">
              <Activity className="w-4 h-4 mr-2" />
              Quick Scan
            </Button>
          </div>
        </motion.div>

        {/* Weather & Current Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Sun className="w-12 h-12 mx-auto mb-2 animate-pulse" />
                  <div className="text-2xl font-bold">28°C</div>
                  <div className="text-blue-100">Sunny</div>
                </div>
                <div className="text-center">
                  <Droplets className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold">65%</div>
                  <div className="text-blue-100">Humidity</div>
                </div>
                <div className="text-center">
                  <Thermometer className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold">25°C</div>
                  <div className="text-blue-100">Soil Temp</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold">Good</div>
                  <div className="text-blue-100">Growing Conditions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {action.description}
                    </p>
                    <Button
                      variant="ghost"
                      onClick={() => onNavigate(action.page)}
                      className="text-lime-600 hover:text-lime-700 hover:bg-lime-50 p-0 h-auto font-semibold"
                    >
                      Open <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats & Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Farm Health Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-lime-500" />
                  <span>Farm Health Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Crop Health</span>
                    <span className="text-sm font-semibold text-green-600">92%</span>
                  </div>
                  <Progress value={92} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Soil Quality</span>
                    <span className="text-sm font-semibold text-lime-600">88%</span>
                  </div>
                  <Progress value={88} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Water Efficiency</span>
                    <span className="text-sm font-semibold text-blue-600">76%</span>
                  </div>
                  <Progress value={76} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Disease Prevention</span>
                    <span className="text-sm font-semibold text-purple-600">95%</span>
                  </div>
                  <Progress value={95} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-lime-500" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-medium">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                      <Badge 
                        variant={activity.status === 'warning' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {activity.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-orange-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Weather Alert</h3>
                  <p className="text-gray-600 text-sm">Heavy rainfall expected tomorrow. Consider protective measures for sensitive crops.</p>
                </div>
                <Button variant="outline" size="sm" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
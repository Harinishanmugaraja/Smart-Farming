import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye,
  ArrowUp,
  ArrowDown,
  Calendar,
  AlertTriangle,
  Umbrella,
  Snowflake,
  CloudSnow
} from 'lucide-react';

interface WeatherInsightsPageProps {
  onNavigate: (page: string) => void;
}

const currentWeather = {
  temperature: 28,
  condition: 'Sunny',
  humidity: 65,
  windSpeed: 12,
  visibility: 10,
  uvIndex: 7,
  pressure: 1013,
  dewPoint: 18
};

const weeklyForecast = [
  { day: 'Today', date: 'Sep 15', high: 28, low: 18, condition: 'sunny', precipitation: 0, icon: Sun },
  { day: 'Tomorrow', date: 'Sep 16', high: 32, low: 22, condition: 'cloudy', precipitation: 20, icon: Cloud },
  { day: 'Wednesday', date: 'Sep 17', high: 29, low: 19, condition: 'rainy', precipitation: 80, icon: CloudRain },
  { day: 'Thursday', date: 'Sep 18', high: 25, low: 16, condition: 'rainy', precipitation: 90, icon: CloudRain },
  { day: 'Friday', date: 'Sep 19', high: 27, low: 18, condition: 'partly-cloudy', precipitation: 30, icon: Cloud },
  { day: 'Saturday', date: 'Sep 20', high: 30, low: 20, condition: 'sunny', precipitation: 10, icon: Sun },
  { day: 'Sunday', date: 'Sep 21', high: 31, low: 21, condition: 'sunny', precipitation: 5, icon: Sun }
];

const farmingAlerts = [
  {
    type: 'warning',
    title: 'Heavy Rain Expected',
    message: 'Protect sensitive crops from potential flooding',
    timing: 'Tomorrow 2-6 PM',
    action: 'Cover crops, check drainage'
  },
  {
    type: 'info',
    title: 'Optimal Spraying Window',
    message: 'Low wind conditions perfect for pesticide application',
    timing: 'Today 6-9 AM',
    action: 'Schedule pest control'
  },
  {
    type: 'success',
    title: 'Good Growing Conditions',
    message: 'Temperature and humidity ideal for crop development',
    timing: 'Next 3 days',
    action: 'Monitor growth progress'
  }
];

const hourlyData = [
  { time: '6 AM', temp: 18, humidity: 75, wind: 8, condition: 'Clear' },
  { time: '9 AM', temp: 22, humidity: 68, wind: 10, condition: 'Sunny' },
  { time: '12 PM', temp: 28, humidity: 65, wind: 12, condition: 'Sunny' },
  { time: '3 PM', temp: 30, humidity: 60, wind: 15, condition: 'Sunny' },
  { time: '6 PM', temp: 26, humidity: 68, wind: 10, condition: 'Clear' },
  { time: '9 PM', temp: 22, humidity: 72, wind: 8, condition: 'Clear' }
];

export function WeatherInsightsPage({ onNavigate }: WeatherInsightsPageProps) {
  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return 'text-yellow-600';
      case 'cloudy': case 'partly-cloudy': return 'text-gray-600';
      case 'rainy': return 'text-blue-600';
      case 'stormy': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning': return 'border-l-orange-500 bg-orange-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      case 'success': return 'border-l-green-500 bg-green-50';
      case 'danger': return 'border-l-red-500 bg-red-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'info': return <Eye className="w-5 h-5 text-blue-600" />;
      case 'success': return <Sun className="w-5 h-5 text-green-600" />;
      default: return <AlertTriangle className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sun className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Weather Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time weather monitoring and agricultural forecasting to help you make 
            informed farming decisions and protect your crops.
          </p>
        </motion.div>

        {/* Current Weather */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                    <Sun className="w-16 h-16 animate-pulse" />
                    <div>
                      <div className="text-6xl font-bold">{currentWeather.temperature}°C</div>
                      <div className="text-2xl text-blue-100">{currentWeather.condition}</div>
                    </div>
                  </div>
                  <div className="text-blue-100">
                    Green Valley Farm • September 15, 2025
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Droplets className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentWeather.humidity}%</div>
                    <div className="text-blue-100 text-sm">Humidity</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Wind className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentWeather.windSpeed}</div>
                    <div className="text-blue-100 text-sm">km/h Wind</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentWeather.visibility}</div>
                    <div className="text-blue-100 text-sm">km Visibility</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Thermometer className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentWeather.uvIndex}</div>
                    <div className="text-blue-100 text-sm">UV Index</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Weather Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-900">Farming Alerts</h2>
          <div className="grid gap-4">
            {farmingAlerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className={`border-l-4 ${getAlertColor(alert.type)} border-0 shadow-lg`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{alert.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {alert.timing}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-2">{alert.message}</p>
                        <p className="text-sm font-medium text-gray-600">
                          Recommended: {alert.action}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 7-Day Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>7-Day Forecast</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {weeklyForecast.map((day, index) => {
                  const Icon = day.icon;
                  return (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="font-semibold text-gray-900 mb-1">{day.day}</div>
                      <div className="text-sm text-gray-500 mb-3">{day.date}</div>
                      <Icon className={`w-8 h-8 mx-auto mb-3 ${getConditionColor(day.condition)}`} />
                      <div className="space-y-1">
                        <div className="flex items-center justify-center space-x-2">
                          <ArrowUp className="w-3 h-3 text-red-500" />
                          <span className="font-semibold">{day.high}°</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <ArrowDown className="w-3 h-3 text-blue-500" />
                          <span className="text-gray-600">{day.low}°</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1 mt-2">
                          <Droplets className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-gray-500">{day.precipitation}%</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hourly Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Today's Hourly Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="flex space-x-6 pb-4">
                  {hourlyData.map((hour, index) => (
                    <motion.div
                      key={hour.time}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                      className="flex-shrink-0 text-center p-4 bg-gray-50 rounded-lg min-w-[120px]"
                    >
                      <div className="font-semibold text-gray-900 mb-2">{hour.time}</div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{hour.temp}°</div>
                      <div className="text-sm text-gray-600 mb-1">{hour.condition}</div>
                      <div className="space-y-1 text-xs text-gray-500">
                        <div className="flex items-center justify-center space-x-1">
                          <Droplets className="w-3 h-3" />
                          <span>{hour.humidity}%</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <Wind className="w-3 h-3" />
                          <span>{hour.wind} km/h</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Agricultural Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-green-500 to-lime-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Weather-Based Farming Tips</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Umbrella className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Rain Protection</h3>
                  <p className="text-green-100">Cover sensitive plants before tomorrow's rain</p>
                </div>
                <div className="text-center">
                  <Sun className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Optimal Growth</h3>
                  <p className="text-green-100">Perfect conditions for photosynthesis today</p>
                </div>
                <div className="text-center">
                  <Wind className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Low Wind Window</h3>
                  <p className="text-green-100">Ideal for spraying and pollination activities</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button
                  onClick={() => onNavigate('crop-recommendation')}
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  Get Crop Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'motion/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  TestTube, 
  Droplets, 
  Leaf, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Zap,
  Calendar,
  MapPin
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SoilNutrientPageProps {
  onNavigate: (page: string) => void;
}

const soilData = {
  ph: { value: 6.8, status: 'optimal', range: '6.0-7.0' },
  nitrogen: { value: 45, status: 'low', range: '60-80' },
  phosphorus: { value: 78, status: 'high', range: '40-60' },
  potassium: { value: 62, status: 'optimal', range: '60-80' },
  organicMatter: { value: 3.2, status: 'good', range: '3.0-4.0' },
  moisture: { value: 35, status: 'low', range: '40-60' }
};

const recommendations = [
  {
    nutrient: 'Nitrogen',
    action: 'Apply organic fertilizer',
    amount: '15-20 kg/hectare',
    urgency: 'high',
    timing: 'Within 1 week',
    cost: '$150-200'
  },
  {
    nutrient: 'Phosphorus',
    action: 'Reduce phosphate inputs',
    amount: 'Skip next application',
    urgency: 'medium',
    timing: 'Next season',
    cost: 'Save $100'
  },
  {
    nutrient: 'Moisture',
    action: 'Increase irrigation',
    amount: '25% more water',
    urgency: 'high',
    timing: 'Immediate',
    cost: '$50-75'
  }
];

const fieldHistory = [
  { date: '2025-08-15', ph: 6.7, nitrogen: 42, phosphorus: 72, notes: 'Post-harvest analysis' },
  { date: '2025-06-10', ph: 6.9, nitrogen: 48, phosphorus: 68, notes: 'Mid-season check' },
  { date: '2025-03-20', ph: 6.8, nitrogen: 52, phosphorus: 65, notes: 'Pre-planting analysis' },
  { date: '2025-01-15', ph: 6.6, nitrogen: 38, phosphorus: 70, notes: 'Winter baseline' }
];

export function SoilNutrientPage({ onNavigate }: SoilNutrientPageProps) {
  const [selectedField, setSelectedField] = useState('field-a');
  const [scanningMode, setScanningMode] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-green-600';
      case 'good': return 'text-lime-600';
      case 'high': return 'text-orange-600';
      case 'low': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'optimal': return 'bg-green-500';
      case 'good': return 'bg-lime-500';
      case 'high': return 'bg-orange-500';
      case 'low': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <TestTube className="w-10 h-10 text-white animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Soil Nutrient Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time soil analysis and personalized nutrient recommendations 
            to optimize your crop health and maximize yields.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            onClick={() => setScanningMode(true)}
            className="bg-lime-500 hover:bg-lime-600 px-6 py-3"
          >
            <TestTube className="w-5 h-5 mr-2" />
            Quick Soil Scan
          </Button>
          <Button variant="outline" className="px-6 py-3">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Test
          </Button>
          <Button variant="outline" className="px-6 py-3">
            <MapPin className="w-5 h-5 mr-2" />
            Field Mapper
          </Button>
        </motion.div>

        <Tabs defaultValue="current" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="current">Current Status</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-8">
            {/* Field Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-lime-500" />
                    <span>Field Selection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['field-a', 'field-b', 'field-c'].map((field) => (
                      <button
                        key={field}
                        onClick={() => setSelectedField(field)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedField === field
                            ? 'border-lime-500 bg-lime-50'
                            : 'border-gray-200 hover:border-lime-300'
                        }`}
                      >
                        <div className="text-sm font-semibold capitalize">
                          {field.replace('-', ' ')}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Last tested: Sep 10, 2025
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Soil Analysis Results */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(soilData).map(([key, data], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <Badge className={`${getStatusBg(data.status)} text-white`}>
                          {data.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className={`text-3xl font-bold ${getStatusColor(data.status)} mb-1`}>
                            {data.value}{key === 'ph' ? '' : key === 'organicMatter' ? '%' : key === 'moisture' ? '%' : ' ppm'}
                          </div>
                          <div className="text-sm text-gray-500">
                            Optimal: {data.range}{key === 'ph' ? '' : key === 'organicMatter' ? '%' : key === 'moisture' ? '%' : ' ppm'}
                          </div>
                        </div>
                        
                        <Progress 
                          value={key === 'ph' ? (data.value / 14) * 100 : data.value} 
                          className="h-2"
                        />
                        
                        <div className="flex justify-center">
                          {data.status === 'optimal' || data.status === 'good' ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-orange-500" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Overall Health Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Overall Soil Health Score</h2>
                    <div className="text-6xl font-bold mb-4">78</div>
                    <div className="text-lime-100 text-lg mb-6">
                      Good condition with room for improvement
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-semibold">Improving</div>
                        <div className="text-lime-100 text-sm">+5 points this month</div>
                      </div>
                      <div>
                        <Zap className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-semibold">3 Issues</div>
                        <div className="text-lime-100 text-sm">Need attention</div>
                      </div>
                      <div>
                        <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                        <div className="font-semibold">85% Target</div>
                        <div className="text-lime-100 text-sm">Expected by next season</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.nutrient}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{rec.nutrient} Management</h3>
                          <p className="text-gray-600">{rec.action}</p>
                        </div>
                        <Badge className={`${getUrgencyColor(rec.urgency)} border`}>
                          {rec.urgency} priority
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="font-semibold">{rec.amount}</div>
                          <div className="text-sm text-gray-500">Amount</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="font-semibold">{rec.timing}</div>
                          <div className="text-sm text-gray-500">Timing</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="font-semibold">{rec.cost}</div>
                          <div className="text-sm text-gray-500">Est. Cost</div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button className="bg-lime-500 hover:bg-lime-600 flex-1">
                          Apply Recommendation
                        </Button>
                        <Button variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Historical Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fieldHistory.map((entry, index) => (
                      <motion.div
                        key={entry.date}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <div className="font-semibold">{entry.date}</div>
                          <div className="text-sm text-gray-500">{entry.notes}</div>
                        </div>
                        <div className="flex space-x-6 text-sm">
                          <div className="text-center">
                            <div className="font-semibold">{entry.ph}</div>
                            <div className="text-gray-500">pH</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">{entry.nitrogen}</div>
                            <div className="text-gray-500">N</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">{entry.phosphorus}</div>
                            <div className="text-gray-500">P</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Scanning Mode Modal */}
        {scanningMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <TestTube className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scanning Soil...</h3>
              <p className="text-gray-600 mb-6">
                Using AI to analyze soil composition and nutrient levels
              </p>
              <Progress value={75} className="h-2 mb-6" />
              <Button
                onClick={() => setScanningMode(false)}
                variant="outline"
                className="w-full"
              >
                Cancel Scan
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
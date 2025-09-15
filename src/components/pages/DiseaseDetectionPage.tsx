import { motion } from 'motion/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { 
  Camera, 
  Upload, 
  Scan, 
  AlertTriangle,
  CheckCircle,
  Bug,
  Leaf,
  Shield,
  TrendingUp,
  Calendar,
  Eye,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DiseaseDetectionPageProps {
  onNavigate: (page: string) => void;
}

const detectionResults = [
  {
    id: 1,
    disease: 'Early Blight',
    confidence: 94,
    severity: 'Medium',
    crop: 'Tomato',
    symptoms: ['Dark spots on leaves', 'Yellow halos around spots', 'Leaf yellowing'],
    treatment: 'Apply copper-based fungicide',
    prevention: 'Improve air circulation, avoid overhead watering',
    timeline: 'Treat within 3-5 days',
    cost: '$25-35 per hectare',
    image: 'https://images.unsplash.com/photo-1667653108541-78bf144930a3?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    disease: 'Powdery Mildew',
    confidence: 87,
    severity: 'Low',
    crop: 'Cucumber',
    symptoms: ['White powdery coating', 'Leaf distortion', 'Stunted growth'],
    treatment: 'Sulfur spray application',
    prevention: 'Reduce humidity, increase spacing',
    timeline: 'Monitor for 1 week',
    cost: '$15-20 per hectare',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop'
  }
];

const recentScans = [
  { id: 1, date: '2025-09-14', crop: 'Tomato', field: 'Field A', status: 'healthy', confidence: 98 },
  { id: 2, date: '2025-09-13', crop: 'Pepper', field: 'Field B', status: 'disease', confidence: 91 },
  { id: 3, date: '2025-09-12', crop: 'Cucumber', field: 'Field C', status: 'warning', confidence: 76 },
  { id: 4, date: '2025-09-11', crop: 'Lettuce', field: 'Field A', status: 'healthy', confidence: 95 }
];

export function DiseaseDetectionPage({ onNavigate }: DiseaseDetectionPageProps) {
  const [scanningMode, setScanningMode] = useState<'camera' | 'upload' | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600';
      case 'disease': return 'text-red-600';
      case 'warning': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-4 h-4" />;
      case 'disease': return <Bug className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  const startScanning = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScanningMode(null);
    }, 3000);
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
          <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Bug className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Disease Detection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Early detection and diagnosis of plant diseases using advanced AI image recognition. 
            Scan your crops instantly and get treatment recommendations.
          </p>
        </motion.div>

        {/* Quick Scan Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Camera</h3>
              <p className="text-gray-600 text-sm mb-4">
                Use your device camera for real-time scanning
              </p>
              <Button
                onClick={() => setScanningMode('camera')}
                className="bg-blue-500 hover:bg-blue-600 w-full"
              >
                Start Camera
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Upload Image</h3>
              <p className="text-gray-600 text-sm mb-4">
                Upload existing photos for analysis
              </p>
              <Button
                onClick={() => setScanningMode('upload')}
                className="bg-lime-500 hover:bg-lime-600 w-full"
              >
                Upload Photo
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Scan className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Batch Scan</h3>
              <p className="text-gray-600 text-sm mb-4">
                Scan multiple images at once
              </p>
              <Button
                variant="outline"
                className="w-full border-purple-500 text-purple-600 hover:bg-purple-50"
              >
                Batch Upload
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Detection Results */}
        {detectionResults.length > 0 && (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Detection Results</h2>
            </motion.div>

            {detectionResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="relative">
                      <ImageWithFallback
                        src={result.image}
                        alt={result.disease}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getSeverityColor(result.severity)} text-white`}>
                          {result.severity} Severity
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-black/70 text-white">
                          {result.confidence}% Confidence
                        </Badge>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.disease}</h3>
                          <p className="text-gray-600 mb-1">Detected in: {result.crop}</p>
                          <Badge variant="outline" className="text-xs">
                            AI Analysis
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-red-600 mb-1">
                            {result.confidence}%
                          </div>
                          <div className="text-sm text-gray-500">Confidence</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <Progress value={result.confidence} className="h-2" />
                      </div>

                      {/* Symptoms */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Leaf className="w-4 h-4 mr-1" />
                          Symptoms Detected
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {result.symptoms.map((symptom, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {symptom}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Treatment Info */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <Shield className="w-4 h-4 mr-1" />
                            Treatment
                          </h4>
                          <p className="text-sm text-gray-600 mb-1">{result.treatment}</p>
                          <p className="text-xs text-gray-500">Timeline: {result.timeline}</p>
                          <p className="text-xs text-gray-500">Cost: {result.cost}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <Zap className="w-4 h-4 mr-1" />
                            Prevention
                          </h4>
                          <p className="text-sm text-gray-600">{result.prevention}</p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Button className="bg-red-500 hover:bg-red-600 flex-1">
                          Get Treatment Plan
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Recent Scans History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-lime-500" />
                <span>Recent Scans</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentScans.map((scan, index) => (
                  <motion.div
                    key={scan.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`${getStatusColor(scan.status)} flex items-center space-x-1`}>
                        {getStatusIcon(scan.status)}
                      </div>
                      <div>
                        <div className="font-semibold">{scan.crop} - {scan.field}</div>
                        <div className="text-sm text-gray-500">{scan.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{scan.confidence}%</div>
                      <div className="text-sm text-gray-500">Confidence</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Prevention Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-green-500 to-lime-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Shield className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Early Detection</h3>
                  <p className="text-green-100">Scan crops weekly for best prevention</p>
                </div>
                <div>
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">95% Accuracy</h3>
                  <p className="text-green-100">AI-powered disease identification</p>
                </div>
                <div>
                  <Zap className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                  <p className="text-green-100">Get diagnosis in seconds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scanning Modal */}
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
              {!isScanning ? (
                <>
                  <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {scanningMode === 'camera' ? (
                      <Camera className="w-10 h-10 text-white" />
                    ) : (
                      <Upload className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {scanningMode === 'camera' ? 'Camera Ready' : 'Upload Image'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {scanningMode === 'camera' 
                      ? 'Position your camera over the plant leaf and tap scan'
                      : 'Select an image from your device to analyze'
                    }
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      onClick={startScanning}
                      className="bg-lime-500 hover:bg-lime-600 flex-1"
                    >
                      {scanningMode === 'camera' ? 'Scan Now' : 'Upload'}
                    </Button>
                    <Button
                      onClick={() => setScanningMode(null)}
                      variant="outline"
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Scan className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Analyzing Image...</h3>
                  <p className="text-gray-600 mb-6">
                    AI is processing your image and detecting diseases
                  </p>
                  <Progress value={65} className="h-2 mb-6" />
                  <div className="text-sm text-gray-500">This usually takes a few seconds</div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
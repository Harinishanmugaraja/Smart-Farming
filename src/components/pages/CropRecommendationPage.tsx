import { motion } from 'motion/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  Sprout, 
  MapPin, 
  Calendar, 
  Droplets, 
  Thermometer,
  DollarSign,
  TrendingUp,
  Star,
  Leaf,
  Clock,
  Target
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CropRecommendationPageProps {
  onNavigate: (page: string) => void;
}

const cropRecommendations = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    variety: 'Cherokee Purple',
    suitability: 95,
    expectedYield: '45-55 tons/hectare',
    profitability: 'High',
    seasonality: 'Spring/Summer',
    waterRequirement: 'Medium',
    growthTime: '75-85 days',
    marketPrice: '$3.50/kg',
    difficulty: 'Moderate',
    pros: ['High market demand', 'Disease resistant', 'Premium pricing'],
    cons: ['Requires greenhouse', 'Labor intensive'],
    image: 'https://images.unsplash.com/photo-1546470427-e26264be0b3b?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Sweet Corn',
    variety: 'Golden Bantam',
    suitability: 88,
    expectedYield: '18-22 tons/hectare',
    profitability: 'Medium',
    seasonality: 'Summer',
    waterRequirement: 'High',
    growthTime: '90-100 days',
    marketPrice: '$1.80/kg',
    difficulty: 'Easy',
    pros: ['Easy to grow', 'Consistent demand', 'Good rotation crop'],
    cons: ['Pest susceptible', 'Lower profit margins'],
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Bell Peppers',
    variety: 'California Wonder',
    suitability: 82,
    expectedYield: '35-40 tons/hectare',
    profitability: 'High',
    seasonality: 'Spring/Summer/Fall',
    waterRequirement: 'Medium',
    growthTime: '70-80 days',
    marketPrice: '$4.20/kg',
    difficulty: 'Moderate',
    pros: ['Long growing season', 'Multiple harvests', 'Export potential'],
    cons: ['Temperature sensitive', 'Requires support'],
    image: 'https://images.unsplash.com/photo-1525607551511-4251a109fe4b?w=400&h=300&fit=crop'
  }
];

export function CropRecommendationPage({ onNavigate }: CropRecommendationPageProps) {
  const [formData, setFormData] = useState({
    location: '',
    farmSize: '',
    soilType: '',
    climate: '',
    budget: '',
    experience: '',
    marketFocus: ''
  });
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRecommendations(true);
  };

  const getSuitabilityColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-lime-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-orange-600';
  };

  const getSuitabilityBg = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-lime-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
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
          <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sprout className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Crop Recommendations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized crop recommendations based on your farm conditions, 
            climate data, and market trends using advanced AI analysis.
          </p>
        </motion.div>

        {!showRecommendations ? (
          /* Input Form */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Farm Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Farm Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="location"
                          placeholder="e.g., California, USA"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="pl-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="farmSize">Farm Size (hectares)</Label>
                      <Input
                        id="farmSize"
                        type="number"
                        placeholder="e.g., 50"
                        value={formData.farmSize}
                        onChange={(e) => setFormData({ ...formData, farmSize: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="soilType">Soil Type</Label>
                      <Select value={formData.soilType} onValueChange={(value) => setFormData({ ...formData, soilType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select soil type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clay">Clay</SelectItem>
                          <SelectItem value="sandy">Sandy</SelectItem>
                          <SelectItem value="loam">Loam</SelectItem>
                          <SelectItem value="silt">Silt</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="climate">Climate Zone</Label>
                      <Select value={formData.climate} onValueChange={(value) => setFormData({ ...formData, climate: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select climate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tropical">Tropical</SelectItem>
                          <SelectItem value="subtropical">Subtropical</SelectItem>
                          <SelectItem value="temperate">Temperate</SelectItem>
                          <SelectItem value="arid">Arid</SelectItem>
                          <SelectItem value="mediterranean">Mediterranean</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low ($1,000 - $5,000)</SelectItem>
                          <SelectItem value="medium">Medium ($5,000 - $20,000)</SelectItem>
                          <SelectItem value="high">High ($20,000+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Farming Experience</Label>
                      <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (3-10 years)</SelectItem>
                          <SelectItem value="expert">Expert (10+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="marketFocus">Market Focus</Label>
                    <Select value={formData.marketFocus} onValueChange={(value) => setFormData({ ...formData, marketFocus: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your target market" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local Market</SelectItem>
                        <SelectItem value="regional">Regional Distribution</SelectItem>
                        <SelectItem value="export">Export Market</SelectItem>
                        <SelectItem value="organic">Organic Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-lime-500 hover:bg-lime-600 text-white h-12 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Get AI Recommendations
                    <Target className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* Recommendations Display */
          <div className="space-y-8">
            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Recommendations Ready!</h2>
                    <p className="text-lime-100 text-lg mb-6">
                      Based on your {formData.location} location, {formData.farmSize} hectare farm, 
                      and {formData.soilType} soil type, here are our top recommendations:
                    </p>
                    <div className="flex justify-center space-x-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold">3</div>
                        <div className="text-lime-100">Top Crops</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">95%</div>
                        <div className="text-lime-100">Best Match</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">$3.5K</div>
                        <div className="text-lime-100">Avg. Profit/Ha</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Crop Recommendations */}
            <div className="grid gap-8">
              {cropRecommendations.map((crop, index) => (
                <motion.div
                  key={crop.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Image Section */}
                      <div className="relative">
                        <ImageWithFallback
                          src={crop.image}
                          alt={crop.name}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className={`${getSuitabilityBg(crop.suitability)} text-white`}>
                            <Star className="w-3 h-3 mr-1" />
                            {crop.suitability}% Match
                          </Badge>
                        </div>
                      </div>

                      {/* Details Section */}
                      <div className="md:col-span-2 p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{crop.name}</h3>
                            <p className="text-gray-600 mb-1">Variety: {crop.variety}</p>
                            <Badge variant="outline" className="text-xs">
                              {crop.difficulty} Difficulty
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className={`text-3xl font-bold ${getSuitabilityColor(crop.suitability)} mb-1`}>
                              {crop.suitability}%
                            </div>
                            <div className="text-sm text-gray-500">Suitability</div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-6">
                          <Progress value={crop.suitability} className="h-2" />
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-lime-500 mx-auto mb-1" />
                            <div className="font-semibold text-sm">{crop.expectedYield}</div>
                            <div className="text-xs text-gray-500">Expected Yield</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <DollarSign className="w-5 h-5 text-green-500 mx-auto mb-1" />
                            <div className="font-semibold text-sm">{crop.marketPrice}</div>
                            <div className="text-xs text-gray-500">Market Price</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Clock className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                            <div className="font-semibold text-sm">{crop.growthTime}</div>
                            <div className="text-xs text-gray-500">Growth Time</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <Droplets className="w-5 h-5 text-cyan-500 mx-auto mb-1" />
                            <div className="font-semibold text-sm">{crop.waterRequirement}</div>
                            <div className="text-xs text-gray-500">Water Need</div>
                          </div>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                              <Leaf className="w-4 h-4 mr-1" />
                              Advantages
                            </h4>
                            <ul className="space-y-1">
                              {crop.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-1 h-1 bg-green-500 rounded-full mr-2" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-700 mb-2 flex items-center">
                              <Target className="w-4 h-4 mr-1" />
                              Considerations
                            </h4>
                            <ul className="space-y-1">
                              {crop.cons.map((con, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-1 h-1 bg-orange-500 rounded-full mr-2" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                          <Button className="bg-lime-500 hover:bg-lime-600 flex-1">
                            Start Planning
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

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="text-center space-y-4"
            >
              <Button
                onClick={() => setShowRecommendations(false)}
                variant="outline"
                className="mr-4"
              >
                Modify Parameters
              </Button>
              <Button
                onClick={() => onNavigate('soil-nutrient')}
                className="bg-lime-500 hover:bg-lime-600"
              >
                Analyze Soil Next
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
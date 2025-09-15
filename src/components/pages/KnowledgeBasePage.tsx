import { motion } from 'motion/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { 
  BookOpen, 
  Search, 
  Sprout, 
  Bug, 
  Droplets, 
  Sun, 
  Leaf, 
  TrendingUp,
  Clock,
  User,
  Star,
  ArrowRight,
  Play,
  Download
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface KnowledgeBasePageProps {
  onNavigate: (page: string) => void;
}

const categories = [
  { id: 'crop-management', name: 'Crop Management', icon: Sprout, count: 45, color: 'from-green-400 to-lime-500' },
  { id: 'pest-control', name: 'Pest Control', icon: Bug, count: 32, color: 'from-red-400 to-pink-500' },
  { id: 'soil-health', name: 'Soil Health', icon: Droplets, count: 28, color: 'from-blue-400 to-cyan-500' },
  { id: 'weather-climate', name: 'Weather & Climate', icon: Sun, count: 21, color: 'from-yellow-400 to-orange-500' },
  { id: 'plant-nutrition', name: 'Plant Nutrition', icon: Leaf, count: 38, color: 'from-emerald-400 to-green-500' },
  { id: 'market-trends', name: 'Market Trends', icon: TrendingUp, count: 15, color: 'from-purple-400 to-indigo-500' }
];

const featuredArticles = [
  {
    id: 1,
    title: 'Complete Guide to Organic Tomato Farming',
    excerpt: 'Learn sustainable practices for growing healthy, high-yield tomatoes without synthetic chemicals.',
    category: 'Crop Management',
    readTime: '12 min read',
    author: 'Dr. Sarah Martinez',
    rating: 4.8,
    views: 2340,
    image: 'https://images.unsplash.com/photo-1546470427-e26264be0b3b?w=400&h=300&fit=crop',
    tags: ['Organic', 'Tomatoes', 'Sustainable']
  },
  {
    id: 2,
    title: 'Early Detection of Plant Diseases Using AI',
    excerpt: 'Revolutionary techniques for identifying crop diseases before they spread throughout your fields.',
    category: 'Pest Control',
    readTime: '8 min read',
    author: 'Prof. Michael Chen',
    rating: 4.9,
    views: 1875,
    image: 'https://images.unsplash.com/photo-1667653108541-78bf144930a3?w=400&h=300&fit=crop',
    tags: ['AI', 'Disease Detection', 'Technology']
  },
  {
    id: 3,
    title: 'Soil pH Management for Maximum Yields',
    excerpt: 'Understanding soil acidity and alkalinity to optimize nutrient uptake and crop performance.',
    category: 'Soil Health',
    readTime: '10 min read',
    author: 'Dr. Emily Rodriguez',
    rating: 4.7,
    views: 1690,
    image: 'https://images.unsplash.com/photo-1726496033452-d44af3276896?w=400&h=300&fit=crop',
    tags: ['Soil pH', 'Nutrients', 'Yields']
  }
];

const tutorials = [
  {
    id: 1,
    title: 'Setting Up Drip Irrigation System',
    duration: '15:30',
    difficulty: 'Intermediate',
    views: 8900,
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Identifying Common Crop Pests',
    duration: '22:45',
    difficulty: 'Beginner',
    views: 12400,
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Composting for Better Soil Health',
    duration: '18:20',
    difficulty: 'Beginner',
    views: 6700,
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop'
  }
];

export function KnowledgeBasePage({ onNavigate }: KnowledgeBasePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Knowledge Base</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive farming guides, expert articles, video tutorials, 
            and best practices to improve your agricultural knowledge and skills.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search articles, guides, tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg border-gray-200 focus:border-lime-500 focus:ring-lime-500 rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 group-hover:text-lime-600 transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-500">{category.count} articles</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-lime-500 transform group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
          <div className="grid gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-lime-500 text-white">
                          {article.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 pr-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{article.rating}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <div className="text-xs">
                          {article.views.toLocaleString()} views
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Button className="bg-lime-500 hover:bg-lime-600 flex-1">
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Tutorials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Tutorials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-800 ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {tutorial.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">
                      {tutorial.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <Badge variant="outline" className="text-xs">
                        {tutorial.difficulty}
                      </Badge>
                      <span>{tutorial.views.toLocaleString()} views</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Need Specific Help?</h2>
                <p className="text-lime-100 text-lg mb-8 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our AI-powered search can help you 
                  find relevant articles and tutorials based on your specific farming challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    Ask AI Assistant
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold"
                    onClick={() => onNavigate('community')}
                  >
                    Join Community
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Sprout, 
  TestTube, 
  Bug, 
  Cloud, 
  ArrowRight, 
  Users, 
  Shield, 
  BarChart3,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
}

const features = [
  {
    icon: Sprout,
    title: 'Smart Crop Recommendations',
    description: 'AI-powered suggestions for optimal crop selection based on soil, climate, and market conditions.',
    color: 'from-green-400 to-lime-500',
    page: 'crop-recommendation'
  },
  {
    icon: TestTube,
    title: 'Soil Nutrient Analysis',
    description: 'Comprehensive soil testing and nutrient management for healthier crops and better yields.',
    color: 'from-amber-400 to-orange-500',
    page: 'soil-nutrient'
  },
  {
    icon: Bug,
    title: 'Disease Detection',
    description: 'Early detection of plant diseases using advanced image recognition technology.',
    color: 'from-red-400 to-pink-500',
    page: 'disease-detection'
  },
  {
    icon: Cloud,
    title: 'Weather Insights',
    description: 'Real-time weather monitoring and forecasting for informed farming decisions.',
    color: 'from-blue-400 to-cyan-500',
    page: 'weather'
  }
];

const stats = [
  { icon: Users, value: '50K+', label: 'Active Farmers' },
  { icon: Sprout, value: '2M+', label: 'Crops Monitored' },
  { icon: Shield, value: '95%', label: 'Disease Prevention' },
  { icon: BarChart3, value: '40%', label: 'Yield Increase' }
];

export function HomePage({ onNavigate, isLoggedIn }: HomePageProps) {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-none"
          >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center max-w-none">
            <div className="space-y-8 lg:space-y-10 max-w-2xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6 lg:space-y-8"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight">
                  Smart Farming for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
                    Better Harvests
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Revolutionize your farming with AI-powered insights, real-time monitoring, 
                  and data-driven decisions that increase yields and reduce costs.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8"
              >
                <Button
                  onClick={() => onNavigate(isLoggedIn ? 'dashboard' : 'register')}
                  className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-6 lg:px-10 lg:py-8 text-lg lg:text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  {isLoggedIn ? 'Go to Dashboard' : 'Get Started'}
                  <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('knowledge-base')}
                  className="border-lime-500 text-lime-600 hover:bg-lime-50 px-8 py-6 lg:px-10 lg:py-8 text-lg lg:text-xl rounded-xl w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative perspective-1000 lg:justify-self-end"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform-gpu transition-all duration-700 hover:shadow-3xl group">
                {/* 3D Container */}
                <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-y-12 preserve-3d">
                  {/* Main Image with 3D effects */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtaW5nJTIwdGVjaG5vbG9neSUyMGFncmljdWx0dXJlJTIwZHJvbmV8ZW58MXx8fHwxNzU3OTUwMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Smart farming technology with drones"
                      className="w-full h-96 lg:h-[500px] xl:h-[600px] object-cover transform-gpu transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Multiple gradient overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/30 via-transparent to-green-400/20" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-emerald-300/10 to-lime-600/25" />
                    
                    {/* 3D Floating elements */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform-gpu transition-all duration-500 group-hover:translate-y-2 group-hover:scale-110">
                      <Sprout className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    
                    <div className="absolute bottom-6 left-6 w-20 h-12 bg-gradient-to-r from-lime-400/30 to-green-500/30 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg transform-gpu transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-3">
                      <BarChart3 className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  
                  {/* 3D Shadow/Base */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-full blur-sm transition-all duration-500 group-hover:w-5/6 group-hover:opacity-60" />
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-lime-400/60 rounded-full animate-pulse transform-gpu transition-all duration-1000 group-hover:scale-150" />
                  <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-green-400/60 rounded-full animate-ping transform-gpu transition-all duration-1000 group-hover:scale-125" />
                  <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-400/60 rounded-full animate-bounce transform-gpu transition-all duration-1000 group-hover:scale-200" />
                </div>
              </div>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white/50 backdrop-blur-sm">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16 xl:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              Powerful Features for Modern Farmers
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to optimize your farming operations and maximize productivity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 max-w-none">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="group cursor-pointer card-3d hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-white/90 backdrop-blur-sm overflow-hidden relative">
                    <CardContent className="p-8 relative z-10">
                      {/* 3D Icon Container */}
                      <div className="relative mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg relative z-10`}>
                          <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                        {/* 3D Shadow for icon */}
                        <div className={`absolute top-2 left-2 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} opacity-30 blur-sm group-hover:top-4 group-hover:left-4 transition-all duration-500 -z-10`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lime-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                      <Button
                        variant="ghost"
                        onClick={() => onNavigate(feature.page)}
                        className="text-lime-600 hover:text-lime-700 hover:bg-lime-50 p-0 h-auto font-semibold group-hover:translate-x-2 transition-all duration-300"
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                    
                    {/* 3D Background Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-lime-200/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-32 h-16 bg-gradient-to-tr from-green-200/15 to-transparent rounded-full blur-lg group-hover:scale-125 group-hover:translate-x-4 transition-all duration-700" />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16 max-w-none">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group perspective-1000"
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      {/* Main 3D Icon */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center shadow-lg transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-12 relative z-10">
                        <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                      
                      {/* 3D Base/Shadow */}
                      <div className="absolute top-2 left-2 w-16 h-16 rounded-full bg-gradient-to-br from-lime-500/40 to-lime-700/40 blur-sm transition-all duration-500 group-hover:top-4 group-hover:scale-105 -z-10" />
                      
                      {/* Floating Ring Effect */}
                      <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-lime-300/30 group-hover:scale-125 group-hover:rotate-180 transition-all duration-700 opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-lime-700 transition-all duration-300 transform group-hover:scale-105">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-r from-lime-500 to-green-600">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white w-full max-w-5xl mx-auto"
          >
          <Zap className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 lg:mb-8 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Join thousands of farmers who are already using our platform to increase their yields and profits.
          </p>
          <Button
            onClick={() => onNavigate(isLoggedIn ? 'dashboard' : 'register')}
            className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 lg:px-10 lg:py-6 text-lg lg:text-xl rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
          >
            {isLoggedIn ? 'Access Dashboard' : 'Start Free Trial'}
            <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { categories, totalFacts, type Category } from './data/facts';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, RotateCcw, Home, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [likedFacts, setLikedFacts] = useState<Set<string>>(new Set());
  const [direction, setDirection] = useState(0);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentFactIndex(0);
    setDirection(0);
  };

  const handleNextFact = () => {
    if (selectedCategory) {
      setDirection(1);
      setCurrentFactIndex((prev) => (prev + 1) % selectedCategory.facts.length);
    }
  };

  const handlePrevFact = () => {
    if (selectedCategory) {
      setDirection(-1);
      setCurrentFactIndex((prev) => 
        prev === 0 ? selectedCategory.facts.length - 1 : prev - 1
      );
    }
  };

  const handleGoHome = () => {
    setSelectedCategory(null);
    setCurrentFactIndex(0);
  };

  const toggleLike = () => {
    if (selectedCategory) {
      const factId = `${selectedCategory.id}-${selectedCategory.facts[currentFactIndex].id}`;
      setLikedFacts((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(factId)) {
          newSet.delete(factId);
        } else {
          newSet.add(factId);
        }
        return newSet;
      });
    }
  };

  const handleShare = async () => {
    if (selectedCategory) {
      const fact = selectedCategory.facts[currentFactIndex];
      const text = `${fact.text} - Amazing Fact from ${selectedCategory.name}!`;
      
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Amazing Facts World',
            text: text,
          });
        } catch (err) {
          console.log('Share cancelled');
        }
      } else {
        navigator.clipboard.writeText(text);
        alert('Fact copied to clipboard!');
      }
    }
  };

  const handleRandomFact = () => {
    if (selectedCategory) {
      const randomIndex = Math.floor(Math.random() * selectedCategory.facts.length);
      setDirection(randomIndex > currentFactIndex ? 1 : -1);
      setCurrentFactIndex(randomIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCategory) {
        if (e.key === 'ArrowRight') handleNextFact();
        if (e.key === 'ArrowLeft') handlePrevFact();
        if (e.key === 'Escape') handleGoHome();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCategory, currentFactIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '20%', right: '15%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-6"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleGoHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Amazing Facts World
              </h1>
            </motion.div>
            
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Button
                  variant="ghost"
                  onClick={handleGoHome}
                  className="text-white hover:bg-white/20"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Home
                </Button>
              </motion.div>
            )}
          </div>
        </motion.header>

        {/* Content Area */}
        <main className="flex-1 flex items-center justify-center p-4 md:p-8">
          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              /* Category Selection Screen */
              <motion.div
                key="categories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-6xl"
              >
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Discover Amazing Facts
                  </h2>
                  <p className="text-lg md:text-xl text-white/70">
                    Choose a category and explore {totalFacts}+ mind-blowing facts!
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.3 + index * 0.1, 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card
                        onClick={() => handleCategorySelect(category)}
                        className={`cursor-pointer overflow-hidden border-0 bg-gradient-to-br ${category.gradient} p-6 h-full min-h-[180px] flex flex-col items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow`}
                      >
                        <motion.div
                          className="text-5xl md:text-6xl mb-4"
                          animate={{ 
                            y: [0, -5, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        >
                          {category.icon}
                        </motion.div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-white/80 text-sm">{category.facts.length} facts</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mt-12 text-center"
                >
                  <p className="text-white/50 text-sm">
                    Press any category to start exploring amazing facts!
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              /* Fact Display Screen */
              <motion.div
                key="facts"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl"
              >
                {/* Category Header */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center mb-8"
                >
                  <motion.div
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${selectedCategory.gradient} text-white shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-3xl">{selectedCategory.icon}</span>
                    <span className="text-xl font-bold">{selectedCategory.name}</span>
                  </motion.div>
                </motion.div>

                {/* Fact Card */}
                <div className="relative h-[300px] md:h-[250px] mb-8">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={`${selectedCategory.id}-${currentFactIndex}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.2 },
                      }}
                      className="absolute inset-0"
                    >
                      <Card className="h-full bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 flex items-center justify-center text-center shadow-2xl">
                        <div>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="text-4xl mb-4"
                          >
                            {selectedCategory.icon}
                          </motion.div>
                          <p className="text-xl md:text-3xl text-white font-medium leading-relaxed">
                            {selectedCategory.facts[currentFactIndex].text}
                          </p>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-white/50 text-sm"
                          >
                            Fact {currentFactIndex + 1} of {selectedCategory.facts.length}
                          </motion.div>
                        </div>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={handlePrevFact}
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white px-6"
                    >
                      <ChevronLeft className="w-5 h-5 mr-2" />
                      Previous
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={handleRandomFact}
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                    >
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Random
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={toggleLike}
                      variant="outline"
                      size="lg"
                      className={`border-white/30 hover:bg-white/20 px-6 ${
                        likedFacts.has(`${selectedCategory.id}-${selectedCategory.facts[currentFactIndex].id}`)
                          ? 'bg-red-500/30 text-red-300'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      <Heart className={`w-5 h-5 mr-2 ${
                        likedFacts.has(`${selectedCategory.id}-${selectedCategory.facts[currentFactIndex].id}`)
                          ? 'fill-current'
                          : ''
                      }`} />
                      Like
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={handleNextFact}
                      size="lg"
                      className={`bg-gradient-to-r ${selectedCategory.gradient} text-white hover:opacity-90 px-8`}
                    >
                      Next Fact
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 max-w-md mx-auto"
                >
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${selectedCategory.gradient}`}
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${((currentFactIndex + 1) / selectedCategory.facts.length) * 100}%` 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Keyboard hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center mt-6 text-white/40 text-sm"
                >
                  Use ← → arrow keys to navigate • Press ESC to go home
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="p-6 text-center"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="flex items-center gap-2 text-white/60"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">Made with love by Hamdan</span>
              <Heart className="w-4 h-4 text-red-400" />
            </motion.div>
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Amazing Facts World. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paw, Info, Award, Heart, Camera } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
];

const catData = [
  { year: 2015, popularity: 75 },
  { year: 2016, popularity: 80 },
  { year: 2017, popularity: 85 },
  { year: 2018, popularity: 90 },
  { year: 2019, popularity: 95 },
  { year: 2020, popularity: 100 },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("facts");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleLike = () => {
    setLikes(likes + 1);
    toast({
      title: "Meow-velous!",
      description: "You've shown some cat love!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-purple-800 mb-4">Purrfect Pals</h1>
          <p className="text-xl text-gray-600">Discover the fascinating world of cats</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 relative"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={catImages[currentImageIndex]}
              alt="A cute cat"
              className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <motion.div
            className="absolute bottom-4 right-4 flex items-center bg-white bg-opacity-75 rounded-full px-4 py-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="ghost" size="icon" onClick={handleLike}>
              <Heart className="h-6 w-6 text-red-500" />
            </Button>
            <span className="ml-2 font-bold text-lg">{likes}</span>
          </motion.div>
        </motion.div>

        <Alert className="mb-8">
          <Camera className="h-4 w-4" />
          <AlertTitle>New Feature!</AlertTitle>
          <AlertDescription>
            Our cat gallery now updates every 5 seconds. Keep watching for more adorable cats!
          </AlertDescription>
        </Alert>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="facts" className="text-lg">
              <Paw className="mr-2 h-5 w-5" />
              Feline Facts
            </TabsTrigger>
            <TabsTrigger value="breeds" className="text-lg">
              <Award className="mr-2 h-5 w-5" />
              Popular Breeds
            </TabsTrigger>
          </TabsList>
          <TabsContent value="facts">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">Fascinating Feline Facts</CardTitle>
                <CardDescription>Uncover interesting tidbits about our furry friends</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Cats have been domesticated for over 4,000 years.",
                    "A group of cats is called a 'clowder'.",
                    "Cats spend 70% of their lives sleeping.",
                    "A cat's hearing is much more sensitive than a human's or dog's.",
                    "Cats have over 20 vocalizations, including the famous meow."
                  ].map((fact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <Info className="mr-2 h-5 w-5 text-purple-500" />
                      {fact}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">Popular Cat Breeds</CardTitle>
                <CardDescription>Explore some well-known feline friends</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature." },
                    { name: "Maine Coon", description: "One of the largest domestic cat breeds, with a friendly disposition." },
                    { name: "Persian", description: "Recognized for their long fur and flat faces." },
                    { name: "Bengal", description: "Wild-looking cats with leopard-like spots." },
                    { name: "Scottish Fold", description: "Characterized by their unique folded ears." }
                  ].map((breed, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col"
                    >
                      <span className="font-semibold text-lg text-purple-600">{breed.name}</span>
                      <span className="text-gray-600">{breed.description}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700">Cat Popularity Over Time</CardTitle>
            <CardDescription>See how cats have become increasingly popular</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={catData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="popularity" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Learn More About Cats
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

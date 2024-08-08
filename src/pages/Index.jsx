import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paw, Info, Award } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("facts");

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
          className="mb-12"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="A cute cat" 
            className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
          />
        </motion.div>

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

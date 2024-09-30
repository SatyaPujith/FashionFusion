import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Globe, ShirtIcon, Sparkles, ThumbsUp, Camera, Heart } from 'lucide-react'

export default function Component() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [matchedOutfit, setMatchedOutfit] = useState(null)

  const handleOutfitMatch = () => {
    // Simulating an outfit match
    setMatchedOutfit({
      top: "/placeholder.svg?height=100&width=100",
      bottom: "/placeholder.svg?height=100&width=100"
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-200">
      <header className="p-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-center text-purple-800">Fashion Fusion</h1>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <Tabs defaultValue="explore" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="explore">Explore</TabsTrigger>
            <TabsTrigger value="match">Match Outfits</TabsTrigger>
            <TabsTrigger value="points">Points & Rewards</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          
          <TabsContent value="explore">
            <Card>
              <CardHeader>
                <CardTitle>Explore Global Fashion</CardTitle>
                <CardDescription>Discover cultural dress codes from around the world</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="japan">Japan</SelectItem>
                      <SelectItem value="brazil">Brazil</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button disabled={!selectedCountry}>Explore Culture</Button>
                </div>
                {selectedCountry && (
                  <div className="grid grid-cols-2 gap-4">
                    <img src="/placeholder.svg?height=200&width=200" alt={`${selectedCountry} traditional dress`} className="rounded-lg" />
                    <div>
                      <h3 className="font-semibold mb-2">Traditional Dress of {selectedCountry}</h3>
                      <p>Description of the traditional dress and its cultural significance...</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="match">
            <Card>
              <CardHeader>
                <CardTitle>Match Outfits</CardTitle>
                <CardDescription>Upload items and get matched by the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold mb-2">Upload Your Items</h3>
                    <div className="flex space-x-2">
                      <Button><Camera className="mr-2 h-4 w-4" /> Upload Top</Button>
                      <Button><Camera className="mr-2 h-4 w-4" /> Upload Bottom</Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Get Matched</h3>
                    <Button onClick={handleOutfitMatch}>Find a Match</Button>
                  </div>
                </div>
                {matchedOutfit && (
                  <div>
                    <h3 className="font-semibold mb-2">Suggested Outfit</h3>
                    <div className="flex space-x-4">
                      <img src={matchedOutfit.top} alt="Matched top" className="rounded-lg" />
                      <img src={matchedOutfit.bottom} alt="Matched bottom" className="rounded-lg" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="points">
            <Card>
              <CardHeader>
                <CardTitle>Points & Rewards</CardTitle>
                <CardDescription>Earn points by contributing to the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Your Points</h3>
                    <p className="text-3xl font-bold text-purple-600">1,250</p>
                    <p className="text-sm text-gray-500">Level: Fashion Enthusiast</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">How to Earn</h3>
                    <ul className="list-disc list-inside">
                      <li>Match outfits: 10 points</li>
                      <li>Review matches: 5 points</li>
                      <li>Upload items: 20 points</li>
                      <li>Daily login: 5 points</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Redeem Points</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Community Posts</CardTitle>
                <CardDescription>Share and discover fashion inspiration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((post) => (
                    <div key={post} className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                          <AvatarFallback>U{post}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">User{post}</p>
                          <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <img src={`/placeholder.svg?height=300&width=400`} alt={`Post ${post}`} className="rounded-lg mb-2" />
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm"><Heart className="mr-1 h-4 w-4" /> Like</Button>
                        <Button variant="ghost" size="sm">Comment</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Post</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Join Our Fashion Community</h2>
          <div className="flex max-w-sm mx-auto">
            <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
            <Button type="submit" className="rounded-l-none">Subscribe</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
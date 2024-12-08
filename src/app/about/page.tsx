"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Image, Share2, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-900 to-black">
          About Concert Collage Generator
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl text-gray-500">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Music className="w-6 h-6 mr-2 text-pink-500" />
                What We Do
              </h2>
              <p>
                Concert Collage Generator creates personalized image collages
                showcasing how many times you&apos;ve seen your favorite artists
                live. We combine your concert history with vibrant visuals to
                create a stunning representation of your music journey.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-500" />
                How It Works
              </h2>
              <ol className="list-decimal list-inside text-gray-500 space-y-2">
                <li>Connect your Last.fm account</li>
                <li>We fetch your top artists using the Last.fm API</li>
                <li>Input your concert attendance for each artist</li>
                <li>Our algorithm generates a custom collage</li>
                <li>Download and share your unique creation!</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl mb-16">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Image className="w-6 h-6 mr-2 text-green-500" />
              Why Use Concert Collage Generator?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Badge variant="secondary" className="mt-1 mr-2">
                  01
                </Badge>
                <p className="text-gray-500">
                  Visualize your concert experiences in a fun, shareable format
                </p>
              </div>
              <div className="flex items-start">
                <Badge variant="secondary" className="mt-1 mr-2">
                  02
                </Badge>
                <p className="text-gray-500">
                  Discover patterns in your live music preferences
                </p>
              </div>
              <div className="flex items-start">
                <Badge variant="secondary" className="mt-1 mr-2">
                  03
                </Badge>
                <p className="text-gray-500">
                  Create a unique piece of art that represents your music taste
                </p>
              </div>
              <div className="flex items-start">
                <Badge variant="secondary" className="mt-1 mr-2">
                  04
                </Badge>
                <p className="text-gray-500">
                  Easily track and showcase your concert attendance over time
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Share2 className="w-6 h-6 mr-2 text-purple-500" />
                Get Started
              </h2>
              <p className="text-gray-500 mb-4">
                Ready to create your own concert collage? Sign up now and
                connect your Last.fm account to begin your journey of
                visualizing your live music experiences!
              </p>
              <button
                onClick={handleClick}
                className="w-full bg-gradient-to-r from-black via-red-900 to-red-500 text-white font-bold py-2 px-4 rounded-full hover:from-red-700 hover:to-black transition duration-300"
              >
                Create Your Collage Now
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

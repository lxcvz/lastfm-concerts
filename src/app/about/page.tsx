import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import { FeatureSection } from "./feature-section";
// import { FAQSection } from "./faq-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl font-bold mb-8">About All My Gigs Live</h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-600 mb-8">
            All My Gigs Live is a unique tool that combines your music taste
            with your live concert experiences. We use your Last.fm data to
            create beautiful collages of your top artists, enhanced by your
            personal concert history.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-6">How It Works</h2>

          <ol className="list-decimal pl-6 space-y-4">
            <li>Connect your Last.fm account to fetch your top artists.</li>
            <li>Input the number of times you've seen each artist live.</li>
            <li>
              Our algorithm creates a personalized collage based on your data.
            </li>
            <li>Share your unique music journey with friends!</li>
          </ol>

          <h2 className="text-3xl font-semibold mt-12 mb-6">
            Why Use Last.fm Collage Creator?
          </h2>

          <ul className="list-disc pl-6 space-y-4">
            <li>
              Visualize your music taste in a beautiful, shareable format.
            </li>
            <li>Combine streaming data with real-life concert experiences.</li>
            <li>Create a unique representation of your music journey.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Get Started</h2>

          <p>
            Ready to create your own personalized music collage? Click the
            button below to begin your journey.
          </p>
        </div>

        <Button className="mt-4 px-4 py-6 text-lg font-semibold">
          Create Your Collage
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </div>

      {/* <FeatureSection />
      <FAQSection /> */}
    </div>
  );
}

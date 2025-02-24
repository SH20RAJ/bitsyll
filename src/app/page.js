import AppDownloadButton from "@/components/AppDownloadButton";
import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import ImportantData from "@/components/ImportantData";
import Menu from "@/components/Menu";
import RoutineViewer from "@/components/RoutineViewer";
import { Subjects } from "@/components/Subjects2";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Menu />
      <div className="container mx-auto px-4 space-y-12">
        <RoutineViewer />
        
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Discover SketchFlow</h1>
          <p className="text-white mb-6">
            Unleash your creativity with SketchFlow, the ultimate tool for designers and artists. Create stunning designs and collaborate with ease.
          </p>
          <a
            href="https://sketchflow.space/?from=bitsyll"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            Visit SketchFlow
          </a>
        </div>

        <Subjects />
        
        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-0">
          <ImportantData />
        </div>

        <Separator className="my-8" />

        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-0">
          <FAQ />
        </div>

        <div className="text-center space-y-4 py-8">
          <h1 className="text-2xl font-bold">Get Offline Access</h1>
          <p className="text-gray-200">
            Download our fully tested, open source app for Android and iPhone
          </p>
          <AppDownloadButton
            link={"https://median.co/share/ayewex"}
            title={"Bitsyll App"}
          />
        </div>
      </div>
    </main>
  );
}


const SketchFlowPromo = () => {
  return (
    <div className="flex flex-col items-center my-8 p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-4">Discover SketchFlow</h1>
      <p className="text-white text-center mb-6">
        Unleash your creativity with SketchFlow, the ultimate tool for designers and artists. Create stunning designs and collaborate with ease.
      </p>
      <a
        href="https://sketchflow.space/?from=bitsyll"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
      >
        Visit SketchFlow
      </a>
    </div>
  );
};
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

 
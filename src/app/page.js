import AppDownloadButton from "@/components/AppDownloadButton";
import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import ImportantData from "@/components/ImportantData";
import Menu from "@/components/Menu";
import RoutineViewer from "@/components/RoutineViewer";
import ShareButton from "@/components/ShareButton";
import { Subjects } from "@/components/Subjects2";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Globe2Icon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Menu />
      <RoutineViewer />
      <SketchFlowPromo />

      <Subjects />
      <ImportantData />
     
      <Separator />

      
      <FAQ />
      {/* <div className="flex flex-col items-center m-8">
      <h2 className="text-2xl text-center font-bold leading-10">
        <span className="text</div>-4xl">
        Bitians.
        <span className="text-fuchsia-500 underline decoration-wavy decoration-orange-200">
          org
        </span>
        </span>{" "}
        <br />
        <span className="text-fuchsia-400">Social Hub</span> for BIT Mesra ✨
      </h2>
      <Card className="text-center text-gray-400  w-full p-4 m-0  ">
        🤝 Connect and vibe with BITians through our super light <b>5MB app</b>!
          Share epic memes 😂, chat with awesome peers 💭, stay in the loop with campus buzz 📢,
          and unlock BIT insider secrets 🔐. Express yourself anonymously 🎭 and join our
          cool open source community 💻!
      </Card>

      <blockquote className="mt-4 border-l-4 border-gray-300 pl-4 italic text-gray-600">
        Currently the website got into beta testing phase ✌️.
      </blockquote>
      </div> */}
{/* 
      <div className="flex justify-around items-center">
      <Button asChild className="bg-primary block">
        <a
        href="https://bitians.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Globe2Icon className="h-5 w-5 mr-2 inline" />
        Join <span className="text-fuchsia-700">Bitians.org</span> 
        </a>
      </Button>

      <AppDownloadButton
        link={"https://median.co/share/yplqde"}
        title={"Bitians App "}
      />
      </div> */}
      {/* <ShareButton /> */}



      
      
      
      {/* <Separator className="mt-4" /> */}

      <div className="flex justify-center flex-col items-center my-8 gap-4">
 <h1 className="text-2xl font-bold text-center mb-4">Get Offline Access</h1>
          <p className="text-gray-200 text-center mb-6">
            Download our fully tested, open source app for Android and iPhone
          </p>      <AppDownloadButton
        link={"https://median.co/share/ayewex"}
        title={"Bitsyll App"}
      />
      {/* <AppDownloadButton
        link={"https://median.co/share/yplqde"}
        title={"Bitians App 🚀"}
      /> */}
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
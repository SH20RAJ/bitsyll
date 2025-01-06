import AppDownloadButton from "@/components/AppDownloadButton";
import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import ImportantData from "@/components/ImportantData";
import Menu from "@/components/Menu";
import ShareButton from "@/components/ShareButton";
import { Subjects } from "@/components/Subjects2";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe2Icon } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}

      <Menu />

      <Subjects />

      <ImportantData />

      <Separator />

      <div className="flex justify-center my-8 gap-10">
        <AppDownloadButton
          link={"https://median.co/share/ayewex"}
          title={"Bitsyll App"}
        />
        <AppDownloadButton
          link={"https://median.co/share/yplqde"}
          title={"Bitians App"}
        />
      </div>

      <Separator />

      <div className="flex flex-col items-center m-8">
        <h2 className="text-2xl text-center font-bold leading-10">
          <span className=" text-4xl under">
            Bitians.
            <span className=" text-fuchsia-500 underline decoration-wavy decoration-orange-200">
              org
            </span>
          </span>{" "}
          <br />
          <span className=" text-fuchsia-400">Social Hub</span> for BIT Mesra
        </h2>
        <p className="text-center text-gray-600 max-w-2xl">
          Connect, collaborate, and stay updated on campus activities with
          fellow BITians.
        </p>
      </div>
      <div className="flex justify-around items-center ">
        <Button asChild className="bg-primary block">
          <a
            href="https://bitians.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe2Icon className=" h-5 w-5 inline" />
            Try <span className=" text-fuchsia-700">Bitians.org</span>{" "}
          </a>
        </Button>

        <AppDownloadButton
          link={"https://median.co/share/yplqde"}
          title={"Bitians App"}
        />
      </div>
      <ShareButton />

      <FAQ />
    </main>
  );
}

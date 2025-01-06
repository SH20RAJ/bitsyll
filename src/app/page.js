import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import ImportantData from "@/components/ImportantData";
import Menu from "@/components/Menu";
import { Subjects } from "@/components/Subjects2";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}

      <Menu/>

      <Subjects />

      <ImportantData />

      <FAQ />

      <div className="flex justify-center my-8">
        <a
          href="https://median.co/share/ayewex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className=" border border-white" variant="link">
            <img className="h-6 w-6 mr-2" src="/icons/android.svg" /> Download
            App <img className="h-6 w-6 ml-2" src="/icons/apple.svg" />{" "}
          </Button>
        </a>
      </div>



      
    </main>
  );
}

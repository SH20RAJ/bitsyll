import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import ImportantData from "@/components/ImportantData";
import { Subjects } from "@/components/Subjects2";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Header />

      <Subjects />

      <ImportantData />

      <FAQ />

      <div className="flex justify-center my-8">
        <a
          href="https://median.co/share/ayewex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link">Download App</Button>
        </a>
      </div>
    </main>
  );
}



import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import ImportantData from "@/components/ImportantData";
import { Subjects } from "@/components/Subjects2";

export default function Home() {
  return (
    <main>
      <Header />


      <Subjects />

      <ImportantData />

      <FAQ />
    </main>
  );
}

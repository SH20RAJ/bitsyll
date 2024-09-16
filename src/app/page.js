import Comments from "@/components/Comments";
import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import ImportantData from "@/components/ImportantData";
import RecentVisited from "@/components/RecentVisited";
import { Subjects } from "@/components/Subjects";
import SuggestButton from "@/components/SuggestButton";

export default function Home() {
  return (
    <main>
      <Header />
      <RecentVisited />

      <Subjects />

      {/* <Main/> */}

      <br />

      <ImportantData />

      <FAQ />

     
    </main>
  );
}

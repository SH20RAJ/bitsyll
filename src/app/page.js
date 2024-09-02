import Comments from "@/components/Comments";
import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import ImportantData from "@/components/ImportantData";
import RecentVisited from "@/components/RecentVisited";
import { Subjects } from "@/components/Subjects";

export default function Home() {
  return (
    <main>
      <Header />
      <RecentVisited />

      <br />

      <Subjects />
      
      {/* <Main/> */}

      <br />

      <ImportantData />
      <br />

      <Comments />
      <br />

      <FAQ />

      <br />


    </main>
  );
}

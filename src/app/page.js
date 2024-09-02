import Comments from "@/components/Comments";
import { FAQ } from "@/components/FAQ";
import Header from "@/components/Header";
import RecentVisited from "@/components/RecentVisited";
import { Subjects } from "@/components/Subjects";

export default function Home() {
  return (
    <main>
      <Header />
      <br />
      <RecentVisited />

      <br />

      <Subjects />
      
      {/* <Main/> */}

      <br />

      <Comments />
      <br />

      <FAQ />

      <br />


    </main>
  );
}

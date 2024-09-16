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

      <br />

      <Subjects />
      <h1 className=" my-6 text-2xl font-bold">Recent Events</h1>
      <p>
        Join the{" "}
        <a
          href="https://chat.whatsapp.com/GhtCO9w8Hrk8XAUzjM325y"
          target="_blank"
          className=" text-fuchsia-400"
        >
          Whatsapp Group
        </a>{" "}
        for contributing and sending feedback after that you may{" "}
        <span className=" text-fuchsia-400">leave the whatsapp group</span>.
      </p>
      <hr />

      {/* <Main/> */}

      <br />

      <ImportantData />

      <FAQ />
    </main>
  );
}

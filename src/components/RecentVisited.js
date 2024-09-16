import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecentVisited() {
  const hashistory = false;
  return (
    <div>
      {/* create hr with tailwind */}
      <h2 className="text-2xl font-bold p-1 ">
        Recent Visited <span className=" w-full self-end ">{""}</span>
      </h2>
      <hr className="border-1 border-gray-100 opacity-20" />
      <div
        className="flex flex-row flex-wrap justify-between p-2
      "
      >
        {hashistory ? (
          // create a loop with 3 items
          [1, 2, 3].map((item) => {
            return (
              <Card
                key={item}
                className="w-[30%] hover:outline-2 hover:shadow-lg cursor-pointer"
              >
                <CardHeader className="p-2">
                  <CardTitle>Subject </CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <CardDescription>Subject Description</CardDescription>
                </CardContent>
                {/* <CardFooter>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                  </button>
                </CardFooter> */}
              </Card>
            );
          })
        ) : (
          <>
            <div className="w-full text-center p-4">
              {" "}
              🐳 No recent visited subjects 🙈
            </div>
            <h1 className="w-full text-center text-2xl font-bold">
              🚨 Contribution Required 🚨
            </h1>
          </>
        )}
      </div>
    </div>
  );
}

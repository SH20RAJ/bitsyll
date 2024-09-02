import Important from "@/components/subject/Important";
import Topics  from "@/components/subject/Topics";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 justify-center items-center h-28  mt-20">
        <div>
          <Avatar className="h-20 w-20">
            <AvatarImage
              src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-math-calculations-png-image_4124283.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>Maths</AvatarFallback>
          </Avatar>
        </div>
        <span className="text-4xl">Mathematics</span>
      </div>

      <Important />

      <Topics subcode="MA24101" topics="topics" />
    </div>
  );
}

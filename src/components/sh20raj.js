import { CalendarDays, XIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export function SH20RAJ() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@sh20raj</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://www.upwork.com/profile-portraits/c1EEk49thpSZWgjnN-ifAhfV1vKVDDVwhLgobWe4b154zwD8icpmp-zoYifLRQ4zUx" />
            <AvatarFallback>Sh</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-fuchsia-200">@sh20raj</h4>
            <p className="text-sm">
              This website is created and maintained by <Link href="https://github.com/sh20raj" className=" underline">sh20raj</Link>. 
                <br/>

            </p>
            <div className="flex items-center pt-2 justify-center items-center">
              <span className="text-xs text-muted-foreground flex gap-4 text-center ">
                <Link href={"https://instagram.com/sh20raj"}><InstagramLogoIcon className="h-4 w-4" /></Link>
                <Link href={"https://github.com/sh20raj"}><GitHubLogoIcon className="h-4 w-4" /></Link>
                <Link href={"https://twitter.com/sh20raj"}><XIcon className="h-4 w-4" /></Link>
                <Link href={"https://www.linkedin.com/in/sh20raj/"}><LinkedInLogoIcon className="h-4 w-4" /></Link>
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

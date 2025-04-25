import React from "react";
import clubs from "./clubs.json";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Globe, User2, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ClubList = () => {
  let clubs2 = clubs.clubs;
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-900/10 p-8">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Clubs & Societies
            </h1>
            <p className="text-muted-foreground text-center max-w-[700px] text-lg">
              Discover and connect with various clubs and societies at{" "}
              <Link
                href={"https://www.bitmesra.ac.in/"}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                BIT Mesra
              </Link>
              . Explore opportunities to grow, learn, and make lasting connections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs2.map((club, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-blue-500/10"
              >
                <CardHeader className="flex flex-col items-center gap-4 text-center">
                  <img
                    src={club.logo}
                    alt={`${club.name} logo`}
                    className="w-24 h-24 object-contain rounded-full border-2 border-blue-500/30"
                  />
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl leading-tight">
                      {club.name}
                    </h3>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {club.shortname}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    {club.type}
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <div className="flex gap-3">
                    {club.socialmedialink && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                      >
                        <a
                          href={club.socialmedialink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <User2 className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {club.website && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                      >
                        <a
                          href={club.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {club.instagram && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                      >
                        <a
                          href={club.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <InstagramLogoIcon className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {club.linkedin && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                      >
                        <a
                          href={club.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedInLogoIcon className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {club.youtube && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                      >
                        <a
                          href={club.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Youtube className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubList;

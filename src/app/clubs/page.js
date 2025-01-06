import React from "react";
import clubs from "./clubs.json";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Globe, User2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ClubList = () => {
  let clubs2 = clubs.clubs;
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              Clubs & Societies
            </h1>
            <p className="text-muted-foreground text-center max-w-[600px]">
              Discover and connect with various clubs and societies at BITS
              Pilani.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clubs2.map((club, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    src={club.logo}
                    alt={`${club.name} logo`}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg leading-none">
                      {club.name}
                    </h3>
                    <Badge variant="secondary">{club.shortname}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    {club.socialmedialink && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-8 w-8"
                      >
                        <a
                          href={club.socialmedialink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <User2 className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {club.website && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-8 w-8"
                      >
                        <a
                          href={club.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {club.instagram && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-8 w-8"
                      >
                        <a
                          href={club.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <InstagramLogoIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {club.linkedin && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-8 w-8"
                      >
                        <a
                          href={club.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedInLogoIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubList;

import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center  ">Class Routine</h1>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <iframe
            src="https://drive.google.com/file/d/1hJD9_Fu6rY_mhVKe04PoS7dyNMEv_QFB/preview"
            className="w-full h-[70vh]"
            allow="autoplay"
          ></iframe>
        </CardContent>
        <CardFooter className="bg-gray-50 justify-end space-x-2 p-4">
          <Button variant="outline" asChild>
            <a
              href="https://drive.google.com/file/d/1hJD9_Fu6rY_mhVKe04PoS7dyNMEv_QFB/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
          </Button>
          <Button asChild>
            <a href="https://drive.google.com/uc?export=download&id=1hJD9_Fu6rY_mhVKe04PoS7dyNMEv_QFB">
              Download
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

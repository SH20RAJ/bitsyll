import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DisqusComment from "./DisqusComment";


export function PopComments() {
  return (
    <Drawer className="max-h-[50vh] w-full">
      <DrawerTrigger asChild>
        <Button variant="outline" className=" w-full"> Comments</Button>
        
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm max-h-[50vh]">
          <DrawerHeader>
            <DrawerTitle>Student Comments</DrawerTitle>
            <DrawerDescription>
              Share your thoughts related to studies*.
            </DrawerDescription>
          </DrawerHeader>
        </div>
        <div>
          <DisqusComment />
          
        </div>
      </DrawerContent>


    </Drawer>
  );
}

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
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Comments {">"}</Button>
        
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
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

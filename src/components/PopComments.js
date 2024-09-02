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

<div id="disqus_thread" />
<script dangerouslySetInnerHTML={{ __html : `
 var disqus_config = function () {
    this.page.url = "PAGE_URL"; 
    this.page.identifier = "PAGE_IDENTIFIER";
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://bitsyll.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
`}}>
   
</script>
          
        </div>
      </DrawerContent>
    </Drawer>
  );
}

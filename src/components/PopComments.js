"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DisqusComment from "./DisqusComment";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function PopComments() {
  return (
    <Drawer className="max-h-[80vh] w-full">
      <DrawerTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button 
            variant="outline" 
            className="w-full bg-white/5 dark:bg-black/5 backdrop-blur-md border-gray-200/20 dark:border-gray-800/20 shadow-sm hover:border-fuchsia-500/50 transition-all gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Comments
          </Button>
        </motion.div>
      </DrawerTrigger>
      <DrawerContent className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-800/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto w-full max-w-3xl p-6"
        >
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Student Comments
            </DrawerTitle>
            <DrawerDescription className="text-gray-600 dark:text-gray-400 mt-2">
              Share your thoughts related to studies and connect with fellow students.
            </DrawerDescription>
          </DrawerHeader>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <DisqusComment />
          </motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}

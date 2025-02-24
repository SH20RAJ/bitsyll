
import { Button } from "./ui/button";
import Link from "next/link";
import { PopComments } from "./PopComments";
import { GitHubLogoIcon, FileTextIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";

export default function SuggestButton() {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl backdrop-blur-md bg-black/10 border border-white/10 shadow-xl hover:shadow-fuchsia-500/10 transition-all duration-300">
      <p className="text-sm text-white/70 leading-relaxed">
        Found something missing 😒? Want to suggest some content? Or want to
        give feedback? Feel free to reach out to me.
      </p>
      
      <Link href="https://chat.whatsapp.com/GhtCO9w8Hrk8XAUzjM325y">
        <Button 
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-green-500/20 transition-all duration-300" 
          variant="secondary"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Suggest/Contribute Content
        </Button>
      </Link>
      
      <div className="flex gap-2">
        <Link className="w-full" href="https://github.com/SH20RAJ/bitsyll">
          <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-gray-800/20 transition-all duration-300">
            <GitHubLogoIcon className="w-4 h-4 mr-2" />
            Contribute Code
          </Button>
        </Link>
        <PopComments />
      </div>
      
      <Link
        href="https://drive.google.com/drive/folders/19I3elwfFDGrfa6GIIocmjyXeyR1muUeW?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300">
          <FileTextIcon className="w-4 h-4 mr-2" />
          📚 Study Notes 📝
        </Button>
      </Link>

      <div className="mt-2">
        <div className="sharethis-inline-reaction-buttons"></div>
      </div>
    </div>
  );
}

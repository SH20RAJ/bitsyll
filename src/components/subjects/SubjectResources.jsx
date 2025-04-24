import Link from "next/link";
import { FileText, Video, Code, ExternalLink } from "lucide-react";

export default function SubjectResources({ resources }) {
  // Function to get the appropriate icon based on resource type
  const getResourceIcon = (type) => {
    switch (type) {
      case "notes":
        return <FileText size={20} className="text-blue-400" />;
      case "video":
        return <Video size={20} className="text-purple-400" />;
      case "practice":
        return <Code size={20} className="text-green-400" />;
      default:
        return <FileText size={20} className="text-blue-400" />;
    }
  };

  // Function to get the appropriate background color based on resource type
  const getResourceBg = (type) => {
    switch (type) {
      case "notes":
        return "bg-blue-600/20";
      case "video":
        return "bg-purple-600/20";
      case "practice":
        return "bg-green-600/20";
      default:
        return "bg-blue-600/20";
    }
  };

  return (
    <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
      <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center">
        <FileText size={20} className="text-blue-400 mr-3" />
        <h2 className="text-xl font-semibold text-white">Learning Resources</h2>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => {
            const isExternal = resource.url.startsWith("http");

            return (
              <div key={index}>
                <Link
                  href={resource.url}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : ""}
                >
                  <div className="bg-[#0a1129] border border-[#1e3a8a]/30 rounded-lg p-4 hover:border-blue-500/30 transition-colors h-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg ${getResourceBg(resource.type)} flex items-center justify-center mr-3`}>
                          {getResourceIcon(resource.type)}
                        </div>
                        <h3 className="text-white font-medium">{resource.title}</h3>
                      </div>

                      {isExternal && (
                        <ExternalLink size={16} className="text-gray-400" />
                      )}
                    </div>

                    <div className="ml-13 text-sm text-gray-400">
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

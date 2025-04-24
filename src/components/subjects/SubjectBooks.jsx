import { Book, User, Building } from "lucide-react";

export default function SubjectBooks({ books }) {
  return (
    <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
      <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center">
        <Book size={20} className="text-blue-400 mr-3" />
        <h2 className="text-xl font-semibold text-white">Recommended Books</h2>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-[#0a1129] border border-[#1e3a8a]/30 rounded-lg p-4 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                  <Book size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-medium line-clamp-1">{book.title}</h3>
              </div>

              <div className="space-y-2 ml-13">
                <div className="flex items-center text-sm">
                  <User size={14} className="text-gray-400 mr-2" />
                  <span className="text-gray-300">{book.author}</span>
                </div>

                <div className="flex items-center text-sm">
                  <Building size={14} className="text-gray-400 mr-2" />
                  <span className="text-gray-300">{book.publisher}</span>
                </div>

                <div className="text-sm text-gray-400">
                  {book.edition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

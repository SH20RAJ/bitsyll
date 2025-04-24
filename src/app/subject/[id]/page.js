import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Book, FileText, Users } from "lucide-react";
import SubjectHeader from "@/components/subjects/SubjectHeader";
import SubjectSyllabus from "@/components/subjects/SubjectSyllabus";
import SubjectBooks from "@/components/subjects/SubjectBooks";
import SubjectResources from "@/components/subjects/SubjectResources";
import SubjectFaculty from "@/components/subjects/SubjectFaculty";
import subjectsData from "@/data/subjects.json";

// This function is required for static site generation with output: export
export function generateStaticParams() {
  return subjectsData.subjects.map((subject) => ({
    id: subject.id,
  }));
}

export default function SubjectPage({ params }) {
  // Find the subject with the matching ID
  const subject = subjectsData.subjects.find(
    (s) => s.id === params.id
  );

  if (!subject) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-[#0c1631]/80 border border-[#1e3a8a]/30 rounded-xl">
          <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center mb-6">
            <BookOpen size={32} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-medium text-white mb-3">Subject Not Found</h3>
          <p className="text-gray-400 max-w-md mb-8">
            The subject you are looking for does not exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Subject Header */}
      <SubjectHeader subject={subject} />

      {/* Tabs for different sections */}
      <Tabs defaultValue="syllabus" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="syllabus" className="flex items-center">
            <BookOpen size={16} className="mr-2" />
            <span className="hidden sm:inline">Syllabus</span>
          </TabsTrigger>
          <TabsTrigger value="books" className="flex items-center">
            <Book size={16} className="mr-2" />
            <span className="hidden sm:inline">Books</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center">
            <FileText size={16} className="mr-2" />
            <span className="hidden sm:inline">Resources</span>
          </TabsTrigger>
          <TabsTrigger value="faculty" className="flex items-center">
            <Users size={16} className="mr-2" />
            <span className="hidden sm:inline">Faculty</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="syllabus">
          <SubjectSyllabus syllabus={subject.syllabus} />
        </TabsContent>

        <TabsContent value="books">
          <SubjectBooks books={subject.books} />
        </TabsContent>

        <TabsContent value="resources">
          <SubjectResources resources={subject.resources} />
        </TabsContent>

        <TabsContent value="faculty">
          <SubjectFaculty faculty={subject.faculty} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

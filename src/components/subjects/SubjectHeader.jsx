import { BookOpen, Clock, Award, Building } from "lucide-react";

export default function SubjectHeader({ subject }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-premium-bg-dark to-premium-bg-card border border-premium-border shadow-premium-lg mb-8">
      {/* Background elements */}
      <div className="absolute inset-0 bg-blue-glow-radial opacity-30"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px]"></div>

      <div className="relative z-10 p-6 md:p-8">
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-2">
                {subject.code}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {subject.title}
              </h1>

              <p className="text-gray-300 max-w-2xl mb-6">
                {subject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                    <BookOpen size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Department</div>
                    <div className="text-white font-medium">{subject.department}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                    <Clock size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Semester</div>
                    <div className="text-white font-medium">{subject.semester}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                    <Award size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Credits</div>
                    <div className="text-white font-medium">{subject.credits}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                    <Building size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Faculty</div>
                    <div className="text-white font-medium">{subject.faculty[0].name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

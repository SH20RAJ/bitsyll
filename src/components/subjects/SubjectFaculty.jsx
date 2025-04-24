import { Users, Mail, MapPin } from "lucide-react";

export default function SubjectFaculty({ faculty }) {
  return (
    <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
      <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center">
        <Users size={20} className="text-blue-400 mr-3" />
        <h2 className="text-xl font-semibold text-white">Faculty</h2>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-[#0a1129] border border-[#1e3a8a]/30 rounded-lg p-4 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 text-lg font-bold text-blue-400">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-white font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-400">Faculty Member</p>
                </div>
              </div>

              <div className="space-y-2 ml-15">
                <div className="flex items-center text-sm">
                  <Mail size={14} className="text-gray-400 mr-2" />
                  <a href={`mailto:${member.email}`} className="text-blue-400 hover:underline">
                    {member.email}
                  </a>
                </div>

                <div className="flex items-center text-sm">
                  <MapPin size={14} className="text-gray-400 mr-2" />
                  <span className="text-gray-300">{member.office}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ChevronDown, ChevronUp, User } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  focus: string;
  responsibilities: string[];
  reportsTo: string;
  authority?: string;
  growthNeeds?: string[];
}

interface TeamMemberCardProps {
  member: TeamMember;
  isExpanded: boolean;
  onToggle: () => void;
  isOperations?: boolean;
}

export function TeamMemberCard({ member, isExpanded, onToggle, isOperations = false }: TeamMemberCardProps) {
  const bgColor = isOperations ? 'bg-orange-600' : 'bg-neutral-600';
  const borderColor = isOperations ? 'border-orange-600' : 'border-neutral-400';
  const textColor = isOperations ? 'text-orange-200' : 'text-neutral-200';
  const hoverShadow = isOperations ? 'hover:shadow-orange-200' : '';
  
  return (
    <div className={`bg-white border-2 ${borderColor} rounded-lg overflow-hidden shadow hover:shadow-lg ${hoverShadow} transition-shadow`}>
      <div className={`${bgColor} text-white p-5`}>
        <div className="flex items-start gap-3">
          <User className="w-5 h-5 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-white mb-1">{member.name}</h3>
            <p className={`${textColor} text-sm`}>{member.title}</p>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-4">
          <p className="text-sm text-neutral-700 mb-1"><strong>Focus:</strong></p>
          <p className="text-sm text-neutral-600">{member.focus}</p>
        </div>

        <div className="mb-4 pb-4 border-b border-neutral-200">
          <p className="text-xs text-neutral-500 mb-1"><strong>Reports to:</strong></p>
          <p className="text-xs text-neutral-700">{member.reportsTo}</p>
          {member.authority && (
            <>
              <p className="text-xs text-neutral-500 mb-1 mt-2"><strong>Authority:</strong></p>
              <p className="text-xs text-neutral-700">{member.authority}</p>
            </>
          )}
        </div>

        <button
          onClick={onToggle}
          className="flex items-center gap-2 text-sm text-neutral-900 hover:text-neutral-600 transition-colors mb-3"
        >
          <span>Responsibilities {member.growthNeeds && '& Growth Needs'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isExpanded && (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-neutral-500 mb-2"><strong>Specific Responsibilities:</strong></p>
              <ul className="space-y-1.5">
                {member.responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm text-neutral-700 flex items-start">
                    <span className="mr-2 mt-1 text-neutral-400">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {member.growthNeeds && (
              <div className="pt-3 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 mb-2"><strong>Needs for Growth:</strong></p>
                <ul className="space-y-1.5">
                  {member.growthNeeds.map((need, index) => (
                    <li key={index} className="text-sm text-emerald-700 flex items-start">
                      <span className="mr-2 mt-1 text-emerald-400">+</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
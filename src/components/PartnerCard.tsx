import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  title: string;
  color: string;
  focus: string;
  responsibilities: string[];
}

interface PartnerCardProps {
  partner: Partner;
  isExpanded: boolean;
  onToggle: () => void;
}

const colorSchemes = {
  emerald: {
    border: 'border-emerald-600',
    bg: 'bg-emerald-600',
    text: 'text-emerald-100',
    hover: 'hover:shadow-emerald-200'
  },
  blue: {
    border: 'border-blue-600',
    bg: 'bg-blue-600',
    text: 'text-blue-100',
    hover: 'hover:shadow-blue-200'
  },
  violet: {
    border: 'border-violet-600',
    bg: 'bg-violet-600',
    text: 'text-violet-100',
    hover: 'hover:shadow-violet-200'
  }
};

export function PartnerCard({ partner, isExpanded, onToggle }: PartnerCardProps) {
  const colors = colorSchemes[partner.color as keyof typeof colorSchemes];
  
  return (
    <div className={`bg-white border-2 ${colors.border} rounded-lg overflow-hidden shadow-lg hover:shadow-xl ${colors.hover} transition-shadow`}>
      <div className={`${colors.bg} text-white p-6`}>
        <h3 className="text-white mb-2">{partner.name}</h3>
        <p className={`${colors.text} text-sm`}>{partner.title}</p>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <p className="text-sm text-neutral-700 mb-1"><strong>Role Focus:</strong></p>
          <p className="text-sm text-neutral-600">{partner.focus}</p>
        </div>

        <button
          onClick={onToggle}
          className="flex items-center gap-2 text-sm text-neutral-900 hover:text-neutral-600 transition-colors mb-3"
        >
          <span>Expertise & Ownership</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isExpanded && (
          <ul className="space-y-2">
            {partner.responsibilities.map((resp, index) => (
              <li key={index} className="text-sm text-neutral-700 flex items-start">
                <span className="mr-2 mt-1 text-neutral-400">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
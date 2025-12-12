import React, { useState } from 'react';
import { PartnerCard } from './PartnerCard';
import { TeamMemberCard } from './TeamMemberCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function OrgChart() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const partners = [
    {
      id: 'erum',
      name: 'Erum Shah',
      title: 'Concept Direction & Strategy Development',
      color: 'emerald',
      focus: 'Strategic storytelling and world-building that connects brand goals to culturally sharp, executable concepts, and guides projects from idea to audience.',
      responsibilities: [
        'Developing strategic narratives, creative platforms, and conceptual storylines',
        'Translating fuzzy briefs into clear "why" frameworks',
        'Bringing critical theory, culture, and Global South perspectives into brand narratives',
        'Assessing feasibility of big ideas and shaping them into realistic, high-margin plans',
        'High-stakes client storytelling: decks, keynotes, positioning language',
        'Legal and contract review',
        'Relationship management on key strategic clients',
        'Designing filters for "good work"',
        'Inventing new revenue schemes and business models',
        'Defining press/communications talking points'
      ]
    },
    {
      id: 'timo',
      name: 'Timo Wesseling',
      title: 'Creative Direction & Business Development',
      color: 'blue',
      focus: 'Creative and strategic direction expressed through strong concepts, clear visual storytelling, and relationship-led business development across brands and culture.',
      responsibilities: [
        'Turning ambiguous opportunities into clear creative directions',
        'Visual thinking and deck-building: references, narratives, and visual structures',
        'Early-stage concept shaping',
        'Relationship-building with clients and partners',
        'Press and media connections, guest lists, and appearances',
        'Stewardship of public-facing channels (Instagram, web presence)',
        'Defining meeting structures for concept refinement',
        'Framing and protecting creative time',
        'Shaping strategic and creative roadmaps',
        'Knowledge of consumer and market',
        'Deep understanding of how brands work on the inside'
      ]
    },
    {
      id: 'necim',
      name: 'Necim Abiadh',
      title: 'Design Direction & Relationship Development',
      color: 'violet',
      focus: 'Multi-disciplinary design direction and art direction that protect TFW\'s visual language, while opening new territories (footwear, spatial, product).',
      responsibilities: [
        'Design leadership across formats: footwear, spatial, product, campaign, visual systems',
        'Art direction of image-making, composition, grading, and visual cohesion',
        'Casting and styling decisions',
        'Safeguarding the TFW "language"',
        'Translating big concepts into concrete design directions',
        'Opening new design territories for TFW',
        'Vendor and production partner selection',
        'Financial and admin oversight at partner level',
        'Nurturing relationships across art, design, brand, and music scenes'
      ]
    }
  ];

  const operations = {
    id: 'oscar',
    name: 'Oscar Cuevas',
    title: 'Operations',
    focus: 'Project management systems, team coordination, financial reporting, and operational efficiency',
    responsibilities: [
      'Project management system implementation and oversight (Asana, workflows)',
      'Managing project managers and gallery managers',
      'Financial reporting, budget tracking, and administrative operations',
      'Task delegation systems and documentation',
      'Meeting agenda preparation and facilitation',
      'Scheduling coordination across partners and team',
      'Credit card reconciliation and expense management'
    ],
    reportsTo: 'All three partners collectively',
    authority: 'Independent operational decisions; advisory role on strategic planning'
  };

  const teamMembers = [
    {
      id: 'elisa',
      name: 'Elisa',
      title: 'Junior Graphic Designer',
      focus: 'Graphic design execution across agency projects',
      responsibilities: [
        'Graphic design work as assigned across campaigns and projects',
        'Design file organization and asset management',
        'Supporting design direction from partners'
      ],
      reportsTo: 'Primary reporting to Design Director (Necim)',
      growthNeeds: [
        'Clear priorities and task assignment system',
        'Weekly check-ins and management structure',
        'Training on Google Suite and Asana',
        'Proper workspace setup (desk, dual monitors)'
      ]
    },
    {
      id: 'pms',
      name: 'Project Managers',
      title: 'Freelance',
      focus: 'Coordinating timelines, budgets, vendors, and deliverables while serving as the operational backbone',
      responsibilities: [
        'Day-to-day project coordination and timeline management',
        'Meeting scheduling, documentation, and recap distribution',
        'Budget tracking and vendor coordination',
        'Task assignment and follow-up with design team and freelancers',
        'Client communication on logistics and scheduling',
        'Production coordination and deliverable tracking'
      ],
      reportsTo: 'Operations (Oscar) with project-specific guidance from lead partner'
    },
    {
      id: 'gallery',
      name: 'Puck and Humi',
      title: 'Gallery Managers',
      focus: 'Day-to-day gallery operations, visitor experience, and exhibition coordination',
      responsibilities: [
        'Primary Amsterdam liaison for Chicago team and Easy Otabor',
        'Exhibition production support including installation and condition documentation',
        'Gallery opening preparation and oversight (Fri-Sun, 12:00-18:00)',
        'Visitor engagement, attendance tracking, and sales inquiry coordination',
        'Facility upkeep, vendor coordination, and supply management',
        'Support for events, previews, and opening receptions',
        'Managing deliveries and maintaining organized inventory'
      ],
      reportsTo: 'Operations (Oscar) for operational oversight; partners provide strategic direction'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Partners Level */}
      <div>
        <div className="text-center mb-6">
          <h2 className="text-neutral-900 mb-1">Partners</h2>
          <div className="w-24 h-1 bg-neutral-900 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              isExpanded={expandedCards.has(partner.id)}
              onToggle={() => toggleCard(partner.id)}
            />
          ))}
        </div>
      </div>

      {/* Connection Line to Operations */}
      <div className="flex justify-center">
        <div className="w-1 h-12 bg-neutral-300"></div>
      </div>

      {/* Operations Level */}
      <div>
        <div className="max-w-2xl mx-auto">
          <TeamMemberCard
            member={operations}
            isExpanded={expandedCards.has(operations.id)}
            onToggle={() => toggleCard(operations.id)}
            isOperations
          />
        </div>
      </div>

      {/* Connection Lines from Operations to Team */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-neutral-300"></div>
          <div className="w-96 h-1 bg-neutral-300"></div>
          <div className="flex justify-between w-96">
            <div className="w-1 h-8 bg-neutral-300"></div>
            <div className="w-1 h-8 bg-neutral-300"></div>
            <div className="w-1 h-8 bg-neutral-300"></div>
          </div>
        </div>
      </div>

      {/* Team Level */}
      <div>
        <div className="text-center mb-6">
          <h2 className="text-neutral-900 mb-1">Team</h2>
          <div className="w-24 h-1 bg-neutral-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              isExpanded={expandedCards.has(member.id)}
              onToggle={() => toggleCard(member.id)}
            />
          ))}
        </div>
      </div>

      {/* Partner-Level Gaps to Consider */}
      <div className="mt-16">
        <div className="text-center mb-6">
          <h2 className="text-neutral-900 mb-1">Partner-Level Gaps to Consider</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GapCard
            title="Financial Strategy & KPIs"
            items={[
              'Annual revenue/profit targets',
              'Pricing philosophy',
              'Balance of research vs. commercial projects'
            ]}
            suggestion="Designate one partner as 'Finance & Commercial Strategy Lead'"
          />
          <GapCard
            title="People Leadership & Culture"
            items={[
              'Performance feedback cadence',
              'Growth conversations',
              'Culture norms for team and freelancers'
            ]}
            suggestion="Explicitly name a 'People & Culture' focus at partner level"
          />
          <GapCard
            title="Long-range Creative Agenda & IP"
            items={[
              'Self-initiated projects',
              'Gallery programming',
              'Publications',
              'TFW as cultural author'
            ]}
            suggestion="Share between partners but name as distinct responsibility"
          />
          <GapCard
            title="CRM and Relationship Strategy"
            items={[
              'Systematic view of relationships to deepen',
              'Industries to enter',
              'CRM data utilization'
            ]}
            suggestion="Anchor under Timo with support from others"
          />
        </div>
      </div>
    </div>
  );
}

interface GapCardProps {
  title: string;
  items: string[];
  suggestion: string;
}

function GapCard({ title, items, suggestion }: GapCardProps) {
  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
      <h3 className="text-amber-900 mb-3">{title}</h3>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="text-amber-800 text-sm flex items-start">
            <span className="mr-2 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="pt-3 border-t border-amber-200">
        <p className="text-xs text-amber-700">
          <strong>Suggestion:</strong> {suggestion}
        </p>
      </div>
    </div>
  );
}
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  description: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: {
    primary: string;
    secondary: string;
    metrics: Array<{
      label: string;
      value: string;
      variant?: 'primary' | 'accent' | 'success';
    }>;
  };
  nextSteps: string;
  duration: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'fashion-brand-scale',
    title: 'E-commerce Fashion Brand Scale',
    industry: 'D2C Fashion',
    description: 'Scaled from ₹2L to ₹15L monthly revenue while maintaining 4.2x ROAS through strategic audience expansion and creative testing.',
    challenge: 'A promising fashion D2C brand was struggling to scale beyond ₹2L monthly revenue. Their previous agency had plateau\'d performance with generic audiences and stale creative, leading to declining ROAS and increased CAC.',
    strategy: 'We conducted a comprehensive audit of their funnel, identified high-intent micro-audiences, and developed a systematic creative testing framework. Our approach focused on lookalike expansion while maintaining performance thresholds.',
    execution: 'Implemented advanced audience segmentation across Meta and Google, launched 15+ creative variations per week, optimized landing pages for mobile conversion, and established proper attribution tracking for accurate ROAS measurement.',
    results: {
      primary: '650% revenue growth',
      secondary: '4.2x average ROAS',
      metrics: [
        { label: 'Revenue Growth', value: '650%', variant: 'primary' },
        { label: 'Average ROAS', value: '4.2x', variant: 'success' },
        { label: 'CAC Reduction', value: '-35%', variant: 'accent' },
      ],
    },
    nextSteps: 'Expanding into Google Shopping campaigns and implementing retention marketing through email/SMS to increase LTV.',
    duration: '6 months',
    tags: ['Meta Ads', 'Google Ads', 'Creative Testing', 'CRO'],
  },
  {
    id: '2',
    slug: 'saas-platform-optimization',
    title: 'B2B SaaS Platform Optimization',
    industry: 'SaaS',
    description: 'Reduced customer acquisition cost by 60% while scaling lead volume 3x through strategic channel optimization and funnel improvements.',
    challenge: 'A B2B software platform was burning through budget with high CACs and low-quality leads. Their funnel had multiple leak points, and they lacked proper lead scoring and attribution.',
    strategy: 'Rebuilt their entire demand generation funnel from awareness to conversion. Focused on high-intent keywords, implemented lead scoring, and created targeted content for different buyer personas.',
    execution: 'Launched targeted Google Ads campaigns, implemented marketing automation sequences, A/B tested landing pages for each buyer persona, and established proper sales-marketing alignment with lead handoff processes.',
    results: {
      primary: '60% CAC reduction',
      secondary: '3x lead volume',
      metrics: [
        { label: 'CAC Reduction', value: '-60%', variant: 'success' },
        { label: 'Lead Volume', value: '3x', variant: 'primary' },
        { label: 'MQL-SQL Rate', value: '+45%', variant: 'accent' },
      ],
    },
    nextSteps: 'Implementing account-based marketing (ABM) strategies and expanding into LinkedIn advertising for enterprise prospects.',
    duration: '4 months',
    tags: ['Google Ads', 'Marketing Automation', 'Lead Generation', 'CRO'],
  },
  {
    id: '3',
    slug: 'fintech-app-conversion',
    title: 'FinTech App Conversion Optimization',
    industry: 'FinTech',
    description: 'Achieved 25% conversion rate improvement and 40% cost reduction through landing page optimization and audience refinement.',
    challenge: 'A financial services app had strong traffic volume but poor conversion rates. Users were dropping off at the sign-up stage, and acquisition costs were unsustainable for their LTV.',
    strategy: 'Conducted comprehensive user research to identify friction points, implemented trust signals and social proof, and refined targeting to reach users with higher intent and financial readiness.',
    execution: 'Redesigned landing pages with clearer value propositions, added security badges and testimonials, implemented progressive profiling, and launched retargeting campaigns for abandoned sign-ups.',
    results: {
      primary: '25% conversion improvement',
      secondary: '40% cost reduction',
      metrics: [
        { label: 'Conversion Rate', value: '+25%', variant: 'accent' },
        { label: 'Cost per Lead', value: '-40%', variant: 'success' },
        { label: 'App Downloads', value: '+85%', variant: 'primary' },
      ],
    },
    nextSteps: 'Implementing post-install engagement campaigns and referral marketing to improve user acquisition efficiency.',
    duration: '5 months',
    tags: ['App Marketing', 'CRO', 'User Research', 'Retargeting'],
  },
];

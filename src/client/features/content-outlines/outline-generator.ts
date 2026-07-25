export interface ContentOutlineInput {
  keyword: string;
  targetDomain?: string;
  competitorHeadings?: string[];
  searchVolume?: number;
  keywordDifficulty?: number;
}

export interface GeneratedContentOutline {
  titleTag: string;
  metaDescription: string;
  targetWordCount: number;
  recommendedH1: string;
  outlineSections: {
    heading: string;
    level: "h2" | "h3";
    description: string;
    suggestedKeywords: string[];
  }[];
  faqQuestions: string[];
}

/**
 * Generate an actionable SEO content brief outline from keyword & SERP insights.
 */
export function generateSeoContentOutline(
  input: ContentOutlineInput,
): GeneratedContentOutline {
  const kw = input.keyword.trim();
  const kwCapitalized = kw.charAt(0).toUpperCase() + kw.slice(1);

  return {
    titleTag: `${kwCapitalized}: Ultimate Guide & Strategies (${new Date().getFullYear()}) | SEOFlowX`,
    metaDescription: `Master ${kw} with our complete step-by-step breakdown. Learn proven methods, real-world examples, and expert insights to boost your search rankings.`,
    targetWordCount: (input.keywordDifficulty ?? 40) > 60 ? 2500 : 1800,
    recommendedH1: `The Complete Guide to ${kwCapitalized}`,
    outlineSections: [
      {
        heading: `What is ${kwCapitalized}?`,
        level: "h2",
        description: `Define key terminology and establish fundamental context for readers searching for ${kw}.`,
        suggestedKeywords: [kw, `${kw} definition`, `basics of ${kw}`],
      },
      {
        heading: `Why ${kwCapitalized} Matters for Your Strategy`,
        level: "h2",
        description: `Highlight core benefits, statistical data, and market impact.`,
        suggestedKeywords: [
          `importance of ${kw}`,
          `${kw} benefits`,
          `strategy`,
        ],
      },
      {
        heading: `Step-by-Step Implementation Framework`,
        level: "h2",
        description: `Provide clear actionable steps to achieve results.`,
        suggestedKeywords: [
          `how to use ${kw}`,
          `best practices`,
          `step by step`,
        ],
      },
      {
        heading: `Key Tactics & Action Items`,
        level: "h3",
        description: `Specific operational tips and techniques.`,
        suggestedKeywords: [`tips`, `examples`, `checklist`],
      },
      {
        heading: `Common Mistakes to Avoid`,
        level: "h2",
        description: `Address common pitfalls and risk mitigation.`,
        suggestedKeywords: [`pitfalls`, `mistakes`, `troubleshooting`],
      },
    ],
    faqQuestions: [
      `What is the fastest way to get started with ${kw}?`,
      `How much does it cost to implement ${kw}?`,
      `What are the best tools for ${kw}?`,
    ],
  };
}

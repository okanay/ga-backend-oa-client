export type Feature = {
  rotate: "left" | "right";
  header: string;
  description: string;
};

export const featuresData: Feature[] = [
  {
    // Focus on the benefit: Higher rankings = more leads/sales
    rotate: "left",
    header: "Rank Above Your Competitors",
    description:
      "Unlock the power of SEO indexing and dominate search results. Attract more leads and grow your business.",
  },

  {
    // Use active voice and emphasize visibility
    rotate: "right",
    header: "Get Your Website Seen",
    description:
      "Stop being invisible online. Get your website indexed and attract more visitors with powerful SEO.",
  },

  {
    // Combine issues for clarity and highlight the solution
    rotate: "left",
    header: "Fix Speed & Errors, Boost Indexing",
    description:
      "Slow site speed and crawl errors? We'll fix them and optimize your website for fast, efficient indexing.",
  },

  {
    // Simplify and personalize
    rotate: "right",
    header: "Navigate SEO with Expert Guidance",
    description:
      "Don't go it alone. Our SEO experts will guide you to top search positions and optimal indexing results.",
  },

  {
    // Use a strong call to action
    header: "Unleash SEO's Full Potential",
    rotate: "left",
    description:
      "Watch your website traffic skyrocket with optimized SEO indexing. Get started today and see the results!",
  },
];

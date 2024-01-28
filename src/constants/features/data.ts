export type Feature = {
  rotate: "left" | "right";
  className: string;
  header: string;
  description: string;
};

export const featuresData: Feature[] = [
  {
    rotate: "left",
    className: "justify-start text-start items-start",
    header: "Are you feeling invisible online?",
    description:
      "Your website might be missing out on valuable traffic because it's not indexed by search engines. Let's get those pages seen and make your business shine!",
  },
  {
    rotate: "right",
    className: "justify-end text-end items-end",
    header: "Wondering why your competitors are ranking higher?",
    description:
      "SEO indexing could be the secret ingredient they're using. Get the edge you need and start climbing those search results!",
  },
  {
    rotate: "left",
    className: "justify-start text-start items-start",
    header: "Frustrated with slow site speed and crawl errors?",
    description:
      "These technical issues could be hindering your indexing progress. Let's troubleshoot together and get your website back on track.",
  },
  {
    rotate: "right",
    className: "justify-end text-end items-end",
    header: "Need help navigating the complexities of SEO?",
    description:
      "You're not alone! Our experts can guide you through the process and help you achieve optimal indexing results.",
  },
  {
    rotate: "left",
    className: "justify-start text-start items-start",
    header: "Ready to take your SEO to the next level?",
    description:
      "Unlock the full potential of SEO indexing and watch your website traffic soar. Get started today!",
  },
];

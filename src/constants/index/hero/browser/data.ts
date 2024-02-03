type PagesType = {
  index: number;
  favicon: string;
  title: string;
  url: string;
  type: "good" | "bad";
};

export const dummyPages: PagesType[] = [
  {
    index: 0,
    favicon: "📱",
    title: "Awesome Indexing",
    url: "/high-selling-phone",
    type: "good",
  },
  {
    index: 1,
    favicon: "🥹",
    title: "Bad Indexing",
    url: "/not-selling-pc",
    type: "bad",
  },
  {
    index: 2,
    favicon: "✏️",
    title: "Perfect Pencil",
    url: "/everyone-favorite-pencil",
    type: "good",
  },
  {
    index: 3,
    favicon: "⌚︎",
    title: "Mysterious Watch",
    url: "/watch-that-no-one-knows",
    type: "bad",
  },
];

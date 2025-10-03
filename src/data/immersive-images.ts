import { StaticImageData } from "next/image";

export type ImmersiveImageSegment = {
  id: string;
  image: string | StaticImageData;
  alt: string;
  layout: "fullscreen" | "stacked" | "portrait";
  title?: string;
  subtitle?: string;
  description?: string;
  tone?: "warm" | "calm" | "vibrant";
};

export const immersiveImages: ImmersiveImageSegment[] = [
  {
    id: "hugging",
    image: "/images/kids-hugging.jpg",
    alt: "Two kids embracing each other",
    layout: "fullscreen",
    tone: "calm",
  },
  {
    id: "highfive",
    image: "/images/teacher-student-highfive.jpg",
    alt: "Teacher and student reaching for a high five",
    layout: "fullscreen",
    title: "Progress worth celebrating",
    description:
      "Every milestone—no matter how small—is met with encouragement and a cheer loud enough for the whole class.",
    tone: "vibrant",
  },
  {
    id: "laughter",
    image: "/images/girl-laughing.jpg",
    alt: "Girl laughing with joy",
    layout: "portrait",
    tone: "warm",
  },
  {
    id: "drawing",
    image: "/images/boy-drawing.jpg",
    alt: "Boy focused on drawing and creating art",
    layout: "portrait",
    title: "Creative expression",
    description:
      "Art becomes a language when words feel too difficult, allowing children to communicate their inner world.",
    tone: "calm",
  },
  {
    id: "mother-daughter",
    image: "/images/mother-dropping-off-daughter.jpg",
    alt: "Mother dropping off her daughter at the center",
    layout: "fullscreen",
    title: "Trust in action",
    description:
      "The moment when parents entrust their most precious gift to our care, knowing they'll be loved and supported.",
    tone: "warm",
  },
  {
    id: "two-girls-hugging",
    image: "/images/two-girls-hugging.jpg",
    alt: "Two girls hugging each other affectionately",
    layout: "portrait",
    description:
      "Friendship blooms in the simplest gestures—a hug that says 'I see you, and you matter to me.'",
    tone: "warm",
  },
];

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
    id: "gathering",
    image: "/images/group-photo-outdoors.jpg",
    alt: "Children and caregivers smiling together outdoors",
    layout: "fullscreen",
    title: "Belonging in every frame",
    subtitle: "Community at the center",
    description:
      "Families and staff stand shoulder to shoulder, creating a circle of safety that every child can feel.",
    tone: "warm",
  },
  {
    id: "playing",
    image: "/images/kids-playing.jpg",
    alt: "Children playing and laughing together",
    layout: "fullscreen",
    title: "Where play becomes progress",
    description:
      "Through structured play, children discover their strengths, build friendships, and learn that they belong here.",
    tone: "vibrant",
  },
  {
    id: "hugging",
    image: "/images/kids-hugging.jpg",
    alt: "Two kids embracing each other",
    layout: "fullscreen",
    description:
      "Trust is built in moments like these—unprompted affection, giggles, and the comfort of knowing you are seen.",
    tone: "calm",
  },
  {
    id: "best-friends",
    image: "/images/two-girls-hugging.jpg",
    alt: "Two girls hugging and smiling",
    layout: "fullscreen",
    description:
      "Joy is contagious. When one child feels safe, the whole room softens and finds its rhythm.",
    tone: "warm",
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
    id: "literacy",
    image: "/images/learning-words.jpg",
    alt: "Child learning words with illustrated cards",
    layout: "stacked",
    title: "Learning that feels like play",
    description:
      "Multi-sensory lessons turn new vocabulary into stories, sounds, and textures the kids hold onto long after class.",
    tone: "calm",
  },
  {
    id: "classroom",
    image: "/images/clasroom-learning.jpg",
    alt: "Teacher guiding children during classroom learning",
    layout: "stacked",
    description:
      "Each table is an intentional micro-community where practiced patience meets steady curiosity.",
    tone: "warm",
  },
  {
    id: "eating",
    image: "/images/girl-eating.jpg",
    alt: "Girl enjoying a meal with caregivers",
    layout: "stacked",
    title: "Nourishment in every sense",
    description:
      "Mealtime is about more than food—it's about independence, social connection, and the simple joy of sharing a meal together.",
    tone: "warm",
  },
  {
    id: "drawing",
    image: "/images/boy-drawing.jpg",
    alt: "Boy focused on drawing and creating art",
    layout: "stacked",
    description:
      "Art becomes a language when words feel hard. Every stroke, every color choice, every creation tells a story of growth.",
    tone: "calm",
  },
  {
    id: "sensory",
    image: "/images/student-teacher-sensory.jpg",
    alt: "Student and teacher working together on sensory activities",
    layout: "stacked",
    title: "Sensory learning in action",
    description:
      "Through touch, texture, and movement, children discover new ways to understand their world and express themselves.",
    tone: "calm",
  },
  {
    id: "animal-cards",
    image: "/images/boy-holding-animal-card.jpg",
    alt: "Boy proudly holding an animal flashcard",
    layout: "stacked",
    description:
      "Confidence looks like a grin, a raised card, and a room full of friends clapping you on.",
    tone: "vibrant",
  },
  {
    id: "ponder",
    image: "/images/boy-sitting.jpg",
    alt: "Boy sitting and looking thoughtful",
    layout: "portrait",
    title: "Space to breathe",
    description:
      "Quiet corners let kids regulate, reflect, and return to the group on their own terms.",
    tone: "calm",
  },
  {
    id: "laughter",
    image: "/images/girl-laughing.jpg",
    alt: "Girl laughing with joy",
    layout: "portrait",
    description:
      "When laughter comes easily, we know the day's work is landing where it matters—inside their sense of self.",
    tone: "warm",
  },
];

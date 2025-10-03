export type GalleryImage = {
  id: string;
  image: string;
  alt: string;
  title?: string;
  description?: string;
  tone: "warm" | "calm" | "vibrant";
  toneLabel: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "hugging",
    image: "/images/kids-hugging.jpg",
    alt: "Two kids embracing each other with joy",
    tone: "calm",
    toneLabel: "Gentle Connection",
    description:
      "Trust grows in the moments when children feel safe enough to reach for one another without being prompted.",
  },
  {
    id: "gathering",
    image: "/images/group-photo-outdoors.jpg",
    alt: "Children and caregivers smiling together outdoors",
    title: "Belonging in every frame",
    description:
      "Families and staff stand shoulder to shoulder, creating a circle of safety that every child can feel.",
    tone: "warm",
    toneLabel: "Sunlit Joy",
  },
  {
    id: "playing",
    image: "/images/kids-playing.jpg",
    alt: "Children playing and laughing together",
    title: "Where play becomes progress",
    description:
      "Through structured play, children discover their strengths, build friendships, and learn that they belong here.",
    tone: "vibrant",
    toneLabel: "Energetic",
  },
  {
    id: "highfive",
    image: "/images/teacher-student-highfive.jpg",
    alt: "Teacher and student reaching for a high five",
    title: "Progress worth celebrating",
    description:
      "Every milestone—no matter how small—is met with encouragement and a cheer loud enough for the whole class.",
    tone: "vibrant",
    toneLabel: "Celebratory",
  },
  {
    id: "literacy",
    image: "/images/learning-words.jpg",
    alt: "Child learning words with illustrated cards",
    title: "Learning that feels like play",
    description:
      "Multi-sensory lessons turn new vocabulary into stories, sounds, and textures that stick well beyond class time.",
    tone: "calm",
    toneLabel: "Focused",
  },
  {
    id: "classroom",
    image: "/images/clasroom-learning.jpg",
    alt: "Teacher guiding children during classroom learning",
    description:
      "Each table is its own micro-community where patience, curiosity, and teamwork come together.",
    tone: "warm",
    toneLabel: "Guided Growth",
  },
  {
    id: "animal-cards",
    image: "/images/boy-holding-animal-card.jpg",
    alt: "Boy proudly holding an animal flashcard",
    description:
      "Confidence looks like a grin, a raised card, and a room full of friends clapping you on.",
    tone: "vibrant",
    toneLabel: "Confident",
  },
  {
    id: "ponder",
    image: "/images/boy-sitting.jpg",
    alt: "Boy sitting and looking thoughtful",
    title: "Space to breathe",
    description:
      "Quiet corners let kids regulate, reflect, and return to the group on their own terms.",
    tone: "calm",
    toneLabel: "Reflective",
  },
  {
    id: "laughter",
    image: "/images/girl-laughing.jpg",
    alt: "Girl laughing with joy",
    description:
      "When laughter comes easily, we know the day's work is landing exactly where it matters—in their sense of self.",
    tone: "warm",
    toneLabel: "Joyful",
  },
  {
    id: "drawing",
    image: "/images/boy-drawing.jpg",
    alt: "Boy focused on drawing and creating art",
    title: "Creative expression",
    description:
      "Art becomes a language when words feel too difficult, allowing children to communicate their inner world.",
    tone: "calm",
    toneLabel: "Artistic",
  },
  {
    id: "mother-daughter",
    image: "/images/mother-dropping-off-daughter.jpg",
    alt: "Mother dropping off her daughter at the center",
    title: "Trust in action",
    description:
      "The moment when parents entrust their most precious gift to our care, knowing they'll be loved and supported.",
    tone: "warm",
    toneLabel: "Trusting",
  },
  {
    id: "two-girls-hugging",
    image: "/images/two-girls-hugging.jpg",
    alt: "Two girls hugging each other affectionately",
    description:
      "Friendship blooms in the simplest gestures—a hug that says 'I see you, and you matter to me.'",
    tone: "warm",
    toneLabel: "Affectionate",
  },
];


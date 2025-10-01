export interface FocusArea {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

export interface DailyRhythm {
  time: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ImpactStory {
  child: string;
  headline: string;
  story: string;
  progress: string[];
}

export interface Value {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavLink {
  href: string;
  label: string;
}

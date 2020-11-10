export interface Job {
  name: string;
  url: string;
  position: string;
  period: string;
}

export interface Work {
  title: string;
  link: string;
  stack: string;
  source?: string;
}

export interface Gear {
  title: string;
  text: string;
  link?: string;
}

export interface OpenSourceItem {
  title?: string;
  text?: string;
  stack?: string;
  via?: string;
  link?: string;
}

export interface OpenSource {
  projects: OpenSourceItem[];
  contributions: OpenSourceItem[];
}

export interface HomeProps {
  myJobs: Job[];
  myWorks: Work[];
  myGears: Gear[];
  openSource: OpenSource;
}

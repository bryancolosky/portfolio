interface School {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  website: string;
  startDate: string;
  endDate: string;
}

interface Language {
  language: string;
  fluency: string;
}

interface Work {
  media?: string;
  decoration?: number;
  fill?: string;
  company: string;
  position?: string;
  website?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  published?: boolean;
}

interface Volunteer {
  organization: string;
  position: string;
  website?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface Resume {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  location?: {
    city: string;
    countryCode?: string;
    region?: string;
  };
  education?: School[];
  languages?: Language[];
  workExperience?: Work[];
  volunteer?: Volunteer[];
  skills?: {
    name: string;
    level?: string;
    keywords?: string[];
  }[];
  awards?: {
    title: string;
    date?: string;
    awarder?: string;
    summary?: string;
  }[];
  publications?: {
    name: string;
    publisher?: string;
    releaseDate?: string;
    website?: string;
    summary?: string;
  }[];
  coverImage?: string;
  ogImage?: {
    url: string;
  };
}

export default Resume;

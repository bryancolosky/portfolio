import type { Content } from '@/types/index';
import type Resume from '@/types/resume';
import type Author from '@/types/author';

export interface Page extends Content {
  cover?: {
    headline: string;
    subheadline: string;
    image?: string;
    greeting?: string;
    description?: string;
    lead: {
      string: string;
      link?: {
        url: string;
        label: string;
        primary?: boolean;
      };
    };
  };
  heroPost?: {
    id: string;
    title: string;
    date?: string;
    overview?: string;
    author?: Author;
    slug?: string;
    coverImage: string;
    color?: string;
    emoji?: string;
    decoration?: number;
  };
  resume?: Resume;
}

export async function getAllPages(): Promise<Page[]> {
  return Promise.resolve(pages);
}

export async function getPageById(id: string): Promise<Page | undefined> {
  return Promise.resolve(pages.find((p) => p.id === id));
}

export const studiocraft: Page[] = [
  {
    id: 'studiocraft',
    cover: {
      headline: 'Studiocraft—handcrafted design ⚡️',
      subheadline: 'An independent design agency and consultancy',
      lead: {
        string: 'See the',
        link: {
          url: '/merchandise',
          label: 'merch & goods 🛍️',
          primary: true
        }
      }
    }
  }
];

export const pages: Page[] = [
  {
    id: 'home',
    cover: {
      headline: "Hello—I'm Bryan 👋",
      subheadline: 'I’m a multi-disciplinary designer',
      lead: {
        string: 'Check out my',
        link: {
          url: '/portfolio',
          label: 'portfolio 🎨',
          primary: true
        }
      }
    }
  },
  {
    id: 'about',
    cover: {
      headline: 'About me 🌱',
      subheadline: "Hey there! I'm Bryan—here's a little about me",
      lead: {
        string: 'Check out my',
        link: {
          url: '/portfolio',
          label: 'portfolio 🎨',
          primary: true
        }
      }
    }
  },
  {
    id: 'contact',
    cover: {
      headline: 'Get in touch 📬',
      subheadline: 'Connect—get in touch with me',
      lead: {
        string: 'Review my',
        link: {
          url: '/resume',
          label: 'professional experience 🎨',
          primary: true
        }
      }
    }
  },
  {
    id: 'resume',
    cover: {
      headline: 'Resume 👔',
      subheadline: 'UX and product design specialist',
      lead: {
        string:
          'I am occasionally available for project work and contract jobs — feel free to',
        link: {
          url: '/contact',
          label: 'get in touch ✉️',
          primary: false
        }
      }
    },
    resume: {
      name: 'Bryan Colosky',
      email: 'bryan.colosky@gmail.com',
      phone: '(760) 265-1232',
      role: 'Multidisciplinary Designer',
      location: {
        city: 'New York',
        countryCode: 'US',
        region: 'NY'
      },
      education: [
        {
          institution:
            'California Polytechnic State University - San Luis Obispo',
          website: 'http://www.calpoly.edu',
          fieldOfStudy: 'Architecture & Environmental Design',
          degree: 'Bachelor of Architecture | B.Arch',
          startDate: '2007-09-01T00:00:00.000Z',
          endDate: '2012-06-15T00:00:00.000Z'
        }
      ],
      languages: [
        {
          language: 'English',
          fluency: 'Native speaker'
        }
      ],
      workExperience: [
        {
          company: 'Pager Health',
          position: 'Product Designer 👨‍💻',
          website: 'http://pager.com',
          startDate: '2024-02-08T00:00:00.000Z',
          endDate: 'Current',
          summary:
            'Responsible for daily consulting and planning on multiple digital properties. Facilitating collaboration among various teams & clients to ensure projects meet UX & technical expectations. Defining project specifications across multiple phases.',
          highlights: ['Wireframes', 'UX Design', 'UI Design', 'Product Lead'],
          media: 'pager-art.png',
          decoration: 5,
          fill: 'indigo',
          published: true
        },
        {
          company: 'Camber (formerly Juniper Behavioral Health)',
          position: 'Product Designer 👨‍💻',
          website: 'http://camber.health',
          startDate: '2022-10-03T00:00:00.000Z',
          endDate: '2023-09-22T00:00:00.000Z',
          summary:
            'Responsible for daily consulting and planning on multiple digital properties. Facilitating collaboration among various teams & clients to ensure projects meet UX & technical expectations. Defining project specifications across multiple phases.',
          highlights: ['Wireframes', 'UX Design', 'UI Design', 'Product Lead'],
          media: 'juniper-art.png',
          decoration: 1,
          fill: 'green',
          published: true
        },
        {
          company: 'Talkiatry',
          position: 'Senior UX Designer 👨‍💻',
          website: 'http://talkiatry.com',
          startDate: '2021-12-14T00:00:00.000Z',
          endDate: '2022-09-16T00:00:00.000Z',
          summary:
            'Responsible for daily consulting and planning on multiple digital properties. Facilitating collaboration among various teams & clients to ensure projects meet UX & technical expectations. Defining project specifications across multiple phases.',
          highlights: [
            'Branding & Identity',
            'Wireframes',
            'UX Design',
            'UI Design',
            'Product Lead'
          ],
          media: 'talkiatry-art.png',
          decoration: 8,
          fill: 'yellow',
          published: true
        },
        {
          company: 'Click Therapeutics',
          position: 'Product Designer / UX Lead 👨‍💻',
          website: 'http://clicktx.com',
          startDate: '2019-11-15T00:00:00.000Z',
          endDate: '2022-08-22T00:00:00.000Z',
          summary:
            'Responsible for daily consulting and planning on multiple digital properties. Facilitating collaboration among various teams & clients to ensure projects meet UX & technical expectations. Defining project specifications across multiple phases.',
          highlights: [
            'Sitemaps',
            'Wireframes',
            'UX Design',
            'UI Design',
            'Specification Documentation'
          ],
          media: 'ctx-art.png',
          decoration: 3,
          fill: 'black',
          published: true
        },
        {
          company: 'SchoolCare (formerly CareDox)',
          position: 'UI Designer & Design Systems Lead 👨‍💻',
          website: 'http://caredox.com',
          startDate: '2019-02-14T00:00:00.000Z',
          endDate: '2019-08-14T00:00:00.000Z',
          summary:
            'UX / UI design & redesign of upcoming iOS app, legacy web properties, and progressive web app. Designing & maintaing organizational design system, library files, and repositories with appropriate READMEs, instructions, and annotations. Facilitating collaboration among the engineering & design teams in order to build a ReactJS library of UI components, and creating corresponding design files.',
          highlights: [
            'Design System',
            'Wireframes',
            'UX Design',
            'UI Design',
            'Visual Design'
          ],
          decoration: 3,
          fill: 'orange',
          published: true
        },
        {
          company: 'Blue Fountain Media',
          position: 'Information Architect / UX Lead 👨‍💻',
          website: 'https://en.wikipedia.org/wiki/Blue_Fountain_Media',
          startDate: '2015-11-15T00:00:00.000Z',
          endDate: '2018-12-22T00:00:00.000Z',
          summary:
            'Responsible for daily consulting and planning on multiple digital properties. Facilitating collaboration among various teams & clients to ensure projects meet UX & technical expectations. Defining project specifications across multiple phases.',
          highlights: [
            'Sitemaps',
            'Wireframes',
            'UX Design',
            'UI Design',
            'Specification Documentation'
          ],
          media: 'abelcine-art.png',
          decoration: 9,
          fill: 'blue',
          published: true
        },
        {
          company: 'WEBCBG',
          position: 'Creative Director 🎨',
          website: 'http://webcbg.com',
          startDate: '2013-09-02T00:00:00.000Z',
          endDate: '2015-10-01T00:00:00.000Z',
          summary:
            'Responsible for both internal and also external art directions as well as frontend web design & development. Designing & maintaining a common style guide & component library for products. Maintaining project repositories with appropriate READMEs, instructions, & annotations.',
          highlights: [
            'Client-side Development',
            'UI Design',
            'UX Design',
            'Geographical Information Systems',
            'Branding & Identity',
            'Graphic Design'
          ],
          media: 'maptycs-art.png',
          decoration: 5,
          fill: 'violet',
          published: true
        },
        {
          company: 'Studiocraft',
          position: 'Multidisciplinary Designer 🎨',
          website: 'http://studiocraft.cc',
          startDate: '2012-01-01T00:00:00.000Z',
          endDate: '2014-01-01T00:00:00.000Z',
          summary:
            'Original founder. Consultating and implementing a variety of affordable & professional web services for small businesses, start-ups, and artists.',
          highlights: [
            'Consulting & Freelance',
            'Audience Segmentation',
            'User Personas',
            'UX Design',
            'Graphic Design',
            'Branding & Identity'
          ],
          decoration: 7,
          fill: 'yellow',
          published: true
        },
        {
          company: 'Steeno Design Studio',
          position: 'Draftsman / Project Manager 📐',
          website: 'http://www.steenodesign.com',
          startDate: '2012-10-01T00:00:00.000Z',
          endDate: '2013-05-01T00:00:00.000Z',
          summary:
            'Producing construction drawings, detail drawings, site analysis, and renderings for commercial & residential projects. Coordinating & maintaining communication among various city & town municipalities, contractors, & engineers.',
          highlights: [
            'Drafting & Drawing',
            'Structure Analysis & Calculations',
            'Obtaining Construction & Occupancy Permits',
            'Print Design'
          ],
          decoration: 10,
          fill: 'indigo',
          published: true
        },
        {
          company: 'California Polytechnic State University',
          position: 'Website Designer / Content Creation 👨‍💻',
          website: 'http://www.calpoly.edu',
          startDate: '2009-10-01T00:00:00.000Z',
          endDate: '2012-05-01T00:00:00.000Z',
          summary:
            'Coordinating print & web design between Cal Poly’s Admissions Office & College of Agricultural Business College. Developing HTML & CSS best practices, and Establishing print & web styleguides.',
          highlights: [
            'HTML',
            'CSS',
            'Brochure & Banner Design',
            'Print Design',
            'Office Collateral'
          ],
          decoration: 1,
          fill: 'green',
          published: true
        },
        {
          company: 'Edwards Air Force Base',
          position: 'Intern for Engineering Technician 🛩️',
          website: 'http://www.edwards.af.mil',
          startDate: '2008-06-14T00:00:00.000Z',
          endDate: '2008-09-01T00:00:00.000Z',
          summary:
            'Working with engineers & flight-line personnel to maintain several catalogs of electrical test components via Auto CAD, Excel, & PDF. Drawing & detailing aircraft electrical test components and catalogs.',
          highlights: [
            'Drafting & Drawing',
            'Database Managment',
            'Catalog Taxonomy & Design'
          ],
          decoration: 8,
          fill: 'white',
          published: true
        }
      ],
      volunteer: [
        {
          organization: 'Organization',
          position: 'Volunteer',
          website: 'http://organization.com/',
          startDate: '2012-01-01T00:00:00.000Z',
          endDate: '2013-01-01T00:00:00.000Z',
          summary: 'Description',
          highlights: ['Awarded Volunteer of the Month']
        }
      ],
      awards: [
        {
          title: 'Award',
          date: '2014-11-01T00:00:00.000Z',
          awarder: 'Company',
          summary: 'There is no spoon.'
        }
      ],
      publications: [
        {
          name: 'Publication',
          publisher: 'Company',
          releaseDate: '2014-10-01T00:00:00.000Z',
          website: 'http://publication.com',
          summary: 'Description'
        }
      ],
      skills: [
        {
          name: 'Visual Design',
          level: 'Master',
          keywords: [
            'Illustrator',
            'InDesign',
            'Photoshop',
            'Adobe Xd',
            'InVision',
            'Axure',
            'Sketch',
            'FormZ',
            'AutoCAD'
          ]
        },
        {
          name: 'Web Development',
          level: 'Proficient',
          keywords: ['HTML', 'CSS', 'Javascript', 'SASS & Less', 'PostCSS']
        },
        {
          name: 'Frameworks & Libraries',
          level: 'Proficient',
          keywords: [
            'Bootstrap',
            'Foundation',
            'Jekyll',
            'Node JS',
            'JQuery',
            'Google Maps API',
            'Leaflet JS'
          ]
        },
        {
          name: 'Revision Control & Build Tools',
          level: 'Proficient',
          keywords: ['Git', 'Gulp JS', 'Webpack', 'Grunt']
        },
        {
          name: 'IDEs',
          level: 'Master',
          keywords: ['Atom', 'Sublime Text', 'Webstorm']
        },
        {
          name: 'Operating Systems & Distros',
          level: 'Master',
          keywords: ['macOS', 'iOS', 'Linux', 'Windows', 'Android']
        },
        {
          name: 'Analog',
          level: 'Master',
          keywords: [
            'Steel & Wood Fabrication',
            'Architectural Modeling',
            'Hand Drafting',
            'Paint',
            'Print',
            'Film'
          ]
        }
      ]
    }
  },
  {
    id: 'portfolio',
    cover: {
      headline: 'Welcome to my projects 💼',
      subheadline: 'I’m a multi-disciplinary designer',
      lead: {
        string: 'Check out my',
        link: {
          url: '/portfolio',
          label: 'portfolio 🎨',
          primary: true
        }
      }
    },
    heroPost: {
      id: 'hero',
      title: 'Abelcine',
      coverImage: './abelcine-art.png',
      color: 'red',
      emoji: '🎥',
      decoration: 5
    }
  }
];

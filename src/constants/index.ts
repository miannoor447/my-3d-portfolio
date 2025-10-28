import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  agiledistrict as agile,
  talkioai,
  badface,
  threejs,
  cashfreight,
  contentsense,
  granjur,
  nobel10,
  nextjs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Front End Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'AI Engineer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];



const experiences: TExperience[] = [
  {
    title: 'Full Stack Developer',
    companyName: 'Nobel10 Technologies',
    icon: nobel10,
    iconBg: '#383E56',
    date: 'Aug 2025 - Present',
    points: [
      'Developing an AI-driven content generation platform — ContentSense — using Next.js, FastAPI, and pgvector.',
      'Integrated Veo3 for AI-based video generation and Grok for intelligent script creation.',
      'Built scalable RESTful APIs and vector search pipelines leveraging pgvector for semantic recommendations.',
      'Designed automated AI workflows using n8n for agent orchestration and task automation.',
      'Collaborated with ML and product teams to deliver secure, high-performance, cloud-ready architecture.',
    ],
  },
  {
    title: 'Senior Full Stack Developer',
    companyName: 'Agile District',
    icon: agile, 
    iconBg: '#E6DEDD',
    date: 'May 2025 - Aug 2025',
    points: [
      'Led full-stack development of scalable web and mobile applications using React, React Native, and Node.js.',
      'Architected and deployed major products including Stigmi (online learning platform) and Now V Play (sports talent ecosystem).',
      'Delivered Talkio AI — a multi-language AI-powered learning platform supporting 50+ languages.',
      'Guided agile sprints, peer code reviews, and cross-functional collaboration across UI/UX, backend, and QA teams.',
      'Produced modular, reusable, and performance-optimized codebases for mobile-first scalability.',
    ],
  },
  {
    title: 'Associate Software Engineer (Full Stack)',
    companyName: 'Granjur Technologies',
    icon: granjur, 
    iconBg: '#383E56',
    date: 'Jun 2023 - Jan 2025',
    points: [
      'Developed SSR-ready applications with Next.js and reusable UI component libraries for faster development.',
      'Optimized Node.js APIs with MySQL and MongoDB, improving query performance by 25%.',
      'Migrated monolithic codebases to modular React/Redux architecture with Saga for scalable state management.',
      'Enhanced SEO and load speed by 40% through server-side rendering and performance optimization.',
      'Contributed to responsive, mobile-first solutions using React Native for cross-platform consistency.',
    ],
  },

];
const testimonials: TTestimonial[] = [
  {
    testimonial:
      'Noor was instrumental in bringing BadFace to life. He understood the creative vision from day one and built a platform that feels both playful and technically solid. The eCommerce experience he developed is smooth, fast, and engaging — exactly what our brand needed.',
    name: 'Rob Beeby',
    designation: 'Founder',
    company: 'BadFace',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    testimonial:
      'Noor took on a massive challenge with CashFreight — modernizing a freight marketplace with complex logistics and real-time systems — and delivered flawlessly. His backend architecture and API design are top-notch, and his attention to scalability made our platform future-proof.',
    name: 'Omar Rabie',
    designation: 'Co-Founder & CTO',
    company: 'CashFreight',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    testimonial:
      'Collaborating with Noor on Talkio AI was an amazing experience. His ability to merge AI, real-time interactions, and intuitive UX made the platform come alive. He doesn’t just code — he designs products that feel natural, scalable, and built for real users.',
    name: 'Theisof',
    designation: 'CEO',
    company: 'Talkio AI',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    testimonial:
      `Noor's work on ContentSense exceeded all expectations. He took a complex AI-driven storytelling concept and turned it into a functional, elegant, and production-ready platform. His deep understanding of system design and user experience made the entire process seamless.`,
    name: 'Jordan Basset',
    designation: 'Founder',
    company: 'ContentSense',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
];


const projects: TProject[] = [
  {
    name: 'ContentSense AI Script Generator',
    description: `
    ContentSense is an AI-powered storytelling platform that transforms creative ideas into complete cinematic experiences.
Using advanced Vectra intelligence, it allows users to chat with an AI to describe their vision   from genre and tone to characters and plotlines   just like a natural creative partner.
The system then generates detailed scripts, character bios, and scene outlines, along with AI-rendered visuals and video previews powered by Veo3, seamlessly stitching 8-second clips into 2-minute concept reels.
By integrating AI at every stage of production, ContentSense bridges creativity and automation   helping writers, filmmakers, and studios craft original stories or reimagine classics with unprecedented speed and imagination.
    `,
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'FastAPI',
        color: 'orange-text-gradient',
      },
      {
        name: 'Pgvector',
        color: 'pink-text-gradient',
      },
      {
        name: 'Python',
        color: 'green-text-gradient',
      },
    ],
    image: contentsense,
    liveLink: 'https://content-sense-frontend-staging.up.railway.app/',
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Talkio Ai',
    description: `Talkio AI is a next-generation white-label language learning platform that redefines how people master new languages through the perfect blend of human expertise and artificial intelligence.
It combines real tutors, AI-powered assessments, and immersive conversational tools to create an adaptive, interactive learning experience tailored to each user’s needs.
Learners can engage in life-like speaking sessions, receive instant pronunciation feedback, and explore dynamic lesson paths that evolve based on progress and performance.
By bridging the gap between human interaction and AI intelligence, Talkio AI delivers a deeply personalized approach to language mastery   empowering users, schools, and organizations to make communication more natural, confident, and globally connected.`,
    tags: [
      {
        name: 'NextJS',
        color: 'purple-red-violet-text ',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'TTS',
        color: 'orange-text-gradient',
      },
      {
        name: 'ImageGen',
        color: 'electric-red-violet-text',
      },
      {
        name: 'SpeechRec',
        color: 'crimson-purple-glow-text ',
      },
      {
        name: 'AI',
        color: 'blue-text-gradient',
      },
    ],
    image: talkioai,
    liveLink: 'https://www.talkio.ai/',
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Bad face',
    description: `BadFace is a creative eCommerce experience that turns personalization into play.
Built with Shopify, Next.js, and Node.js, it allows users to design their own quirky, mix-and-match face art and instantly preview how it looks on real products like shirts, mugs, and hoodies.
Users can explore endless combinations by scrolling through facial feature sliders or even uploading their own images to craft one-of-a-kind designs.
By merging interactive design with seamless online shopping, BadFace transforms everyday merchandise into a canvas for self-expression blending creativity, humor, and technology into an engaging, AI-driven customization journey.`,
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Shopify',
        color: 'green-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'pink-text-gradient',
      },
      {
        name: 'ReactNative',
        color: 'orange-text-gradient',
      },
    ],
    image: badface,
    liveLink: 'https://badface.store/',
  },
  {
    name: 'Cash freight',
    description: `CashFreight is a next-generation freight marketplace connecting shippers, brokers, and carriers across the U.S. 
It enables users to ship anything, anywhere faster and smarter. 
With AI-driven automation and machine learning insights, CashFreight optimizes routes, pricing, and communication, 
making logistics seamless, transparent, and efficient.`,
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'NextJS',
        color: 'orange-text-gradient',
      },
      {
        name: 'MySql',
        color: 'pink-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
    ],
    image: cashfreight,
    liveLink: 'https://www.cashfreight.com/',
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };

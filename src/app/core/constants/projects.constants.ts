import {Project} from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: '3d shop',
    description: 'A platform for creating custom t-shirt designs, enabling users to effortlessly customize their t-shirts by choosing colors, adding logos, and exploring AI-generated designs.',
    image: 't-shirt-3d-shop',
    stack: [
      'React.js', 'Three.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js',
    ],
    live: 'https://3d-shop-inky.vercel.app/',
    github: 'https://github.com/kalerie/3d-shop'},
  {
    id: 2,
    name: 'A File Management and Real-Time Collaboration App',
    description: 'A real-time collaborative editor that lets multiple users create, edit, and share documents seamlessly from anywhere.',
    image: 'file-system-app',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS'
    ],
    live: 'https://file-system-app-beta.vercel.app/',
    github: 'https://github.com/kalerie/file-system-app'
  },
  {
    id: 3,
    name: 'AI Image Processing Platform',
    description: 'AI SaaS platform for seamless image processing. Restore, recolor, enhance, and manipulate images with cutting-edge AI features through a user-friendly interface.',
    image: 'image-processing-platform',
    stack: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Tailwind CSS',
    ],
    live: 'https://ai-saas-platform-orpin.vercel.app/',
    github: 'https://github.com/kalerie/ai-saas-platform',
  },
];


export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Restaurant Management Application',
    desc: 'The app is for managing various aspects of a restaurant, including employee time tracking, stock management, ordering food, and checking bills, all within the app.',
    subdesc:
      'Built with flutter and managed back-end with Firebase cloud firestore.',
    href: 'https://github.com/lovemxchine/Restaurant_SWE.git',
    texture: '/textures/project/project.png',
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.png',
      },
      {
        id: 2,
        name: 'Firebase',
        path: 'assets/Firebase.png',
      }
    ],
  },
  {
    title: 'Portfolio',
    desc: 'Make a portfolio to submit an internship',
    subdesc:
      'With React.js TailwindCSS',
    href: 'https://github.com/tonkla785/Portfolio.git',
    texture: '/textures/project/portfolio.png',
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwind.png',
      },
      {
        id: 3,
        name: 'JS',
        path: '/assets/js.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/css.png',
      },
    ],
  },
  {
    title: 'Clone Moblie App',
    desc: 'Clone App',
    subdesc:
      'With Flutter',
    href: 'https://github.com/tonkla785/Project-Flutter-Clone-App.git',
    texture: '/textures/project/clone.png',
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.png',
      },
    ],
  },
  {
    title: 'Application of robot operating system to industrial robot arms',
    desc: 'This project aims to develop an automated robotic arm system',
    subdesc:
      'Not finish',
    href: 'https://www.ros.org/',
    texture: '/assets/raspi.png',
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Rasberry Pi',
        path: '/assets/raspi.png',
      },
      {
        id: 2,
        name: 'Arduino',
        path: 'assets/arduino.png',
      },
      {
        id: 3,
        name: 'ROS 2',
        path: '/assets/ros2.png',
      },
      {
        id: 4,
        name: 'Ubuntu',
        path: '/assets/ubuntu.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.07 : 0.1,
    deskPosition: isMobile ? [0, -2.75, -10] : [0, -6.5, -10],
    cubeScale: isSmall ? 0.05 : isMobile ? 0.08 : 0.15,
    cubePosition: isSmall ? [-1.2,-0.49,1] : isMobile ? [-1.2,-0.49,1] : isTablet ? [-3,-1.5,1] : [-3,-1.5,1],
    reactLogoPosition: isSmall ? [1,0.5,1] : isMobile ? [1.2,0.3,1] : isTablet ? [3,0,0.5] : [3,0,0.5],
    reactScale: isSmall ? 0.05 : isMobile ? 0.1 : 0.2,
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
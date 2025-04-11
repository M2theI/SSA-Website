# Northeastern Somali Student Association Website

A modern, responsive React website for the Northeastern University Somali Student Association (NEUSSA). This project serves as the official web presence for NEUSSA, providing information about the organization, upcoming events, and ways to get involved with the Somali community at Northeastern.

![NEUSSA Website Screenshot](public/IMG_0567.jpg)

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Modern Stack**: Built with React 18, TypeScript, and Vite for fast development and optimal performance
- **Component-Based Architecture**: Modular components for better code organization and reusability
- **Fast Loading**: Optimized for performance with quick page transitions
- **Custom CSS**: Hand-crafted CSS for a unique, polished look without heavy frameworks
- **Live Event Listings**: Interactive events section for community engagement

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/M2theI/SSA-Website.git
cd SSA-Website
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

## Project Structure

```
SSA-Website/
├── public/                # Static assets
├── src/                   # Source files
│   ├── Components/        # React components
│   │   ├── Header.tsx     # Navigation component
│   │   ├── HeroSection.tsx # Main landing section
│   │   ├── About.tsx      # About page component
│   │   ├── Events.tsx     # Events listings
│   │   ├── Contact.tsx    # Contact info component
│   │   └── Footer.tsx     # Footer component
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── utils/             # Utility functions
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Deployment

The website is deployed via GitHub Pages and can be accessed at [https://m2thei.github.io/SSA-Website/](https://m2thei.github.io/SSA-Website/).

## Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Vite](https://vitejs.dev/) - Build tool and development server
- [React Router](https://reactrouter.com/) - For navigation
- [Font Awesome](https://fontawesome.com/) - Icons
- [GitHub Pages](https://pages.github.com/) - Hosting

## Future Enhancements

- Adding a photo gallery of past events
- Implementing a member login portal
- Creating an event registration system
- Integrating with social media APIs for live feeds

## About the Developer

I'm a Computer Science student at Northeastern University with a passion for building clean, user-friendly web applications. This project allowed me to combine my technical skills with my commitment to community organizations on campus.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

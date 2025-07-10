# SSB Solutions LLC - Professional Website

A modern, responsive React.js website for SSB Solutions LLC, showcasing AI, Data, and Agile consulting services.

## Features

- **Modern Design**: Sleek, professional design with cyan/blue gradient theme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **React Router**: Client-side routing for seamless navigation
- **TypeScript**: Type-safe development
- **Mobile-First**: Optimized for mobile devices

## Services Showcased

### AI Services
- Enterprise AI Advisor
- AI/ML Solutions Architect
- Centralized Knowledge Repository
- Student's Learning Platform

### Data Services
- Data Migration and Conversion
- Data Analytics and Engineering

### Agile Services
- Agile Transformation Consulting
- Agile Enterprise Coaching and Training

## Technology Stack

- **React 18** with TypeScript
- **React Router DOM** for navigation
- **Framer Motion** for animations
- **CSS3** with modern features (Grid, Flexbox, Custom Properties)
- **Responsive Design** with mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ssbs-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Home.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── AIServices.tsx     # AI services section
│   ├── DataServices.tsx   # Data services section
│   ├── AgileServices.tsx  # Agile services section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   └── *.css              # Component-specific styles
├── App.tsx                # Main app component
├── App.css               # Global styles
└── index.tsx             # App entry point
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Various Platforms

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

#### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect React settings

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/ssbs-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## Customization

### Colors
The website uses a cyan/blue gradient theme. To change colors, update the CSS variables in the component files:

- Primary: `#00ffff` (Cyan)
- Secondary: `#0080ff` (Blue)
- Background: `#000` (Black)
- Text: `#fff` (White)

### Content
Update the content in each component file to match your business needs.

### Images
Replace placeholder content with actual images and icons.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for:
- Fast loading times
- Smooth animations
- Mobile performance
- SEO best practices

## License

This project is proprietary to SSB Solutions LLC.

## Contact

For questions or support, contact SSB Solutions LLC.

---

**SSB Solutions LLC** - Based in Aldie, Virginia | 7+ Years of Excellence

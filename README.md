# The Gryphon Group LLC - Landing Page

A Next.js landing page application for The Gryphon Group LLC, built with the Pages Router and Bootstrap CSS.

## Features

- **Hero Section**: Full-height hero section with background image
- **Projects Section**: Placeholder section for future project showcase
- **About The Team Section**: Placeholder section for team information
- **Bootstrap CSS**: Responsive design using Bootstrap 5
- **Blue & White Color Scheme**: Professional blue and white theme

## Tech Stack

- Next.js 16 (Pages Router)
- React 19
- TypeScript
- Bootstrap 5

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
gryphon-group/
├── pages/
│   ├── _app.tsx          # App wrapper with Bootstrap CSS
│   └── index.tsx         # Landing page
├── styles/
│   ├── globals.css       # Global styles and Bootstrap overrides
│   └── Home.module.css   # Hero section styles
├── public/               # Static assets
└── next.config.ts        # Next.js configuration
```

## Next Steps

1. **Projects Section**: Add project cards and details
2. **About The Team Section**: Add team member profiles and information
3. **Content**: Update content from the business plan PDF
4. **Additional Sections**: Add services, contact, or other sections as needed

## Notes

- The hero section uses a background image from imgix.net
- Bootstrap JavaScript is included for interactive components
- The color scheme uses Bootstrap's primary blue (#0d6efd) and white

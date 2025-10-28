# Banner Craft

A modern, responsive web application for creating and exporting professional banners with custom text, fonts, and designs. Perfect for social media content, marketing materials, and digital graphics.

## 🎯 Overview

Banner Craft is a comprehensive banner maker that empowers users to create stunning visual content with ease. The application features a live preview system, extensive customization options, and multi-format export capabilities, all wrapped in a responsive design that works seamlessly across desktop and mobile devices.

## ✨ Features

### 🎨 Design Capabilities

- **Live Preview**: Real-time banner preview with instant updates
- **Custom Text**: Multi-line text input with dynamic formatting
- **Font Selection**: Extensive font library with web-safe and custom fonts
- **Typography Controls**: Font size, weight, alignment, and spacing adjustments
- **Color Customization**: Full color picker for text and background colors
- **Background Options**: Solid colors, gradients, and custom styling

### 📱 Responsive Design

- **Mobile-First Approach**: Optimized for mobile devices with preview-first layout
- **Adaptive Interface**: Responsive components that adapt to screen size
- **Touch-Friendly**: Mobile-optimized controls and interactions
- **Smart Defaults**: Automatic font sizing based on device (32px mobile, 64px desktop)

### 💾 Export Options

- **Multiple Formats**: Export as PNG, JPEG, or SVG
- **High Quality**: Professional-grade output suitable for print and digital use
- **Instant Download**: One-click export with automatic file naming

### 🎭 Templates

- **Pre-designed Templates**: Curated collection of professional banner templates
- **Quick Start**: Ready-to-use designs for common use cases
- **Customizable Base**: Templates serve as starting points for further customization

## 🚀 Use Cases

### Marketing & Business

- **Social Media Posts**: Create engaging content for Facebook, Instagram, Twitter, LinkedIn
- **Digital Advertising**: Banner ads for websites, Google Ads, and social media campaigns
- **Event Promotion**: Announcement banners for events, webinars, and conferences
- **Business Graphics**: Professional visuals for presentations and marketing materials

### Content Creation

- **Blog Headers**: Eye-catching headers for blog posts and articles
- **YouTube Thumbnails**: Custom thumbnails for video content
- **Newsletter Graphics**: Visual elements for email marketing campaigns
- **Website Banners**: Hero images and promotional banners for websites

### Personal Projects

- **Social Media Stories**: Custom graphics for Instagram and Facebook stories
- **Celebration Banners**: Birthday, anniversary, and milestone announcements
- **Educational Content**: Visual aids for presentations and learning materials
- **Creative Projects**: Artistic banners for personal branding and portfolios

## 🛠 Technology Stack

### Frontend Framework

- **React 18.3.1**: Modern functional components with hooks
- **TypeScript 5.8.3**: Type-safe development with enhanced developer experience
- **Vite 5.4.19**: Fast build tool with hot module replacement

### UI & Styling

- **Tailwind CSS 3.4.15**: Utility-first CSS framework for responsive design
- **shadcn/ui**: High-quality React components built on Radix UI
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide React**: Beautiful, customizable icons

### Core Features

- **html-to-image**: Canvas-based image export functionality
- **React Hook Form**: Efficient form handling with validation
- **Framer Motion**: Smooth animations and transitions (ready for implementation)

### Development Tools

- **ESLint**: Code linting with React and TypeScript support
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Bun**: Fast package manager and runtime

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Modern web browser with ES6+ support

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bangla-banner-craft

# Install dependencies with bun (recommended)
bun install

# Or use npm
npm install

# Start development server
bun run dev
# Or with npm
npm run dev
```

### Development Server

Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui component library
│   ├── BackgroundControls.tsx
│   ├── BannerPreview.tsx
│   ├── ExportControls.tsx
│   ├── FontControls.tsx
│   ├── StyleControls.tsx
│   ├── TemplatePicker.tsx
│   └── TextInput.tsx
├── data/               # Static data and configuration
│   └── templates.ts    # Banner templates and font definitions
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── pages/              # Application pages and routing
├── types/              # TypeScript type definitions
└── utils/              # Export and font loading utilities
```

## 🔧 Building for Production

```bash
# Build for production
bun run build
# Or with npm
npm run build

# Preview production build
bun run preview
# Or with npm
npm run preview
```

## 🤝 Contributing

We welcome contributions to Banner Craft! Please feel free to submit issues, feature requests, and pull requests.

### Development Guidelines

- Follow TypeScript best practices
- Maintain responsive design principles
- Test across different devices and browsers
- Keep components modular and reusable

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- Built with modern React and TypeScript
- UI components powered by shadcn/ui and Radix UI
- Icons by Lucide React
- Styling with Tailwind CSS

# Devavi Media Website

A professional performance marketing agency website built with React, TypeScript, and modern web technologies.

## 🚀 Features

- **Modern Tech Stack**: Built with Vite, React, TypeScript, and Tailwind CSS
- **Performance Optimized**: Lighthouse scores ≥90 for performance, accessibility, and SEO
- **Mobile-First Design**: Fully responsive with careful attention to mobile experience
- **SEO Optimized**: Complete meta tags, structured data, and OpenGraph integration
- **Contact Forms**: Server-side validation with email notifications
- **Analytics Ready**: Google Analytics 4 integration with event tracking
- **Accessibility**: WCAG 2.1 AA compliance with keyboard navigation and screen reader support
- **Case Studies**: Dynamic case study system with detailed metrics and insights

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Routing**: Wouter (lightweight React router)
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion (ready for implementation)

### Backend
- **Runtime**: Node.js with Express
- **Database**: In-memory storage (easily replaceable with PostgreSQL)
- **Validation**: Zod schemas with type safety
- **Email**: Nodemailer (ready for SMTP configuration)

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd devavi-media-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration:
   - `VITE_GA_MEASUREMENT_ID`: Your Google Analytics 4 Measurement ID
   - `SMTP_*`: Email configuration for contact form

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5000 in your browser

### Build for Production

```bash
npm run build
npm start

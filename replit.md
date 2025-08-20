# Overview

Devavi Media is a performance marketing agency website built with modern web technologies. The project features a React-based frontend with TypeScript, a Node.js Express backend, and is designed as a professional marketing site to showcase services, case studies, and generate leads through contact forms. The site emphasizes transparency, results-driven marketing, and maintains a limited client roster for personalized service.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Build System**: Vite for fast development and optimized production builds
- **Routing**: Wouter (lightweight React router) for client-side navigation
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management and API interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Icons**: Lucide React for consistent iconography

## Backend Architecture

- **Runtime**: Node.js with Express for API endpoints
- **Database**: Currently using in-memory storage (MemStorage class) with interface ready for PostgreSQL migration via Drizzle ORM
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **API Structure**: RESTful endpoints with proper error handling and response formatting

## Data Storage

- **Current**: In-memory storage implementation with Map-based data structures for users and contacts
- **Future Ready**: Drizzle ORM configuration present for PostgreSQL migration
- **Schema**: Defined database schemas for users and contacts with proper TypeScript types

## Content Management

- **Static Content**: TypeScript files for managing case studies and testimonials
- **SEO Optimization**: Structured data, meta tags, and OpenGraph integration
- **Analytics**: Google Analytics 4 integration with custom event tracking

## Development & Deployment

- **Development**: Vite dev server with HMR and error overlay
- **Production Build**: Optimized bundling with esbuild for server-side code
- **Static Assets**: Proper asset handling and optimization
- **TypeScript**: Strict type checking across the entire codebase

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Backend**: Express.js, Node.js runtime

## Database & ORM
- **Drizzle ORM**: Database toolkit with PostgreSQL dialect configuration
- **Neon Database**: Serverless PostgreSQL connection (@neondatabase/serverless)
- **Connection Pooling**: connect-pg-simple for session storage

## UI & Styling
- **Radix UI**: Complete set of accessible UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **Lucide React**: Icon library for consistent UI elements

## Data Management
- **TanStack Query**: Server state management and caching
- **Zod**: Schema validation and type inference
- **date-fns**: Date manipulation utilities

## Analytics & Tracking
- **Google Analytics 4**: Web analytics and event tracking
- **Custom Tracking**: Page view and user interaction analytics

## Development Tools
- **Replit Integration**: Development environment plugins and error handling
- **shadcn/ui**: Component library configuration and tooling

## Email Services
- **Nodemailer**: Email service integration (configured but not yet implemented for production)

## Potential Future Integrations
- **SMTP Provider**: For production email notifications
- **CDN**: For optimized asset delivery
- **Payment Processing**: For service subscriptions
- **CRM Integration**: For lead management
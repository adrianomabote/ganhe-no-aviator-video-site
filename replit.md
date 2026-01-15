# replit.md

## Overview

This is a single-page marketing/promotional web application for "Ganhe no Aviator" (Win at Aviator). The application displays a video with a typewriter-style animated title, designed to showcase a betting/gaming system. The project follows a full-stack TypeScript architecture with React frontend and Express backend, though currently the backend serves primarily as a static file server with minimal API functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom theme variables and shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for Replit integration and meta image handling

The frontend is a single-page application with the main content being a video player page (`VideoFrame`) featuring animated typewriter text effect. Security measures are implemented to disable right-click, developer tools shortcuts, and text selection.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Vite middleware integration for HMR
- **Production Server**: Static file serving from built assets
- **File Structure**: Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Current Implementation**: In-memory storage (`MemStorage` class) with interface abstraction
- **Database Schema**: Basic users table with id, username, and password fields
- **Schema Validation**: Zod integration via drizzle-zod for type-safe insertions

The storage layer uses an interface pattern (`IStorage`) allowing easy swapping between in-memory storage and database implementations.

### Project Structure
```
client/           # React frontend application
  src/
    components/ui/  # shadcn/ui components
    pages/          # Route components
    hooks/          # Custom React hooks
    lib/            # Utility functions
server/           # Express backend
shared/           # Shared types and schema definitions
attached_assets/  # Static media files (videos, images)
migrations/       # Drizzle database migrations
```

## External Dependencies

### Database
- **PostgreSQL**: Configured via Drizzle ORM with Neon serverless driver (`@neondatabase/serverless`)
- **Connection**: Requires `DATABASE_URL` environment variable

### UI Component Library
- **shadcn/ui**: Full component suite using Radix UI primitives
- **Configuration**: New York style variant with neutral base color

### Third-Party Services
- **Replit Integration**: Custom Vite plugins for dev banner, cartographer, and runtime error overlay
- **Font Loading**: Google Fonts (DM Sans, Fira Code, Geist Mono, Architects Daughter)

### Key Dependencies
- `@tanstack/react-query`: Server state management
- `drizzle-orm` + `drizzle-zod`: Database ORM and validation
- `wouter`: Client-side routing
- `express`: HTTP server framework
- `vite`: Build tooling and development server
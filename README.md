# Kossof Salon Spa

A production-ready website for **Kossof Salon Spa** built with Next.js, showcasing services, products, team information, testimonials, and booking-oriented user flows.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-0ea5e9?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

## Highlights

- Modern App Router architecture with reusable UI components
- Service-focused pages: salon, spa, weddings, and general services
- Product and gallery pages to support discovery and conversion
- SEO-focused metadata, Open Graph, Twitter cards, and JSON-LD
- Cloudinary-hosted assets with optimized Next.js image delivery

## Pages

- `/` Home
- `/about`
- `/services`
- `/salon-services`
- `/spa-services`
- `/weddings-services`
- `/products`
- `/gallery`
- `/faq`

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Radix UI components
- Vercel Analytics

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Create environment file

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

### 3) Start local development

```bash
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run lint checks

## Project Structure

```text
app/         # Route pages and layout
components/  # UI and feature components
lib/         # Shared utilities and constants
public/      # Static assets
styles/      # Global and utility styles
types/       # Shared TypeScript types
```

## Deployment

This app is optimized for deployment on Vercel:

1. Import the repository into Vercel
2. Add required environment variables
3. Deploy

# Myntra Clone

A simple online fashion shopping UI built with React + Vite, inspired by Myntra.

## Pages
- **Home** – product listing grid, live search, category filter pills, wishlist toggle
- **About Us** – company info and highlights
- **Contact** – contact details and a validated message form

## Features
- Product listing grid with brand, price, discount, and rating
- Live search by product name or brand
- Category filter pills (Men, Women, Kids, Footwear, Accessories)
- Wishlist toggle on each product card
- Client-side routing between Home / About Us / Contact
- Responsive navbar with mobile hamburger menu
- Fully responsive layout for mobile and desktop

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This is a static Vite app — the `npm run build` command outputs a `dist/` folder
that can be deployed directly to Vercel, Netlify, GitHub Pages, or any static host.

- **Vercel**: Import the project, framework preset "Vite" is auto-detected. Build command `npm run build`, output directory `dist`.
- **Netlify**: Build command `npm run build`, publish directory `dist`.

## Tech Stack
- React 18
- React Router 6
- Vite 5

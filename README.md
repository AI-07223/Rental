# dresszilla-replica-react

A premium fashion rental website template built with React, Vite, and Tailwind CSS.
Designed to be modular and easily customizable via a single configuration file.

## Features

- **Modular Configuration:** Edit `src/config.js` to change branding, products, categories, and homepage content without touching the code.
- **WhatsApp Checkout:** "Order Now" buttons redirect to WhatsApp with a pre-filled message containing product details.
- **Premium Design:** Minimalist Black/White/Gold aesthetic with `Playfair Display` typography.
- **Responsive:** Fully responsive layout for mobile and desktop.
- **Top Bar:** Announcement bar for shipping or offers.

## How to Customize

All site content is managed in `src/config.js`.

### 1. Branding
Edit the `siteDetails` object:
```javascript
siteDetails: {
  name: "My Brand Name",
  logoText: "MY BRAND",
  logoSubText: "EST. 2024",
  topBarText: "Free Shipping Worldwide",
  // ... contact info
}
```

### 2. Products
Add or modify products in the `products` array.
- `id`: Unique identifier (used in URL).
- `category`: Must match an ID in the `categories` array.
- `images`: Array of image URLs.
- `options`: Object defining selectable options (e.g., Size).

### 3. Categories
Define your categories in the `categories` array. The `id` is used for routing (e.g., `/category/bridal`).

### 4. Homepage Sections
Edit the `hero`, `banners`, and `sections` objects to update the text and images on the homepage.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## Deployment

Build the project for production:
```bash
npm run build
```
The output will be in the `dist` folder, ready to be deployed to Vercel, Netlify, or any static host.

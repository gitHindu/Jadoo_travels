# Jadoo Travel Landing Page

Responsive travel landing page built with React, JavaScript, Vite, and Tailwind CSS. Headings use **Volkhov** and body text uses **Poppins**.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Replace sample images with your original assets

The current page uses sample images from Unsplash so the layout works immediately. Put your original image files in `public/images/` and update the image paths in `src/App.jsx`.

- Hero image: update the `src` on the image with `className="hero-traveller"` (currently a sample travel photo).
- Rome card: update `destinations[0].image`.
- London card: update `destinations[1].image`.
- Europe card: update `destinations[2].image`.
- Booking section trip card: update `featuredTrip.image` and `featuredTrip.alt` for your image and its description.

Example: if you add `public/images/hero-traveller.png`, set the hero image source to `/images/hero-traveller.png`.

The "Book Your Next Trip In 3 Easy Steps" section appears below Top Destinations. Its step text and icons are in the `bookingSteps` array; the sample Greece trip image and card details are in `featuredTrip`.

The partner-logo row below Testimonials currently uses editable text wordmarks as placeholders. Update the `partnerCompanies` array in `src/App.jsx` with your logo names or image paths when your logo files are ready.

The subscription banner after the partner logos uses CSS-drawn circle accents and a sample paper-plane icon, so no image assets are required for the layout. Connect the form in `Subscribe` to your mailing-list service to process subscriptions.

## Included interactions

- Responsive mobile navigation menu
- Language selector UI
- Sign-up modal with accessible labels
- Play-demo modal placeholder
- Save/unsave destination cards
- Selectable partner logo tiles with hover and selected shadows
- Responsive subscription banner with required email validation
- Scroll reveal animation with IntersectionObserver
- Reduced-motion support

The sign-up form and demo modal are front-end placeholders; connect them to your actual service/video before production.

## Deployment

Push the project to GitHub, then import the repository into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory.

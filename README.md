# Spiro Productions Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and Vanilla JavaScript.

## 📁 File Structure

```
/
├── index.html          # Homepage
├── about.html          # About Me page
├── work.html           # Portfolio/Work page
├── contact.html        # Contact page (with Formspree)
├── sitemap.xml         # SEO Sitemap
├── robots.txt          # SEO Crawl instructions
├── styles/
│   └── main.css        # Main stylesheet (Design System & Components)
├── js/
│   └── main.js         # Navigation, Filtering, & Lightbox logic
└── assets/             # (Create this folder for your real images/videos)
```

## 🚀 How to Deploy

### Option 1: Cloudflare Pages (Recommended)

1. Push this folder to your GitHub repository.
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
3. Go to **Pages** > **Create a project** > **Connect to Git**.
4. Select your repository (`Nicholasspiro.com`).
5. **Build settings**: Leave everything empty (It's a static site).
6. Click **Save and Deploy**.

### Option 2: Netlify / Vercel

1. Connect your GitHub repository.
2. Publish directory: `/` (root).
3. No build command needed.

## 🛠 Setup Instructions

### 1. Formspree (Contact Form)

The contact form is set to point to `https://formspree.io/f/mqazqjvz`.

- If this is your form ID, you are set!
- If not, create a new form at [Formspree.io](https://formspree.io) and replace the URL in `contact.html` (line ~73).

### 2. Google Analytics

To add GA4, paste your standard tracking snippet into the `<head>` of every `.html` file, just before `</head>`.

### 3. Images and Content

- Replace the placeholder images from Unsplash with your real portfolio work.
- Place your images in an `assets/` folder and update the `src` paths in the HTML.

## 🎨 Customization

- **Colors**: Edit `styles/main.css` > `:root` variables.
- **Fonts**: Defined in `styles/main.css` and linked in HTML head.

---
&copy; 2024 Spiro Productions

# Yogesh Kumar Tiwari — Infrastructure &amp; SRE Portfolio

A professional, modern portfolio website showcasing 6+ years of cloud infrastructure, SRE, and DevOps expertise across AWS, Azure, and Kubernetes.

## Features

- **Responsive design** — Mobile-first, works seamlessly across all devices
- **Professional dark theme** — Modern aesthetic with accessibility focus
- **Multi-cloud expertise** — Showcase AWS, Azure, and Kubernetes work
- **Project highlights** — Detailed case studies of major infrastructure projects
- **Comprehensive skills** — Full list of AWS/Azure services and tools
- **Certifications section** — Display cloud certifications and credentials
- **Contact form** — Easy way for potential employers to reach out

## Structure

- `index.html` — Complete portfolio page with hero, about, experience, projects, skills, certifications, and contact sections
- `styles.css` — Responsive styling, dark mode, and professional design system
- `script.js` — Mobile navigation toggle and year auto-update

## Customize

1. Update your LinkedIn URL in the contact section
2. Add your LinkedIn profile link and social media links
3. Update email address (currently `Bharatvasioncloud@gmail.com`)
4. Add certifications specific to your achievements

## Deploy cheaply

This is a static HTML/CSS/JavaScript site, so hosting is extremely affordable:

### 1. **GitHub Pages** (Recommended — Free)
- Free for public repositories
- Supports custom domains
- Automatic deploy on git push
- [Setup guide](https://pages.github.com/)

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then enable GitHub Pages in repository Settings → Pages → Deploy from `main` branch.

### 2. **Cloudflare Pages** (Free)
- Zero-cost static hosting
- Global CDN
- Custom domain support
- Connect your GitHub repo for automatic deploys

[Cloudflare Pages Setup](https://pages.cloudflare.com/)

### 3. **Netlify** (Free tier)
- Free static hosting with branch deploy previews
- Custom domain support
- Form submission handling

[Netlify Deploy](https://www.netlify.com/)

### Custom Domain

If you own a domain (e.g., `yourname.com`):
1. Update DNS records to point to your hosting provider
2. Enable HTTPS (automatic on all three platforms)
3. Update contact section with domain email

## Run locally

```sh
# Using Python 3
cd portfolio-site
python3 -m http.server 8000

# Or using Node.js
npx http-server
```

Visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Built for professional impact.** Last updated May 2026.

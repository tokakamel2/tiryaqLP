# ترياق (Tiryaq) — Healthcare Platform Website

منصة رقمية للرعاية الصحية | A Digital Healthcare Platform

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
tiryaq/
├── app/
│   ├── globals.css          # Global styles & design tokens
│   ├── layout.tsx           # Root layout with Language & Dark mode context
│   ├── page.tsx             # 🏠 Home / Landing Page
│   ├── about/
│   │   └── page.tsx         # 🏢 About Page
│   ├── how-it-works/
│   │   └── page.tsx         # 📖 How It Works Page
│   └── contact/
│       └── page.tsx         # 📩 Contact Page
├── components/
│   ├── Navbar.tsx           # Sticky responsive navbar
│   ├── Footer.tsx           # Footer with links & socials
│   └── ui/
│       └── index.tsx        # Reusable UI components
├── tailwind.config.js       # Tailwind config with custom tokens
├── next.config.js
└── package.json
```

---

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (#1B4FD8) — Trust
- **Secondary**: Soft Green (#22C55E) — Health
- **Background**: White / Light Gray

### Typography
- **Arabic**: Cairo (Google Fonts)
- **English**: Plus Jakarta Sans (Google Fonts)

### Features
- ✅ Bilingual (Arabic RTL default / English LTR)
- ✅ Dark Mode
- ✅ Fully Responsive (Mobile-first)
- ✅ Smooth animations
- ✅ SEO optimized

---

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, features, how it works preview |
| About | `/about` | Company story, mission, vision, values |
| How It Works | `/how-it-works` | Step-by-step visual guide |
| Contact | `/contact` | Contact form with FAQ |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cairo + Plus Jakarta Sans)
- **Language**: TypeScript

---

## 🌐 Deployment

This project is ready to deploy on:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Build command `npm run build`, publish `.next`

---

## 📞 Contact

**Tiryaq Team** — hello@tiryaq.com  
Ismailia, Egypt 🇪🇬

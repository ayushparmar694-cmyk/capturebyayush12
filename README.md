# CAPTURE VIDEOGRAPHY — CAPTURE BY AYUSH
> **“Turning Moments into Cinematic Memories.”**

An ultra-premium, luxury, cinematic videography portfolio website crafted for **Ayush Parmar** (*Founder & Cinematic Videographer*), merging Apple-style minimalism with high-end international filmmaking agency aesthetics.

---

## 🌟 Visual Identity & Design Highlights
- **Palette:** Deep Obsidian Black (`#080808`), Soft Champagne Gold (`#D6B574`, `#ECCB8E`, `#A9833D`), Elegant Off-White (`#F5F5F5`), with subtle anamorphic light leaks and film grain texture.
- **Typography:** Elegant Serifs (*Cormorant Garamond* & *Playfair Display*) for grand cinematic headers, matched with ultra-clean modern sans-serifs (*Inter* & *Plus Jakarta Sans*) with oversized wide letter-spacing (`tracking-[0.25em]`).
- **Pioneering Aesthetic:** Tailored specifically for **iPhone 16 Pro Max 4K ProRes Log mobile filmmaking**, Hollywood DaVinci Resolve color science, and 9:16 vertical viral Instagram Reels alongside 2.39:1 Cinemascope widescreen films.

---

## ⚡ Instant Preview (Two Ways to Run)

### Method 1: Instant Browser Launch (Zero Installation Required)
Simply open the `index.html` file located in this directory:
`C:\Users\NEXTGENPC\.gemini\antigravity\scratch\capture-by-ayush\index.html`
Double-click it or right-click → Open with Google Chrome / Microsoft Edge / Safari / Brave.
Everything (React, Tailwind CSS, Lucide icons, fonts, Web Audio ambience engine) runs directly in your browser with zero configuration!

### Method 2: Local HTTP Server
Run the built-in server script:
```powershell
node server.js
```
Then visit:
```
http://localhost:3000
```

---

## 🎬 Website Architecture & Features Included

1. **Cinematic Studio Intro Animation**
   - Sequentially reveals: `CAPTURE` ➔ `VIDEOGRAPHY` ➔ `BY AYUSH` ➔ *“Turning Moments into Cinematic Memories.”*
   - Includes real-time camera viewfinder HUD (`REC ● 4K 24FPS PRORES`), champagne light sweep, progress bar, and instant `Skip Intro →` button.
   - Remembers user session via `sessionStorage` so it doesn't replay annoyingly during browsing (with a *Replay Studio Intro* button in the footer whenever you want to showcase it).

2. **Hero Section**
   - Full-screen high-definition cinematic background video with subtle Ken Burns slow zoom.
   - Tech specs badge: `4K PRORES 422HQ | 24.00 FPS | 2.39:1`.
   - Oversized typography:
     - `CAPTURE VIDEOGRAPHY — BY AYUSH`
     - *“WE DON'T JUST SHOOT VIDEOS. WE CREATE MEMORIES.”*
     - Supporting text: *Cinematic iPhone Videography | Creative Filmmaking | Professional Video Editing*
   - CTAs: `[ EXPLORE FILMS ]` & `[ BOOK YOUR SHOOT ]`.
   - Interactive Master Showreel modal player.

3. **About Section**
   - Heading: `THE ART OF CAPTURING MOMENTS.`
   - Founder & Videographer: **AYUSH PARMAR**
   - Highlighted narrative about creative shooting techniques, iPhone ProRes Log agility, and emotional candid intimacy without intimidating subjects with bulky DSLR gear.
   - Milestone stats: 150+ Cinematic Films, 10M+ Reel Views, 100% Satisfaction, 4K ProRes master grade.
   - Location: Khaperkheda, Nagpur, Maharashtra, India.

4. **8 Premium Services with Custom Hover Cards & Inquiries**
   - **01 – Wedding Cinematography**: Emotional wedding films and cinematic couple reels.
   - **02 – Haldi & Mehendi**: Colorful traditional moments captured beautifully.
   - **03 – Reception & Ring Ceremony**: Luxury cinematic event coverage.
   - **04 – iPhone Cinematic Videography**: Creative mobile filmmaking with professional visual storytelling.
   - **05 – Luxury Car Cinematics**: Car delivery films, automotive reels, showroom shoots.
   - **06 – Business & Shop Promotion**: Professional promotional content for businesses.
   - **07 – Brand & Advertising Shoots**: Premium content for brands, products, and social media.
   - **08 – Cinematic Reel Editing**: Professional editing, transitions, color grading, and storytelling.
   - Each card has an instant `Inquire ↗` button that auto-selects that service in the booking form.

5. **Cinematic Film Portfolio & Interactive Lightbox**
   - Heading: `SELECTED FILMS`
   - Subheading: *“A collection of moments, stories, and cinematic memories.”*
   - Full Category Filters: `ALL`, `WEDDINGS`, `HALDI`, `RECEPTION`, `AUTOMOTIVE`, `EVENTS`, `BRAND FILMS`, `CINEMATIC REELS`.
   - **Dual Aspect Ratio Switcher**: Switch instantly between **16:9 Cinema Widescreen** and **9:16 Vertical Instagram Reels**!
   - Fullscreen video playback modal supporting MP4 video files, YouTube, and Instagram.

6. **Signature Experience Section**
   - Heading: `EVERY FRAME. EVERY EMOTION. EVERY MEMORY.`
   - Text: *“From the smallest detail to the biggest celebration, every moment deserves to be captured beautifully.”*
   - 35mm motion picture film strip visualizer with frame sprockets.
   - 4 Pillars: The Mobile Advantage, DaVinci Color Science, Emotional Audio Craft, Express Social Delivery.

7. **Direct WhatsApp Booking Engine**
   - Heading: `LET'S CREATE YOUR NEXT FILM.`
   - Form fields:
     - Name
     - Phone Number
     - Event / Shoot Type
     - Event Date
     - Location
     - Shoot Duration
     - Approximate Budget (INR)
     - Message / Creative Vision
   - Button: `[ REQUEST A BOOKING ]`
   - WhatsApp integration: Formats a clean, high-priority WhatsApp message and opens directly to:
     `https://wa.me/917666242442`

8. **Contact Section**
   - Heading: `YOUR STORY. OUR LENS.`
   - Brand: CAPTURE VIDEOGRAPHY / CAPTURE BY AYUSH
   - Phone: **7666242442** (`+91 76662 42442`)
   - Instagram: **@capturebyayush** (`https://www.instagram.com/capture_byayush?xtok=bzhtbTgwYXEzaXg5`)
   - Location: Khaperkheda, Nagpur, Maharashtra, India.
   - 3 Dedicated Action Buttons: `[ CALL NOW ]`, `[ WHATSAPP ]`, `[ INSTAGRAM ]`.
   - Styled dark luxury Map Card with GPS coordinates `21.2858° N, 79.1174° E`.

9. **Premium Black Footer**
   - `CAPTURE BY AYUSH` — *“Turning Moments into Cinematic Memories.”*
   - Navigation: Home | About | Services | Films | Contact
   - Instagram, WhatsApp, Back to top buttons
   - Replay Studio Intro button
   - `© 2026 Capture Videography. All Rights Reserved.`

10. **Advanced Interactions & Audio**
    - Custom Luxury Cursor on desktop (champagne gold pinpoint + trailing ring that expands on interactive hover).
    - Floating WhatsApp pulse button on bottom-right across all screens.
    - Web Audio API cinematic ambience tone toggle (sound generator built directly in code; zero external audio files needed).

---

## 🛠️ How to Replace Videos and Photos with Your Own Work

### To replace films in the portfolio:
Open `src/data/filmsData.ts` (or the `FILMS` array inside `index.html`):
```typescript
{
  id: 'film-1',
  title: 'Your Wedding Film Title',
  category: 'WEDDINGS',
  subtitle: 'The Royal Wedding Story',
  duration: '03:45',
  aspectRatio: '16:9', // or '9:16' for vertical reels!
  thumbnail: 'path/to/your/photo.jpg', // or URL
  videoUrl: 'path/to/your/video.mp4', // Direct MP4 file
  youtubeId: 'your-youtube-id', // Optional: if hosted on YouTube
  gear: 'iPhone 16 Pro Max · 4K 24fps Apple ProRes Log',
  location: 'Nagpur',
  desc: 'Your custom description...',
}
```

### To update your phone or Instagram:
Open `src/data/brandConfig.ts` (or the `BRAND` object in `index.html`):
```typescript
export const BRAND_CONFIG = {
  phone: '7666242442',
  whatsappNumber: '917666242442',
  instagramHandle: '@capturebyayush',
  instagramUrl: 'https://www.instagram.com/capture_byayush?xtok=bzhtbTgwYXEzaXg5',
  location: 'Khaperkheda, Nagpur, Maharashtra, India.',
};
```

---

## 🚀 Deployment

### Option A: 1-Click Deploy to Vercel or Netlify
1. Push this folder to a GitHub repository or drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
2. It will detect `index.html` and deploy instantly with global CDN caching.

### Option B: Deploy with Vite Build
If deploying as a Vite + React application:
```bash
npm install
npm run build
```
Upload the generated `dist/` directory to any static hosting service.

---

© 2026 Capture Videography. Directed & Crafted for **Ayush Parmar**.

import React, { useState, useEffect, useRef } from “react”;

// ─── DEFAULT CONTENT ───────────────────────────────────────────────────────────
const DEFAULT_CONTENT = {
brandName: “Mandir Emporium”,
tagline: “Divine Craftsmanship. Timeless Elegance.”,
subTagline: “India’s Premier Destination for Sacred Mandirs & Pooja Room Interiors”,
phone: “+91 98765 43210”,
whatsapp: “919876543210”,
email: “info@mandiremporium.com”,
address: “123, Sacred Street, New Delhi – 110001”,
instagram: “https://instagram.com/mandiremporium”,
facebook: “https://facebook.com/mandiremporium”,
youtube: “https://youtube.com/@mandiremporium”,
pinterest: “https://pinterest.com/mandiremporium”,
heroImage: “https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=80”,
aboutTitle: “Crafting Divinity Since 1954”,
aboutText: “At Mandir Emporium, we merge centuries-old sacred craftsmanship with contemporary luxury design. Every mandir we create is a masterpiece — a personal sanctuary where devotion meets unparalleled artistry. Our master artisans handcraft each piece with devotion, precision, and the finest materials sourced globally.”,
aboutImage: “https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80”,
products: [
{ id:1, name:“Corian Marble Mandir”, subtitle:“Pure Elegance in White”, desc:“Crafted from premium Corian — a seamless, non-porous engineered stone. Our Corian Mandirs feature flawless surfaces, intricate laser-cut latticework, and a pristine luminosity that transforms every prayer space into a sacred sanctuary.”, image:“https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80”, tag:“Best Seller” },
{ id:2, name:“Vietnam Marble Mandir”, subtitle:“Exotic Stone. Divine Form.”, desc:“Sourced exclusively from the quarries of Vietnam, this ultra-premium marble bears unique veining and a luminous depth unmatched by any other stone. Each mandir is a one-of-a-kind work of art.”, image:“https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80”, tag:“Signature” },
{ id:3, name:“Sagwan Wood Mandir”, subtitle:“Timeless Teak. Sacred Heritage.”, desc:“Hand-carved from the finest Sagwan (Teak) wood, these mandirs embody India’s royal woodworking heritage. Rich mahogany tones, intricate carvings, and a warm grandeur that fills your home with divine energy.”, image:“https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80”, tag:“Heritage” },
{ id:4, name:“HDF Board Mandir”, subtitle:“Modern Precision. Sacred Beauty.”, desc:“Engineered with High Density Fibreboard and premium laminates, our HDF Mandirs offer contemporary silhouettes with precision-cut detailing. Ideal for modern homes seeking sacred elegance without compromise.”, image:“https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80”, tag:“Modern” },
],
poojaTitle: “Complete Pooja Room Setup”,
poojaSubtitle: “We design and install your complete sacred space — from concept to consecration.”,
poojaText: “Our interior pooja room design service transforms an ordinary space into a divine retreat. We handle everything: architecture, mandir installation, lighting, storage, flooring, and décor. From compact apartment niches to grand dedicated pooja halls — we craft it all with unmatched luxury.”,
poojaFeatures: [“Custom Architectural Design”,“Premium Material Selection”,“Mandir Installation”,“Divine Lighting Setup”,“Sanctified Storage Solutions”,“Complete Turnkey Delivery”],
poojaImage: “https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80”,
projectsTitle: “Our Signature Projects”,
projectsSubtitle: “A glimpse into the sacred spaces we have brought to life across India.”,
projects: [
{ id:1, title:“Grand Marble Pooja Hall – Delhi”, category:“Vietnam Marble”, image:“https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80” },
{ id:2, title:“Royal Teak Mandir – Mumbai”, category:“Sagwan Wood”, image:“https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80” },
{ id:3, title:“Corian Luxury Shrine – Bangalore”, category:“Corian Marble”, image:“https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80” },
{ id:4, title:“Modern HDF Pooja Room – Hyderabad”, category:“HDF Board”, image:“https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=700&q=80” },
{ id:5, title:“Heritage Teak Temple – Jaipur”, category:“Sagwan Wood”, image:“https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80” },
{ id:6, title:“Marble Pooja Suite – Ahmedabad”, category:“Vietnam Marble”, image:“https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80” },
],
whyTitle: “Why Mandir Emporium?”,
whyPoints: [
{ icon:“✦”, title:“70+ Years of Heritage”, desc:“Seven decades of crafting sacred spaces for discerning families across India.” },
{ icon:“✦”, title:“Master Artisans”, desc:“100+ skilled craftsmen dedicated to divine perfection in every piece.” },
{ icon:“✦”, title:“Premium Materials Only”, desc:“We source only the finest marble, wood, and engineered materials worldwide.” },
{ icon:“✦”, title:“Turnkey Delivery”, desc:“From design to installation — completely managed by our expert team.” },
{ icon:“✦”, title:“Pan-India Service”, desc:“We deliver and install across all major Indian cities and beyond.” },
{ icon:“✦”, title:“Custom Design Studio”, desc:“Every piece is uniquely designed for your space and personal vision.” },
],
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const styles = `
@import url(‘https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap’);

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body, #root {
font-family: -apple-system, ‘SF Pro Display’, ‘SF Pro Text’, BlinkMacSystemFont, ‘Helvetica Neue’, sans-serif;
background: #fff; color: #0a0a0a; overflow-x: hidden; min-height: 100vh;
}

:root {
–black: #0a0a0a; –white: #ffffff;
–gold: #C9A84C; –gold-light: #E8D5A3; –gold-dark: #9A6F2F;
–grey: #f5f5f5; –grey2: #e8e8e8; –text-muted: #666;
–nav-h: 72px;
–font-serif: ‘Cormorant Garamond’, Georgia, serif;
–font-sans: -apple-system, ‘SF Pro Display’, BlinkMacSystemFont, ‘Helvetica Neue’, sans-serif;
}
.serif { font-family: var(–font-serif); }

/* ── NAVBAR ── */
.navbar {
position: fixed; top: 0; left: 0; right: 0; z-index: 900;
height: var(–nav-h);
display: flex; align-items: center; justify-content: space-between;
padding: 0 clamp(1rem, 4vw, 4rem);
background: rgba(255,255,255,0.96); backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(201,168,76,0.2);
transition: box-shadow 0.3s;
}
.navbar.scrolled { box-shadow: 0 2px 30px rgba(0,0,0,0.07); }

.nav-brand {
display: flex; flex-direction: column; line-height: 1;
text-decoration: none; color: var(–black);
}
.nav-brand-name {
font-family: var(–font-serif); font-size: clamp(1.1rem, 2.5vw, 1.5rem);
font-weight: 600; letter-spacing: 0.03em;
}
.nav-brand-sub {
font-size: clamp(0.42rem, 1vw, 0.52rem); letter-spacing: 0.28em;
text-transform: uppercase; color: var(–gold); margin-top: 3px;
}
.nav-brand-mobile-sub {
display: none;
font-size: 0.45rem; letter-spacing: 0.22em;
text-transform: uppercase; color: var(–gold); margin-top: 2px;
}

/* desktop nav */
.nav-desktop { display: flex; align-items: center; gap: clamp(1.2rem, 2.5vw, 2.5rem); }
.nav-desktop a {
text-decoration: none; color: var(–black); font-size: 0.7rem;
letter-spacing: 0.14em; text-transform: uppercase; font-weight: 400;
position: relative; transition: color 0.2s; white-space: nowrap;
}
.nav-desktop a::after {
content:’’; position:absolute; bottom:-4px; left:0; right:0; height:1px;
background:var(–gold); transform:scaleX(0); transition:transform 0.3s; transform-origin:left;
}
.nav-desktop a:hover, .nav-desktop a.active { color: var(–gold); }
.nav-desktop a.active::after, .nav-desktop a:hover::after { transform: scaleX(1); }
.nav-cta-btn {
background: var(–black) !important; color: white !important;
padding: 0.55rem 1.3rem !important; font-size: 0.62rem !important;
white-space: nowrap;
}
.nav-cta-btn::after { display:none !important; }
.nav-cta-btn:hover { background: var(–gold) !important; }

/* hamburger */
.nav-hamburger {
display: none; flex-direction: column; justify-content: center;
gap: 5px; width: 36px; height: 36px; cursor: pointer;
background: none; border: none; padding: 4px; z-index: 1001;
}
.nav-hamburger span {
display: block; height: 2px; background: var(–black);
border-radius: 2px; transition: all 0.3s;
}
.nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── MOBILE SIDEBAR ── */
.sidebar-overlay {
display: none; position: fixed; inset: 0; z-index: 800;
background: rgba(0,0,0,0.55); backdrop-filter: blur(3px);
animation: fadeIn 0.2s ease;
}
.sidebar-overlay.open { display: block; }
.sidebar {
position: fixed; top: 0; left: 0; bottom: 0; z-index: 850;
width: min(80vw, 300px); background: white;
display: flex; flex-direction: column;
transform: translateX(-100%); transition: transform 0.35s cubic-bezier(.25,.46,.45,.94);
box-shadow: 4px 0 40px rgba(0,0,0,0.15);
}
.sidebar.open { transform: translateX(0); }
.sidebar-header {
display: flex; align-items: center; justify-content: space-between;
padding: 1.2rem 1.2rem; border-bottom: 1px solid var(–grey2);
background: var(–black);
}
.sidebar-brand { font-family: var(–font-serif); font-size: 1.2rem; font-weight: 600; color: white; }
.sidebar-brand-sub { font-size: 0.48rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(–gold); margin-top: 2px; }
.sidebar-close {
width: 32px; height: 32px; background: rgba(255,255,255,0.1); border: none;
border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: white;
}
.sidebar-nav { flex: 1; overflow-y: auto; padding: 0.75rem; }
.sidebar-nav a {
display: flex; align-items: center; gap: 0.75rem;
padding: 0.85rem 1rem; text-decoration: none; color: var(–black);
font-size: 0.82rem; letter-spacing: 0.06em; font-weight: 500;
border-radius: 8px; transition: background 0.15s, color 0.15s;
margin-bottom: 0.2rem;
}
.sidebar-nav a:hover, .sidebar-nav a.active { background: #fdf8f0; color: var(–gold-dark); }
.sidebar-nav a.active { font-weight: 600; }
.sidebar-nav-icon { width: 18px; height: 18px; opacity: 0.6; flex-shrink: 0; }
.sidebar-divider { height: 1px; background: var(–grey2); margin: 0.5rem 0.75rem; }
.sidebar-footer {
padding: 1rem 1.2rem; border-top: 1px solid var(–grey2);
}
.sidebar-contact-btn {
display: flex; align-items: center; justify-content: center; gap: 0.5rem;
width: 100%; padding: 0.75rem; background: var(–gold); color: white;
border: none; border-radius: 8px; cursor: pointer;
font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
font-weight: 600; text-decoration: none;
}
.sidebar-whatsapp {
display: flex; align-items: center; justify-content: center; gap: 0.5rem;
width: 100%; padding: 0.75rem; background: #25D366; color: white;
border: none; border-radius: 8px; cursor: pointer;
font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
font-weight: 600; text-decoration: none; margin-top: 0.5rem;
}

/* ── PAGE WRAPPER ── */
.page { padding-top: var(–nav-h); min-height: 100vh; }

/* ── PAGE HERO BANNER (non-home pages) ── */
.page-hero {
height: clamp(200px, 35vw, 380px); position: relative;
display: flex; align-items: flex-end; overflow: hidden;
}
.page-hero-bg {
position: absolute; inset: 0; background-size: cover; background-position: center;
filter: brightness(0.4);
}
.page-hero-overlay {
position: absolute; inset: 0;
background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%);
}
.page-hero-content {
position: relative; padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 5vw, 4rem);
color: white;
}
.page-hero-label {
font-size: 0.58rem; letter-spacing: 0.4em; text-transform: uppercase;
color: var(–gold-light); margin-bottom: 0.6rem;
}
.page-hero-title {
font-family: var(–font-serif); font-size: clamp(1.8rem, 5vw, 3.5rem);
font-weight: 300; line-height: 1.15;
}
.page-hero-title em { font-style: italic; color: var(–gold-light); }

/* ── HERO (home) ── */
.hero {
height: 100svh; position: relative; overflow: hidden;
display: flex; align-items: center; justify-content: center;
}
.hero-bg {
position: absolute; inset: 0; background-size: cover; background-position: center;
filter: brightness(0.42); transform: scale(1.04);
transition: transform 8s ease;
}
.hero-bg.loaded { transform: scale(1); }
.hero-overlay {
position: absolute; inset: 0;
background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%);
}
.hero-content {
position: relative; text-align: center; color: white;
padding: 0 clamp(1rem, 5vw, 3rem); max-width: 900px;
animation: fadeInUp 1.2s ease both;
}
.hero-eyebrow {
font-size: clamp(0.52rem, 1.5vw, 0.65rem); letter-spacing: 0.4em;
text-transform: uppercase; color: var(–gold-light); margin-bottom: 1.2rem;
}
.hero-title {
font-family: var(–font-serif);
font-size: clamp(2rem, 7vw, 5.5rem);
font-weight: 300; line-height: 1.1; margin-bottom: 1.2rem;
}
.hero-title em { font-style: italic; color: var(–gold-light); }
.hero-sub {
font-size: clamp(0.62rem, 1.8vw, 0.8rem); letter-spacing: 0.18em;
text-transform: uppercase; opacity: 0.75; margin-bottom: 2.5rem;
}
.hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-gold {
display: inline-flex; align-items: center; gap: 0.5rem;
background: var(–gold); color: white;
padding: clamp(0.7rem, 2vw, 0.9rem) clamp(1.4rem, 4vw, 2.2rem);
font-size: clamp(0.58rem, 1.4vw, 0.68rem); letter-spacing: 0.18em;
text-transform: uppercase; border: none; cursor: pointer;
transition: background 0.3s; text-decoration: none; font-weight: 500;
}
.btn-gold:hover { background: #b8922e; }
.btn-outline-white {
display: inline-flex; align-items: center; gap: 0.5rem;
background: transparent; color: white;
padding: clamp(0.7rem, 2vw, 0.9rem) clamp(1.4rem, 4vw, 2.2rem);
font-size: clamp(0.58rem, 1.4vw, 0.68rem); letter-spacing: 0.18em;
text-transform: uppercase; border: 1px solid rgba(255,255,255,0.5);
cursor: pointer; transition: all 0.3s; text-decoration: none;
}
.btn-outline-white:hover { border-color: white; background: rgba(255,255,255,0.1); }
.hero-scroll {
position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
color: rgba(255,255,255,0.5); font-size: 0.52rem; letter-spacing: 0.3em;
text-transform: uppercase; animation: bounce 2s ease infinite;
}
.hero-scroll-line { width: 1px; height: 36px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.45)); }

/* ── SECTION COMMONS ── */
section { padding: clamp(3.5rem, 8vw, 7rem) 0; }
.container { max-width: 1300px; margin: 0 auto; padding: 0 clamp(1rem, 5vw, 4rem); }
.section-label {
font-size: clamp(0.5rem, 1.2vw, 0.6rem); letter-spacing: 0.4em;
text-transform: uppercase; color: var(–gold); margin-bottom: 0.8rem;
}
.section-title {
font-family: var(–font-serif); font-size: clamp(1.6rem, 4vw, 3.2rem);
font-weight: 300; line-height: 1.2; margin-bottom: 1rem;
}
.section-title em { font-style: italic; }
.section-divider { width: 50px; height: 1px; background: var(–gold); margin: 1.2rem 0; }
.section-sub {
font-size: clamp(0.78rem, 1.8vw, 0.85rem); color: var(–text-muted);
line-height: 1.8; max-width: 600px; font-weight: 300;
}
.center-header { text-align: center; }
.center-header .section-divider { margin: 1.2rem auto; }
.center-header .section-sub { margin: 0 auto; }

/* ── HERITAGE STRIP ── */
.heritage-strip {
background: var(–black); color: white;
padding: clamp(0.8rem, 2vw, 1.2rem) clamp(1rem, 5vw, 4rem);
display: flex; align-items: center; justify-content: center;
gap: clamp(1rem, 3vw, 2.5rem); flex-wrap: wrap;
border-bottom: 1px solid rgba(201,168,76,0.25);
}
.hs-divider { width: 1px; height: 28px; background: rgba(201,168,76,0.25); }
.hs-item { display: flex; flex-direction: column; align-items: center; }
.hs-label { font-size: 0.5rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(–gold-light); margin-bottom: 0.2rem; }
.hs-value { font-family: var(–font-serif); font-size: clamp(0.9rem, 2.5vw, 1.1rem); font-weight: 300; }
.hs-tagline {
font-size: clamp(0.65rem, 1.5vw, 0.72rem); color: rgba(255,255,255,0.6);
letter-spacing: 0.06em; max-width: 520px; line-height: 1.65; text-align: center;
}
.hs-tagline em { color: var(–gold-light); font-style: italic; font-family: var(–font-serif); font-size: 1.1em; }

/* ── ABOUT ── */
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 6vw, 6rem); align-items: center; }
.about-img-wrap { position: relative; aspect-ratio: 3/4; overflow: hidden; }
.about-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s; }
.about-img-wrap:hover img { transform: scale(1.04); }
.about-img-accent { position: absolute; bottom: -16px; right: -16px; width: 100px; height: 100px; border: 1px solid var(–gold); z-index: -1; }
.about-img-label {
position: absolute; bottom: 1.2rem; left: 1.2rem;
background: var(–black); color: white;
padding: 0.6rem 1rem; font-size: 0.55rem; letter-spacing: 0.22em; text-transform: uppercase;
}
.stats-row { display: flex; gap: clamp(1.5rem, 4vw, 3rem); margin-top: 2.5rem; border-top: 1px solid var(–grey2); padding-top: 2rem; flex-wrap: wrap; }
.stat-num { font-family: var(–font-serif); font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 300; color: var(–gold); line-height: 1; }
.stat-label { font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(–text-muted); margin-top: 0.3rem; }

/* ── PRODUCTS ── */
.products-bg { background: var(–grey); }
.products-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; margin-top: 3rem; }
.product-card { position: relative; overflow: hidden; aspect-ratio: 4/3; cursor: pointer; background: var(–grey2); }
.product-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s, filter 0.5s; filter: brightness(0.72); }
.product-card:hover img { transform: scale(1.06); filter: brightness(0.45); }
.product-badge { position: absolute; top: 1rem; left: 1rem; background: var(–gold); color: white; font-size: 0.52rem; letter-spacing: 0.22em; text-transform: uppercase; padding: 0.28rem 0.7rem; }
.product-info {
position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem;
background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%);
color: white; transform: translateY(55px); transition: transform 0.4s;
}
.product-card:hover .product-info { transform: translateY(0); }
.product-sub { font-size: 0.55rem; letter-spacing: 0.28em; text-transform: uppercase; color: var(–gold-light); margin-bottom: 0.4rem; }
.product-name { font-family: var(–font-serif); font-size: clamp(1.1rem, 2.5vw, 1.6rem); font-weight: 300; margin-bottom: 0.6rem; }
.product-desc { font-size: 0.72rem; line-height: 1.7; opacity: 0.85; }
.product-cta { margin-top: 0.8rem; font-size: 0.58rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(–gold-light); }

/* ── CORIAN EXCEPTIONAL ── */
.corian-grid {
display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px;
background: var(–grey2); margin-top: 3rem;
}
.corian-card {
background: white; padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1.2rem, 2.5vw, 2rem);
transition: background 0.3s, box-shadow 0.3s; position: relative; overflow: hidden;
}
.corian-card::before {
content:’’; position:absolute; top:0; left:0; right:0; height:3px;
background: linear-gradient(90deg, transparent, var(–gold), transparent);
transform: scaleX(0); transition: transform 0.4s;
}
.corian-card:hover { background: #fdfaf4; box-shadow: 0 6px 30px rgba(201,168,76,0.1); }
.corian-card:hover::before { transform: scaleX(1); }
.corian-num { font-family: var(–font-serif); font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 300; color: var(–grey2); line-height: 1; margin-bottom: 0.4rem; transition: color 0.3s; }
.corian-card:hover .corian-num { color: var(–gold-light); }
.corian-icon { margin-bottom: 0.6rem; display: flex; }
.corian-card-title { font-size: clamp(0.78rem, 1.5vw, 0.88rem); font-weight: 600; margin-bottom: 0.6rem; }
.corian-card-title span { color: var(–gold); }
.corian-card-desc { font-size: 0.75rem; color: var(–text-muted); line-height: 1.8; }
.corian-check { list-style: none; margin-top: 0.6rem; }
.corian-check li { font-size: 0.7rem; color: var(–text-muted); display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.25rem; }
.corian-check li::before { content:‘✔’; color: var(–gold); font-size: 0.6rem; }
.corian-wide { grid-column: 1 / -1; background: white; }
.corian-wide:hover { background: #fdfaf4; }
.corian-wide-inner { display: flex; align-items: flex-start; gap: clamp(1.5rem, 4vw, 4rem); flex-wrap: wrap; }
.corian-wide-inner > div { flex: 1; min-width: min(240px, 100%); }
.corian-wide-sep { width: 1px; background: rgba(201,168,76,0.3); align-self: stretch; flex-shrink: 0; }
.corian-badge {
display: inline-flex; align-items: center; gap: 0.5rem;
border: 1px solid var(–gold); padding: 0.4rem 0.9rem;
font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase;
color: var(–gold-dark); margin-top: 0.9rem;
}

/* ── POOJA ROOM ── */
.pooja-split { display: grid; grid-template-columns: 1fr 1fr; }
.pooja-img { position: relative; overflow: hidden; min-height: clamp(300px, 50vw, 600px); }
.pooja-img img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.pooja-content {
background: var(–black); color: white;
padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
display: flex; flex-direction: column; justify-content: center;
}
.pooja-content .section-label { color: var(–gold-light); }
.pooja-content .section-title { color: white; }
.pooja-content .section-sub { color: rgba(255,255,255,0.65); max-width: 100%; }
.pooja-features { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin: 1.8rem 0; }
.pooja-feat { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.72rem; color: rgba(255,255,255,0.8); }
.pooja-feat-dot { width: 5px; height: 5px; background: var(–gold); border-radius: 50%; margin-top: 0.3rem; flex-shrink: 0; }

/* ── PROJECTS ── */
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(0.75rem, 2vw, 1.5rem); margin-top: 3rem; }
.project-card { position: relative; overflow: hidden; aspect-ratio: 4/3; cursor: pointer; background: var(–grey2); border-radius: 2px; }
.project-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; filter: brightness(0.82); }
.project-card:hover img { transform: scale(1.07); filter: brightness(0.5); }
.project-overlay {
position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end;
padding: 1.2rem;
background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 60%);
color: white; opacity: 0; transform: translateY(8px); transition: all 0.35s;
}
.project-card:hover .project-overlay { opacity: 1; transform: translateY(0); }
.project-cat { font-size: 0.52rem; letter-spacing: 0.28em; text-transform: uppercase; color: var(–gold-light); margin-bottom: 0.3rem; }
.project-name { font-family: var(–font-serif); font-size: clamp(0.9rem, 2vw, 1.2rem); font-weight: 300; }

/* ── WHY ── */
.why-bg { background: var(–grey); }
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(1rem, 3vw, 2.5rem); margin-top: 3rem; }
.why-card {
padding: clamp(1.5rem, 3vw, 2.5rem); background: white;
border: 1px solid var(–grey2); transition: box-shadow 0.3s, border-color 0.3s;
}
.why-card:hover { box-shadow: 0 6px 30px rgba(0,0,0,0.07); border-color: var(–gold-light); }
.why-icon { font-size: 1.1rem; color: var(–gold); margin-bottom: 0.8rem; }
.why-card-title { font-weight: 600; font-size: clamp(0.8rem, 1.5vw, 0.9rem); margin-bottom: 0.5rem; }
.why-card-desc { font-size: 0.75rem; color: var(–text-muted); line-height: 1.7; }

/* ── CONTACT ── */
.contact-bg { background: var(–black); color: white; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 6vw, 6rem); }
.contact-info .section-label { color: var(–gold-light); }
.contact-info .section-title { color: white; }
.contact-info .section-sub { color: rgba(255,255,255,0.6); max-width: 100%; }
.contact-items { margin-top: 2rem; display: flex; flex-direction: column; gap: 1.2rem; }
.contact-item { display: flex; align-items: flex-start; gap: 0.9rem; }
.contact-item-icon {
width: 38px; height: 38px; border: 1px solid var(–gold);
display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(–gold);
}
.contact-item-label { font-size: 0.52rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(–gold-light); margin-bottom: 0.25rem; }
.contact-item-value { font-size: clamp(0.82rem, 1.8vw, 0.9rem); font-weight: 300; }
.contact-item-value a { color: white; text-decoration: none; }
.contact-item-value a:hover { color: var(–gold-light); }
.social-links { display: flex; gap: 0.75rem; margin-top: 2rem; flex-wrap: wrap; }
.social-link {
width: 40px; height: 40px; border: 1px solid rgba(255,255,255,0.2);
display: flex; align-items: center; justify-content: center;
color: white; text-decoration: none; font-size: 0.7rem; font-weight: 600;
transition: all 0.3s; letter-spacing: 0.05em;
}
.social-link:hover { border-color: var(–gold); background: var(–gold); }
.whatsapp-cta {
display: inline-flex; align-items: center; gap: 0.7rem;
background: #25D366; color: white;
padding: 0.8rem 1.6rem; font-size: 0.68rem; letter-spacing: 0.12em;
text-transform: uppercase; text-decoration: none; transition: background 0.3s; margin-top: 1.5rem;
}
.whatsapp-cta:hover { background: #1da851; }

/* FORM */
.form-title { font-family: var(–font-serif); font-size: clamp(1.4rem, 3vw, 1.8rem); font-weight: 300; color: white; margin-bottom: 1.5rem; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.55); margin-bottom: 0.4rem; }
.form-group input, .form-group select, .form-group textarea {
width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14);
color: white; padding: 0.75rem 0.9rem; font-size: 0.8rem; outline: none;
transition: border-color 0.2s; font-family: var(–font-sans);
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(–gold); }
.form-group select option { background: #1a1a1a; }
.form-group textarea { height: 90px; resize: vertical; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-submit {
width: 100%; background: var(–gold); color: white; border: none;
padding: 0.9rem; font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase;
cursor: pointer; transition: background 0.3s; margin-top: 0.4rem; font-family: var(–font-sans);
}
.form-submit:hover { background: #b8922e; }
.form-success { text-align: center; padding: 2rem; color: var(–gold-light); font-family: var(–font-serif); font-size: 1.2rem; }

/* ── FOOTER ── */
.footer {
background: #050505; color: rgba(255,255,255,0.45);
padding: clamp(1.5rem, 3vw, 2rem) clamp(1rem, 5vw, 4rem);
display: flex; align-items: center; justify-content: space-between;
flex-wrap: wrap; gap: 0.8rem;
border-top: 1px solid rgba(201,168,76,0.18); font-size: 0.62rem; letter-spacing: 0.08em;
}
.footer span { color: var(–gold); }
.footer-right { display: flex; gap: 1.5rem; }
.footer-right a { color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
.footer-right a:hover { color: var(–gold); }

/* ── FLOATING BTNS ── */
.float-wrap { position: fixed; bottom: clamp(1rem, 2vw, 1.5rem); right: clamp(1rem, 2vw, 1.5rem); z-index: 990; display: flex; flex-direction: column; gap: 0.6rem; }
.float-btn {
width: 52px; height: 52px; border-radius: 50%;
display: flex; align-items: center; justify-content: center;
text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border: none;
}
.float-wa { background: #25D366; box-shadow: 0 4px 18px rgba(37,211,102,0.4); }
.float-wa:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,0.5); }
.float-ph { background: var(–black); border: 1px solid var(–gold); box-shadow: 0 4px 18px rgba(0,0,0,0.2); }
.float-ph:hover { transform: scale(1.1); background: var(–gold); }

/* ── ADMIN ── */
.admin-trigger {
position: fixed; bottom: 1rem; left: 1rem; z-index: 2000;
width: 34px; height: 34px; background: rgba(0,0,0,0.08);
border: 1px solid rgba(0,0,0,0.1); cursor: pointer; border-radius: 8px;
opacity: 0.2; transition: opacity 0.2s, background 0.2s;
display: flex; align-items: center; justify-content: center; color: #444;
}
.admin-trigger:hover { opacity: 1; background: var(–black); color: white; border-color: var(–black); }
.admin-overlay {
position: fixed; inset: 0; z-index: 3000; display: flex;
background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); animation: fadeIn 0.2s;
}
.sp-panel {
width: min(380px, 100vw); background: #f6f6f7;
display: flex; flex-direction: column; height: 100%;
box-shadow: 4px 0 60px rgba(0,0,0,0.25);
animation: slideInLeft 0.25s cubic-bezier(.25,.46,.45,.94);
}
.sp-topbar {
display: flex; align-items: center; justify-content: space-between;
padding: 0 1rem; height: 54px; background: #1a1a1a; flex-shrink: 0;
}
.sp-topbar-site { font-size: 0.78rem; font-weight: 600; color: white; }
.sp-topbar-sub { font-size: 0.6rem; color: rgba(255,255,255,0.4); }
.sp-topbar-actions { display: flex; gap: 0.5rem; }
.sp-btn-discard { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 0.4rem 0.8rem; font-size: 0.7rem; font-weight: 500; cursor: pointer; border-radius: 6px; font-family: var(–font-sans); }
.sp-btn-discard:hover { background: rgba(255,255,255,0.18); }
.sp-btn-save { background: #008060; border: none; color: white; padding: 0.4rem 0.9rem; font-size: 0.7rem; font-weight: 600; cursor: pointer; border-radius: 6px; font-family: var(–font-sans); }
.sp-btn-save:hover { background: #006e52; }
.sp-breadcrumb { display: flex; align-items: center; gap: 0.4rem; padding: 0.65rem 1rem; background: white; border-bottom: 1px solid #e1e3e5; flex-shrink: 0; }
.sp-breadcrumb-btn { background: none; border: none; cursor: pointer; padding: 0.2rem 0.3rem; border-radius: 4px; display: flex; align-items: center; color: #6d7175; font-size: 0.7rem; }
.sp-breadcrumb-btn:hover { background: #f1f2f3; color: #202223; }
.sp-breadcrumb-sep { color: #c9cccf; font-size: 0.68rem; }
.sp-breadcrumb-current { font-size: 0.7rem; font-weight: 600; color: #202223; }
.sp-section-list { flex: 1; overflow-y: auto; padding: 0.75rem; }
.sp-section-group-label { font-size: 0.58rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #6d7175; padding: 0.35rem 0.5rem; margin-bottom: 0.25rem; }
.sp-section-item { display: flex; align-items: center; justify-content: space-between; padding: 0.7rem 0.85rem; background: white; border-radius: 8px; border: 1px solid #e1e3e5; margin-bottom: 0.3rem; cursor: pointer; transition: box-shadow 0.15s, border-color 0.15s; }
.sp-section-item:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.07); border-color: #c9cccf; }
.sp-section-item-left { display: flex; align-items: center; gap: 0.65rem; }
.sp-section-icon { width: 30px; height: 30px; background: #f6f6f7; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #6d7175; flex-shrink: 0; }
.sp-section-name { font-size: 0.76rem; font-weight: 500; color: #202223; }
.sp-section-desc { font-size: 0.62rem; color: #6d7175; margin-top: 1px; }
.sp-editor { flex: 1; overflow-y: auto; }
.sp-editor-body { padding: 0.75rem; }
.sp-card { background: white; border-radius: 8px; border: 1px solid #e1e3e5; margin-bottom: 0.65rem; overflow: hidden; }
.sp-card-header { padding: 0.85rem 0.95rem; cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: background 0.1s; user-select: none; }
.sp-card-header:hover { background: #fafbfb; }
.sp-card-title { font-size: 0.76rem; font-weight: 600; color: #202223; }
.sp-card-subtitle { font-size: 0.62rem; color: #6d7175; margin-top: 2px; }
.sp-card-chevron { color: #8c9196; transition: transform 0.2s; }
.sp-card-chevron.open { transform: rotate(180deg); }
.sp-card-body { padding: 0 0.95rem 0.95rem; border-top: 1px solid #f1f2f3; padding-top: 0.75rem; }
.sp-field { margin-bottom: 0.8rem; }
.sp-field:last-child { margin-bottom: 0; }
.sp-field label { display: block; font-size: 0.68rem; font-weight: 600; color: #202223; margin-bottom: 0.3rem; }
.sp-field input, .sp-field textarea { width: 100%; border: 1px solid #c9cccf; border-radius: 6px; padding: 0.5rem 0.7rem; font-size: 0.78rem; color: #202223; outline: none; font-family: var(–font-sans); transition: border-color 0.15s, box-shadow 0.15s; background: white; }
.sp-field input:focus, .sp-field textarea:focus { border-color: #005bd3; box-shadow: 0 0 0 3px rgba(0,91,211,0.1); }
.sp-field textarea { height: 75px; resize: vertical; line-height: 1.5; }
.sp-field-hint { font-size: 0.6rem; color: #6d7175; margin-top: 0.25rem; }
.sp-img-upload { border: 2px dashed #c9cccf; border-radius: 8px; padding: 1rem; text-align: center; cursor: pointer; transition: border-color 0.2s, background 0.2s; background: #fafbfb; position: relative; }
.sp-img-upload:hover { border-color: #005bd3; background: #f0f5ff; }
.sp-img-upload input[type=file] { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; border: none; padding: 0; }
.sp-img-upload-text { font-size: 0.7rem; font-weight: 600; color: #005bd3; }
.sp-img-upload-sub { font-size: 0.6rem; color: #6d7175; margin-top: 0.15rem; }
.sp-img-preview { position: relative; border-radius: 8px; overflow: hidden; border: 1px solid #e1e3e5; margin-bottom: 0.5rem; }
.sp-img-preview img { width: 100%; height: 130px; object-fit: cover; display: block; }
.sp-img-preview-actions { position: absolute; top: 0.4rem; right: 0.4rem; display: flex; gap: 0.3rem; }
.sp-img-action-btn { width: 26px; height: 26px; background: white; border: 1px solid #e1e3e5; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #6d7175; transition: all 0.15s; }
.sp-img-action-btn:hover { background: #fee2e2; border-color: #fca5a5; color: #dc2626; }
.sp-login { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem 1.5rem; gap: 1rem; }
.sp-login-logo { width: 52px; height: 52px; background: var(–black); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(–gold); font-family: var(–font-serif); font-size: 1.4rem; font-weight: 600; }
.sp-login-title { font-size: 0.95rem; font-weight: 700; color: #202223; }
.sp-login-sub { font-size: 0.7rem; color: #6d7175; text-align: center; line-height: 1.5; }
.sp-login-box { width: 100%; background: white; border: 1px solid #e1e3e5; border-radius: 10px; padding: 1.3rem; display: flex; flex-direction: column; gap: 0.8rem; }
.sp-login-box input { width: 100%; border: 1px solid #c9cccf; border-radius: 6px; padding: 0.6rem 0.9rem; font-size: 0.85rem; outline: none; font-family: var(–font-sans); text-align: center; letter-spacing: 0.15em; }
.sp-login-box input:focus { border-color: #005bd3; box-shadow: 0 0 0 3px rgba(0,91,211,0.1); }
.sp-login-btn { width: 100%; background: #008060; color: white; border: none; padding: 0.65rem; font-size: 0.75rem; font-weight: 600; border-radius: 6px; cursor: pointer; font-family: var(–font-sans); }
.sp-login-btn:hover { background: #006e52; }
.sp-login-hint { font-size: 0.6rem; color: #6d7175; text-align: center; }
.sp-login-error { background: #fff4f4; border: 1px solid #fca5a5; color: #dc2626; border-radius: 6px; padding: 0.45rem 0.7rem; font-size: 0.7rem; text-align: center; }
.admin-dismiss { flex: 1; cursor: pointer; }
.save-toast { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); background: #202223; color: white; padding: 0.65rem 1.4rem; font-size: 0.7rem; z-index: 5000; border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.2); animation: toastIn 0.3s ease, toastOut 0.3s ease 1.7s forwards; pointer-events: none; display: flex; align-items: center; gap: 0.5rem; white-space: nowrap; }
.save-toast::before { content:‘✓’; color: #a8f5c5; font-weight: 700; }

/* ── ANIMATIONS ── */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideInLeft { from { transform: translateX(-28px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-7px); } }
@keyframes toastIn { from { opacity: 0; transform: translateX(-50%) translateY(8px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
@keyframes toastOut { from { opacity: 1; } to { opacity: 0; } }

/* ── RESPONSIVE ── */

/* Tablet: 768px – 1023px */
@media (max-width: 1023px) {
:root { –nav-h: 66px; }
.nav-desktop { display: none; }
.nav-hamburger { display: flex; }
.about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
.about-img-wrap { aspect-ratio: 16/9; }
.about-img-accent { display: none; }
.products-grid { grid-template-columns: 1fr 1fr; }
.contact-grid { grid-template-columns: 1fr; gap: 3rem; }
.projects-grid { grid-template-columns: repeat(2, 1fr); }
.corian-grid { grid-template-columns: 1fr 1fr; }
.corian-wide { grid-column: 1 / -1; }
.corian-wide-sep { display: none; }
.why-grid { grid-template-columns: repeat(2, 1fr); }
.pooja-split { grid-template-columns: 1fr; }
.pooja-img { min-height: 280px; }
.form-row { grid-template-columns: 1fr; }
.heritage-strip .hs-divider { display: none; }
.heritage-strip { flex-direction: column; gap: 0.8rem; text-align: center; }
.footer { flex-direction: column; align-items: center; text-align: center; }
.footer-right { justify-content: center; }
}

/* Mobile: up to 767px */
@media (max-width: 767px) {
:root { –nav-h: 60px; }
.navbar { padding: 0 1rem; }
.container { padding: 0 1rem; }
section { padding: clamp(2.5rem, 8vw, 4rem) 0; }
.nav-desktop { display: none; }
.nav-hamburger { display: flex; }

```
/* hero */
.hero-sub { display: none; }
.hero-scroll { display: none; }
.hero-actions { gap: 0.75rem; }
.hero-actions a { padding: 0.75rem 1.4rem; font-size: 0.62rem; }

/* page hero */
.page-hero { height: clamp(140px, 45vw, 240px); }

/* grids */
.about-grid { grid-template-columns: 1fr; gap: 1.5rem; }
.about-img-wrap { aspect-ratio: 4/3; }
.about-img-accent { display: none; }
.products-grid { grid-template-columns: 1fr; gap: 2px; }
.product-info { transform: translateY(0) !important; background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 70%) !important; }
.product-desc { display: none; }
.projects-grid { grid-template-columns: 1fr; gap: 0.75rem; }
.project-overlay { opacity: 1 !important; transform: none !important; }
.corian-grid { grid-template-columns: 1fr; }
.corian-wide { grid-column: auto; }
.corian-wide-sep { display: none; }
.corian-wide-inner { flex-direction: column; gap: 1.5rem; }
.why-grid { grid-template-columns: 1fr; }
.pooja-split { grid-template-columns: 1fr; }
.pooja-img { min-height: 220px; }
.pooja-features { grid-template-columns: 1fr; gap: 0.6rem; }
.contact-grid { grid-template-columns: 1fr; gap: 2rem; }
.form-row { grid-template-columns: 1fr; }
.stats-row { gap: 1.5rem; flex-wrap: wrap; }
.footer { flex-direction: column; align-items: center; text-align: center; gap: 0.8rem; }
.footer-right { justify-content: center; flex-wrap: wrap; gap: 1rem; }
.float-btn { width: 46px; height: 46px; }
.heritage-strip { flex-direction: column; gap: 0.6rem; text-align: center; }
.heritage-strip .hs-divider { display: none; }

/* hide Est. 1954 under brand name */
.nav-brand-sub { display: none; }
.nav-brand-mobile-sub { display: block; }

/* white backgrounds for key sections */
#about { background: #ffffff; }
.corian-section { background: #ffffff; }
.projects-section { background: #ffffff; }

/* admin */
.sp-panel { width: 100vw; }
```

}

/* Small mobile: up to 380px */
@media (max-width: 380px) {
.nav-brand-name { font-size: 1rem; }
.hero-title { font-size: 1.9rem; }
}

/* Large desktop: 1440px+ */
@media (min-width: 1440px) {
.container { max-width: 1400px; }
.products-grid { grid-template-columns: repeat(2, 1fr); }
.projects-grid { grid-template-columns: repeat(3, 1fr); }
}
`;

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const PhoneIcon = ({ size = 16, color = “currentColor” }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = ({ size = 16 }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const MapIcon = ({ size = 16 }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
);
const WaIcon = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
);
const ShieldIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const DiamondIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"/></svg>;
const SparkleIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4"><path d="M12 3v1M12 20v1M3 12h1M20 12h1M5.6 5.6l.7.7M17.7 17.7l.7.7M5.6 18.4l.7-.7M17.7 6.3l.7-.7" strokeLinecap="round"/><circle cx="12" cy="12" r="4"/></svg>;
const DupontIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v4M10 14h4" strokeLinecap="round"/></svg>;
const RoboticIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M9 11V7a3 3 0 0 1 6 0v4"/><circle cx="9" cy="16" r="1.5" fill="#C9A84C"/><circle cx="15" cy="16" r="1.5" fill="#C9A84C"/><path d="M12 3v2M8 3h8" strokeLinecap="round"/></svg>;
const ChevronRight = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6"/></svg>;
const ChevronDown = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9l6 6 6-6"/></svg>;

// ─── HELPER: ACCORDION CARD (admin) ──────────────────────────────────────────
function SpCard({ title, subtitle, children, defaultOpen = false }) {
const [open, setOpen] = useState(defaultOpen);
return (
<div className="sp-card">
<div className=“sp-card-header” onClick={() => setOpen(o => !o)}>
<div>
<div className="sp-card-title">{title}</div>
{subtitle && <div className="sp-card-subtitle">{subtitle}</div>}
</div>
<span className={`sp-card-chevron${open ? " open" : ""}`}><ChevronDown /></span>
</div>
{open && <div className="sp-card-body">{children}</div>}
</div>
);
}

// ─── HELPER: IMAGE UPLOAD ─────────────────────────────────────────────────────
function SpImageUpload({ value, onUrl, label, hint }) {
const handleFile = (e) => {
const file = e.target.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = (ev) => onUrl(ev.target.result);
reader.readAsDataURL(file);
};
return (
<div className="sp-field">
{label && <label>{label}</label>}
{value ? (
<div className="sp-img-preview">
<img src={value} alt="preview" />
<div className="sp-img-preview-actions">
<label className=“sp-img-action-btn” title=“Replace” style={{ cursor:“pointer” }}>
<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
<input type=“file” accept=“image/*” onChange={handleFile} style={{ display:“none” }} />
</label>
<button className=“sp-img-action-btn” title=“Remove” onClick={() => onUrl(””)}>
<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
</button>
</div>
</div>
) : (
<div className="sp-img-upload">
<input type="file" accept="image/*" onChange={handleFile} />
<div className="sp-img-upload-text">📁 Upload from device</div>
<div className="sp-img-upload-sub">JPG, PNG, WebP — or paste URL below</div>
</div>
)}
<input
value={value && value.startsWith(“data:”) ? “” : (value || “”)}
onChange={e => onUrl(e.target.value)}
placeholder=“https://example.com/image.jpg”
style={{ marginTop:“0.45rem”, borderRadius:6, border:“1px solid #c9cccf”, padding:“0.45rem 0.7rem”, fontSize:“0.75rem”, width:“100%”, outline:“none”, fontFamily:“inherit” }}
/>
{hint && <div className="sp-field-hint">{hint}</div>}
</div>
);
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
const [content, setContent]       = useState(DEFAULT_CONTENT);
const [loaded, setLoaded]         = useState(false);
const [activePage, setActivePage] = useState(“home”);
const [scrolled, setScrolled]     = useState(false);
const [sidebarOpen, setSidebar]   = useState(false);

// Admin
const [adminOpen, setAdminOpen]         = useState(false);
const [adminAuthed, setAdminAuthed]     = useState(false);
const [adminPass, setAdminPass]         = useState(””);
const [adminLoginError, setLoginError]  = useState(false);
const [adminTab, setAdminTab]           = useState(“home”);
const [adminDraft, setAdminDraft]       = useState({});
const [toast, setToast]                 = useState(false);

// Form
const [formData, setFormData] = useState({ name:””, phone:””, email:””, product:””, message:”” });
const [formSent, setFormSent] = useState(false);

useEffect(() => {
(async () => {
try {
const res = await window.storage.get(“mandir_content”);
if (res) setContent({ …DEFAULT_CONTENT, …JSON.parse(res.value) });
} catch {}
setLoaded(true);
})();
}, []);

useEffect(() => {
const fn = () => setScrolled(window.scrollY > 40);
window.addEventListener(“scroll”, fn);
return () => window.removeEventListener(“scroll”, fn);
}, []);

// Close sidebar on resize > 1023
useEffect(() => {
const fn = () => { if (window.innerWidth > 1023) setSidebar(false); };
window.addEventListener(“resize”, fn);
return () => window.removeEventListener(“resize”, fn);
}, []);

const navigate = (page) => {
setActivePage(page);
setSidebar(false);
window.scrollTo({ top: 0, behavior: “smooth” });
};

const openAdmin = () => {
setAdminDraft(JSON.parse(JSON.stringify(content)));
setAdminTab(“home”);
setAdminOpen(true);
};
const handleAdminLogin = () => {
if (adminPass === “mandir2024”) { setAdminAuthed(true); setLoginError(false); }
else { setLoginError(true); setAdminPass(””); }
};
const saveAdmin = async () => {
try {
await window.storage.set(“mandir_content”, JSON.stringify(adminDraft));
setContent({ …adminDraft }); setToast(true);
setTimeout(() => setToast(false), 2000);
} catch {}
};

const updateDraft = (key, val) => setAdminDraft(p => ({ …p, [key]: val }));
const updateDraftProduct = (i, field, val) => setAdminDraft(p => { const n = { …p, products: […p.products] }; n.products[i] = { …n.products[i], [field]: val }; return n; });
const updateDraftProject = (i, field, val) => setAdminDraft(p => { const n = { …p, projects: […p.projects] }; n.projects[i] = { …n.projects[i], [field]: val }; return n; });
const updateDraftWhyPoint = (i, field, val) => setAdminDraft(p => { const n = { …p, whyPoints: […p.whyPoints] }; n.whyPoints[i] = { …n.whyPoints[i], [field]: val }; return n; });
const updateDraftPoojaFeature = (i, val) => setAdminDraft(p => { const n = { …p, poojaFeatures: […p.poojaFeatures] }; n.poojaFeatures[i] = val; return n; });

const handleFormSubmit = async (e) => {
e.preventDefault();
try {
await fetch(“https://formspree.io/f/YOUR_FORMSPREE_ID”, {
method: “POST”,
headers: { “Content-Type”: “application/json” },
body: JSON.stringify(formData),
});
} catch(err) {}
setFormSent(true);
setTimeout(() => setFormSent(false), 5000);
setFormData({ name:””, phone:””, email:””, product:””, message:”” });
};

if (!loaded) return (
<div style={{ display:“flex”, alignItems:“center”, justifyContent:“center”, height:“100vh”, fontFamily:“var(–font-sans)”, fontSize:“0.75rem”, letterSpacing:“0.3em”, textTransform:“uppercase”, color:”#C9A84C” }}>
Loading…
</div>
);

const c = content;

const NAV_ITEMS = [
{ key:“home”,        label:“Home” },
{ key:“collections”, label:“Collections” },
{ key:“pooja”,       label:“Pooja Rooms” },
{ key:“projects”,    label:“Projects” },
{ key:“about”,       label:“About Us” },
{ key:“contact”,     label:“Contact” },
];

// ── SECTION COMPONENTS ──────────────────────────────────────────────────────

const HeroSection = () => (
<section className=“hero” style={{ padding: 0, marginTop: `calc(-1 * var(--nav-h))` }}>
<div className=“hero-bg loaded” style={{ backgroundImage:`url(${c.heroImage})` }} />
<div className="hero-overlay" />
<div className="hero-content">
<div className="hero-eyebrow">✦  Mandir Emporium  ·  A Unit of The Deco Furns  ✦</div>
<h1 className="hero-title">
{c.tagline.split(”. “).map((t, i) =>
i % 2 === 1 ? <em key={i}>{t}</em> : <span key={i}>{t}. </span>
)}
</h1>
<p className="hero-sub">{c.subTagline}</p>
<div className="hero-actions">
<button className=“btn-gold” onClick={() => navigate(“collections”)}>Explore Collections</button>
<a href={`tel:${c.phone}`} className=“btn-outline-white”><PhoneIcon /> {c.phone}</a>
</div>
</div>
<div className="hero-scroll"><div className="hero-scroll-line" />Scroll</div>
</section>
);

const HeritageStrip = () => (
<div className="heritage-strip">
<div className="hs-item">
<div className="hs-label">A Proud Unit of</div>
<div className="hs-value serif">The Deco Furns</div>
</div>
<div className="hs-divider" />
<div className="hs-tagline">
Rooted in <em>70+ years of expertise</em>, The Deco Furns blends heritage craftsmanship with modern luxury to create masterpieces that last generations.
</div>
<div className="hs-divider" />
<div className="hs-item">
<div className="hs-label">Legacy Since</div>
<div className="hs-value serif">1954</div>
</div>
</div>
);

const AboutSection = ({ compact = false }) => (
<section id="about">
<div className="container">
<div className="about-grid">
<div className="about-img-wrap">
<img src={c.aboutImage} alt="About Mandir Emporium" loading="lazy" />
<div className="about-img-accent" />
<div className="about-img-label">Est. 1954 · New Delhi</div>
</div>
<div>
<div className="section-label">✦ Our Legacy</div>
<h2 className="section-title serif">{c.aboutTitle}</h2>
<div className="section-divider" />
<p className="section-sub">{c.aboutText}</p>
{!compact && (
<div className="stats-row">
<div><div className="stat-num serif">70+</div><div className="stat-label">Years of Heritage</div></div>
<div><div className="stat-num serif">5000+</div><div className="stat-label">Mandirs Created</div></div>
<div><div className="stat-num serif">100+</div><div className="stat-label">Master Artisans</div></div>
</div>
)}
{compact && (
<button className=“btn-gold” style={{ marginTop:“1.5rem” }} onClick={() => navigate(“about”)}>Read Our Story →</button>
)}
</div>
</div>
</div>
</section>
);

const ProductsSection = () => (
<section className="products-bg">
<div className="container">
<div className="center-header">
<div className="section-label">✦ Our Collections</div>
<h2 className="section-title serif">Sacred <em>Masterpieces</em></h2>
<div className="section-divider" />
<p className="section-sub">Four distinct collections, crafted from the finest materials worldwide.</p>
</div>
<div className="products-grid">
{c.products.map(p => (
<div key={p.id} className="product-card">
<img src={p.image} alt={p.name} loading="lazy" />
{p.tag && <div className="product-badge">{p.tag}</div>}
<div className="product-info">
<div className="product-sub">{p.subtitle}</div>
<div className="product-name serif">{p.name}</div>
<div className="product-desc">{p.desc}</div>
<div className="product-cta">Enquire Now →</div>
</div>
</div>
))}
</div>
</div>
</section>
);

const CorianSection = () => (
<section className="corian-section">
<div className="container">
<div className="center-header">
<div className="section-label">✦ The Corian Advantage</div>
<h2 className="section-title serif">What Makes Our Corian<br/><em>Truly Exceptional?</em></h2>
<div className="section-divider" />
<p className="section-sub">Every detail engineered to the highest standards of luxury, longevity, and sacred beauty.</p>
</div>
<div className="corian-grid">
<div className="corian-card">
<div className="corian-num serif">01</div>
<div className="corian-icon"><ShieldIcon /></div>
<div className="corian-card-title"><span>10-Year</span> Colour Warranty</div>
<div className="corian-card-desc">We guarantee our Corian will not turn yellow or blackish for 10 years. Your investment stays as pristine as the day it was installed.</div>
</div>
<div className="corian-card">
<div className="corian-num serif">02</div>
<div className="corian-icon"><DiamondIcon /></div>
<div className="corian-card-title">100% <span>Non-Porous</span> Surface</div>
<div className="corian-card-desc">Completely non-porous, making it perfect for sacred spaces.</div>
<ul className="corian-check"><li>Stain Resistant</li><li>Hygienic & Bacteria-Free</li><li>Easy to Maintain</li><li>Moisture Resistant</li></ul>
</div>
<div className="corian-card">
<div className="corian-num serif">03</div>
<div className="corian-icon"><SparkleIcon /></div>
<div className="corian-card-title">Pure, <span>Elegant</span> White Finish</div>
<div className="corian-card-desc">Crafted in a true pure white tone that enhances sophistication and gives a premium, flawless aesthetic.</div>
</div>
<div className="corian-card corian-wide">
<div className="corian-wide-inner">
<div>
<div className="corian-num serif">04</div>
<div className="corian-icon"><DupontIcon /></div>
<div className="corian-card-title">Manufactured by <span>DuPont</span></div>
<div className="corian-card-desc">Our Corian is manufactured by DuPont — a globally trusted name known for world-class material innovation and quality standards.</div>
<div className="corian-badge">✦ DuPont Certified Material</div>
</div>
<div className="corian-wide-sep" />
<div>
<div className="corian-num serif">05</div>
<div className="corian-icon"><RoboticIcon /></div>
<div className="corian-card-title">Advanced <span>Robotic</span> Technology</div>
<div className="corian-card-desc">Precision crafted using state-of-the-art robotic technology ensuring unmatched quality at every stage.</div>
<ul className="corian-check"><li>Perfect Finishing</li><li>Seamless Edges</li><li>Superior Consistency</li><li>International Quality Standards</li></ul>
<div className="corian-badge">✦ Robotics-Precision Engineered</div>
</div>
</div>
</div>
</div>
</div>
</section>
);

const PoojaSection = () => (
<section style={{ padding:0 }}>
<div className="pooja-split">
<div className="pooja-img"><img src={c.poojaImage} alt="Pooja Room" loading="lazy" /></div>
<div className="pooja-content">
<div className="section-label">✦ Complete Pooja Rooms</div>
<h2 className=“section-title serif” style={{ color:“white” }}>Complete <em>Pooja Room</em> Setup</h2>
<div className="section-divider" />
<p className="section-sub">{c.poojaSubtitle}</p>
<p className=“section-sub” style={{ marginTop:“0.8rem” }}>{c.poojaText}</p>
<div className="pooja-features">
{c.poojaFeatures.map((f, i) => (
<div key={i} className="pooja-feat"><div className="pooja-feat-dot" />{f}</div>
))}
</div>
<a href={`https://wa.me/${c.whatsapp}?text=Hello! I'm interested in a complete Pooja Room setup.`}
className=“btn-gold” target=”_blank” rel=“noopener noreferrer”>
Discuss Your Project →
</a>
</div>
</div>
</section>
);

const ProjectsSection = () => (
<section className="projects-section">
<div className="container">
<div className="center-header">
<div className="section-label">✦ Signature Projects</div>
<h2 className="section-title serif">Our <em>Top Projects</em></h2>
<div className="section-divider" />
<p className="section-sub">{c.projectsSubtitle}</p>
</div>
<div className="projects-grid">
{c.projects.map(p => (
<div key={p.id} className="project-card">
<img src={p.image} alt={p.title} loading="lazy" />
<div className="project-overlay">
<div className="project-cat">{p.category}</div>
<div className="project-name serif">{p.title}</div>
</div>
</div>
))}
</div>
</div>
</section>
);

const WhySection = () => (
<section className="why-bg">
<div className="container">
<div className="center-header">
<div className="section-label">✦ Why Choose Us</div>
<h2 className="section-title serif"><em>Why</em> Mandir Emporium?</h2>
<div className="section-divider" />
</div>
<div className="why-grid">
{c.whyPoints.map((w, i) => (
<div key={i} className="why-card">
<div className="why-icon">{w.icon}</div>
<div className="why-card-title">{w.title}</div>
<div className="why-card-desc">{w.desc}</div>
</div>
))}
</div>
</div>
</section>
);

const ContactSection = () => (
<section className="contact-bg">
<div className="container">
<div className="contact-grid">
<div className="contact-info">
<div className="section-label">✦ Get In Touch</div>
<h2 className="section-title serif">Let’s Create Your<br/><em>Sacred Space</em></h2>
<div className="section-divider" />
<p className=“section-sub” style={{ color:“rgba(255,255,255,0.6)” }}>Reach out to us for pricing, customisation, or to schedule a showroom visit.</p>
<div className="contact-items">
<div className="contact-item">
<div className="contact-item-icon"><PhoneIcon size={15} color="#C9A84C" /></div>
<div><div className="contact-item-label">Call Us</div><div className="contact-item-value"><a href={`tel:${c.phone}`}>{c.phone}</a></div></div>
</div>
<div className="contact-item">
<div className="contact-item-icon"><MailIcon size={15} /></div>
<div><div className="contact-item-label">Email</div><div className="contact-item-value"><a href={`mailto:${c.email}`}>{c.email}</a></div></div>
</div>
<div className="contact-item">
<div className="contact-item-icon"><MapIcon size={15} /></div>
<div><div className="contact-item-label">Visit Us</div><div className="contact-item-value">{c.address}</div></div>
</div>
</div>
<a href={`https://wa.me/${c.whatsapp}?text=Hello! I'm interested in your mandirs.`}
className=“whatsapp-cta” target=”_blank” rel=“noopener noreferrer”>
<WaIcon /> Chat on WhatsApp
</a>
<div className="social-links">
<a href={c.instagram} target="_blank" rel="noopener noreferrer" className="social-link">IG</a>
<a href={c.facebook} target="_blank" rel="noopener noreferrer" className="social-link">FB</a>
<a href={c.youtube} target="_blank" rel="noopener noreferrer" className="social-link">YT</a>
<a href={c.pinterest} target="_blank" rel="noopener noreferrer" className="social-link">PT</a>
</div>
</div>
<div>
<div className="form-title serif">Send an Enquiry</div>
{formSent ? (
<div className="form-success">✦ Thank You! We will contact you within 24 hours.</div>
) : (
<form onSubmit={handleFormSubmit}>
<div className="form-row">
<div className="form-group"><label>Your Name *</label><input required value={formData.name} onChange={e=>setFormData({…formData,name:e.target.value})} placeholder=“Full Name” /></div>
<div className="form-group"><label>Phone *</label><input required value={formData.phone} onChange={e=>setFormData({…formData,phone:e.target.value})} placeholder=”+91 XXXXX XXXXX” /></div>
</div>
<div className="form-group"><label>Email</label><input type=“email” value={formData.email} onChange={e=>setFormData({…formData,email:e.target.value})} placeholder=“your@email.com” /></div>
<div className="form-group">
<label>I’m Interested In *</label>
<select required value={formData.product} onChange={e=>setFormData({…formData,product:e.target.value})}>
<option value="">Select a Collection</option>
{c.products.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
<option value="Complete Pooja Room Setup">Complete Pooja Room Setup</option>
<option value="Custom Design">Custom Design</option>
</select>
</div>
<div className="form-group"><label>Message</label><textarea value={formData.message} onChange={e=>setFormData({…formData,message:e.target.value})} placeholder=“Tell us about your space, budget, and requirements.” /></div>
<button type="submit" className="form-submit">Send Enquiry ✦</button>
</form>
)}
</div>
</div>
</div>
</section>
);

const PageHero = ({ title, em, label, bg }) => (
<div className="page-hero">
<div className=“page-hero-bg” style={{ backgroundImage:`url(${bg})` }} />
<div className="page-hero-overlay" />
<div className="page-hero-content">
<div className="page-hero-label">✦ {label}</div>
<h1 className="page-hero-title">{title} <em>{em}</em></h1>
</div>
</div>
);

const Footer = () => (
<footer className="footer">
<div>© {new Date().getFullYear()} <span>Mandir Emporium</span> · A Unit of The Deco Furns. All Rights Reserved.</div>
<div className="footer-right">
{NAV_ITEMS.map(n => (
<a key={n.key} href=”#” onClick={e=>{e.preventDefault();navigate(n.key)}}>{n.label}</a>
))}
</div>
</footer>
);

// ── PAGES ────────────────────────────────────────────────────────────────────
const renderPage = () => {
switch (activePage) {
case “home”: return (
<>
<HeroSection />
<HeritageStrip />
<AboutSection compact />
<ProductsSection />
<CorianSection />
<PoojaSection />
<ProjectsSection />
<WhySection />
<ContactSection />
</>
);
case “collections”: return (
<div className="page">
<PageHero title="Our Sacred" em="Collections" label="Mandir Collections" bg={c.heroImage} />
<CorianSection />
<ProductsSection />
</div>
);
case “pooja”: return (
<div className="page">
<PageHero title="Complete" em="Pooja Rooms" label="Interior Pooja Room Setup" bg={c.poojaImage} />
<PoojaSection />
<WhySection />
</div>
);
case “projects”: return (
<div className="page">
<PageHero title="Signature" em="Projects" label="Our Portfolio" bg={c.heroImage} />
<ProjectsSection />
</div>
);
case “about”: return (
<div className="page">
<PageHero title="Our" em="Story & Legacy" label="About Mandir Emporium" bg={c.aboutImage} />
<HeritageStrip />
<AboutSection />
<WhySection />
</div>
);
case “contact”: return (
<div className="page">
<PageHero title="Get In" em="Touch" label="Contact Us" bg={c.heroImage} />
<ContactSection />
</div>
);
default: return null;
}
};

// ── ADMIN PANEL CONTENT ──────────────────────────────────────────────────────
const adminSections = [
{ key:“general”,  name:“General Info”,     desc:“Brand, tagline, contact”, icon:<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="3"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2"/></svg> },
{ key:“hero”,     name:“Hero Banner”,       desc:“Background image”,         icon:<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="16" height="12" rx="1"/><path d="M2 8h16"/></svg> },
{ key:“about”,    name:“About Us”,          desc:“Story, text & image”,      icon:<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="6" r="3"/><path d="M4 18c0-3.31 2.69-6 6-6s6 2.69 6 6"/></svg> },
{ key:“products”, name:“Collections”,       desc:“4 product cards”,          icon:<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h14l-1.5 9H4.5L3 3z"/><circle cx="8" cy="17" r="1"/><circle cx="14" cy="17" r="1"/></svg> },
{ key:“pooja”,    name:“Pooja Rooms”,       desc:“Setup section & features”, icon:<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2L4 8v10h12V8L10 2z"/><path d="M8 18v-5h4v5"/></svg> },
{ key:“projects”, name:“Projects”,          desc:“Portfolio showcase”,        icon:<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="7" height="7" rx="1"/><rect x="11" y="2" width="7" height="7" rx="1"/><rect x="2" y="11" width="7" height="7" rx="1"/><rect x="11" y="11" width="7" height="7" rx="1"/></svg> },
{ key:“why”,      name:“Why Choose Us”,     desc:“6 USP points”,             icon:<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4M7 19H4a2 2 0 01-2-2V5a2 2 0 012-2h9l5 5v5"/></svg> },
{ key:“contact”,  name:“Contact & Social”,  desc:“Phone, WhatsApp, social”,  icon:<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4h16v12H2z"/><path d="M2 6l8 5 8-5"/></svg> },
];

const ADMIN_LABELS = { general:“General Info”, hero:“Hero Banner”, about:“About Us”, products:“Collections”, pooja:“Pooja Rooms”, projects:“Projects”, why:“Why Choose Us”, contact:“Contact & Social” };

return (
<>
<style>{styles}</style>

```
  {/* ── NAVBAR ── */}
  <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
    <a href="#" className="nav-brand" onClick={e=>{e.preventDefault();navigate("home")}}>
      <span className="nav-brand-name">{c.brandName}</span>
      <span className="nav-brand-sub">A Unit of The Deco Furns · Est. 1954</span>
      <span className="nav-brand-mobile-sub">A Unit of The Deco Furns</span>
    </a>
    <div className="nav-desktop">
      {NAV_ITEMS.map(n => (
        <a key={n.key} href="#"
          className={`${activePage === n.key ? "active" : ""}${n.key === "contact" ? " nav-cta-btn" : ""}`}
          onClick={e=>{e.preventDefault();navigate(n.key)}}>
          {n.label}
        </a>
      ))}
    </div>
    <button className={`nav-hamburger${sidebarOpen ? " open" : ""}`} onClick={() => setSidebar(o => !o)} aria-label="Menu">
      <span /><span /><span />
    </button>
  </nav>

  {/* ── MOBILE SIDEBAR ── */}
  <div className={`sidebar-overlay${sidebarOpen ? " open" : ""}`} onClick={() => setSidebar(false)} />
  <div className={`sidebar${sidebarOpen ? " open" : ""}`}>
    <div className="sidebar-header">
      <div>
        <div className="sidebar-brand">{c.brandName}</div>
        <div className="sidebar-brand-sub">A Unit of The Deco Furns</div>
      </div>
      <button className="sidebar-close" onClick={() => setSidebar(false)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <nav className="sidebar-nav">
      {NAV_ITEMS.map(n => (
        <a key={n.key} href="#"
          className={activePage === n.key ? "active" : ""}
          onClick={e=>{e.preventDefault();navigate(n.key)}}>
          <svg className="sidebar-nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {n.key === "home"        && <><path d="M3 9.5L10 3l7 6.5V18a1 1 0 01-1 1H4a1 1 0 01-1-1z"/><path d="M8 18v-6h4v6"/></>}
            {n.key === "collections" && <><path d="M3 3h14l-1.5 9H4.5L3 3z"/><circle cx="8" cy="17" r="1"/><circle cx="14" cy="17" r="1"/></>}
            {n.key === "pooja"       && <><path d="M10 2L4 8v10h12V8L10 2z"/><path d="M8 18v-5h4v5"/></>}
            {n.key === "projects"    && <><rect x="2" y="2" width="7" height="7" rx="1"/><rect x="11" y="2" width="7" height="7" rx="1"/><rect x="2" y="11" width="7" height="7" rx="1"/><rect x="11" y="11" width="7" height="7" rx="1"/></>}
            {n.key === "about"       && <><circle cx="10" cy="6" r="3"/><path d="M4 18c0-3.31 2.69-6 6-6s6 2.69 6 6"/></>}
            {n.key === "contact"     && <><path d="M2 4h16v12H2z"/><path d="M2 6l8 5 8-5"/></>}
          </svg>
          {n.label}
        </a>
      ))}
      <div className="sidebar-divider" />
      <a href={`tel:${c.phone}`} className="">
        <svg className="sidebar-nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L13 13l4 1.5V18c-8.3 0-15-6.7-15-15z"/></svg>
        {c.phone}
      </a>
    </nav>
    <div className="sidebar-footer">
      <a href={`https://wa.me/${c.whatsapp}?text=Hello! I'm interested in your mandirs.`}
        className="sidebar-whatsapp" target="_blank" rel="noopener noreferrer">
        <WaIcon /> WhatsApp Us
      </a>
      <button className="sidebar-contact-btn" style={{ marginTop:"0.5rem" }} onClick={() => navigate("contact")}>
        Enquire Now
      </button>
    </div>
  </div>

  {/* ── PAGE CONTENT ── */}
  {activePage === "home" ? renderPage() : <div>{renderPage()}</div>}

  {/* ── FOOTER ── */}
  <Footer />

  {/* ── FLOATING BUTTONS ── */}
  <div className="float-wrap">
    <a href={`https://wa.me/${c.whatsapp}?text=Hello! I'm interested in your mandirs.`}
      className="float-btn float-wa" target="_blank" rel="noopener noreferrer" title="WhatsApp">
      <WaIcon />
    </a>
    <a href={`tel:${c.phone}`} className="float-btn float-ph" title="Call Us">
      <PhoneIcon size={20} color="white" />
    </a>
  </div>

  {/* ── ADMIN TRIGGER ── */}
  <button className="admin-trigger" onClick={openAdmin} title="Edit Website">
    <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
  </button>

  {/* ── SHOPIFY-STYLE ADMIN PANEL ── */}
  {adminOpen && (
    <div className="admin-overlay">
      <div className="sp-panel">
        <div className="sp-topbar">
          <div>
            <div className="sp-topbar-site">Mandir Emporium</div>
            <div className="sp-topbar-sub">Website Editor</div>
          </div>
          <div className="sp-topbar-actions">
            <button className="sp-btn-discard" onClick={() => { setAdminDraft(JSON.parse(JSON.stringify(content))); setAdminTab("home"); }}>Discard</button>
            <button className="sp-btn-save" onClick={saveAdmin}>Save</button>
          </div>
        </div>

        {!adminAuthed ? (
          <div className="sp-login">
            <div className="sp-login-logo">M</div>
            <div className="sp-login-title">Website Editor</div>
            <div className="sp-login-sub">Sign in to customize your website content, images, and settings.</div>
            <div className="sp-login-box">
              {adminLoginError && <div className="sp-login-error">Incorrect password. Please try again.</div>}
              <input type="password" placeholder="Enter password" value={adminPass}
                onChange={e => { setAdminPass(e.target.value); setLoginError(false); }}
                onKeyDown={e => e.key === "Enter" && handleAdminLogin()} />
              <button className="sp-login-btn" onClick={handleAdminLogin}>Log in to editor</button>
            </div>
            <div className="sp-login-hint">Default password: <strong>mandir2024</strong></div>
          </div>
        ) : adminTab === "home" ? (
          <>
            <div className="sp-breadcrumb"><span className="sp-breadcrumb-current">All Sections</span></div>
            <div className="sp-section-list">
              <div className="sp-section-group-label">Website Sections</div>
              {adminSections.map(s => (
                <div key={s.key} className="sp-section-item" onClick={() => setAdminTab(s.key)}>
                  <div className="sp-section-item-left">
                    <div className="sp-section-icon">{s.icon}</div>
                    <div><div className="sp-section-name">{s.name}</div><div className="sp-section-desc">{s.desc}</div></div>
                  </div>
                  <ChevronRight />
                </div>
              ))}
              <div style={{ padding:"0.5rem", background:"#f0f9f4", borderRadius:8, border:"1px solid #a8f0c8", marginTop:"0.5rem" }}>
                <div style={{ fontSize:"0.66rem", fontWeight:600, color:"#008060", marginBottom:"0.15rem" }}>✓ Auto-save enabled</div>
                <div style={{ fontSize:"0.6rem", color:"#6d7175" }}>Changes persist in your browser across sessions.</div>
              </div>
            </div>
          </>
        ) : (
          <div className="sp-editor">
            <div className="sp-breadcrumb">
              <button className="sp-breadcrumb-btn" onClick={() => setAdminTab("home")}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>&nbsp;Back
              </button>
              <span className="sp-breadcrumb-sep">›</span>
              <span className="sp-breadcrumb-current">{ADMIN_LABELS[adminTab]}</span>
            </div>
            <div className="sp-editor-body">

              {adminTab === "general" && <>
                <SpCard title="Brand Identity" defaultOpen>
                  <div className="sp-field"><label>Brand Name</label><input value={adminDraft.brandName||""} onChange={e=>updateDraft("brandName",e.target.value)} /></div>
                  <div className="sp-field"><label>Tagline</label><input value={adminDraft.tagline||""} onChange={e=>updateDraft("tagline",e.target.value)} /><div className="sp-field-hint">Use period to split into two lines on hero.</div></div>
                  <div className="sp-field"><label>Sub-tagline</label><input value={adminDraft.subTagline||""} onChange={e=>updateDraft("subTagline",e.target.value)} /></div>
                </SpCard>
                <SpCard title="Contact Details">
                  <div className="sp-field"><label>Phone Number</label><input value={adminDraft.phone||""} onChange={e=>updateDraft("phone",e.target.value)} /></div>
                  <div className="sp-field"><label>WhatsApp (no +, with country code)</label><input value={adminDraft.whatsapp||""} onChange={e=>updateDraft("whatsapp",e.target.value)} /><div className="sp-field-hint">E.g. 919876543210</div></div>
                  <div className="sp-field"><label>Email</label><input value={adminDraft.email||""} onChange={e=>updateDraft("email",e.target.value)} /></div>
                  <div className="sp-field"><label>Address</label><textarea value={adminDraft.address||""} onChange={e=>updateDraft("address",e.target.value)} style={{height:55}} /></div>
                </SpCard>
              </>}

              {adminTab === "hero" && (
                <SpCard title="Hero Background Image" defaultOpen>
                  <SpImageUpload value={adminDraft.heroImage||""} onUrl={v=>updateDraft("heroImage",v)} label="Hero Image" hint="Best: 1920×1080px or larger." />
                </SpCard>
              )}

              {adminTab === "about" && <>
                <SpCard title="About Section Text" defaultOpen>
                  <div className="sp-field"><label>Section Title</label><input value={adminDraft.aboutTitle||""} onChange={e=>updateDraft("aboutTitle",e.target.value)} /></div>
                  <div className="sp-field"><label>About Text</label><textarea value={adminDraft.aboutText||""} onChange={e=>updateDraft("aboutText",e.target.value)} style={{height:110}} /></div>
                </SpCard>
                <SpCard title="About Image">
                  <SpImageUpload value={adminDraft.aboutImage||""} onUrl={v=>updateDraft("aboutImage",v)} label="About Image" hint="Portrait orientation works best." />
                </SpCard>
              </>}

              {adminTab === "products" && (adminDraft.products||[]).map((p,i) => (
                <SpCard key={p.id} title={p.name||`Product ${i+1}`} subtitle={p.subtitle}>
                  <div className="sp-field"><label>Product Name</label><input value={p.name} onChange={e=>updateDraftProduct(i,"name",e.target.value)} /></div>
                  <div className="sp-field"><label>Subtitle</label><input value={p.subtitle} onChange={e=>updateDraftProduct(i,"subtitle",e.target.value)} /></div>
                  <div className="sp-field"><label>Badge Tag</label><input value={p.tag} onChange={e=>updateDraftProduct(i,"tag",e.target.value)} /></div>
                  <div className="sp-field"><label>Description</label><textarea value={p.desc} onChange={e=>updateDraftProduct(i,"desc",e.target.value)} /></div>
                  <SpImageUpload value={p.image} onUrl={v=>updateDraftProduct(i,"image",v)} label="Product Image" hint="Landscape, min 800×600px." />
                </SpCard>
              ))}

              {adminTab === "pooja" && <>
                <SpCard title="Section Content" defaultOpen>
                  <div className="sp-field"><label>Title</label><input value={adminDraft.poojaTitle||""} onChange={e=>updateDraft("poojaTitle",e.target.value)} /></div>
                  <div className="sp-field"><label>Subtitle</label><input value={adminDraft.poojaSubtitle||""} onChange={e=>updateDraft("poojaSubtitle",e.target.value)} /></div>
                  <div className="sp-field"><label>Description</label><textarea value={adminDraft.poojaText||""} onChange={e=>updateDraft("poojaText",e.target.value)} style={{height:90}} /></div>
                </SpCard>
                <SpCard title="Feature Points">
                  {(adminDraft.poojaFeatures||[]).map((f,i) => (
                    <div className="sp-field" key={i}><label>Feature {i+1}</label><input value={f} onChange={e=>updateDraftPoojaFeature(i,e.target.value)} /></div>
                  ))}
                </SpCard>
                <SpCard title="Section Image">
                  <SpImageUpload value={adminDraft.poojaImage||""} onUrl={v=>updateDraft("poojaImage",v)} label="Pooja Room Image" hint="Left panel background image." />
                </SpCard>
              </>}

              {adminTab === "projects" && <>
                <SpCard title="Section Heading" defaultOpen>
                  <div className="sp-field"><label>Title</label><input value={adminDraft.projectsTitle||""} onChange={e=>updateDraft("projectsTitle",e.target.value)} /></div>
                  <div className="sp-field"><label>Subtitle</label><input value={adminDraft.projectsSubtitle||""} onChange={e=>updateDraft("projectsSubtitle",e.target.value)} /></div>
                </SpCard>
                {(adminDraft.projects||[]).map((p,i) => (
                  <SpCard key={p.id} title={p.title||`Project ${i+1}`} subtitle={p.category}>
                    <div className="sp-field"><label>Project Title</label><input value={p.title} onChange={e=>updateDraftProject(i,"title",e.target.value)} /></div>
                    <div className="sp-field"><label>Category</label><input value={p.category} onChange={e=>updateDraftProject(i,"category",e.target.value)} /></div>
                    <SpImageUpload value={p.image} onUrl={v=>updateDraftProject(i,"image",v)} label="Project Image" hint="Square or landscape, min 700×530px." />
                  </SpCard>
                ))}
              </>}

              {adminTab === "why" && <>
                <SpCard title="Section Title" defaultOpen>
                  <div className="sp-field"><label>Title</label><input value={adminDraft.whyTitle||""} onChange={e=>updateDraft("whyTitle",e.target.value)} /></div>
                </SpCard>
                {(adminDraft.whyPoints||[]).map((w,i) => (
                  <SpCard key={i} title={w.title||`Point ${i+1}`}>
                    <div className="sp-field"><label>Title</label><input value={w.title} onChange={e=>updateDraftWhyPoint(i,"title",e.target.value)} /></div>
                    <div className="sp-field"><label>Description</label><textarea value={w.desc} onChange={e=>updateDraftWhyPoint(i,"desc",e.target.value)} style={{height:65}} /></div>
                  </SpCard>
                ))}
              </>}

              {adminTab === "contact" && <>
                <SpCard title="Contact Info" defaultOpen>
                  <div className="sp-field"><label>Phone</label><input value={adminDraft.phone||""} onChange={e=>updateDraft("phone",e.target.value)} /></div>
                  <div className="sp-field"><label>WhatsApp</label><input value={adminDraft.whatsapp||""} onChange={e=>updateDraft("whatsapp",e.target.value)} /></div>
                  <div className="sp-field"><label>Email</label><input value={adminDraft.email||""} onChange={e=>updateDraft("email",e.target.value)} /></div>
                  <div className="sp-field"><label>Address</label><textarea value={adminDraft.address||""} onChange={e=>updateDraft("address",e.target.value)} style={{height:55}} /></div>
                </SpCard>
                <SpCard title="Social Media Links">
                  <div className="sp-field"><label>Instagram URL</label><input value={adminDraft.instagram||""} onChange={e=>updateDraft("instagram",e.target.value)} /></div>
                  <div className="sp-field"><label>Facebook URL</label><input value={adminDraft.facebook||""} onChange={e=>updateDraft("facebook",e.target.value)} /></div>
                  <div className="sp-field"><label>YouTube URL</label><input value={adminDraft.youtube||""} onChange={e=>updateDraft("youtube",e.target.value)} /></div>
                  <div className="sp-field"><label>Pinterest URL</label><input value={adminDraft.pinterest||""} onChange={e=>updateDraft("pinterest",e.target.value)} /></div>
                </SpCard>
              </>}

            </div>
          </div>
        )}
      </div>
      <div className="admin-dismiss" onClick={() => setAdminOpen(false)} />
    </div>
  )}

  {toast && <div className="save-toast">Changes saved successfully</div>}
</>
```

);
}

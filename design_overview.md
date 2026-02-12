# Ummah Vision Design & Architecture Overview

This document provides a comprehensive summary of the visual identity and technical foundation of the Ummah Vision project.

## 🎨 Visual Identity

### Color Palette
A refined, high-contrast palette designed for a professional yet modern educational sanctuary.

*   **Primary (Navy Blue):** `#1B365D` — Used for headings, primary buttons, and deep brand presence.
*   **Secondary (Emerald Green):** `#10B981` — Symbolizes growth and life; used for accent highlights and success states.
*   **Accent (Gold):** `#F59E0B` — Represents excellence and value; used for critical calls to action and spiritual/special highlights.
*   **Background (Warm White):** `#FAFAF9` — A soft, off-white background to reduce eye strain and provide a premium feel.
*   **Foreground (Teal/Slate):** `#1B365D` (Text) — High legibility.

### Typography
The project uses a blend of technical and modern sans-serif fonts:
*   **Headings:** `Orbitron` — A futuristic, geometric sans-serif that gives the project its unique "visionary" feel.
*   **Body:** `Rajdhani` — A technical, squared-off font that complements the heading style while maintaining high readability.
*   **Mono:** Standard system monospace for data labels and tracking text.

### Design Aesthetic: "Visionary Glassmorphism"
The interface relies heavily on layered, semi-transparent elements:
*   **Glass Elements:** `bg-white/40 backdrop-blur-xl border-white/50`
*   **Glows:** Large animated background orbs (`primary/15` and `secondary/15`) with `blur-[140px]`.
*   **Shadows:** Deep, soft shadows (`shadow-xl`, `shadow-2xl`) to create depth.
*   **Rounding:** Aggressive rounding (`rounded-2xl`, `rounded-3xl`, `rounded-[2.5rem]`) for a soft, friendly yet modern look.

---

## ✨ Motion & Interaction

The project uses `framer-motion` for fluid, organic transitions:
*   **Fade Transitions:** Staggered entries for sections to create a sense of discovery.
*   **Pulse Glows:** Subtle brightness and shadow cycling on brand elements.
*   **Float Animations:** Gentle Y-axis movement for hero elements.
*   **Micro-interactions:** Buttons and cards scale slightly (`hover:scale-105`) and shift shadows on hover.

---

## 🛠️ Technical Stack

### Core Framework
*   **Next.js 16 (App Router):** Leveraging the latest React features and server-side optimizations.
*   **React 19:** Utilizing modern hooks and concurrent rendering.
*   **TypeScript:** Type-safe development across the entire codebase.

### Styling & UI
*   **Tailwind CSS:** For rapid, utility-first styling.
*   **Lucide React:** A comprehensive set of clean, consistent icons.
*   **Radix UI:** Headless components (via shadcn/ui patterns) for accessible primitives like Slotted components.

### Backend & Database
*   **Supabase:**
    *   **PostgreSQL:** Relational database for structured data.
    *   **Auth:** Built-in authentication (roles like student, parent, admin).
    *   **Storage:** For student photos and document uploads.

---

## 🏗️ Architecture

### Directory Structure
*   `src/app`: Routes and page layouts (File-based routing).
*   `src/components`:
    *   `ui/`: Base primitives (Buttons, Cards, Modals).
    *   `layout/`: Global structure (Container, Sidebar, Footer).
    *   `animations/`: Reusable Framer Motion wrappers.
    *   `brand/`: Logo and identity components.
*   `src/lib`: Core utilities like the Supabase client and `cn` (class merging) tool.
*   `src/types`: Centralized TypeScript definitions.

### Database Schema (Supabase)
Key tables include:
*   `contact_messages`: Capturing community inquiries.
*   `admission_inquiries`: Managing the student application pipeline.
*   *Extended modules for Roles, Orders, Production, and Stock management.*

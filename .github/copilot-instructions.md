# Project Context: Universal Resume (React/Vite)

## Overview
This is a modern, responsive, and print-optimized Resume/CV application built with **React**, **Vite**, and **Tailwind CSS**. It was originally migrated from an HTML/Tailwind template into a structured React application.

## Key Features & Architecture
- **Data-Driven Approach:** All dynamic data (About Me, Experience, Education, Projects, Skills, Certificates) is sourced from `src/data/resume.json`. This makes updating content extremely straightforward without needing to edit React components directly.
- **Print Optimization:** The layout is specifically tailored for printing on A4 paper using Tailwind's `print:` utility variants. The CSS (`tailwind.config.js` and `src/index.css`) includes sophisticated typography settings, custom gray scales mapped for optimal contrast (WCAG AA accessibility compliant), and multi-column CSS handling.
- **Component Structure:**
  - `src/components/Resume.jsx`: The main orchestrator that imports `resume.json` and renders the structural sections.
  - `src/components/Header.jsx`: Top section with Avatar (pulled from Gravatar) and Contact information.
  - `src/components/Section.jsx`: Wrapper for all major resume categories, including an optional `icon` prop.
  - `src/components/Icons.jsx`: Clean, inline SVG exports used as section headers.
  - `src/components/PrintButton.jsx`: A floating action button (FAB) that triggers the browser's print dialog, intelligently hiding itself during actual printing.
  - Component Items (`ExperienceItem`, `EducationItem`, `ProjectItem`, `CertificateItem`, `SkillGroup`): Reusable UI building blocks for individual timeline or list elements. 

## Layout Details
The layout features a single-column layout for major chronological sections (`ABOUT ME`, `EXPERIENCE`, `EDUCATION`, `CERTIFICATES`) which are visually partitioned by a custom `Divider.jsx`. The bottom sections (`PROJECTS`, `SKILLS`) utilize a responsive two-column grid using standard CSS column properties (`col-count-2`).

## SEO & Crawling
The application is intentionally marked with `<meta name="robots" content="noindex, nofollow" />` in `index.html` and a strict `/public/robots.txt` blocking all crawlers.

## Styling & Accessibility
Custom color palette definitions live in `tailwind.config.js`. The `gray-550` and `gray-650` shades have been specifically darkened to adhere to the 4.5:1 contrast ratio against white backgrounds. Typography makes use of the `Montserrat` font family. Periods / dates are styled with an elegant cursive/italic appearance.

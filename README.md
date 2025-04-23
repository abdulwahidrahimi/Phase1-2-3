/// File: /README.md
# CPAN144 Group Project

##  Phase 1 – Project Setup

**Overview:** Establish foundational structure using Next.js with classic routing, state, and simple components.

### ✔ Features:
- `pages/` based routing (`index`, `about`, `contact`)
- `Navbar`, `Footer`, and `MainContent` components
- Interactive counter on homepage
- Basic responsive layout and CSS styling

###  Structure Highlights:
```
components/
  ├── Navbar.js
  ├── Footer.js
  └── MainContent.js
pages/
  ├── index.js
  ├── about.js
  └── contact.js
```

---

##  Phase 2 – Component Modularity & Dynamic Routing

**Overview:** Enhance layout, modularity, and add dynamic routing. Migrate inline styles to CSS Modules.

### ✔ Features:
- `Layout.js` wraps all pages for consistent structure
- Split `MainContent` into `Welcome` and `Counter`
- CSS Modules for responsive design
- Dynamic route: `/user/[id].js`
- Placeholder API: `lib/api.js`

###  New Components:
- `Layout.js`, `Welcome.js`, `Counter.js`

###  New Pages:
- `user/[id].js` for dynamic routing

###  Structure Highlights:
```
components/
  ├── Layout.js
  ├── Welcome.js
  └── Counter.js
pages/
  ├── user/
  │   └── [id].js
lib/
  └── api.js
styles/
  ├── globals.css
  ├── Layout.module.css
  └── Counter.module.css
```

---

##  To Run Locally:
```bash
npm install
npm run dev
```
Visit: `http://localhost:3000`

---

##  Screenshots
Include screenshots of:
- Homepage with counter
- About page with toggle
- Contact form
- Dynamic user page `/user/123`


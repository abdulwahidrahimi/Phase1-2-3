# CPAN144 Final Presentation Notes

## Project Objective
- Build a responsive web application using **Next.js**
- Demonstrate key concepts: routing, component structure, state management
- Apply performance optimizations and polish for production-readiness

## Main Features
- 3 primary pages: **Home**, **About**, **Contact**
- Dynamic routing: `/user/[id]`
- Reusable layout and modular components
- Interactive features using React state

## Optimization Highlights
- Lazy loading with `next/dynamic` (e.g., `Counter` component)
- `useMemo` for efficient recalculations
- SEO enhancements using `<Head>` component
- Custom 404 error page with user-friendly messaging

## Challenges Faced
- Managing router conflicts between `pages/` and `app/` structure
- Dynamic routing with `useRouter()`
- State lifting and modularization of shared components

## Screenshots
Add screenshots to `public/screens/` folder showing:
- Homepage with Welcome + Counter
- About page with toggle
- Contact page with form
- Dynamic route `/user/[id]`
- 404 error page

##  Demo Instructions
```bash
npm install
npm run dev

## For more Information please visit my Recorded Video on PPT I have uploaded into Blackboard submissions section thank you.
Abdul Wahid
N01597744

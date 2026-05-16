# Frontend Task

This is a frontend project built with **Next.js**, **TypeScript**, and **Tailwind CSS**, consisting of two tasks:

- **Task 1** — UI replication from Figma
- **Task 2** — User & Posts Dashboard using a public API

---

## Tech Stack

| Tool                    | Purpose          |
| ----------------------- | ---------------- |
| Next.js 14 (App Router) | Framework        |
| TypeScript              | Type safety      |
| Tailwind CSS            | Styling          |
| Zustand                 | State management |
| Zod                     | Form validation  |
| Framer Motion           | Animations       |
| shadcn/ui               | UI components    |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pramms19/frontend-task.git
cd frontend-task
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Task 1 — UI Development from Figma

### Design 1

- Character illustrations overlapping card edges
- Cards 1 & 2 have a **hover reveal** — slides in from right on hover

### Design 2

- Courses section with a large main card + 2 stat cards
- Cards are **swappable** — click a stat card to swap it into the main slot
- Swap animation powered by **Framer Motion** `layout`
- State managed by **Zustand** (`coursesStore`)

---

## Task 2 — User & Posts Dashboard

### User List Page

- Users fetched server-side via **SSR** (Next.js Server Components)
- Displays name, email, company name, and "View Posts" button
- **Instant search** filters by name or email (client-side, no API call)
- Loading and error states handled

### User Posts Page

- Dynamic route — works for any user ID
- Fetches user info + posts in **parallel** with `Promise.all`
- Merges API posts with locally added posts
- **Add New Post** form with Zod validation
- Local posts saved to **localStorage** and shown with "Added by you" badge
- Loading and error states handled

---

## Author

Pramada Shrestha
[https://github.com/pramms19](https://github.com/pramms19)

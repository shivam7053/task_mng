This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Task Manager App

## Project Overview
This Task Manager App is built using React and Next.js with server-side rendering (SSR). The app allows users to add, edit, delete, and mark tasks as completed. It dynamically sorts tasks by priority and includes features like responsive design and local storage for task persistence.

## Core Functionalities
1. **Add, Edit, Delete, and Mark Tasks as Completed**: Users can manage tasks, each having a title, description, and priority (high, medium, low).
2. **Dynamic Sorting**: Tasks are sorted by priority, with completed tasks appearing at the bottom.
3. **Server-Side Rendering (SSR)**: Initial task loading is handled using Next.js's `getServerSideProps`.
4. **Responsive Design**: Basic responsive design is implemented using CSS to ensure the app is user-friendly across different devices.
5. **Search Bar**: Users can filter tasks by title or description.
6. **Local Storage**: Tasks persist between page reloads using local storage.

## Project Setup
### Requirements
- Node.js
- npm

### Installation
1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd task-manager

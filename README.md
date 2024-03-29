This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# COMPLETE
This was the 2024 iteration of the MTRP website of Integration, ISI Kolkata. If you need help understanding the codebase contact Himadri Mandal, who was a B1 in the AY 2023-2024. Accordingly, calculate which year he'll be in (assuming he doesn't fail, lol).

# What has been done?
- I have made registration pages (which emulate google forms), but they have not been used in this iteration. Could be taken up in future iterations.
- Used Next.js + Tailwind to create the website. 
- Create the mobile-first landing page.
    - The background (as shown in the figma file) of the landing page has been implemented)
    - How does the file structure work? I have a `_components` folder in `app` with `header.tsx` and `footer.tsx`, which was used to modularize those components through the website. I have ensured that the `header.tsx` and `footer.tsx` work for both mobile and PC, but some cross checking might be required. 
    - There is a `declarations.tsx` file in the `_components` folder which aimed to abstract-ize the many file-paths used throughout the project. However, I got hasty and was not able to get done with this. Someone else could do this (-  quirtt) 
- Have created pc-first registration pages.
    - If the files under `register` were intended to be not used then rename `register` to `_register`. The `_` at the start ensures the user is unable to call the files under it. It is a feature of Next.js called file-sytem routing. 
- All the files that need to be accessed by a page needs to be (and has been) kept under the `public` folder. 
- The debugger of node shows me errors which I have absolutely no clue to fix. Please help me fix that. 

So, for example, open [https://localhost:3000/register/personal-details](https://localhost:3000/register/personal-details) for personal-details page.


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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

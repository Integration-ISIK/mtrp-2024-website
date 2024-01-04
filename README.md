This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# INCOMPLETE

# What has been done? What is left?
- Used Next.js + Tailwind to create the website. 
- Create the mobile-first landing page, but have not ensured that it works for the laptop/desktop aspect ratios as well.
    - The background (as shown in the figma file) of the landing page has not been implemented because I am dumb and was not able to figure focus out. (Confession: I didn't try.)
    - How does the file structure work? I have a `_components` folder in `app` with `header.tsx` and `footer.tsx`, which was used to modularize those components through the website. I have ensured that the `header.tsx` and `footer.tsx` work for both mobile and PC, but some cross checking might be required. 
    - There is a `declarations.tsx` file in the `_components` folder which aimed to abstract-ize the many file-paths used throughout the project. However, I got hasty and was not able to get done with this. Someone else could do this (-  quirtt) 
- Have created pc-first registration pages.
    - If the files under `register` were intended to be not used then rename `register` to `_register`. The `_` at the start ensures the user is unable to call the files under it. It is a feature of Next.js called file-sytem routing. 
- All the files that need to be accessed by a page needs to be (and has been) kept under the `public` folder. 
- The debugger of node shows me errors which I have absolutely no clue to fix. Please help me fix that. 

## SiteMap
- / (mobile-first)
    - register (PC-first)
        - personal-detals
        - exam-details
        - payment

So, for example, open [https://localhost:3000/register/personal-details](https://localhost:3000/register/personal-details) for personal-details page.

## TODO
- ~~Add main page~~
- ~~Get better fonts~~
- Ensure everything works for other aspect ratios.  
- Ensure main-page works for pc-first as well.
- More styling (?)

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
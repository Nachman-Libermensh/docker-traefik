This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to GitHub Pages

הפרויקט מוגדר לדיפלוי אוטומטי ל-GitHub Pages באמצעות GitHub Actions.

### הגדרות נדרשות:

1. **הפעלת GitHub Pages בריפוזיטורי:**

   - עבור להגדרות הריפוזיטורי: `Settings` > `Pages`
   - תחת `Source`, בחר `GitHub Actions`

2. **הגדרת basePath (אם נדרש):**

   - אם הריפוזיטורי לא נמצא ב-`username.github.io`, פתח את ההערה ב-`next.config.ts`:

   ```typescript
   basePath: '/docker-traefik',
   ```

3. **Push לענף הראשי:**

   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

4. **הדיפלוי יתבצע אוטומטית** כל פעם שתעשה push לענף `main`.

האתר יהיה זמין ב: `https://<username>.github.io/docker-traefik`

### Build מקומי

לבניית הפרויקט באופן מקומי:

```bash
npm run build
```

הקבצים הסטטיים יווצרו בתיקייה `out/`.

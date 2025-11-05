# הוראות דיפלוי ל-GitHub Pages

## מה נעשה?

1. ✅ הוגדר Static Export ב-`next.config.ts`
2. ✅ נוצר GitHub Actions workflow ב-`.github/workflows/deploy.yml`
3. ✅ נוסף קובץ `.nojekyll` למניעת בעיות עם Jekyll
4. ✅ הוגדר `images.unoptimized: true` ל-Static Export

## צעדים להפעלה:

### 1. הפעל GitHub Pages בריפוזיטורי

1. עבור ל-https://github.com/Nachman-Libermensh/docker-traefik/settings/pages
2. תחת **"Build and deployment"**:
   - **Source**: בחר `GitHub Actions`
   - (לא צריך לבחור branch, Actions יטפל בזה)

### 2. בדוק את שם הריפוזיטורי

- אם הריפוזיטורי הוא `https://github.com/Nachman-Libermensh/docker-traefik`
- והאתר יהיה ב-`https://nachman-libermensh.github.io/docker-traefik`
- אז **פתח את ההערה** ב-`next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/docker-traefik", // <-- הסר את // מההערה
  images: {
    unoptimized: true,
  },
};
```

⚠️ **חשוב**: אם הריפו הוא `username.github.io` (ללא שם נוסף), **אל תפעיל** את ה-basePath!

### 3. Commit ו-Push לענף הראשי

```bash
git add .
git commit -m "Setup GitHub Pages with Static Export"
git push origin main
```

אם הענף הראשי שלך נקרא `master` במקום `main`, תצטרך לערוך את `.github/workflows/deploy.yml`:

```yaml
on:
  push:
    branches:
      - master # שנה מ-main ל-master
```

### 4. עקוב אחרי הדיפלוי

1. עבור ל-https://github.com/Nachman-Libermensh/docker-traefik/actions
2. תראה את ה-workflow רץ
3. אחרי שיסתיים בהצלחה (סימן ✅ ירוק), האתר יהיה זמין

### 5. גש לאתר

האתר יהיה זמין ב:

- `https://nachman-libermensh.github.io/docker-traefik`

## פתרון בעיות נפוצות:

### הדף לא נטען / 404

- ודא שפעלת את GitHub Pages בהגדרות
- ודא שה-`basePath` מוגדר נכון (או מוסר אם לא נדרש)
- ודא שהענף הנכון מוגדר ב-workflow

### הסטיילינג לא עובד

- ודא שה-`basePath` תואם לשם הריפוזיטורי
- בדוק את ה-Console בדפדפן לשגיאות 404

### Actions לא רצים

- ודא שיש לך הרשאות ל-Actions בריפוזיטורי
- עבור ל-`Settings` > `Actions` > `General` וודא ש-Actions מופעל

## בניה מקומית לבדיקה:

```bash
npm run build
```

הקבצים יווצרו ב-`out/` ותוכל לפתוח את `out/index.html` בדפדפן לבדיקה.

---

**זהו זה! האתר מוכן לדיפלוי אוטומטי ל-GitHub Pages** 🚀

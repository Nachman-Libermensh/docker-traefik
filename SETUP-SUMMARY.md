# סיכום השינויים לדיפלוי GitHub Pages

## קבצים שנוצרו/שונו:

### 1. `.github/workflows/deploy.yml` (חדש)

קובץ GitHub Actions שמבצע:

- Build של הפרויקט
- העלאה ל-GitHub Pages
- דיפלוי אוטומטי כל push לענף main

### 2. `next.config.ts` (עודכן)

נוספו הגדרות:

- `images.unoptimized: true` - נדרש ל-static export
- הערה ל-`basePath` - יש לפתוח אותה אם הריפו לא ב-root

### 3. `public/.nojekyll` (חדש)

מונע מ-GitHub Pages להתעלם מקבצים שמתחילים ב-underscore

### 4. `DEPLOYMENT.md` (חדש)

מדריך מפורט בעברית לדיפלוי

### 5. `README.md` (עודכן)

נוסף סעיף על דיפלוי ל-GitHub Pages

## מה עוד צריך לעשות?

### שלב 1: בחר את הענף הנכון

בדוק את שם הענף הראשי שלך:

```powershell
git branch
```

אם הענף נקרא `master` במקום `main`, ערוך את `.github/workflows/deploy.yml`:

- שנה את `branches: - main` ל-`branches: - master`

### שלב 2: הפעל את basePath (אם נדרש)

אם האתר יהיה ב-`https://username.github.io/docker-traefik`:

1. פתח את `next.config.ts`
2. הסר את `//` מההערה של `basePath: '/docker-traefik',`

אם האתר יהיה ב-`https://username.github.io` (ללא שם ריפו):

- אל תשנה כלום, השאר את basePath מוערת

### שלב 3: Commit ו-Push

```powershell
git add .
git commit -m "Setup GitHub Pages deployment with static export"
git push origin <branch-name>
```

### שלב 4: הפעל GitHub Pages

1. לך ל-https://github.com/Nachman-Libermensh/docker-traefik/settings/pages
2. תחת "Source" בחר: **GitHub Actions**
3. שמור

### שלב 5: בדוק את הדיפלוי

1. לך ל-https://github.com/Nachman-Libermensh/docker-traefik/actions
2. תראה את ה-workflow רץ
3. המתן לסיום (כ-2-3 דקות)
4. גש לאתר ב-URL שמוצג

## פתרון בעיות:

### אם ה-workflow נכשל:

1. בדוק את ה-logs ב-Actions
2. ודא שה-dependencies מותקנים נכון
3. ודא שה-build עובד מקומית: `npm run build`

### אם האתר לא נטען:

1. בדוק שה-basePath נכון
2. בדוק ב-DevTools Console לשגיאות 404
3. ודא שה-GitHub Pages מופעל ב-Settings

---

**כל הקבצים מוכנים! כעת רק צריך לבצע commit, push ולהפעיל GitHub Pages בהגדרות** ✅

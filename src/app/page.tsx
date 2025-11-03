import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <main className="container mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold tracking-tight">ברוכים הבאים</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            זוהי תבנית התחלתית לפרויקטים חדשים עם Next.js ו-shadcn/ui
          </p>
          <div className="flex gap-2 justify-center">
            <Badge>Next.js 16</Badge>
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="outline">TypeScript</Badge>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>תכונות</CardTitle>
              <CardDescription>
                הפרויקט מגיע עם כל מה שצריך להתחיל
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>מערכת עיצוב מלאה עם shadcn/ui</li>
                <li>TypeScript מוגדר מראש</li>
                <li>Tailwind CSS</li>
                <li>מבנה תיקיות מאורגן</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>התחלה מהירה</CardTitle>
              <CardDescription>כל מה שצריך כדי להתחיל לעבוד</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                ערוך את הקובץ{" "}
                <code className="bg-muted px-1 py-0.5 rounded">
                  src/app/page.tsx
                </code>{" "}
                כדי להתחיל
              </p>
              <div className="flex gap-2">
                <Button>התחל עכשיו</Button>
                <Button variant="outline">מסמכים</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>קומפוננטות</CardTitle>
              <CardDescription>ספריית קומפוננטות עשירה</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                כל הקומפוננטות זמינות בתיקיית components/ui
              </p>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="secondary">
                  כפתור
                </Button>
                <Button size="sm" variant="outline">
                  כרטיס
                </Button>
                <Button size="sm" variant="ghost">
                  טופס
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>מוכן לשימוש</CardTitle>
              <CardDescription>הכל מוגדר ומוכן לפיתוח</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                התחל לבנות את האפליקציה שלך עם כלים מודרניים ומבנה מאורגן
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <Button variant="link" className="text-muted-foreground">
            בנוי עם ❤️ באמצעות Next.js
          </Button>
        </div>
      </main>
    </div>
  );
}

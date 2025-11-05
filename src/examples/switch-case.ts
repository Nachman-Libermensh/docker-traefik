import { CodeExample, ExecutionStep, Variable } from "@/types/code-demo";

export const switchCaseExample: CodeExample = {
  id: "switch-case",
  title: "Switch-Case - בחירה מתוך אפשרויות",
  description:
    "תוכנית שמדגימה שימוש ב-switch-case לבחירה בין מספר אפשרויות. דוגמה: מחשבון פשוט",
  difficulty: "intermediate",
  concepts: ["switch-case", "conditions", "arithmetic", "input", "output"],
  source: "built-in",
  inputs: [
    {
      key: "num1",
      label: "מספר ראשון",
      type: "number",
      defaultValue: "10",
      placeholder: "לדוגמה: 15",
    },
    {
      key: "num2",
      label: "מספר שני",
      type: "number",
      defaultValue: "5",
      placeholder: "לדוגמה: 3",
    },
    {
      key: "operation",
      label: "פעולה (+, -, *, /)",
      type: "text",
      defaultValue: "+",
      placeholder: "בחר: +, -, *, /",
      helperText: "בחר אחת מהפעולות: +, -, *, /",
    },
  ],
  code: [
    {
      lineNumber: 1,
      code: "#include <stdio.h>",
      explanation: "ספריית קלט/פלט סטנדרטית",
    },
    {
      lineNumber: 2,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 3,
      code: "int main() {",
      explanation: "פונקציית main",
    },
    {
      lineNumber: 4,
      code: "    float num1, num2, result;",
      explanation: "משתנים למספרים ולתוצאה",
      category: "declaration",
    },
    {
      lineNumber: 5,
      code: "    char operation;",
      explanation: "משתנה לסימן הפעולה",
      category: "declaration",
    },
    {
      lineNumber: 6,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 7,
      code: '    printf("הזן מספר ראשון: ");',
      explanation: "בקשה למספר ראשון",
      category: "output",
    },
    {
      lineNumber: 8,
      code: '    scanf("%f", &num1);',
      explanation: "קליטת מספר ראשון",
      category: "input",
    },
    {
      lineNumber: 9,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 10,
      code: '    printf("הזן פעולה (+,-,*,/): ");',
      explanation: "בקשה לפעולה",
      category: "output",
    },
    {
      lineNumber: 11,
      code: '    scanf(" %c", &operation);',
      explanation: "קליטת סימן הפעולה",
      category: "input",
    },
    {
      lineNumber: 12,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 13,
      code: '    printf("הזן מספר שני: ");',
      explanation: "בקשה למספר שני",
      category: "output",
    },
    {
      lineNumber: 14,
      code: '    scanf("%f", &num2);',
      explanation: "קליטת מספר שני",
      category: "input",
    },
    {
      lineNumber: 15,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 16,
      code: "    switch (operation) {",
      explanation: "תחילת switch - בדיקת ערך operation",
      category: "condition",
    },
    {
      lineNumber: 17,
      code: "        case '+':",
      explanation: "מקרה 1: אם operation הוא '+'",
      category: "condition",
    },
    {
      lineNumber: 18,
      code: "            result = num1 + num2;",
      explanation: "חיבור שני המספרים",
      category: "calculation",
    },
    {
      lineNumber: 19,
      code: "            break;",
      explanation: "יציאה מה-switch (חשוב!)",
      category: "condition",
    },
    {
      lineNumber: 20,
      code: "        case '-':",
      explanation: "מקרה 2: אם operation הוא '-'",
      category: "condition",
    },
    {
      lineNumber: 21,
      code: "            result = num1 - num2;",
      explanation: "חיסור המספר השני מהראשון",
      category: "calculation",
    },
    {
      lineNumber: 22,
      code: "            break;",
      explanation: "יציאה מה-switch",
      category: "condition",
    },
    {
      lineNumber: 23,
      code: "        case '*':",
      explanation: "מקרה 3: אם operation הוא '*'",
      category: "condition",
    },
    {
      lineNumber: 24,
      code: "            result = num1 * num2;",
      explanation: "כפל שני המספרים",
      category: "calculation",
    },
    {
      lineNumber: 25,
      code: "            break;",
      explanation: "יציאה מה-switch",
      category: "condition",
    },
    {
      lineNumber: 26,
      code: "        case '/':",
      explanation: "מקרה 4: אם operation הוא '/'",
      category: "condition",
    },
    {
      lineNumber: 27,
      code: "            if (num2 != 0)",
      explanation: "בדיקה: לא ניתן לחלק באפס!",
      category: "condition",
    },
    {
      lineNumber: 28,
      code: "                result = num1 / num2;",
      explanation: "חילוק המספר הראשון בשני",
      category: "calculation",
    },
    {
      lineNumber: 29,
      code: "            else",
      explanation: "במקרה של חלוקה באפס",
      category: "condition",
    },
    {
      lineNumber: 30,
      code: '                printf("שגיאה: חלוקה באפס\\n");',
      explanation: "הדפסת הודעת שגיאה",
      category: "output",
    },
    {
      lineNumber: 31,
      code: "            break;",
      explanation: "יציאה מה-switch",
      category: "condition",
    },
    {
      lineNumber: 32,
      code: "        default:",
      explanation: "default: כל מקרה אחר (פעולה לא חוקית)",
      category: "condition",
    },
    {
      lineNumber: 33,
      code: '            printf("פעולה לא חוקית\\n");',
      explanation: "הודעת שגיאה לפעולה לא מוכרת",
      category: "output",
    },
    {
      lineNumber: 34,
      code: "            return 1;",
      explanation: "סיום התוכנית עם קוד שגיאה",
    },
    {
      lineNumber: 35,
      code: "    }",
      explanation: "סוף ה-switch",
      category: "condition",
    },
    {
      lineNumber: 36,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 37,
      code: '    printf("%.2f %c %.2f = %.2f\\n", num1, operation, num2, result);',
      explanation: "הדפסת התוצאה",
      category: "output",
    },
    {
      lineNumber: 38,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 39,
      code: "    return 0;",
      explanation: "סיום מוצלח",
    },
    {
      lineNumber: 40,
      code: "}",
      explanation: "סוף פונקציית main",
    },
  ],
  initialVariables: [],
  totalSteps: 50,
  executeStep: (
    stepIndex: number,
    currentVars: Variable[],
    inputs?: Record<string, string | number>
  ): ExecutionStep | undefined => {
    const num1 = Number(inputs?.num1 ?? 10);
    const num2 = Number(inputs?.num2 ?? 5);
    const operation = String(inputs?.operation ?? "+").charAt(0);

    const allSteps: ExecutionStep[] = [];

    // Initial steps
    allSteps.push({
      lineNumber: 3,
      description: "התוכנית מתחילה לרוץ",
      variables: [],
    });

    allSteps.push({
      lineNumber: 4,
      description: "הצהרה על משתנים num1, num2, result",
      variables: [
        { name: "num1", type: "float", value: null },
        { name: "num2", type: "float", value: null },
        { name: "result", type: "float", value: null },
      ],
      highlight: "num1",
    });

    allSteps.push({
      lineNumber: 5,
      description: "הצהרה על משתנה operation",
      variables: [
        { name: "num1", type: "float", value: null },
        { name: "num2", type: "float", value: null },
        { name: "result", type: "float", value: null },
        { name: "operation", type: "char", value: null },
      ],
      highlight: "operation",
    });

    allSteps.push({
      lineNumber: 8,
      description: `קליטת המספר הראשון: ${num1}`,
      variables: [
        { name: "num1", type: "float", value: num1 },
        { name: "num2", type: "float", value: null },
        { name: "result", type: "float", value: null },
        { name: "operation", type: "char", value: null },
      ],
      highlight: "num1",
    });

    allSteps.push({
      lineNumber: 11,
      description: `קליטת הפעולה: '${operation}'`,
      variables: [
        { name: "num1", type: "float", value: num1 },
        { name: "num2", type: "float", value: null },
        { name: "result", type: "float", value: null },
        { name: "operation", type: "char", value: `'${operation}'` },
      ],
      highlight: "operation",
    });

    allSteps.push({
      lineNumber: 14,
      description: `קליטת המספר השני: ${num2}`,
      variables: [
        { name: "num1", type: "float", value: num1 },
        { name: "num2", type: "float", value: num2 },
        { name: "result", type: "float", value: null },
        { name: "operation", type: "char", value: `'${operation}'` },
      ],
      highlight: "num2",
    });

    allSteps.push({
      lineNumber: 16,
      description: `כניסה ל-switch - בדיקת הערך של operation ('${operation}')`,
      variables: [
        { name: "num1", type: "float", value: num1 },
        { name: "num2", type: "float", value: num2 },
        { name: "result", type: "float", value: null },
        { name: "operation", type: "char", value: `'${operation}'` },
      ],
    });

    let result = 0;
    let caseLine = 17;
    let calcLine = 18;
    let errorOccurred = false;

    switch (operation) {
      case "+":
        result = num1 + num2;
        caseLine = 17;
        calcLine = 18;
        allSteps.push({
          lineNumber: 17,
          description: `התאמה למקרה '+' - ביצוע חיבור`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: null },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        allSteps.push({
          lineNumber: 18,
          description: `חישוב: result = ${num1} + ${num2} = ${result}`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: result },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
          highlight: "result",
        });
        allSteps.push({
          lineNumber: 19,
          description: "break - יציאה מה-switch",
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: result },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        break;

      case "-":
        result = num1 - num2;
        caseLine = 20;
        calcLine = 21;
        allSteps.push({
          lineNumber: 20,
          description: `התאמה למקרה '-' - ביצוע חיסור`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: null },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        allSteps.push({
          lineNumber: 21,
          description: `חישוב: result = ${num1} - ${num2} = ${result}`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: result },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
          highlight: "result",
        });
        allSteps.push({
          lineNumber: 22,
          description: "break - יציאה מה-switch",
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: result },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        break;

      case "*":
        result = num1 * num2;
        caseLine = 23;
        calcLine = 24;
        allSteps.push({
          lineNumber: 23,
          description: `התאמה למקרה '*' - ביצוע כפל`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: null },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        allSteps.push({
          lineNumber: 24,
          description: `חישוב: result = ${num1} * ${num2} = ${result}`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: result },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
          highlight: "result",
        });
        allSteps.push({
          lineNumber: 25,
          description: "break - יציאה מה-switch",
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: result },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        break;

      case "/":
        caseLine = 26;
        allSteps.push({
          lineNumber: 26,
          description: `התאמה למקרה '/' - ביצוע חילוק`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: null },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });

        allSteps.push({
          lineNumber: 27,
          description: `בדיקה: ${num2} != 0 - ${
            num2 !== 0 ? "אמת (בטוח לחלק)" : "שקר (חלוקה באפס!)"
          }`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: null },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });

        if (num2 !== 0) {
          result = num1 / num2;
          calcLine = 28;
          allSteps.push({
            lineNumber: 28,
            description: `חישוב: result = ${num1} / ${num2} = ${result.toFixed(
              2
            )}`,
            variables: [
              { name: "num1", type: "float", value: num1 },
              { name: "num2", type: "float", value: num2 },
              { name: "result", type: "float", value: result },
              { name: "operation", type: "char", value: `'${operation}'` },
            ],
            highlight: "result",
          });
        } else {
          errorOccurred = true;
          allSteps.push({
            lineNumber: 30,
            description: "שגיאה! לא ניתן לחלק באפס",
            variables: [
              { name: "num1", type: "float", value: num1 },
              { name: "num2", type: "float", value: num2 },
              { name: "result", type: "float", value: null },
              { name: "operation", type: "char", value: `'${operation}'` },
            ],
            output: "שגיאה: חלוקה באפס",
          });
        }

        allSteps.push({
          lineNumber: 31,
          description: "break - יציאה מה-switch",
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: result },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        break;

      default:
        errorOccurred = true;
        allSteps.push({
          lineNumber: 32,
          description: `default - הפעולה '${operation}' לא מוכרת`,
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: null },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        allSteps.push({
          lineNumber: 33,
          description: "הדפסת הודעת שגיאה",
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: null },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
          output: "פעולה לא חוקית",
        });
        allSteps.push({
          lineNumber: 34,
          description: "סיום התוכנית עם קוד שגיאה",
          variables: [
            { name: "num1", type: "float", value: num1 },
            { name: "num2", type: "float", value: num2 },
            { name: "result", type: "float", value: null },
            { name: "operation", type: "char", value: `'${operation}'` },
          ],
        });
        return allSteps[stepIndex];
    }

    if (!errorOccurred) {
      allSteps.push({
        lineNumber: 37,
        description: "הדפסת התוצאה",
        variables: [
          { name: "num1", type: "float", value: num1 },
          { name: "num2", type: "float", value: num2 },
          { name: "result", type: "float", value: result },
          { name: "operation", type: "char", value: `'${operation}'` },
        ],
        output: `${num1} ${operation} ${num2} = ${result.toFixed(2)}`,
      });

      allSteps.push({
        lineNumber: 39,
        description: "סיום התוכנית בהצלחה",
        variables: [
          { name: "num1", type: "float", value: num1 },
          { name: "num2", type: "float", value: num2 },
          { name: "result", type: "float", value: result },
          { name: "operation", type: "char", value: `'${operation}'` },
        ],
      });
    }

    return allSteps[stepIndex];
  },
};

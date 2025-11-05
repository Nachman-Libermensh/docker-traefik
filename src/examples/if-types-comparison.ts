import { CodeExample, ExecutionStep, Variable } from "@/types/code-demo";

export const ifTypesComparisonExample: CodeExample = {
  id: "if-types-comparison",
  title: "השוואה: IF מקוננים vs IF-ELSE",
  description:
    "תוכנית שמדגימה את ההבדל בין if מקוננים לבין if-else. דוגמה: סיווג ציון לדרגות A-F",
  difficulty: "intermediate",
  concepts: ["conditions", "nested-if", "if-else", "comparison"],
  source: "built-in",
  inputs: [
    {
      key: "grade",
      label: "ציון (0-100)",
      type: "number",
      defaultValue: "85",
      placeholder: "לדוגמה: 75",
      helperText: "הזן ציון בין 0 ל-100",
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
      code: "    int grade;",
      explanation: "משתנה לציון",
      category: "declaration",
    },
    {
      lineNumber: 5,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 6,
      code: '    printf("הזן ציון: ");',
      explanation: "בקשה להזנת ציון",
      category: "output",
    },
    {
      lineNumber: 7,
      code: '    scanf("%d", &grade);',
      explanation: "קליטת הציון",
      category: "input",
    },
    {
      lineNumber: 8,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 9,
      code: "    // שיטה 1: IF-ELSE (מומלץ)",
      explanation: "הערה על השיטה המומלצת",
    },
    {
      lineNumber: 10,
      code: "    if (grade >= 90) {",
      explanation: "תנאי ראשון: בדיקה אם הציון 90 או יותר",
      category: "condition",
    },
    {
      lineNumber: 11,
      code: '        printf("דרגה: A\\n");',
      explanation: "הדפסה אם התנאי התקיים",
      category: "output",
    },
    {
      lineNumber: 12,
      code: "    } else if (grade >= 80) {",
      explanation: "else-if: רק אם התנאי הראשון נכשל",
      category: "condition",
    },
    {
      lineNumber: 13,
      code: '        printf("דרגה: B\\n");',
      explanation: "הדפסה עבור דרגה B",
      category: "output",
    },
    {
      lineNumber: 14,
      code: "    } else if (grade >= 70) {",
      explanation: "בדיקה נוספת רק אם הקודמות נכשלו",
      category: "condition",
    },
    {
      lineNumber: 15,
      code: '        printf("דרגה: C\\n");',
      explanation: "הדפסה עבור דרגה C",
      category: "output",
    },
    {
      lineNumber: 16,
      code: "    } else if (grade >= 60) {",
      explanation: "בדיקה עבור דרגה D",
      category: "condition",
    },
    {
      lineNumber: 17,
      code: '        printf("דרגה: D\\n");',
      explanation: "הדפסה עבור דרגה D",
      category: "output",
    },
    {
      lineNumber: 18,
      code: "    } else {",
      explanation: "כל השאר (מתחת ל-60)",
      category: "condition",
    },
    {
      lineNumber: 19,
      code: '        printf("דרגה: F\\n");',
      explanation: "הדפסה עבור דרגה F",
      category: "output",
    },
    {
      lineNumber: 20,
      code: "    }",
      explanation: "סיום בלוק if-else",
      category: "condition",
    },
    {
      lineNumber: 21,
      code: "",
      explanation: "",
    },
    {
      lineNumber: 22,
      code: "    return 0;",
      explanation: "סיום התוכנית בהצלחה",
    },
    {
      lineNumber: 23,
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
    const grade = Number(inputs?.grade ?? 85);
    const allSteps: ExecutionStep[] = [];

    // Initial steps
    allSteps.push({
      lineNumber: 3,
      description: "התוכנית מתחילה לרוץ",
      variables: [],
    });

    allSteps.push({
      lineNumber: 4,
      description: "הצהרה על משתנה grade",
      variables: [{ name: "grade", type: "int", value: null }],
      highlight: "grade",
    });

    allSteps.push({
      lineNumber: 7,
      description: `קליטת הציון ${grade}`,
      variables: [{ name: "grade", type: "int", value: grade }],
      highlight: "grade",
      inputRequest: {
        key: "grade",
        prompt: "הזן ציון (0-100)",
        label: "ציון",
        type: "number",
        defaultValue: String(grade),
        applyValue: (currentInputs, newValue) => {
          const parsed = Number(newValue);
          return {
            ...currentInputs,
            grade:
              Number.isFinite(parsed) && parsed >= 0 && parsed <= 100
                ? parsed
                : 0,
          };
        },
      },
    });

    // Determine grade letter
    if (grade >= 90) {
      allSteps.push({
        lineNumber: 10,
        description: `בדיקה: ${grade} >= 90 - אמת!`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 11,
        description: `הציון ${grade} מקבל דרגה A`,
        variables: [{ name: "grade", type: "int", value: grade }],
        output: "דרגה: A",
        highlight: "grade",
      });
    } else if (grade >= 80) {
      allSteps.push({
        lineNumber: 10,
        description: `בדיקה: ${grade} >= 90 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 12,
        description: `else-if: בדיקה ${grade} >= 80 - אמת!`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 13,
        description: `הציון ${grade} מקבל דרגה B`,
        variables: [{ name: "grade", type: "int", value: grade }],
        output: "דרגה: B",
        highlight: "grade",
      });
    } else if (grade >= 70) {
      allSteps.push({
        lineNumber: 10,
        description: `בדיקה: ${grade} >= 90 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 12,
        description: `else-if: בדיקה ${grade} >= 80 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 14,
        description: `else-if: בדיקה ${grade} >= 70 - אמת!`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 15,
        description: `הציון ${grade} מקבל דרגה C`,
        variables: [{ name: "grade", type: "int", value: grade }],
        output: "דרגה: C",
        highlight: "grade",
      });
    } else if (grade >= 60) {
      allSteps.push({
        lineNumber: 10,
        description: `בדיקה: ${grade} >= 90 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 12,
        description: `else-if: בדיקה ${grade} >= 80 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 14,
        description: `else-if: בדיקה ${grade} >= 70 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 16,
        description: `else-if: בדיקה ${grade} >= 60 - אמת!`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 17,
        description: `הציון ${grade} מקבל דרגה D`,
        variables: [{ name: "grade", type: "int", value: grade }],
        output: "דרגה: D",
        highlight: "grade",
      });
    } else {
      allSteps.push({
        lineNumber: 10,
        description: `בדיקה: ${grade} >= 90 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 12,
        description: `else-if: בדיקה ${grade} >= 80 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 14,
        description: `else-if: בדיקה ${grade} >= 70 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 16,
        description: `else-if: בדיקה ${grade} >= 60 - שקר`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 18,
        description: `הגענו ל-else - כל התנאים נכשלו`,
        variables: [{ name: "grade", type: "int", value: grade }],
      });

      allSteps.push({
        lineNumber: 19,
        description: `הציון ${grade} מקבל דרגה F`,
        variables: [{ name: "grade", type: "int", value: grade }],
        output: "דרגה: F",
        highlight: "grade",
      });
    }

    allSteps.push({
      lineNumber: 22,
      description: "סיום התוכנית בהצלחה",
      variables: [{ name: "grade", type: "int", value: grade }],
    });

    return allSteps[stepIndex];
  },
};

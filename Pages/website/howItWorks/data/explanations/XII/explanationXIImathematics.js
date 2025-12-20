export const explanations = {
  passageId: "DIFFERENTIAL EQUATIONS",

  explanationsByProfile: {
    student_1: {
      "adapted*explanation": [
        "Look at the equations **(1), (2), and (3)**. They use only **variables** like x and y. There is **no derivative** in them. These are **not differential equations**. Why are they simple equations?",
        "Now see equation **(4)**. It has **x**, **y**, and **dy/dx**. Here **dy/dx** means change of y with respect to x. Because a **derivative** is present, it is a **differential equation**. Why does derivative matter?",
        "So, a **differential equation** is an equation that contains a **derivative**. It shows how one variable **changes** with another. Think of speed showing change of distance. Why study change?",
        "If a differential equation has **one independent variable**, it is called an **ordinary differential equation**. Here, y depends only on x. One x, one y. Like temperature changing with time. Why only one variable?",
        "An example is $2\\left(\\frac{dy}{dx}\\right)\\left(\\frac{dy}{dx}\\right) + y = 0$. It has **dy/dx** and **y**. So it is a **differential equation**. Repeat: derivative present means differential equation.",
        "There are also equations with **more than one independent variable**. These are called **partial differential equations**. But here we study only **ordinary differential equations**. Why focus on basics first?",
      ],
      rich_content: {
        equations: [
          {
            label: "Simple Equations",
            latex: "$x^2 - 3x + 3 = 0,\\; \\sin x + \\cos x = 0,\\; x + y = 7$",
          },
          {
            label: "Differential Equation Example",
            latex: "$x\\frac{dy}{dx} + y = 0$",
          },
          {
            label: "Another Differential Equation",
            latex: "$2\\left(\\frac{dy}{dx}\\right)^2 + y = 0$",
          },
        ],
        tables: [],
      },
      key_points: [
        "Derivative makes an equation differential",
        "dy/dx shows rate of change",
        "One variable gives ordinary type",
        "Here only ordinary equations studied",
      ],
      quick_check: [
        {
          question: "Why is x + y = 7 not a differential equation?",
          answer: "Because it has no derivative.",
        },
        {
          question: "What makes an equation a differential equation?",
          answer: "Presence of a derivative like dy/dx.",
        },
      ],
    },
    student_2: {
      "adapted*explanation": [
        "Let us first look at some equations. The equations $x^2 - 3x + 3 = 0$, $\\sin x + \\cos x = 0$, and $x + y = 7$ contain only variables like x and y. They do not contain any derivatives.",
        "Now consider the equation $x\\frac{dy}{dx} + y = 0$. This equation contains a variable y and also its derivative $\\frac{dy}{dx}$ with respect to x. An equation that includes derivatives of a dependent variable with respect to an independent variable is called a differential equation.",
        "In general, when an equation has one or more derivatives of a dependent variable with respect to an independent variable, it is known as a differential equation. If the derivative is taken with respect to only one independent variable, it is called an ordinary differential equation.",
        "For example, the equation $2\\left(\\frac{dy}{dx}\\right)\\left(\\frac{dy}{dx}\\right) + y = 0$ is also a differential equation. There are equations that involve derivatives with respect to more than one independent variable, called partial differential equations. However, at this level, we study only ordinary differential equations, and we will simply call them differential equations.",
      ],
      rich_content: {
        equations: [
          {
            label: "Examples of equations without derivatives",
            latex:
              "$x^2 - 3x + 3 = 0, \\; \\sin x + \\cos x = 0, \\; x + y = 7$",
          },
          {
            label: "Example of a differential equation",
            latex: "$x\\frac{dy}{dx} + y = 0$",
          },
          {
            label: "Another differential equation",
            latex: "$2\\left(\\frac{dy}{dx}\\right)^2 + y = 0$",
          },
        ],
        tables: [],
      },
      key_points: [
        "Equations without derivatives are not differential equations.",
        "An equation containing derivatives is called a differential equation.",
        "If there is only one independent variable, it is an ordinary differential equation.",
        "At this stage, we study only ordinary differential equations.",
      ],
      quick_check: [
        {
          question: "Which feature makes an equation a differential equation?",
          answer: "The presence of a derivative of a dependent variable.",
        },
      ],
    },
  },
};

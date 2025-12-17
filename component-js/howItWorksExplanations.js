/* =====================================================
   HOW IT WORKS — DEMO EXPLANATIONS (STATIC)
   -----------------------------------------------------
   Purpose:
   - Simulate AI-generated personalized explanations
   - Used only on the "How It Works" demo page
===================================================== */

const explanationData = {
  Physics: {
    "Physics Part-I": {
      "Motion in a Straight Line": {
        "Instantaneous velocity and speed": {
          explanation1: `
            <p>
              Think of instantaneous velocity as how fast something is moving
              at one exact moment in time. For example, when you look at the
              speedometer of a car, it shows your speed at that instant, not
              over a long distance.
            </p>

            <Span class="explain-highlight" data-micro="micro1">
              Mathematically, instantaneous velocity is found by making the
              time interval extremely small.
            </Span>
          `,

          explanation2: `
            <p>
              Instantaneous velocity tells us the velocity of an object at a
              specific instant rather than over a period of time. This idea is
              important when motion is changing continuously.
            </p>

            <Span class="explain-highlight" data-micro="micro2">
              In calculus, this is expressed using the concept of limits.
            </Span>
          `,

          microExplanations: {
            micro1: `
              <p>
                When we say the time interval becomes extremely small, we mean
                we are zooming in closer and closer to a single instant of time.
                This helps us understand motion at that exact moment.
              </p>
            `,

            micro2: `
              <p>
                A limit is a mathematical tool that helps us study what happens
                when a value approaches another value without actually reaching
                it.
              </p>
            `,
          },
        },
      },
    },
  },
};

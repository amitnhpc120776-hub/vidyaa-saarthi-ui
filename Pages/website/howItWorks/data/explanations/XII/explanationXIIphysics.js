export const explanations = {
  passageId: "Electron orbits",

  explanationsByProfile: {
    student_1: {
      "adapted*explanation": [
        "In the **Rutherford model**, an atom has a tiny **positive nucleus** at the centre. **Electrons** move around it in **orbits**. The atom stays **neutral** overall. Think of a stone at centre and beads moving around. Why don’t electrons fly away?",
        "An electron stays in orbit because two forces balance. The **electrostatic force (Fe)** pulls it inward. The **centripetal force (Fc)** keeps circular motion. For a stable orbit, these forces are **equal**. Balance keeps motion steady. Why is balance needed?",
        "So, for a stable orbit in hydrogen, we write **Fe = Fc**. This balance links **orbit radius** and **electron speed**. If speed changes, the radius changes too. Like faster cycling needs a wider turn. Why does speed affect radius?",
        "The electron has **kinetic energy (K)** due to motion. It also has **potential energy (U)** due to attraction to the nucleus. The **negative sign** of U shows attraction toward the nucleus. Like being pulled inward by a rope. Why negative?",
        "The **total energy (E)** equals **K + U** and is **negative**. Negative total energy means the electron is **bound** to the nucleus. If E were positive, it would escape. Like a ball tied vs untied. Why does negative mean bound?",
      ],
      rich_content: {
        equations: [
          {
            label: "Force Balance for Stable Orbit",
            latex: "$F_e = F_c$",
          },
          {
            label: "Total Energy of Electron",
            latex: "$E = K + U$",
          },
        ],
        tables: [],
      },
      key_points: [
        "Atom has nucleus and orbiting electrons",
        "Forces balance keeps orbit stable",
        "Fe equals Fc in stable orbit",
        "Total energy is negative",
        "Negative energy means bound electron",
      ],
      quick_check: [
        {
          question: "Why does an electron stay in orbit?",
          answer: "Because electrostatic and centripetal forces balance.",
        },
        {
          question: "What does negative total energy show?",
          answer: "The electron is bound to the nucleus.",
        },
      ],
    },
    student_2: {
      "adapted*explanation": [
        "According to Rutherford’s nuclear model, an atom has a very small, heavy, and positively charged nucleus at its centre. Electrons move around this nucleus in fixed paths called orbits. The atom as a whole remains electrically neutral.",
        "The electrons are held in their orbits by an electrostatic force of attraction between the negatively charged electrons and the positively charged nucleus. This electrostatic force provides the centripetal force needed to keep the electrons moving in stable circular orbits. For a stable orbit in a hydrogen atom, these two forces are equal, that is $F_e = F_c$.",
        "Using this condition, a relation can be obtained between the radius of the orbit and the speed of the electron. This shows how the motion of the electron depends on how far it is from the nucleus.",
        "An electron in a hydrogen atom has kinetic energy and electrostatic potential energy. The potential energy is negative because the force between the electron and the nucleus is attractive and directed toward the nucleus.",
        "The total energy of the electron is the sum of its kinetic and potential energies. This total energy is negative, which means the electron is bound to the nucleus. If the total energy were positive, the electron would not remain in a closed orbit around the nucleus.",
      ],
      rich_content: {
        equations: [
          {
            label: "Condition for stable orbit",
            latex: "$F_e = F_c$",
          },
        ],
        tables: [],
      },
      key_points: [
        "Rutherford’s model describes electrons moving around a central nucleus.",
        "Electrostatic attraction provides the centripetal force for electron motion.",
        "For a stable orbit, electrostatic force equals centripetal force.",
        "Negative total energy shows that the electron is bound to the nucleus.",
      ],
      quick_check: [
        {
          question: "What does negative total energy of an electron indicate?",
          answer: "It indicates that the electron is bound to the nucleus.",
        },
      ],
    },
  },
};

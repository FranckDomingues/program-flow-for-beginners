/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[start] --> B[input]
    B --> C{age >= 21?}
    C --|yes|--> D{license valid?}
    C --|no|--> F[end]
    D --|yes|--> E[valid]
    D --|no|--> F[end]
    E --> F[end]
`;

module.exports = answer.trim();
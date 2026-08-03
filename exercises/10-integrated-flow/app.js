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
    B --|valid|--> C[valid]
    B --|invalid|--> D[invalid]
    D --|no|--> B
    C --|yes|--> E[home]
    E --> F[output]
    F --> G[end]
`;

module.exports = answer.trim();
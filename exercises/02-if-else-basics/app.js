/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A[start] --> B[input]
    B --> C{decision}
    C --|yes|--> D[valid]
    C --|no|--> E[invalid]
    D --> F[end]
    E --> F[end]
`;

// Do not modify this
module.exports = answer.trim();
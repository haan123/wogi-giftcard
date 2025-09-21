# Wogi Giftcard

This project implements the **Wogi Giftcard** application with a strong focus on scalability, maintainability, and clean architecture.

## Why This Stack?

- **Nuxt 2**  
  Stable and production-proven framework in the Vue 2 ecosystem.

- **SCSS**  
  SCSS adds a powerful abstraction layer to CSS, enabling variables, mixins, and nesting. This makes the styling layer easier to organize, scale, and maintain.

- **vue-formily (my own library)**  
  Form handling is one of the most repetitive and error-prone parts of frontend development.  
  To solve this, I built **vue-formily**, a form library that I designed and maintain myself.  
  Benefits include:
  - Declarative form building instead of imperative code.  
  - Centralized validation and business logic.  
  - Reusable, composable field components.  
  - Clean separation between schema (what the form should be) and UI (how it is rendered).  

  Using my own library here demonstrates my ability not only to use frameworks, but also to **design abstractions** and **build libraries** that improve developer productivity.

## Design Principles

- **ITCSS + Utility Classes**  
  Following the ITCSS methodology provides a layered, scalable CSS architecture. Combined with utility classes, it ensures styles remain consistent and predictable as the project grows.

- **BEM (Block Element Modifier)**  
  Ensures clear, maintainable class naming conventions, reducing complexity for teams and large codebases.

## Key Takeaways for Interviewers

- I go beyond "just coding features" — I design systems that **scale**.  
- I authored **vue-formily** to abstract complex form logic, proving my capability to build libraries, not just consume them.  
- By applying **ITCSS and BEM**, I proactively address challenges of scaling CSS in large projects.  
- Although this project uses Nuxt 2, the practices are **forward-compatible** with Nuxt 3 and modern Vue ecosystems.

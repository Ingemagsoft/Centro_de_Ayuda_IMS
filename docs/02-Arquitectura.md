# Arquitectura

## Componentes
- **Authoring**: Markdown + assets (PNG/GIF/MP4)
- **Sitio**: MkDocs Material
- **CI/CD**: GitHub Actions → GitHub Pages (o Netlify)
- **Chatbot**: Chatbase (ingesta de Markdown + metadatos)

## Flujo (alto nivel)

```mermaid
graph LR
A[Autoría: Markdown + assets] --> B[Repo GitHub]
B --> C[GitHub Actions: mkdocs build]
C --> D[Sitio estático publicado]
B --> E[Export script a Chatbase]
D --> U[Usuarios finales]
E --> Bot[Chatbot (Chatbase)]
# Portfólio — Geovane Junior

Portfólio pessoal desenvolvido em **Angular 17** para apresentar meus projetos, habilidades e informações de contato a recrutadores e empresas.

[![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![CSS3](https://img.shields.io/badge/CSS3-Mobile--First-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

## Sobre o projeto

Portfólio single-page com tema dark, sidebar fixa no desktop e menu hamburguer responsivo no mobile. As páginas cobrem apresentação pessoal, habilidades técnicas, projetos reais e formulário de contato funcional.

**Páginas:**
- **Home** — apresentação com nome, cargo e botão de download do currículo
- **Sobre** — descrição, cards de especialidades (Back-end / Front-end / FullStack) e tecnologias dominadas
- **Projetos** — carousel de projetos com links diretos para o GitHub
- **Contato** — formulário com validação e rate-limit de 5 minutos entre envios

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Framework | Angular 17 (Standalone Components) |
| Linguagem | TypeScript 5.3 |
| Estilização | CSS3 puro — mobile-first |
| Tipografia | Orbitron (display) · Plus Jakarta Sans (corpo) |
| Formulários | Angular Reactive Forms |
| Roteamento | Angular Router |
| HTTP | HttpClient |

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm 9+

```bash
# 1. Clone o repositório
git clone https://github.com/Geovanej7/Angular_MeuPortifolio.git
cd Angular_MeuPortifolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
# Acesse: http://localhost:4200
```

**Build de produção:**
```bash
npm run build
# Artefatos gerados em: dist/portfolio-geo/
```

---

## Estrutura do projeto

```
src/
├── app/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── menu/           # Navbar (desktop sidebar + mobile hamburguer)
│   │   ├── carousel/       # Carousel de projetos com auto-play
│   │   ├── card/           # Card individual de projeto
│   │   ├── contact/        # Formulário de contato com validação
│   │   ├── footer/         # Links de redes sociais
│   │   ├── profile-img/    # Foto de perfil
│   │   ├── title/          # Componente de título da home
│   │   └── botton-cv/      # Botão de download do currículo
│   ├── pages/              # Páginas roteadas
│   │   ├── home-page/
│   │   ├── sobre-page/
│   │   ├── projetos-page/
│   │   └── contato-page/
│   ├── services/           # Serviços (envio de formulário)
│   ├── app.routes.ts       # Definição de rotas
│   └── app.config.ts       # Configuração da aplicação
└── assets/
    ├── img/                # Imagens e ícone
    └── Curriculo_GeovaneJunior_FullStack.pdf
```

---

## Destaques técnicos

- **Mobile-first**: CSS base para mobile, sobrescrito com `min-width` para desktop — sem layout quebrado em nenhum breakpoint
- **Acessibilidade (WCAG 2.2)**: skip-link, `aria-expanded`, `aria-current="page"`, `role="alert"` nos erros do formulário, labels visíveis, `prefers-reduced-motion`
- **SEO**: `<meta description>`, Open Graph, Twitter Card e dados estruturados `schema.org/Person`
- **Sem memory leak**: `setInterval` do carousel é limpo via `OnDestroy`
- **HTML semântico**: `<nav>`, `<main>`, `<header>`, `<footer>` com IDs e roles adequados

---

## Contato

Aberto a oportunidades — sinta-se à vontade para entrar em contato!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Geovane_Junior-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/geovane-junior-95a97328b/)
[![GitHub](https://img.shields.io/badge/GitHub-Geovanej7-181717?style=flat&logo=github&logoColor=white)](https://github.com/Geovanej7)
[![Instagram](https://img.shields.io/badge/Instagram-geo.dev7-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/geo.dev7/)

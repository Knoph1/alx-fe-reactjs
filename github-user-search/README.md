# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
---  

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---  
## Project structure
```
github-user-search/
│── src/
│   ├── components/       # Reusable React components (SearchBar, UserCard, etc.)
│   |   ├── Search.jsx
│   ├── services/         # API call logic (githubApi.js)
│   |   ├── githubService.js
│   ├── App.jsx           # Main app entry
│   ├── main.jsx          # React root render
│   └── index.css         # Global styles (Tailwind setup will also go here)
│── public/               # Static assets
│── .env                  # Environment variables (e.g., API keys if needed)
│── package.json
│── vite.config.js
```

---  
&copy; September 15, 2025 | *Developed by:* **Knoph O. Ayieko** | *Courtesy of* **ALX Africa** - ALX *Frond-End Web Development* Program.

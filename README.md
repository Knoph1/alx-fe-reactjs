# GitHub Bug Bounty Project

Welcome to the **GitHub Bug Bounty Project** repository!  
This project is designed to simulate a real-world web application where developers, security researchers, and ethical hackers can practice identifying and reporting security vulnerabilities.

---

## 🚀 Project Overview

The goal of this repository is to:
- Provide a **deliberately vulnerable web application** for bug bounty practice.
- Help learners understand **common security flaws** in modern web apps.
- Simulate **real-world bug bounty scenarios** in a safe and controlled environment.

This project includes:
- A **React.js front-end** (RAECT focus).
- A **Node.js/Express.js back-end API**.
- **MongoDB** database integration.
- Vulnerable endpoints for practice (SQLi, XSS, CSRF, Auth bypass, etc.).

---

## 📂 Repository Structure

```bash
.github-bug-bounty/
│── backend/              # Node.js + Express API (intentionally vulnerable)
│── frontend/             # React front-end (simulates a real app)
│── docs/                 # Documentation and vulnerability guides
│── .github/              # GitHub workflows, FUNDING.yml, SECURITY.md, etc.
│── README.md             # Project introduction (this file)
│── LICENSE               # Open-source license
│── CONTRIBUTING.md       # Contribution guidelines
```

---

## ⚠️ Disclaimer

This repository is created **for educational purposes only**.  
Do not deploy it on a production server.  
All vulnerabilities are intentional and must be tested in a **safe local environment**.

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Knoph1/github-bug-bounty.git
cd github-bug-bounty
```

### 2️⃣ Install dependencies

- Backend:
```bash
cd backend
npm install
```

- Frontend:
```bash
cd frontend
npm install
```

### 3️⃣ Run the project
- Start backend server:
```bash
cd backend
npm start
```

- Start frontend server:
```bash
cd frontend
npm start
```

By default:
- Backend runs on: `http://localhost:5000`
- Frontend runs on: `http://localhost:3000`

---

## 🔥 Features & Vulnerabilities

This app contains deliberately insecure implementations such as:
- SQL Injection (SQLi)
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Broken Authentication & Session Management
- Insecure Direct Object References (IDOR)
- Security Misconfigurations

> These vulnerabilities are included **for practice purposes only**.

---

## 🤝 Contribution Guidelines

We welcome contributions from the community!  
Before submitting a PR:
1. Fork the repository.
2. Create a new branch.
3. Document your changes in `docs/`.
4. Submit a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## 💡 Funding & Sponsorship

This project is community-driven.  
You can support development via GitHub Sponsors or other funding platforms.  
See [.github/FUNDING.yml](.github/FUNDING.yml) for more info.

---

## 📜 License

This project is licensed under the **MIT License**.  
See [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

**Knoph Oluoch Ayieko**  
- 🌐 Portfolio: [knoph.dev](https://knoph.dev)  
- 💼 LinkedIn: [Knoph Ayieko](https://linkedin.com/in/knoph-ayieko)  
- 🐙 GitHub: [Knoph1](https://github.com/Knoph1)  
- ✉️ Email: knophayieko@gmail.com  

---

### 🎯 Final Note
This repo is meant to **train ethical hackers and developers** to identify, exploit, and patch vulnerabilities in real-world systems.  
Always use this project responsibly and within legal boundaries.

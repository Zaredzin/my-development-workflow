# DEPLOYMENT PROCESS

## 🧩 Introduction
This document explains how to clone, run, and test the Login Validation API locally, and the basic branch/PR steps used to deploy changes to `main`. The goal is to ensure tests pass before merging.

---

## ⚙️ Prerequisites
- Node.js v18 or later (check with `node -v`)
- Git installed
- Internet access
- Permissions to create/approve pull requests on the repository

---

## 🪜 Setup and Installation
PowerShell (Windows):
```powershell
# Clone the repository (replace URL if hosted elsewhere)
git clone https://github.com/Zaredzin/my-development-workflow.git
cd my-development-workflow

# Install dependencies
npm install
```

macOS / Linux (bash):
```bash
git clone https://github.com/Zaredzin/my-development-workflow.git
cd my-development-workflow
npm install
```

---

## 🧪 Running Unit Tests
PowerShell:
```powershell
npm test
```

bash:
```bash
npm test
```

Expected output (sample):
```text
PASS tests/login.test.js
✓ should login successfully with valid credentials
✓ should fail with invalid password
✓ should fail if username or password is missing
```

---

## 🚀 Start the Application (local)
PowerShell (default PORT 3000):
```powershell
npm run start
# To override the port on Windows PowerShell:
$env:PORT=3000; npm run start
```

bash:
```bash
PORT=3000 npm run start
```

The server listens on `process.env.PORT || 3000` by default.

---

## 🔁 Branch / PR Deployment Steps
1. Ensure you're on the `develop` branch and up to date:
```powershell
git checkout develop
git pull origin develop
```
2. Install deps and run tests locally:
```powershell
npm install
npm test
```
3. Create a feature branch, commit changes, push, and open a PR from your branch → `develop` (or follow your repo flow).
4. After `develop` is reviewed and merged, open a PR from `develop` → `main` (or rely on your CI/CD promotion process).
5. Ensure CI passes and required approvals are present before merging.
6. Optionally tag a release and push the tag:
```powershell
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

Notes:
- Adjust the branch names if your team uses different names (e.g., `main`/`master` or `release/*`).
- Configure branch protection rules and CI checks in your Git hosting service to enforce testing before merge.

---

## 🧰 Troubleshooting

| Problem | Possible Cause | Solution |
| --- | --- | --- |
| Tests fail | Missing or outdated dependencies | Run `npm install` and re-run `npm test`.
| `jest` fails to parse files | Mixed ESM/CommonJS or missing transform | Ensure project module type is consistent; see repository `package.json` for `type`. Convert files or add Babel/Jest config if you prefer ESM.
| `npm run start` exits with code 1 | Syntax error or missing dependency | Check the server logs printed to console, run `node index.js` directly to see stack trace.
| Port already in use | Another process using the port | Change port: PowerShell `$env:PORT=4000; npm run start` or kill the other process.
| 401 responses in tests | Test credentials mismatch | Verify hardcoded users in `src/routes/login.js` or update tests.

---

If you'd like, I can also add a simple GitHub Actions CI workflow that runs `npm install` and `npm test` on PRs to `develop` and `main`.


# my-development-workflow

# My Development Workflow (GitFlow Demo Project)

This repository demonstrates the use of the **GitFlow branching model** using Git and GitHub.  
It was created as part of a practical assignment to connect theoretical knowledge with real-world version control operations.

---

## Project Overview

The purpose of this project is to simulate a collaborative development environment where different features are developed in parallel, merged into a `develop` branch, and eventually integrated into the `main` branch.

The project includes two basic feature modules:
- **auth.js** – Represents a placeholder for user authentication logic.
- **api.js** – Represents a placeholder for API integration logic.

---

## GitFlow Branching Structure

The following branches were created according to the GitFlow model:

| Branch | Description |
|--------|--------------|
| `main` | Production-ready branch containing stable code. |
| `develop` | Integration branch where new features are merged before release. |
| `feature/user-authentication` | Feature branch for the authentication module. |
| `feature/api-integration` | Feature branch for the API integration module. |

---

## Commands Used

Below are the main Git commands used to set up the repository and workflow:

```bash
# Clone the repository
git clone https://github.com/<your-username>/my-development-workflow.git
cd my-development-workflow

# Create and push the develop branch
git checkout main
git branch develop
git push -u origin develop

# Create first feature branch
git checkout -b feature/user-authentication develop
echo "// Authentication module" > auth.js
git add auth.js
git commit -m "feat: Add initial file for authentication module"

# Create second feature branch
git switch develop
git checkout -b feature/api-integration
echo "// API integration module" > api.js
git add api.js
git commit -m "feat: Add placeholder for API integration"

# Merge and push branches
git switch develop
git merge feature/user-authentication
git push --all


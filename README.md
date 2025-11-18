📘 README – Unit Test Workflow Example
📌 Overview

This repository demonstrates a complete Git development workflow using:

Feature branches

Pull requests

Merge approval rules

Unit testing with Jest

A simple Express.js API

The project includes:

A basic Login API

Unit tests for API validation

Branching strategy: main, develop, feature/*

Documentation of the deployment process

This repo is designed for learning CI/CD fundamentals, testing, and version control collaboration.

🏗️ Project Structure
my-development-workflow/
├── src/
│   ├── app.js
│   └── routes/
│       └── login.js
├── tests/
│   └── login.test.js
├── DEPLOYMENT_PROCESS.md
├── index.js
├── package.json
└── README.md

🌱 Branching Strategy
Branch	Purpose
main	Production-ready, stable code
develop	All features are merged here before going to main
feature/api-login	Code for the login endpoint
feature/tests-login	Unit tests for the login endpoint
🔧 Technologies Used

Node.js

Express.js

Jest (unit testing)

Supertest (API testing)

Git & GitHub (pull requests, merge rules)

🚀 Getting Started
1️⃣ Clone the repository
git clone <your-repo-url>
cd my-development-workflow

2️⃣ Install dependencies
npm install

3️⃣ Run the server
npm start


Server will start at:
http://localhost:3000

🧪 Running Unit Tests

To run all tests:

npm test


Expected output:

PASS tests/login.test.js
✓ should login successfully
✓ should fail with invalid password
✓ should fail if username or password is missing

🔐 Login API Example
POST /login
Request body:
{
  "username": "admin",
  "password": "1234"
}

Success response:
{
  "message": "Login successful"
}

Error examples:

Missing fields → 400

Wrong credentials → 401

🔀 Pull Request Workflow

Create a branch:

git checkout -b feature/your-feature-name


Commit your changes.

Push the branch:

git push origin feature/your-feature-name


Open a Pull Request in GitHub.

Describe your changes clearly.

Wait for at least 1 approval.

Merge into develop.

When stable, merge develop → main.

🔒 Branch Protection Rules

In GitHub → Settings → Branches → Branch Protection:

Enable for main and develop:

✔ Require pull request before merging

✔ Require at least 1 approval

✔ Prevent pushes directly to protected branches

📄 Additional Documentation

See DEPLOYMENT_PROCESS.md for:

Deployment steps

Troubleshooting

Requirements

Workflow summary

👨‍💻 Author

This repository was created as part of a unit testing and Git workflow assignment.

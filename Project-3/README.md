# MyWebApp – SonarCloud Code Analysis

This is a sample Java web application (`WAR` packaging) integrated with **SonarCloud** for static code analysis using **GitHub Actions** and **Maven**.

---

## Project folder Structure
---
## 📁 Project Structure

```bash
Project-3/
└── MyWebApp/
    ├── pom.xml                        # Maven config with Sonar plugin
    ├── src/
    │   └── main/
    │       ├── java/                 # Java source code
    │       └── webapp/              # JSP / static content
    └── target/
        └── sonar/
            └── report-task.txt      # SonarCloud metadata (for Quality Gate check)
```

---

## Technology Stack

- **Java 17**
- **Maven**
- **SonarCloud**
- **GitHub Actions**

---
## Quality Gate
Enforced via report-task.txt

Workflow fails automatically if the Quality Gate fails (e.g., low code coverage or code smells)

To test:

Intentionally reduce test coverage or add a vulnerability (e.g., hardcoded credentials)

Commit → Workflow will fail with "Quality Gate FAILED"

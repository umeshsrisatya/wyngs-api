# Wyngs API Project

## 📘 Overview

The **Wyngs API** provides backend services for user login, authentication, and access control in the **ProSrv360** platform. Built with **Node.js** and **TypeScript**, it supports multi-tenant access, user roles, module permissions, and project assignments.

---

## 🔧 Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/umeshsrisatya/wyngs-api
cd wyngs-api
```

### 2. Install Dependencies

Install the required Node.js dependencies:

```bash
npm install
```

### 3. Run the Development Server

Start the development server:

```bash
npm run dev
```

The server will run at `http://localhost:3000` or the configured port.

---

## 🧪 API Testing with `.rest` Files in VSCode

### 1. Install REST Client Extension

To test APIs directly in **Visual Studio Code**:

-   Open the **Extensions** panel (`Ctrl+Shift+X`)
-   Search for `REST Client`
-   Click **Install**

### 2. Create a `.rest` File

Example request using `curl`:

```bash
curl -X POST http://localhost:3000/api/e360api/login \
  -H "Content-Type: application/json" \
  -d '{
    "comtenantid": "3",
    "loginmethod": "prosrvusernamepwd",
    "password": "123456",
    "username": "aparna.nagarajan@motiveminds.com"
  }'
```

### 3. Send the Request

-   Open the `.rest` file
-   Click **Send Request** above the request line

The response will appear in the REST Client panel.

---

## 📝 Expected Login Response

A successful login returns a structured response like the one in:

```
./required_login_response.json
```

This JSON includes user profile, roles, permissions, project access, and modules assigned to the user.

---

## 🛠 API Route Details

Login route logic is located in:

```
server/routes/api/e360api/login/index.post.ts
```

This file handles:

-   Credential validation
-   Tenant and subscription checks
-   Role/module/permission fetching
-   Returning user-specific access details

---

## 📂 Project Structure

```
/wyngs-api
├── node_modules/                  # Node.js dependencies
├── server/                        # Main server logic
│   └── routes/
│       └── api/
│           └── e360api/
│               └── login/        # Login API route
│                   └── index.post.ts
├── public/                        # Static files
├── required_login_response.json  # Sample login response structure
├── package.json                  # Scripts and dependencies
└── README.md                     # Project documentation
```

---

## 🧭 Entity Relationship Overview

```text
User (usermaster)
│
├── Role Mapping (roleusermapping) ──> Role (rolemaster)
│                                         │
│                                         ├─> RoleMenus (rolemenus) ──> Menu (datmenus)
│                                         │                               │
│                                         │                               ├─> MenuPermissions (datmenupermission)
│                                         │                               └─> RoleMenuPermissions (rolemenupermissions)
│                                         │
│                                         └─> Modules (datmodule) ──> ModuleAlias (datmodulealias)
│
├── Projects (comuserprojectmapping → projectmaster)
├── Company (companymaster)
├── WorkforceGroup / WorkerType
├── City / State / Country
└── Tenant (tenantmaster, tenantsubscription)
```

This relationship map outlines how a user is linked to roles, menus, permissions, modules, and organizational details across tenants.

---

## 💬 Contact

For questions, suggestions, or contributions, feel free to open an issue on the [GitHub repository](https://github.com/umeshsrisatya/wyngs-api) or reach out to the maintainers directly.

---

## 📝 License

This project is licensed under the **MIT License**. See [LICENSE.md](LICENSE.md) for details.

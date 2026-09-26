````md
# 🎓 Student Management REST API

A simple REST API built using **Node.js** and **Express.js** to manage student records using CRUD operations.

## 🚀 Technologies Used

- 🟢 Node.js
- ⚡ Express.js
- 📮 Postman
- 📦 npm

## ✨ Features

- 👀 View all students
- 🔍 View a student by ID
- ➕ Add a new student
- ✏️ Update student details
- 🗑️ Delete a student
- 📝 Custom logger middleware
- ⚠️ Error handling
- ✅ Request validation
- 📊 Proper HTTP status codes

## 📁 Project Structure

```text
STUDENT_MANAGEMENT_REST_API/
│
├── data/
│   └── students.js
│
├── middleware/
│   └── logger.js
│
├── routes/
│   └── studentRoutes.js
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
````

## 🔧 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/manpreetkaur292006-design/Student-Management-REST-API.git
```

### 2️⃣ Open the project folder

```bash
cd Student-Management-REST-API
```

### 3️⃣ Install dependencies

```bash
npm install
```

## ▶️ Run the Server

Start the development server using:

```bash
npm run dev
```

The server will run at:

```text
http://localhost:3000
```

## 📡 API Endpoints

| Method     | Endpoint        | Description         |
| ---------- | --------------- | ------------------- |
| 🟢 GET     | `/students`     | Get all students    |
| 🔎 GET     | `/students/:id` | Get a student by ID |
| ➕ POST     | `/students`     | Add a new student   |
| ✏️ PUT     | `/students/:id` | Update a student    |
| 🗑️ DELETE | `/students/:id` | Delete a student    |

## 📝 Example Student

```json
{
  "id": 4,
  "name": "Priya",
  "age": 20,
  "course": "BCA"
}
```

## 📊 HTTP Status Codes

| Status Code | Meaning                               |
| ----------- | ------------------------------------- |
| ✅ 200       | Successful request                    |
| 🆕 201      | Student created successfully          |
| ⚠️ 400      | Bad request / missing required fields |
| ❌ 404       | Student not found                     |

## 🧪 Testing

The APIs were tested using **Postman**.

Tested operations:

* ✅ GET all students
* ✅ GET student by ID
* ✅ POST a student
* ✅ PUT a student
* ✅ DELETE a student
* ✅ 400 Bad Request validation
* ✅ 404 Student Not Found handling

## 🛡️ Middleware

A custom logger middleware is used to display incoming requests in the terminal.

Example:

```text
GET /students
GET /students/2
POST /students
PUT /students/2
DELETE /students/2
```

## 💾 Data Storage

This project uses a JavaScript **array** to store student records.

No database is used.

Student data is stored in:

```text
data/students.js
```

> ⚠️ Since the data is stored in memory, it resets when the server is restarted.

## 👨‍💻 Author

**Manpreet Kaur**

🎓 Web Development III
🟢 Node.js & Express.js


## 🔗 GitHub Repository

[https://github.com/manpreetkaur292006-design/Student-Management-REST-API](https://github.com/manpreetkaur292006-design/Student-Management-REST-API)

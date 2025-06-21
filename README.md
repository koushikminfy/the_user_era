## *The User Era*.

```markdown
#  VibeCheck API - The User Era

This project allows users to sign up, log in, and post "vibes" to a real MongoDB Atlas database using Node.js, Express, and Bun.

##  Features

- User Signup and Login with JWT
- Passwords hashed using bcryptjs
- Protected route for posting vibes
- Get all vibes (with username populated)
- MongoDB Atlas for cloud database


```
##  Project Structure


![10](https://github.com/user-attachments/assets/02d6ddf5-ab1c-419d-94c6-56cdd2186b4f)

## connection to Mongodb server
## steps
---

## ✅ 1. MongoDB Atlas Setup 

Ensure :

* A MongoDB Atlas **cluster** created.
* In datbase access **user** with password access (`Read and Write to any database`).
* **Network Access** set to allow `0.0.0.0/0` (for all IPs).
* Connection string (URI), like:

```
template should use in .env file

mongodb+srv://<username>:<password>@cluster0.mongodb.net/vibecheck?retryWrites=true&w=majority
```

---

##  2. Add This to `.env`

```env
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/vibecheck?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

##  3. `config/db.js` – MongoDB Connection

```js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'vibecheck',
    });
    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(' MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
```

---

##  4. Call `connectDB()` in `server.js`

```js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
// continue with routes...
```

---

##  5. Install Required Packages with Bun

```bash
bun add mongoose dotenv
```

---

##  6. Output Example When Running

If everything works correctly:

```bash
$ bun run server.js
MongoDB Connected: cluster0-shard-00-00.xxxxx.mongodb.net
Server running on port 5000
```

---

````

##  Installation

```bash
bun install
````

##  Run the server

```bash
bun run server.js
```

##  API Endpoints

### Auth

* `POST /api/v1/auth/signup`
* `POST /api/v1/auth/login`

### Vibes

* `GET /api/v1/vibes`
* `POST /api/v1/vibes` (requires Bearer token)

##  Postman Flow

1. Sign up → get token
2. Log in → get token
3. Post vibe (fail without token)
4. Post vibe (success with token)
5. Get vibes (populated with usernames)

---
---

##  Postman Testing 

| Action           | Endpoint              | Method | Headers                         | Body                                                                          |
| ---------------- | --------------------- | ------ | ------------------------------- | ----------------------------------------------------------------------------- |
| Signup           | `/api/v1/auth/signup` | POST   | None                            | `{ "username": "kowshik", "email": "kow@example.com", "password": "123456" }` |
| Login            | `/api/v1/auth/login`  | POST   | None                            | `{ "email": "kow@example.com", "password": "123456" }`                        |
| Post Vibe (fail) | `/api/v1/vibes`       | POST   | None                            | `{ "vibeText": "Feeling Bun-powered!" }`                                      |
| Post Vibe (auth) | `/api/v1/vibes`       | POST   | `Authorization: Bearer <token>` | `{ "vibeText": "Feeling Bun-powered!" }`                                      |
| Get Vibes        | `/api/v1/vibes`       | GET    | None                            | —                                                                             |

---
## Built With

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Bun](https://bun.sh/)
* [JWT](https://jwt.io/)



---

```


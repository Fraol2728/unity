# Blog Backend (Express + MongoDB)

## Setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
# production
# npm start
```

## Environment Variables

- `PORT`: Express server port (default `5000`)
- `MONGODB_URI`: Mongo connection string
- `JWT_SECRET`: JWT signing secret
- `ADMIN_USERNAME`: Admin username
- `ADMIN_PASSWORD_HASH`: Bcrypt hash for admin password
- `CLIENT_ORIGIN`: Comma-separated allowed frontend origins for CORS (example: `https://uwsettle.org,http://localhost:5173`)

## API Endpoints

### Public
- `GET /api/blogs`
- `GET /api/blogs/:slug`

### Admin (JWT required)
- `GET /api/blogs/admin/all`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`

### Auth
- `POST /api/auth/login`

## Example Requests

### Admin login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

### Create blog (replace TOKEN)
```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "title":"My first blog",
    "content":"<p>Hello world</p>",
    "author":"Admin",
    "coverImage":"https://example.com/image.jpg",
    "published":true
  }'
```

### Update blog (replace ID and TOKEN)
```bash
curl -X PUT http://localhost:5000/api/blogs/ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"title":"Updated title","published":false}'
```

### Delete blog (replace ID and TOKEN)
```bash
curl -X DELETE http://localhost:5000/api/blogs/ID \
  -H "Authorization: Bearer TOKEN"
```

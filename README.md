# Contact Form Email Setup

This project now supports sending contact form submissions to your email.

## 1) Configure environment variables

Copy `.env.example` to `.env` and fill in your values:

- `EMAIL_USER`: your Gmail address.
- `EMAIL_PASS`: a Gmail App Password (not your normal account password).
- `CONTACT_RECEIVER`: where contact messages should be delivered.
- `VITE_CONTACT_API_URL`: API URL used by the frontend (default local value is included).

## 2) Run backend API server

```bash
npm run server
```

This starts the email API at `http://localhost:5000/api/contact`.

## 3) Run frontend

In a second terminal:

```bash
npm run dev
```

Now when users submit the Contact page form, your backend sends the message to your configured email.

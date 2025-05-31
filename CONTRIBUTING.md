<p align="center">
  <h1 align="center">Notpadd</h1>
  <p align="center">Thanks for having interest in contributing to <b>Notpadd</b></p>
</p>

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [pnpm](https://pnpm.io/) installed
- [Turborepo](https://turbo.build/repo/docs) (used internally)
- [Postgres](https://www.postgresql.org/) database (Neon serverless on production)
- [Clerk](https://clerk.com/) for authentication

## Getting Started

1. **Fork and Clone the Repository**

   ```bash
   git clone https://github.com/[your-github-login]/notpadd.git
   cd notpadd
   ```

2. **Create a New Branch**

   ```bash
   git checkout -b [your-branch]
   ```

3. **Set Up Environment Variables**

   - Create a `.env` file in `/apps/web` and fill in your credentials:

     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
     CLERK_SECRET_KEY=
     DATABASE_URL="postgresql://postgres:nothing@localhost:5431/notpadd"
     CLERK_WH_SECRET=
     CLERK_DEV_WH_SECRET=
     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/t/"
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/new"
     NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
     NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
     UPLOADTHING_TOKEN=""
     ```

   - In `/packages/database`, create a `.env` file with:

     ```env
     DATABASE_URL="postgresql://postgres:nothing@localhost:5431/notpadd"
     ```

   > **Note:** The `DATABASE_URL` in both `/apps/web` and `/packages/database` should be the same and don't forget to run `pnpm db:migrate` in the `/packages/database`.

4. **Head over to clerk and create an account if you don't have one**
   Once you're in create a new application and follow the steps indicated via the arrows

![Image](https://github.com/user-attachments/assets/aa281940-f9d5-48e2-9193-3383fad13446)

Once you click on `Add Endpoint`, enter this url

```bash
[dev or prod url]/api/webhooks/clerk
```

5. **Make the Dev Script Executable**

   ```bash
   chmod +x run-dev.sh
   ```

6. **Run the Project**

   ```bash
   ./run-dev.sh
   ```

## Additional Notes

- If you need help contact [Zenith](https://x.com/bossadizenith).
- Found a bug, please open an issue.

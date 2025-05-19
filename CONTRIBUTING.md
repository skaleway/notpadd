## How to contribute to Notpadd

If your're not having nodejs installed in your system, You're in deepshit.

Nopadd heavily uses [Turborepo](https://turbo.build/repo/docs) because of our internal packages along side `pnpm` (oups my `npm` fellas shit ain't for you :rofl)

## Things used

- Clerk for auth
- Postgres for db - Neon serverless on prod btw.

## contributing

1. Fork the repo and clone to your pc

```bash
git clone https://github.com/[your-github-login]/notpadd.git
```

2. Create a new branch

```bash
git checkout -b [your-branch]
```

3. Running locally

Create a `.env` in /apps/web directory and fill this credentials with yours!

```bash

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

 DATABASE_URL="postgresql://postgres:nothing@localhost:5431/notpadd" # this is just a dummy url, you need to get your own.

CLERK_WH_SECRET= # this is used in production
CLERK_DEV_WH_SECRET= # this is used in development


NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/t/"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/new"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

UPLOADTHING_TOKEN=""
```

- in your packages/database folder, you need to create a .env file and add the following (this is the neon db url) and it should be the same as the one in your apps/web/.env file.

```bash
 DATABASE_URL="postgresql://postgres:nothing@localhost:5431/notpadd" // this is just a dummy url, you need to get your own.
```

NB: Make sure the `DATABASE_URL`'s value in the `/apps/web` should be same as that on `/packages/database`

make the `run-dev.sh` executable

```bash
chmod +x run-dev.sh
```

- Preview the project

```bash
./run-dev.sh
```

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

- install dependencies and running

```bash
pnpm install
pnpm dev
```

and you'll get an error like this dumbass
![Notpadd error](https://github.com/user-attachments/assets/f26c96bf-01c6-485e-a8c3-615b912164a2)

- how do i fix it? simple dumbass you need an env file (shebi you no think of it 🤣, head like stone) in your apps/web folder.

```bash

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

 DATABASE_URL="postgresql://postgres:nothing@localhost:5431/notpadd" // this is just a dummy url, you need to get your own.

CLERK_WH_SECRET=
CLERK_DEV_WH_SECRET=


NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/t/"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/new"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
```

- in your packages/database folder, you need to create a .env file and add the following (this is the neon db url) and it should be the same as the one in your apps/web/.env file.

```bash
 DATABASE_URL="postgresql://postgres:nothing@localhost:5431/notpadd" // this is just a dummy url, you need to get your own.
```

- Now, I know you're in a hast to run the project however, first do this for daddy. In packages/core run

```bash
pnpm build
```

- Now run the installation command again in the root dir

```bash
pnpm install
```

now run the entire project

```bash
pnpm dev
```

-- run the web app only

```bash
pnpm dev --filter web
```

## if there's any error reachout to me on twitter [@bossadizenith](https://x.com/bossadizenith) or @bossadizenith on discord

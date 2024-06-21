This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





## Get Public API documentation (/api/public)


- This document provides an overview of the public API route implemented in the route.ts file, detailing its functionality, required headers, and how to use it effectively. This API route is designed to fetch articles based on specific criteria provided through request headers

### Overview
- The GET API route allows users to retrieve articles from the database. Users can specify whether they want to fetch all articles, only private articles, or only public articles associated with a specific project and user ID. The route performs several checks to ensure the request is authorized and the requested data exists.

### Required Headers

To use this API route, the following headers must be included in the request:

- next_notpadd_userId: The user ID for whom the articles are being fetched.
- next_notpadd_projectId: The project ID from which the articles are being fetched.
- get_only_private_articles: Set to "True" if only private articles should be fetched. Cannot be "True" if get_only_public_articles is also "True".
- get_only_public_articles: Set to "True" if only public articles should be fetched. Cannot be "True" if get_only_private_articles is also "True".
- get_all_articles: Set to "True" if all articles (regardless of their visibility status) should be fetched.


#### sample get request for all articles whether public or private
GET /api/public
Headers:
    next_notpadd_userId: <Your-UserId from notpadd>
    next_notpadd_projectId: <Your-ProjectId from notpadd>
    get_all_articles: True
Response:
    contain all the articles if you have any articles created.
Error: With the status codes for guidelines
- 200 OK: The request was successful. The body of the response contains the requested articles.
- 400 Bad Request: Both get_only_private_articles and get_only_public_articles were set to "True", which is not allowed.
- 401 Unauthorized: The user ID or project ID is missing, invalid, or the user does not have permission to access the requested data.
- 404 Not Found: No articles were found matching the criteria.
- 500 Internal Server Error: An unexpected error occurred on the server.



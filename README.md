## tasklist

integrate the notpadd.config.ts

based on teh config file, before the start is successful I want to do the following

- [] create a function that will check if there's a notpadd.config.ts file and if not, returns an error with some message telling the user why and if it's production env, it cancels the deployment.
- [] Make an api call
- [] get data from the api and create a folder based on the config outputDirName field
- [] the response data is going to be used to create mdx files which are going to be used by contentlayer
- [] create a vercel integration that is going to help at deployment to auto trigger deploy and trigger new fetches of the current new data.
